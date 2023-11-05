import React from "react";
import "./SidePanel.css";
import { Link, Outlet , useNavigate} from "react-router-dom";
import logo from './logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
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
        <div className="Sidebar"><img className='blobs1' src='./blobs-bg.png' alt='blobs bg'></img>
            <div className='logo'><img src={logo} alt='Logo'></img>REEL IT COMMERCE</div>
            <div className='upper-block-buttons'>
                <Link style={{textDecoration: 'none'}} to="/SidePanel/Dashboard"><button className='side-panel-buttons'><DashboardIcon/> Dashboard</button></Link>
                <button className='side-panel-buttons'><img className='blocks' src='./Add Reels Icon.png' alt='Add Reels logo'></img>Add Reels</button>
                <button className='side-panel-buttons'><img className='blocks' src='./marketing.png' alt='Marketing/Ads logo'></img>Marketing/Ads</button>
                <Link style={{textDecoration: 'none'}} to="/SidePanel/ProductCatalog"><button className='side-panel-buttons'><img className='blocks' src='./Product Catalog icon.png' alt='Product Catalog logo'></img>Product Catalog</button></Link>
                <button className='side-panel-buttons'><img className='blocks' src='./order manage.png' alt='Order Management logo'></img>Order Management</button>
                <button className='side-panel-buttons'><img className='blocks' src='./Chat with Users Icon.png' alt='Chat with Users logo'></img>Chat with Users</button>
            </div>
            <div className='lower-block-buttons'>
                <button className='side-panel-buttons'><img className='blocks' src='./Setting.png' alt='setting logo'></img>Setting</button>
                <button className='side-panel-buttons' onClick={Logout}><img className='blocks' src='./Logout.png' alt='Log Out logo'></img>Log Out</button>
            </div>
        </div>
        <div className="mainArea">

        <Outlet/>
        </div>
        </div>
        </>
    )
}