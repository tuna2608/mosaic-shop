import "./adminNavBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CastIcon from "@mui/icons-material/Cast";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const AdminNavBar = () => {
  const user = useSelector(state => state.user.currentUser);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Dashboard</span>
        </Link>
        <HomeOutlinedIcon />
        <CastIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <NotificationsOutlinedIcon />
        <div className="info">
        <img src="./images/admin/avatar.jpg" alt="admin_img" />
        <span>{user.username}</span>
        </div>
      </div>
    </div>
  )
}

export default AdminNavBar