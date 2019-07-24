import React from "react";
import { NavLink } from "react-router-dom";
import { AuthConsumer } from "./../auth/Guard";

function NavMain() {
  return (
    <AuthConsumer>
      {({ loginStatus, signout, user }) => {
        console.log("waazzaaaa", loginStatus);
        return (
          <>
            <div>
              <nav className="navMain">
                <div>
                  <NavLink to="/menu" className="navMain-title">
                    DINO DISCORD
                  </NavLink>
                </div>
                <div className="navMain-choices">
                  <NavLink to={`/profile/${user._id}`} className="nav-item">
                    profile
                  </NavLink>
                  <NavLink
                    onClick={() => signout(res => console.log(res))}
                    className="nav-item"
                  >
                    log out
                  </NavLink>
                </div>
              </nav>
            </div>
          </>
        );
      }}
    </AuthConsumer>
  );
}

export default NavMain;
