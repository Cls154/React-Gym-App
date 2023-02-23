import { useState } from "react";
import { fetchExercises } from "../utils/fetching";
import { Div, Button, Input } from "./styles/Searchbar.style";

const Searchbar = ({ setExercises }) => {

  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    const data = await fetchExercises(`http://localhost:8080/exercises`);
    const filteredData = data.filter((exercise) => {
      if (exercise.name.toLowerCase().includes(search)) return exercise;
      if (exercise.bodyPart.toLowerCase().includes(search)) return exercise;
      if (exercise.target.toLowerCase().includes(search)) return exercise;
      if (exercise.equipment.toLowerCase().includes(search)) return exercise;
    })
    setSearch('');
    setExercises(filteredData);
  }
  
  return (
    <Div>
      <Input type='text' placeholder='Enter exercises here' onChange={(e) => setSearch(e.target.value.toLowerCase())} value={search}/>
      <Button onClick={handleSearch}>Search</Button>
    </Div>
  )
}

export default Searchbar;