import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar"
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Footer from './components/Footer';
import ExerciseInfo from './pages/ExerciseInfo';

const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/exercises' element={<Exercises />}></Route>
        <Route path='/exercises/:id' element={<ExerciseInfo />}></Route>
      </Routes>
      <Footer />
    </main>
  )
}

export default App