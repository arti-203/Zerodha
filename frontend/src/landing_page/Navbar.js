// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav
//       class="navbar navbar-expand-lg border-bottom"
//       style={{ backgroundColor: "#FFF" }}
//     >
//       <div class="container p-2">
//         <link class="navbar-brand" to="/">
//           <img
//             src="media/images/logo.svg"
//             style={{ width: "25%" }}
//             alt="Logo"
//           />
//         </link>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <form class="d-flex" role="search">
//             <ul class="navbar-nav mb-lg-0">
//               <li class="nav-item">
//                 <link class="nav-link active" aria-current="page" to="/signup">
//                   Signup
//                 </link>
//               </li>
//               <li class="nav-item">
//                 <link class="nav-link active" aria-current="page" to="/about"> 
//                   About
//                 </link>
//               </li>
//               <li class="nav-item">
//                 <link class="nav-link active" aria-current="page" to="/product"> 
//                   Product
//                 </link>
//               </li>
//               <li class="nav-item">
//                 <link class="nav-link active" aria-current="page" to="/product"> 
//                   Pricing
//                 </link>
//               </li>
//               <li class="nav-item">
//                 <link class="nav-link active" aria-current="page" to="/product"> 
//                   Support
//                 </link>
//               </li>
//             </ul>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        {/* Fixed: Changed <link> to <Link> */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                {/* Fixed: Changed <link> to <Link> */}
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                {/* Fixed: Changed <link> to <Link> */}
                <Link className="nav-link active" aria-current="page" to="/about"> 
                  About
                </Link>
              </li>
              <li className="nav-item">
                {/* Fixed: Changed <link> to <Link> */}
                <Link className="nav-link active" aria-current="page" to="/product"> 
                  Product
                </Link>
              </li>
              <li className="nav-item">
                {/* Fixed: Changed <link> to <Link> and path to /pricing */}
                <Link className="nav-link active" aria-current="page" to="/pricing"> 
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                {/* Fixed: Changed <link> to <Link> and path to /support */}
                <Link className="nav-link active" aria-current="page" to="/support"> 
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;