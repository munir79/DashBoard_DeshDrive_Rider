import { Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa6";


const Header = () => {
    const NavOption=<>
        
        <li><Link to='/'>Home </Link> </li>
              
              <li><Link to='/riders'>Riders</Link> </li>
              <li><Link to='/'>Supports </Link> </li>

              <li><Link to='/dashboard/book'>
                
                <div className="indicator">
  <span className="indicator-item badge badge-secondary"></span> 
  <button className="btn"><FaShopify /> {} </button>
</div>
                
                </Link> </li>
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {NavOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">DeshDrive- Riders</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {NavOption}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Log in</a>
        </div>
      </div>
    );
};

export default Header;