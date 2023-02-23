import { Div, P } from './styles/Pagination.style';

const Pagination = ({ exercisesPerPage, currentPage, exercises, setCurrentPage }) => {
  
  const prevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  }

  const nextPage = () => {
    if (currentPage === Math.ceil(exercises.length/exercisesPerPage)) return;
    setCurrentPage(currentPage + 1);
  }

  const firstPage = () => { setCurrentPage(1); }
  const lastPage = () => { setCurrentPage(Math.ceil(exercises.length/exercisesPerPage)); }

  return (
    <Div wrapper>
      <Div>
        <P onClick={firstPage}>First</P>
        <P onClick={prevPage}>Prev</P>
        <P>{currentPage} of {Math.ceil(exercises.length/exercisesPerPage)}</P>
        <P onClick={nextPage}>Next</P>
        <P onClick={lastPage}>Last</P>
      </Div>
    </Div>
  )
}

export default Pagination;

