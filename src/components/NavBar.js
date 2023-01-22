import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';
const NavBar = ({ setTheme }) => {
    const theme = localStorage.getItem("theme")

    return <NavBarStyle>
        <div className='left'>
            <Link to="/" style={{ textDecoration: "none" }}>
                <span>Munkh Dev</span>
            </Link>
            <HomeIcon />
            {theme ? <DarkModeIcon /> : <LightModeIcon />}
            <AppsIcon />
            <div className='search'>
                <SearchIcon />
                <input type="text" placeholder='Search' />
            </div>
        </div>
        <div className='right'>
            <PersonOutlineIcon />
            <EmailIcon />
            <NotificationsNoneIcon />
            <div className='user'>
                <SearchIcon />
                {/* <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /> */}
                <span>User</span>
            </div>
        </div>
    </NavBarStyle>
};
export default NavBar

const NavBarStyle = styled.div`
position: sticky;
top: 0;
display:flex;
background-color: white;
align-items:center;
justify-content: space-between;
padding: 10px 20px;
border-bottom: solid 1px lightgray;
.left{
    display:flex;
    align-items: center;
    gap:30px;
    span{
        font-weight: bold;
        font-size:20px;
        color: darkblue;

    }
    .search{
        display:flex;
        align-items:center;
        gap:10px;
        border: 1px solid lightgray;
        padding:5px;
        input{
            border:none;
            width:500px;

        }
    }
}
.right {
    display:flex;
    align-items: center;
    gap:20px;
    .user {
        display:flex;
        align-items:center;
        gap:10px;
        font-weight : 500;
        img {
            width:30px;
            height:30px;
            border-radius:50%;
            object-fit: cover; 
        }
        span {

        }
    }
}
`