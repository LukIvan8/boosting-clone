import React, {ReactNode} from 'react';
import Navbar from "./navbar/Navbar"


const Layout = ({children}: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <Navbar/>
      <main>{children}</main>
    </React.Fragment>
  );
}

export default Layout;