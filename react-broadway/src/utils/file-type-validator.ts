import { validFileExtensions } from "../config/constants";

export function checkIfFilesAreCorrectType(files?: any[]|undefined): boolean {
    let valid = true
    if (files) {
      files.map(file => {
        if (!validFileExtensions.includes(file.type)) {
          valid = false
        }
      })
    }
    return valid
  }


 