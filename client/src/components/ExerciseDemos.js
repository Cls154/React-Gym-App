import { useEffect } from "react";
import Exercises from "./Exercises";
import errorImg from '../images/not-found.svg';
import { 
  fetchExercises
} from '../utils/fetching.js';

import { Div } from './styles/ExerciseDemos.style';

const ExerciseDemos = ({ exercises, setExercises, exercisesPerPage, currentPage }) => {

  const notFound = {
    bodyPart: 'N/A',
    gifUrl: errorImg,
    name: 'Nothing found...',
    target: 'N/A',
  }

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchExercises(`http://localhost:8080/exercises`);
      setExercises(data);
    }
    fetchData();
  }, []);

  return (
    <Div>
      {
        currentExercises.length !== 0 ? (
          currentExercises.map((exercise, index) => (<Exercises key={index} exercisesList={exercise} />))
        ) : (<Exercises exercisesList={notFound} />)
      }
    </Div>
  )
}

export default ExerciseDemos;