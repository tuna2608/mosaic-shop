import "./adminLeftBar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import FlagCircleOutlinedIcon from '@mui/icons-material/FlagCircleOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
const AdminLeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <span style={{ fontWeight: "700", color: "#ccc", fontSize: "18px" }}>Menu</span>
          </div>
          <div className="item">
            <HomeOutlinedIcon />
            <span>Home</span>
          </div>
          <div className="item">
            <AutoGraphOutlinedIcon />
            <span>Analytics</span>
          </div>
          <div className="item">
            <MonetizationOnOutlinedIcon />
            <span>Sales</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="user">
            <span style={{ fontWeight: "700", color: "#ccc", fontSize: "18px" }}>Management</span>
          </div>
          <div className="item">
            <PeopleAltOutlinedIcon />
            <span>Users</span>
          </div>
          <div className="item">
            <Inventory2OutlinedIcon />
            <span>Products</span>
          </div>
          <div className="item">
            <ReceiptLongOutlinedIcon />
            <span>Transaction</span>
          </div>
          <div className="item">
            <FlagCircleOutlinedIcon />
            <span>Reports</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="user">
            <span style={{ fontWeight: "700", color: "#ccc", fontSize: "18px" }}>Notifications</span>
          </div>        <div className="item">
            <MailOutlineOutlinedIcon />
            <span>Mail</span>
          </div>
          <div className="item">
            <AddCommentOutlinedIcon />
            <span>Feedback</span>
          </div>
          <div className="item">
            <MessageOutlinedIcon />
            <span>Messages</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default AdminLeftBar