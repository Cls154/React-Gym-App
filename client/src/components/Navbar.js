import dumbbell from '../images/dumbbell.svg';
import { Header, Div, H1, Img, Ul, Nav, StyledButtonLink, StyledLink } from './styles/Navbar.styles';


const Navbar = () => {

  return (
    <Header>
      <Nav>
        <Div>
          <Img src={dumbbell} alt='Logo'/>
          <H1>CLS</H1>
          <Ul left>
            <li><StyledLink to='/'>Home</StyledLink></li>
            <li><StyledLink to='/exercises'>Exercises</StyledLink></li>
          </Ul>
        </Div>
        <Ul right>
          <li><StyledLink right='25px' to='/'>Login</StyledLink></li>
          <li><StyledButtonLink to='/'>Sign Up</StyledButtonLink></li>
        </Ul>
      </Nav>
    </Header>
  )
}

export default Navbar;