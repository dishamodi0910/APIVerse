import multer from 'multer';

const storage = multer.memoryStorage();

const fileUpload = multer({ storage }).single('file');

export default fileUpload;
