import React from 'react';
import pointer from "./img/pointer.svg"
import trustpilot from "./img/trustpilot.svg"
import {Container, Pointer, Trustpilot, TrustpilotButton} from "../../theme/Reviews.styled";


const ReviewsHeading = () => {
  return (
    <Container>
      <p style={{whiteSpace: "pre-line", fontSize: "38px", color: "#15193f", lineHeight: "90%", fontFamily: "Tauri"}}>
        Reviews about us.
        We are <span style={{color: "lime"}}>trusted by</span> many people!</p>
      <TrustpilotButton>
        <Pointer src={pointer} alt=""></Pointer>
        <Trustpilot src={trustpilot} alt=""></Trustpilot>
      </TrustpilotButton>
    </Container>
  );
};

export default ReviewsHeading;