import { unlink } from 'fs/promises'
import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import sharp from 'sharp';

import {Voluntariado} from '../models/Voluntariado';


// POST VOLUNTARIADO
export const createVoluntariado = async(req: Request, res: Response) => {
  let {name, email, telemovel } = req.body

  let newVoluntariado = await Voluntariado.create({
    name,
    email,
    telemovel
  })

  res.json({
    id: newVoluntariado.id,
    name,
    email,
    telemovel
  })
}

// GET VOLUNTARIADO
export const getVoluntariado = async(req: Request, res: Response) => {
  let voluntariado = await Voluntariado.findAll({
    attributes: ['id', 'name', 'email', 'telemovel']
  })

  res.json(voluntariado)
}

// POST UPLOAD VOLUNTARIADO
export const uploadFile = async(req: Request, res: Response) => {
  if (req.file) {
    await sharp(req.file.path)
    .resize(1000)
    .toFormat('jpeg')
    .toFile('./public/images/voluntariado/' + req.file.filename)

    await unlink(req.file.path)
    
    res.json({
      file: req.file
    })
  } else {
    res.status(400)
    res.json({ error: 'No file uploaded' })
  }
}