// Script to generate favicon PNG (32x32) and apple-touch-icon (180x180)
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      if (crc & 1) {
        crc = (crc >>> 1) ^ 0xEDB88320;
      } else {
        crc = crc >>> 1;
      }
    }
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function createChunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const typeBuffer = Buffer.from(type, 'ascii');
  const crcData = Buffer.concat([typeBuffer, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(crcData), 0);
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function createPNG(width, height, pixels) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;

  const ihdr = createChunk('IHDR', ihdrData);

  const rawData = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    rawData[y * (width * 4 + 1)] = 0;
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * 4;
      const dstIdx = y * (width * 4 + 1) + 1 + x * 4;
      rawData[dstIdx] = pixels[srcIdx];
      rawData[dstIdx + 1] = pixels[srcIdx + 1];
      rawData[dstIdx + 2] = pixels[srcIdx + 2];
      rawData[dstIdx + 3] = pixels[srcIdx + 3];
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const idat = createChunk('IDAT', compressed);
  const iend = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

function drawLogo(size) {
  const pixels = new Uint8Array(size * size * 4);
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 1;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Outer circle - navy
      if (dist > r - 2 && dist <= r) {
        pixels[idx] = 15; pixels[idx + 1] = 43; pixels[idx + 2] = 92; pixels[idx + 3] = 255;
      }
      // Inner circle - orange
      else if (dist > r - 4 && dist <= r - 2) {
        pixels[idx] = 241; pixels[idx + 1] = 105; pixels[idx + 2] = 29; pixels[idx + 3] = 255;
      }
      // Fill white inside
      else if (dist <= r - 4) {
        pixels[idx] = 255; pixels[idx + 1] = 255; pixels[idx + 2] = 255; pixels[idx + 3] = 255;

        // Africa silhouette - orange (simplified circle)
        const adx = (x - cx) / (r * 0.35);
        const ady = (y - cy - r * 0.1) / (r * 0.45);
        if (adx * adx + ady * ady < 1 && y > cy - r * 0.35 && y < cy + r * 0.35) {
          pixels[idx] = 241; pixels[idx + 1] = 105; pixels[idx + 2] = 29; pixels[idx + 3] = 255;
        }

        // Anubis head - navy (small circle at top)
        const anx = (x - cx) / (r * 0.15);
        const any = (y - cy + r * 0.15) / (r * 0.12);
        if (anx * anx + any * any < 1) {
          pixels[idx] = 15; pixels[idx + 1] = 43; pixels[idx + 2] = 92; pixels[idx + 3] = 255;
        }
      }
      // Outside - transparent
      else {
        pixels[idx] = 0; pixels[idx + 1] = 0; pixels[idx + 2] = 0; pixels[idx + 3] = 0;
      }
    }
  }
  return pixels;
}

// Generate favicon 32x32
const faviconPixels = drawLogo(32);
const favicon = createPNG(32, 32, faviconPixels);
fs.writeFileSync(path.join(__dirname, 'public', 'favicon.png'), favicon);
console.log('✅ favicon.png (32x32) created');

// Generate apple-touch-icon 180x180
const applePixels = drawLogo(180);
const apple = createPNG(180, 180, applePixels);
fs.writeFileSync(path.join(__dirname, 'public', 'apple-touch-icon.png'), apple);
console.log('✅ apple-touch-icon.png (180x180) created');

// Generate open graph image 1200x630
const ogPixels = drawLogo(630);
const og = createPNG(630, 630, ogPixels);
fs.writeFileSync(path.join(__dirname, 'public', 'og-image.png'), og);
console.log('✅ og-image.png (630x630) created');
