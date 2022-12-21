import React from 'react';
import {AppBar, Avatar, Box, MenuItem, Select, Stack} from "@mui/material";
import Logo from "../../common/logo/Logo";
import {FunctionalColumn, LogoLink, NavbarLink, StyledToolbar} from "../../theme/Navbar.styled";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from "../../common/burger-menu/MenuIcon";


const Navbar = () => {
  return (<Box sx={{flexGrow: 1}}>
    <AppBar color="transparent" position="relative">
      <StyledToolbar>
        <Stack direction="row" gap="1.5rem" alignItems="center">
          <LogoLink href="/"><Logo/></LogoLink>
          <NavbarLink href="/">CS:GO Boosting</NavbarLink>
          <NavbarLink href="/">Faceit Boosting</NavbarLink>
          <NavbarLink href="/">ESEA Boosting</NavbarLink>
          <NavbarLink href="/">Esportal Boosting</NavbarLink>
          <NavbarLink href="/">Accounts</NavbarLink>
          <NavbarLink href="/">Company</NavbarLink>
        </Stack>
        <FunctionalColumn direction="row" gap="1rem" alignItems="center">
          <Stack direction="row" alignItems="center">
            <span>Currency:</span>
            <Select defaultValue={"euro"} sx={{height: "48px"}}>
              <MenuItem value={"euro"}>€</MenuItem>
              <MenuItem value={"dollar"}>$</MenuItem>
            </Select>
          </Stack>
          <NavbarLink href="/" style={{alignSelf: "stretch"}}>
            <Stack direction="row" gap="0.5rem" sx={{backgroundColor: "#0038ff", height: "100%", paddingX: "12px"}}
                   alignItems="center">
              <Avatar/>
              <span style={{color: "white"}}>Personal Cabinet</span>
            </Stack>
          </NavbarLink>
          <NavbarLink href="/"><ShoppingCartIcon/></NavbarLink>
        </FunctionalColumn>
        <MenuIcon/>

      </StyledToolbar>
    </AppBar>
  </Box>);
};

export default Navbar;