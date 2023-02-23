import { Footers, Img, P } from './styles/Footer.styles';
import clsLogo from '../images/logo-2.svg';

const Footer = () => {
  return (
    <Footers>
      <Img src={clsLogo} alt='Logo'/>
      <P>Simplistic fitness webpage, created by Cls154</P>
    </Footers>
  )
}

export default Footer;