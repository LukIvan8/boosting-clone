import React from 'react';
import {Heading, Secondary, TextContainer} from "../../theme/text/About.styled";

const About = () => {
  return (
    <div style={{background: "url(https://boostingworld.gg/img/svg/features/features_bg.svg) center bottom no-repeat #0f1231", borderRadius: "0 0 100px 100px", paddingBottom:"10px"}}>
      <TextContainer>
        <Heading>About BoostingWorld</Heading>
        <Secondary>We at BoostingWorld place great emphasis on ensuring that players are in the position they deserve. Whether
          it’s CS:GO or any other game, if a player is in a skill bracket or team that they don’t deserve, there is a
          problem here. We do our best to solve this problem. Our ideal is for players to enjoy the game in their
          desired ratings, in better environments, and on skilled teams.</Secondary>
        <Secondary>We all know that every game has a player base that is toxic and disturbs the peace of the game. We think that
          this affects the potential of the players quite a lot. How well can you play in an unhealthy gaming
          environment? In order to eliminate this problem, we aim to take you to high ranks where prosperity is
          abundant. There, you will spend time with smoother and more communicative players.</Secondary>
        <Secondary>
          We also do this with our professional and world-class booster team. We guarantee that you will reach the rank
          you want as soon as possible; our executors have been playing the game for years and are now specialized. So,
          are you ready to raise your gaming rankings? Jump into the exclusive world of BoostingWorld!
        </Secondary>
      </TextContainer>
    </div>
  );
};

export default About;