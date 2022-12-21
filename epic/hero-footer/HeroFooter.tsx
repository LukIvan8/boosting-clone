import React from 'react';
import styled from "styled-components";

// Нужно ли это вытаскивать в дизайн систему если это буквально просто полоска для красоты которая нигде больше не используется?

const HeroFooterContainer = styled.div`
  position: absolute;
  bottom: 0px;
  z-index: 1;
  width: 100%;
  background-color: #0f1231;
  height: 102px;
  border-radius: 100px 100px 0 0;
  @media (max-width: 1300px) {
    height: 50px;
  }
`

const HeroFooter = () => {
  return (
    <HeroFooterContainer>
    </HeroFooterContainer>
  );
};

export default HeroFooter;