const fs = require('fs');

function readFile(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
function createFile(path, content) {
    try {
      fs.writeFileSync(path, content);
      console.log(`File ${path} created successfully.`);
    } catch (error) {
      console.error(error);
    }
  }
  function appendToFile(path, content) {
    try {
      fs.appendFileSync(path, content);
      console.log(`Content appended to file ${path} successfully.`);
    } catch (error) {
      console.error(error);
    }
  }
  function appendToFile(path, content) {
    try {
      fs.appendFileSync(path, content);
      console.log(`Content appended to file ${path} successfully.`);
    } catch (error) {
      console.error(error);
    }
  }
  function moveFile(sourcePath, destinationPath) {
    try {
      fs.renameSync(sourcePath, destinationPath);
      console.log(`File moved from ${sourcePath} to ${destinationPath} successfully.`);
    } catch (error) {
      console.error(error);
    }
  }