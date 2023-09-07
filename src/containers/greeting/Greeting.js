import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import LottieCard from "../../components/LottieCard/LottieCard";
import DeveloperLottie from "../../assests/lottie/developer.json";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          {/* Data */}
          <div className="greeting-text-div">
            <div>
              <p className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </p>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
            </div>
          </div>
          {/* Image */}
          <div className="greeting-image-div">
            <LottieCard LottieAnimation={DeveloperLottie} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
