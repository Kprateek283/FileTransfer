import File from '../models/file.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

export const uploadFile = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
    };
    
    try {
        const file = await File.create(fileObj);

        response.status(200).json({ path: `${process.env.BACKEND_URL}/file/${file._id}` });
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
};

export const getFile = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId);

        file.downloadCount++;
        await file.save();

        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
};
