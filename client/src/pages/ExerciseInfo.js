import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExerciseInfomation from "../components/ExerciseInfomation";
import { fetchExercises } from "../utils/fetching";

const ExerciseInfo = () => {

  const [exercise, setExercise] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchExercises(`http://localhost:8080/exercises/id/${id}`);
      setExercise(data);
    }
    fetchData();
  }, []);

  return (
    <section>
      <ExerciseInfomation exercise={exercise} />
    </section>
  )
}

export default ExerciseInfo;

