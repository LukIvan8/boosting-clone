import React from 'react';
import {Chip, Container, Grid} from "@mui/material";
import ServiceCard from "../service-card/ServiceCard";
import CS from "../../common/svgComponents/CS";
import Faceit from "../../common/svgComponents/Faceit";
import ESEA from "../../common/svgComponents/ESEA";
import Esportal from "../../common/svgComponents/Esportal";
import Smurf from "../../common/svgComponents/Smurf";
import {CardContainer, ChipContainer} from '../../theme/Services.styled';


const Services = () => {
  return (
    <React.Fragment>
      <Container sx={{
        maxWidth: "100%", boxSizing: "unset", zIndex: "3", position: "relative", '@media (min-width: 1200px)': {
          maxWidth: "100%"
        }, width: "75%"
      }}>
        <CardContainer container spacing={3} justifyContent="center">
          <Grid item xs={2.4}>
            <ServiceCard cardNum="1" CardImage={<CS width={160} height={80} style={{alignSelf: "flex-end"}}/>}/>
          </Grid>
          <Grid item xs={2.4}>
            <ServiceCard cardNum="2" CardImage={<Faceit width={160} height={80} style={{alignSelf: "flex-end"}}/>}/>
          </Grid>
          <Grid item xs={2.4}>
            <ServiceCard cardNum="3" CardImage={<ESEA width={160} height={80} style={{alignSelf: "flex-end"}}/>}/>
          </Grid>
          <Grid item xs={2.4}>
            <ServiceCard cardNum="4" CardImage={<Esportal width={160} height={80} style={{alignSelf: "flex-end"}}/>}/>
          </Grid>
          <Grid item xs={2.4}>
            <ServiceCard cardNum="5" CardImage={<Smurf width={160} height={80} style={{alignSelf: "flex-end"}}/>}/>
          </Grid>
        </CardContainer>
        <ChipContainer container spacing={3} justifyContent="center">
          <Grid item xs={2.4}>
            <Chip sx={{fontSize: "1.3vw", borderColor: "#1e99e7", color: "#1e99e7"}} label="CS:GO" variant="outlined"
                  avatar={<CS width={50} height={30}/>}/>
          </Grid>
          <Grid item xs={2.4}>
            <Chip sx={{fontSize: "1.3vw", borderColor: "#fd6b20", color: "#fd6b20"}} label="Faceit" variant="outlined"
                  avatar={<Faceit width={50} height={30}/>}/>
          </Grid>
          <Grid item xs={2.4}>
            <Chip sx={{fontSize: "1.3vw", borderColor: "#00993f", color: "#00993f"}} label="ESEA" variant="outlined"
                  avatar={<ESEA width={50} height={30}/>}/>
          </Grid>
          <Grid item xs={2.4}>
            <Chip sx={{fontSize: "1.3vw", borderColor: "#b620fd", color: "#b620fd"}} label="Esportal" variant="outlined"
                  avatar={<Esportal width={50} height={30}/>}/>
          </Grid>
          <Grid item xs={2.4}>
            <Chip sx={{fontSize: "1.3vw", borderColor: "#00FFB2", color: "#00FFB2"}} label="Smurfs " variant="outlined"
                  avatar={<Smurf width={50} height={30}/>}/>
          </Grid>
        </ChipContainer>
      </Container>
    </React.Fragment>
  );
};

export default Services;