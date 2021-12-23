import { Request, Response } from 'express';

import { Schedule } from '../models/Schedule';


// POST SCHEDULE
export const createSchedule = async(req: Request, res: Response) => {
  let {timeStart, columnDay, title, subtitle, duration } = req.body

  let newSchedule = await Schedule.create({
    timeStart,
    columnDay,
    title,
    subtitle,
    duration
  })

  res.json({
    id: newSchedule.id,
    timeStart,
    columnDay,
    title,
    subtitle,
    duration
  })
}

// GET SCHEDULE
export const getSchedule = async(req: Request, res: Response) => {
  let schedule = await Schedule.findAll({
    attributes: ['id', 'timeStart', 'columnDay', 'title', 'subtitle', 'duration']
  })

  res.json(schedule)
}