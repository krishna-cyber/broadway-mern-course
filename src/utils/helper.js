const randomStringGenerator = (length) => {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let  length = chars.length;
    let random = "";
    for (let i = 0; i < length; i++) {
        random += chars.charAt(Math.floor(Math.random() * length));
    }
}