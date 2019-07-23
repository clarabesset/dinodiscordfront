import React from "react";
import { NavLink } from "react-router-dom";
import { AuthConsumer } from './../auth/Guard'
function NavMain() {
  return (
    <AuthConsumer>
      {({ loginStatus, signout }) => {
        console.log("waazzaaaa", loginStatus)
        return (<>
          <div>
            <nav className='navMain'>
              <div>
                <NavLink to='/menu' className='navMain-title'>DINO DISCORD</NavLink>
              </div>
              <div className='navMain-choices'>
                <NavLink to='/menu' className='nav-item'>profil</NavLink>
                <NavLink to='/signin' className='nav-item'>login</NavLink>
                <button onClick={() => signout(res => console.log(res))} className='nav-item'>logout</button>
              </div>
            </nav>
          </div>
        </>)
      }
      }
    </AuthConsumer>
  )

}




export default NavMain;