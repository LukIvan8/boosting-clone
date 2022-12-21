import styled from "styled-components";
import Link from "next/link";
import {Stack, Toolbar} from "@mui/material";

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1rem;
  @media (max-width: 900px){
    display: none;
  }
`

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1rem;
`

export const StyledToolbar = styled(Toolbar)`
  margin: auto;
  min-height: 48px;
  gap: 10rem;
  @media (max-width: 1360px) {
    justify-content: space-between;
    margin: 0;
    gap: unset;
  }
`

export const FunctionalColumn = styled(Stack)`
  @media (max-width: 1250px) {
    display: none;
  }
`