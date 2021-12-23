import { Request, Response } from 'express';

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
  console.log(req.file)

  res.json({
    message: 'upload voluntariado'
  })
}