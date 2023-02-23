import { DivA, DivB, H1, Img, P, Span, StyledLink } from './styles/Hero1a.style';

import hero from '../images/hero.svg';

const Hero1a = () => {
  return (
    <DivA>
      <DivB>
        <H1>Eat Sleep Gym <Span>Repeat</Span></H1>
        <P>Educate yourself learning various gym exercise to incorporate into your workouts. This is your 1st step to becoming stronger.</P>
        <StyledLink to='/exercises'>Get Started</StyledLink>
      </DivB>

      <Img src={hero} alt='gym hero'/>
    </DivA>
  )
}

export default Hero1a;