import { unlink } from 'fs/promises';
import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import sharp from 'sharp';

import { Voluntariado } from '../models/Voluntariado';

// POST VOLUNTARIADO
// export const createVoluntariado = async (req: Request, res: Response) => {
//   let { name, email, telemovel, fileUrl } = req.body;

//   let newVoluntariado = await Voluntariado.create({
//     name,
//     email,
//     telemovel,
//     fileUrl,
//   });

//   res.json({
//     id: newVoluntariado.id,
//     name,
//     email,
//     telemovel,
//     fileUrl,
//   });
// };

// GET VOLUNTARIADO
export const getVoluntariado = async (req: Request, res: Response) => {
  let voluntariado = await Voluntariado.findAll({
    attributes: ['id', 'name', 'email', 'telemovel', 'fileUrl'],
  });

  res.json(voluntariado);
};

// POST UPLOAD VOLUNTARIADO
export const uploadFile = async (req: Request, res: Response) => {
  if (req.file) {
    if (
      req.file.mimetype === 'image/jpg' ||
      req.file.mimetype === 'image/jpeg' ||
      req.file.mimetype === 'image/png'
    ) {
      await sharp(req.file.path)
        .resize(1000)
        .toFile('./public/voluntariado/' + req.file.filename);

      await unlink(req.file.path);
    }

    const { filename } = req.file;
    const { name, telemovel, email } = req.body;
    const voluntariado = await Voluntariado.create({
      filename,
      name,
      telemovel,
      email,
      fileUrl: req.file.filename,
    });
    console.log('uploadFile:' + uploadFile);
    res.json({ voluntariado });
  } else {
    res.status(400);
    res.json({ error: 'No file uploaded' });
  }
};
