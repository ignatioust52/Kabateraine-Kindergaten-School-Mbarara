import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPath = path.join(process.cwd(), 'public', 'assets');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        try {
          const buffer = fs.readFileSync(fullPath);
          const metadata = await sharp(buffer).metadata();
          
          let pipeline = sharp(buffer);
          
          if (metadata.width > 1920) {
            pipeline = pipeline.resize(1920, null, { withoutEnlargement: true });
          }
          
          if (ext === '.png') {
            pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
          } else {
            pipeline = pipeline.jpeg({ quality: 80, progressive: true });
          }
          
          const outputBuffer = await pipeline.toBuffer();
          fs.writeFileSync(fullPath, outputBuffer);
          console.log(`Compressed ${file}: ${(buffer.length/1024/1024).toFixed(2)}MB -> ${(outputBuffer.length/1024/1024).toFixed(2)}MB`);
        } catch (error) {
          console.error(`Error processing ${file}:`, error);
        }
      }
    }
  }
}

processDirectory(directoryPath).then(() => console.log('Image compression complete!'));
