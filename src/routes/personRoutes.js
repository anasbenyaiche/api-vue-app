import express from "express";
import PersonController from "../controllers/personController";
const router = express.Router();



router.post('/', PersonController.createPerson)
router.get('/', PersonController.getAllPersons)
router.get('/:_id', PersonController.getOnePerson)
router.patch('/:_id', PersonController.updatePerson)
router.delete('/:_id', PersonController.deletePerson)





export default router;
