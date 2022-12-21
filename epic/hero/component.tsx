import React from 'react';
import HeroText from "./frame/HeroText";
import {Container, Stack} from "@mui/material";

const Component = () => {
  return (
    <div style={{background: "radial-gradient(51.19% 56.94% at 37.86% 39.29%, rgba(7, 17, 119, 0.84) 0%, rgba(21, 25, 63, 0) 100%)"}}>
      <Container maxWidth="xl" sx={{boxSizing:"unset", width:"75%"}}>
        <Stack direction="row" gap="4rem" height="500px" alignItems="center">
          <HeroText textType="process"/>
          <HeroText textType="system"/>
        </Stack>

      </Container>
    </div>
  );
};

export default Component;