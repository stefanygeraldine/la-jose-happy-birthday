import Lottie from 'react-lottie-player'

import lottieJson from './Star.json'

export const StartLottiePlayer = () => {
  return (
    <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 150, height: 150 }}
                />
  )
}
