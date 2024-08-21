const fs = require('fs');
const path = require('path');



const randomStringGenerator = (length) => {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let random = "";
    for (let i = 0; i < length; i++) {
        random += chars.charAt(Math.floor(Math.random() * length));
    }
    return random;
}



// const deleteFile = async (path) => {
//     try {
//         console.log(`File has to be deleted of following path`, path)
//         const filePath = path.join(__dirname, '..', '..', path);
        
//         fs.unlinkSync(`../../${path}`);
//     }
//     catch (error) {

//         console.log(`Error in deleting file`, error);
//     }
// }

function deleteFile(relativePath) {
    // Construct the absolute path to the file
    const filePath = path.join(process.cwd(), relativePath);
  
    // Check if the file exists
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
            if (err) {
              console.error('Error deleting file:', err.message);
            } else {
              console.log('File deleted successfully.');
            }
          });
    } else {
      console.error(`File does not exist: ${filePath}`);
    }
  }
  
module.exports = {
    randomStringGenerator,
    deleteFile
}