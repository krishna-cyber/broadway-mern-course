export function checkIfFilesAreTooBig(files?: any[] | undefined): boolean {
    let valid = true
    if (files) {
      files.map(file => {
        const size = file.size / 1024 / 1024  //file size of 10MB
        if (size > 10) {
          valid = false
        }
      })
    }
    return valid
  }