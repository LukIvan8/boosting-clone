import React from 'react';
import Link from "next/link";
import {Primary, Secondary, ServiceCardsContainer} from "../../theme/Services.styled";
import {useTranslation} from "react-i18next";
// @ts-ignore
// Я не знаю почему оно выдаёт ворнинг, но работает как нужно
import {Color} from "csstype";

const ServiceCard = ({cardNum, CardImage}: { cardNum: string, CardImage: JSX.Element }) => {
  const {t} = useTranslation();

  return (
    <ServiceCardsContainer
      sx={{background: t(`cardContent.${cardNum}.gradient`)}}
      alignItems="center">
      <Primary>{t(`cardContent.${cardNum}.primary`)}</Primary>
      <Secondary>{t(`cardContent.${cardNum}.secondary`)}</Secondary>
      <Link href="/" style={{color: t(`cardContent.${cardNum}.linkColor`) as Color}}>View Details</Link>
      {CardImage}
    </ServiceCardsContainer>
  );
};

export default ServiceCard;