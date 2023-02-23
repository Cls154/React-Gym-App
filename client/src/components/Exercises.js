import { Div, StyledLink, H2, H3 } from "./styles/Exercises.style";

const Exercises = ({ exercisesList }) => {

  const { bodyPart, gifUrl, name, target, id } = exercisesList;

  return (
    <StyledLink to={`/exercises/${id}`}>
      <Div>
        <H3 right bgColor='#ffa6a4'>{ bodyPart }</H3>
        <H3 left bgColor='#9db6b9'>{ target }</H3>
      </Div>
      <img src={gifUrl} alt="exercise demo gif"/>
      <H2>{ name }</H2>
    </StyledLink>
  )
}

export default Exercises;