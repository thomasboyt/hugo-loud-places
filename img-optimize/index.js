const path = require('path');
const sharp = require('sharp');
const globby = require('globby');
const mkdirp = require('mkdirp').sync;

const srcDir = './src-images';
const destDir = './static/images';

const maxWidth = 1000;
const maxHeight = 1000;

async function main() {
  const imagePaths = await globby('.', {
    cwd: srcDir,
    expandDirectories: {
      extensions: ['png', 'jpg', 'jpeg'],
    }
  });

  const promises = imagePaths.map((imagePath) => {
    const srcPath = path.join(srcDir, imagePath);
    const destPath = path.join(destDir, imagePath);
    console.log(`Generating ${destPath}`);
    mkdirp(path.dirname(destPath));

    return sharp(srcPath)
      .rotate()
      .resize(maxWidth, maxHeight)
      .max()
      .toFile(destPath);
  });

  await Promise.all(promises);
}

main();
