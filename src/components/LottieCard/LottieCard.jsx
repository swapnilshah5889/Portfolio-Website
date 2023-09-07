import React from "react";
import Lottie from "react-lottie"
import './lottie-card.styles.css';

const LottieCard = ({LottieAnimation, lottieClass="lottie-default"}) => {
  
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LottieAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
  
    return (
        <div className={lottieClass}>

            <Lottie options={defaultOptions}/>
        </div>
    )
}

export default LottieCard;