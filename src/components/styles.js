import { bounce, fadeInLeft, fadeInRight } from 'react-animations';
import Radium from 'radium';
const styles = {
    bounce: {
      animation: 'x 2s',
      animationName: Radium.keyframes(bounce, 'bounce')
    },
    fadeInLeft:{
        animation: 'x 3s',
        animationName: Radium.keyframes(fadeInLeft,'fadeInLeft')
    },
    fadeInRight:{
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInRight,'fadeInRight')
    }
  }
export default styles;