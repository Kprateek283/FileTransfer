import express from 'express';
import upload from '../utils/upload.js';
import { uploadFile, getFile } from '../controller/image-controller.js';

const router = express.Router();


router.post('/upload', upload.single('file'), uploadFile);
router.get('/file/:fileId', getFile);

export default router;