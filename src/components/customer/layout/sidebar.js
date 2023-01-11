import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader, 
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import logo from '../../../assets/helloleadlogo.png';

import { FaTachometerAlt, FaGem,  FaRegLaughWink,FaPiggyBank,FaUserTie,FaFileInvoiceDollar } from 'react-icons/fa';

import {   Link,useNavigate } from "react-router-dom";

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("loggedInUser");


  function logout()
  {
    localStorage.removeItem("loggedInUser");
    navigate('/login');
  }
  
  return (
    <div id="header1">

    <ProSidebar
      
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <img className="sidebar_logo" src={logo}></img>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">Refresh</span>}
          >
            Dashboard
            <Link to="/dashboard" />
          </MenuItem>
         
         
        </Menu>

        <Menu iconShape="circle">


        <SubMenu
            suffix={<span className="badge yellow">2</span>}
            title='Team'
            icon={<FaUserTie />}
          >
         
            <MenuItem>Downline Report <Link to="/dashboard/my_team" /> </MenuItem>
            <MenuItem>Geneology Tree <Link to={"/dashboard/rapid_tree/1/"+loggedInUser} /> </MenuItem>

          </SubMenu>


        <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title='Transaction Report'
            icon={<FaFileInvoiceDollar />}
          >
            <MenuItem>My Deposit <Link to="/dashboard/report_activation/activate_package/" /> </MenuItem>
            <MenuItem>My Withdrawal <Link to="/dashboard/report_withdrawal/withdrawal" /> </MenuItem>
          </SubMenu>




          <SubMenu
            suffix={<span className="badge yellow">1</span>}
            title='Income Report'
            icon={<FaFileInvoiceDollar />}
          >
            <MenuItem>Matching Income<Link to="/dashboard/matching_report/matching_entry/25" /> </MenuItem>
            <MenuItem>Direct Report <Link to="/dashboard/report/direct/" /> </MenuItem>
            <MenuItem>Reward Income <Link to="/dashboard/report/reward/" /> </MenuItem>

          </SubMenu>


        
         

        
          <MenuItem icon={<FaGem />} onClick={logout}> Logout</MenuItem>
        </Menu>
        

        
      </SidebarContent>

      
    </ProSidebar>
    
</div>
  );
};

export default Aside;