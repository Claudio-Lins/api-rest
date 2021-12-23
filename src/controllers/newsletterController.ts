import { Request, Response } from 'express';

import { Newsletter } from '../models/Newsletter';

// POST NEWSLETTER
export const createNewsletter = async (req: Request, res: Response) => {
  let {name, email } = req.body

  let newNewsletter = await Newsletter.create({
    name,
    email
  })

  res.json({
    id: newNewsletter.id,
    name,
    email
  })
}

// GET NEWSLETTER
export const getNewsletter = async (req: Request, res: Response) => {
  let newsletter = await Newsletter.findAll({
    attributes: ['id', 'name', 'email']
  })

  res.json(newsletter)
}