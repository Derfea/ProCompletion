// import React, { useState } from "react";
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBIcon,
//   MDBCollapse,
//   MDBDropdown,
//   MDBDropdownMenu,
//   MDBDropdownToggle,
//   MDBDropdownItem,
//   MDBNavbarNav,
// } from "mdb-react-ui-kit";
// import "./header.css";

// export default function Header() {
//   const [openNavExternal, setOpenNavExternal, openNavRight, setOpenNavRight] =
//     useState(false);

//   return (
//     <>
//       <MDBCollapse open={openNavExternal}>
//         <div className="bg-dark p-4">
//           <h5 className="text-white h4">Collapsed content</h5>
//           <span className="text-muted">Toggleable via the navbar brand.</span>
//         </div>
//       </MDBCollapse>
//       <MDBNavbar dark bgColor="dark">
//         <MDBContainer fluid>
//           <MDBNavbarToggler
//             type="button"
//             data-target="#navbarToggleExternalContent"
//             aria-controls="navbarToggleExternalContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             onClick={() => setOpenNavExternal(!openNavExternal)}
//           >
//             <MDBIcon icon="bars" fas className="left" />
//           </MDBNavbarToggler>
//         </MDBContainer>
//         <MDBContainer fluid>
//           <MDBNavbarToggler
//             type="button"
//             data-target="#navbarRightAlignExample"
//             aria-controls="navbarRightAlignExample"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             onClick={() => setOpenNavRight(!openNavRight)}
//           >
//             <MDBIcon icon="bars" fas />
//           </MDBNavbarToggler>
//           <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
//             <MDBNavbarItem>
//               <MDBNavbarLink active aria-current="page" href="#">
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href="#">Link</MDBNavbarLink>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle tag="a" className="nav-link">
//                   Dropdown
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu>
//                   <MDBDropdownItem link>Action</MDBDropdownItem>
//                   <MDBDropdownItem link>Another action</MDBDropdownItem>
//                   <MDBDropdownItem link>Something else here</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink
//                 disabled
//                 href="#"
//                 tabIndex={-1}
//                 aria-disabled="true"
//               >
//                 Disabled
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//         </MDBContainer>
//       </MDBNavbar>
//     </>
//   );
// }
import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import logo from "./2.png";

export default function Header() {
  const [
    openNavRight,
    setOpenNavRight,
    openNavLeft,
    setOpenNavLeft,
    openNavExternal,
    setOpenNavExternal,
  ] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarLeftAlignExample"
          aria-controls="navbarLeftAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavLeft(!openNavLeft)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openNavLeft}>
          <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <img src={logo} height="25px" />{" "}
                <b>
                  <i>ProCompletions</i>
                </b>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Link</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
      <MDBContainer fluid>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavRight(!openNavRight)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openNavRight}>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                disabled
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Chika Kanu
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
