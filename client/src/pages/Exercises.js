import { useState } from 'react';
import ExerciseDemos from '../components/ExerciseDemos';
import SearchbarTitle from '../components/SearchbarTitle';
import Searchbar from '../components/Searchbar';
import Pagination from '../components/Pagination';

const Exercises = () => {

  const exercisesPerPage = 9;
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section>
      <SearchbarTitle/>
      <Searchbar setExercises={setExercises}/>
      <ExerciseDemos exercises={exercises} setExercises={setExercises} exercisesPerPage={exercisesPerPage} currentPage={currentPage}/>
      <Pagination exercises={exercises} exercisesPerPage={exercisesPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </section>
  )
}

export default Exercises;