import styled from "styled-components";
import {Grid, Stack} from "@mui/material";

export const ServiceCardsContainer = styled(Stack)`
  border: 1px solid #292e64;
  color: white;
  z-index: 3;
  padding-top: 0.6rem;
`
export const Primary = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 0;
  line-height: 24px;
`

export const Secondary = styled.p`
  font-size:15px;
  margin-top: 8px;
`

export const CardContainer = styled(Grid)`
  @media (max-width: 1300px) {
    display: none;
  }
`

export const ChipContainer = styled(Grid)`
  display: none;
  @media (max-width: 1300px) {
    display: flex;
  }
`