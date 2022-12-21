import React from 'react';
import {HeroHeading, HeroTextContainer} from "../../../theme/text/Hero.styled";
import {useTranslation} from "react-i18next";


const HeroText = ({textType}) => {
  const {t} = useTranslation()
  return (
    <HeroTextContainer>
      <HeroHeading dangerouslySetInnerHTML={{__html: t(`heroText.${textType}.header`)}}></HeroHeading>
      <p>{t(`heroText.${textType}.secondary`)}</p>
    </HeroTextContainer>
  );
};

export default HeroText;