import { Router } from "express";
import multer from "multer";

import * as ScheduleController from "../controllers/scheduleController";
import * as NewsletterController from "../controllers/newsletterController";
import * as VoluntariadoController from "../controllers/voluntariadoController";

const storageCurriculo = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./tmp");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}.${file.originalname}`);
  }
});
const uploadVoluntariado = multer({
  storage: storageCurriculo
})

const router = Router();

// NEWSLETTER
router.post('/newsletter', NewsletterController.createNewsletter)
router.get('/newsletter', NewsletterController.getNewsletter)

// SCHEDULE
router.post('/schedule', ScheduleController.createSchedule)
router.get('/schedule', ScheduleController.getSchedule)

// VOLUNTARIADO
router.post('/voluntariado', VoluntariadoController.createVoluntariado)
router.get('/voluntariado', VoluntariadoController.getVoluntariado)
router.post('/upload-voluntariado',uploadVoluntariado.single('curriculo'), VoluntariadoController.uploadFile)

export default router;