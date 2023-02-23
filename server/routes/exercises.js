import express from 'express';
import { 
  getExercises, 
  getExercisesByName, 
  getBodyParts, 
  getExercisesByBodyPart, 
  getTargetMuscles, 
  getExercisesByTargetMuscle,
  getEquipment, 
  getExercisesByEquipment,
  getExerciseById,
} from '../controllers/exercises.js';

const router = express.Router();

router.get('/', getExercises);
router.get('/name/:name', getExercisesByName);

router.get('/bodyParts', getBodyParts);
router.get('/bodyParts/:bodyPart', getExercisesByBodyPart);

router.get('/targetMuscles', getTargetMuscles);
router.get('/targetMuscles/:targetMuscle', getExercisesByTargetMuscle);

router.get('/equipments', getEquipment);
router.get('/equipments/:equipment', getExercisesByEquipment);

router.get('/id/:id', getExerciseById);

export default router;