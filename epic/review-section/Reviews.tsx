import React from 'react';
import ReviewsHeading from "../reviews/ReviewsHeading";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 1320px;
`

const Reviews = () => {
  return (
    <Container>
      <ReviewsHeading/>
    {/*Хочу доделать, но нужно с API trustpilot разобраться*/}
    </Container>
  );
};

export default Reviews;