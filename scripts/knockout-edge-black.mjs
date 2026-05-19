/**
 * Makes edge-connected near-black pixels transparent (removes letterbox
 * backgrounds) without eating disconnected black inside a mark (e.g. IJM bars).
 */
import { Jimp } from 'jimp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS = path.join(__dirname, '../src/assets');

const SKIP = new Set(['bdcode-logo.png']);

function isSeedBlack(r, g, b, a) {
  if (a < 8) return false;
  return r < 72 && g < 72 && b < 72;
}

function floodEdgeBlack(width, height, data) {
  const visited = new Uint8Array(width * height);
  const stack = [];
  const key = (x, y) => y * width + x;
  const at = (x, y) => key(x, y) * 4;

  const push = (x, y) => {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const k = key(x, y);
    if (visited[k]) return;
    const i = at(x, y);
    if (!isSeedBlack(data[i], data[i + 1], data[i + 2], data[i + 3])) return;
    visited[k] = 1;
    stack.push(k);
  };

  for (let x = 0; x < width; x++) {
    push(x, 0);
    push(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    push(0, y);
    push(width - 1, y);
  }

  while (stack.length) {
    const k = stack.pop();
    const x = k % width;
    const y = (k / width) | 0;
    const neighbors = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ];
    for (const [nx, ny] of neighbors) push(nx, ny);
  }

  for (let k = 0; k < visited.length; k++) {
    if (!visited[k]) continue;
    const i = k * 4;
    data[i + 3] = 0;
  }
}

async function processFile(file) {
  const full = path.join(ASSETS, file);
  const image = await Jimp.read(full);
  floodEdgeBlack(image.bitmap.width, image.bitmap.height, image.bitmap.data);
  await image.write(full);
  console.log('ok', file);
}

const files = (await readdir(ASSETS)).filter((f) => f.endsWith('.png') && !SKIP.has(f));
for (const f of files) {
  await processFile(f);
}
