import { Div, Img } from './styles/Hero1b.style';

import benchPress from '../images/bench-press2.svg';
import sumo from '../images/sumo.svg';
import squat from '../images/squat.svg';

const Hero1b = () => {
  return (
    <Div>
      <Img src={benchPress} alt='bench press'/>
      <Img src={sumo} alt='sumo'/>
      <Img src={squat} alt='squat'/>
    </Div>
  )
}

export default Hero1b;