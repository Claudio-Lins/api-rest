import { Router } from "express";
import multer from "multer";

import * as ScheduleController from "../controllers/scheduleController";
import * as NewsletterController from "../controllers/newsletterController";
import * as VoluntariadoController from "../controllers/voluntariadoController";

const uploadVoluntariado = multer({
  dest: './tmp'
})

const router = Router();


router.post('/newsletter', NewsletterController.createNewsletter)
router.get('/newsletter', NewsletterController.getNewsletter)

router.post('/schedule', ScheduleController.createSchedule)
router.get('/schedule', ScheduleController.getSchedule)

router.post('/voluntariado', VoluntariadoController.createVoluntariado)
router.get('/voluntariado', VoluntariadoController.getVoluntariado)
router.post('/upload-voluntariado',uploadVoluntariado.single('curriculo'), VoluntariadoController.uploadFile)

export default router;