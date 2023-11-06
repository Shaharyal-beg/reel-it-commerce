import React from "react";
import "./SidePanel.css";
import { Link, Outlet , useNavigate} from "react-router-dom";
import logo from './logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
// import blob from '../assets/blobs.png'
import dashboard from '../../assets/Home Icon.png'
import add from '../../assets/Add Reels Icon.png'
import chat from '../../assets/Chat with Users Icon.png'
import marketing from '../../assets/marketing.png'
import logout from '../../assets/Logout.png'
import order from '../../assets/order manage.png'
import product from '../../assets/Product Catalog icon.png'
import setting from '../../assets/Setting.png'
export default function SidePanel({match}){
    
    const navigate = useNavigate();

    const Logout = (event) => {
      event.preventDefault();
      localStorage.setItem("authenticated", false);
      navigate("/")
      window.location.reload();
    };

    return(
        <>
        <div className="Main-box">
        <div className="Sidebar">
            {/* <img className='blobs1' src={blob}alt='blobs bg'></img> */}
            <div className='logo'><img src={logo} style={{width:'60px', height:'60px'}} alt='Logo'></img><h3>REEL IT COMMERCE</h3></div>
            <div className='upper-block-buttons'>
                <Link style={{textDecoration: 'none'}} to="/SidePanel/Dashboard"><button className='side-panel-buttons'><img className='blocks' src={dashboard} alt='Add Reels logo'/> Dashboard</button></Link>
                <button className='side-panel-buttons'><img className='blocks' src={add} alt='Add Reels logo'></img>Add Reels</button>
                <button className='side-panel-buttons'><img className='blocks' src={marketing} alt='Marketing/Ads logo'></img>Marketing/Ads</button>
                <Link style={{textDecoration: 'none'}} to="/SidePanel/ProductCatalog"><button className='side-panel-buttons'><img className='blocks' src={product} alt='Product Catalog logo'></img>Product Catalog</button></Link>
                <button className='side-panel-buttons'><img className='blocks' src={order} alt='Order Management logo'></img>Order Management</button>
                <button className='side-panel-buttons'><img className='blocks' src={chat} alt='Chat with Users logo'></img>Chat with Users</button>
            </div>
            <div className='lower-block-buttons'>
                <button className='side-panel-buttons'><img className='blocks' src={setting} alt='setting logo'></img>Setting</button>
                <button className='side-panel-buttons' onClick={Logout}><img className='blocks' src={logout} alt='Log Out logo'></img>Log Out</button>
            </div>
        </div>
        <div className="mainArea">

        <Outlet/>
        </div>
        </div>
        </>
    )
}