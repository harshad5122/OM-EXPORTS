// // optimize-images.js
// const sharp = require("sharp");
// const fs = require("fs");
// const path = require("path");

// const inputDir = path.join(__dirname, "src/assets/images");
// const outputDir = path.join(__dirname, "src/assets/optimized");

// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir, { recursive: true });
// }

// const compressImage = async (file) => {
//   const inputPath = path.join(inputDir, file);
//   const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, ".webp"));

//   try {
//     await sharp(inputPath)
//       .resize({ width: 1200 }) // resize max width
//       .webp({ quality: 70 })   // compress quality
//       .toFile(outputPath);

//     console.log(`✅ Compressed: ${file} -> ${outputPath}`);
//   } catch (err) {
//     console.error(`❌ Error compressing ${file}:`, err);
//   }
// };

// fs.readdirSync(inputDir).forEach((file) => {
//   if (/\.(jpg|jpeg|png)$/i.test(file)) {
//     compressImage(file);
//   }
// });

// optimize-images.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Root assets folder (all images/icons/certificates inside this)
const inputDir = path.join(__dirname, "src/assets");
// Output folder
const outputDir = path.join(__dirname, "src/assets/optimized");

// Create output folder if not exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Recursively get all files in a folder
const getAllFiles = (dir, files = []) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, files); // recurse into subdir
    } else {
      files.push(fullPath);
    }
  });
  return files;
};

const compressImage = async (inputPath) => {
  const relativePath = path.relative(inputDir, inputPath);
  const outputPath = path.join(
    outputDir,
    relativePath.replace(/\.(jpg|jpeg|png)$/i, ".webp") // save as webp
  );

  // Make sure subfolder exists in optimized/
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  try {
    await sharp(inputPath)
      .resize({ width: 1200 }) // limit width (prevents huge files)
      .webp({ quality: 70 })   // compress quality (adjust 60–80)
      .toFile(outputPath);

    const before = fs.statSync(inputPath).size / 1024;
    const after = fs.statSync(outputPath).size / 1024;

    console.log(
      `✅ ${relativePath} | Before: ${before.toFixed(1)} KB | After: ${after.toFixed(1)} KB | Saved: ${(
        ((before - after) / before) * 100
      ).toFixed(2)}%`
    );
  } catch (err) {
    console.error(`❌ Error compressing ${relativePath}:`, err);
  }
};

// Get all files from assets/
const allFiles = getAllFiles(inputDir);

// Compress only images (jpg/jpeg/png)
allFiles.forEach((file) => {
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    compressImage(file);
  }
});

