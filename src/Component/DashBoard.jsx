
import { FaBook, FaCalendar, FaCaretDown, FaCartArrowDown, FaList, FaUser, FaUsers, FaUtensils } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaCarTunnel } from "react-icons/fa6";
import { FaBorderAll } from "react-icons/fa6";

const DashBoard = () => {
    const isAdmin=true;
    return (
        <div className='flex'>
            <div  className="w-64 min-h-screen bg-orange-400">
            <ul className="menu">
               {
                isAdmin ?
                <>
                 <li>
                    <NavLink to="/dashboard/adminhome">    <FaCaretDown /> Admin Home </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/aditem">  <FaUtensils></FaUtensils>   Add Riders </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/manageitems">  <FaList></FaList> ManageRiders </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/managebookings">  <FaBook></FaBook>Riders Booking </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/users"> <FaUsers></FaUsers>  AllUsers</NavLink>
                 
                </li>
                </>
                :
                <>
                 <li>
                    <NavLink to="/dashboard/cart">   <FaCartArrowDown></FaCartArrowDown>  My Cart </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/userhome">   <FaHome />  Home </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/reservation">  <FaCalendar></FaCalendar>Riders</NavLink>
                 
                </li>
              
                <li>
                    <NavLink to="/dashboard/mybookings">  <FaCarTunnel /> My bookings</NavLink>
                 
                </li></>
               }
                <div className="divider">OR</div>
                <li>
                    <NavLink to="/">  <FaHome /> Home</NavLink>
                 
                </li>
                <li>
                    <NavLink to="/order">  <FaBorderAll /> Order</NavLink>
                 
                </li>
              </ul>
            </div>

            <div className="flex-1 p-8">
             <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;