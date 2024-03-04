import './Header.css';
import Burger from '../../assets/Burger.svg';
import Search from '../../assets/Search.svg';
import User from '../../assets/User.svg';
import UserBanner from '../UserBanner/UserBanner';

export default function Header({isHeaderWithBanner}: {isHeaderWithBanner: boolean}) {
    let userName = 'Igor Klimenka'
    let userInitials = userName.split(" ").map(item => item.slice(0, 1)).join("")

    return (  
        <div className="header-container">
            <div className="header-items-left">
                <div className="header-item">
                    <img src={Burger} alt="Menu burger" className='header-items__burger'/>
                </div> 
            </div>

            <div className="header-items-right">
                <div className="header-item">
                    <img src={Search} alt="Search icon" className="header-items__search" />
                </div>
                <div className={isHeaderWithBanner ? "header-item-hide" : "header-item"}>
                    <img src={User} alt="User icon" className="header-items__user" />
                </div>
                <div className={isHeaderWithBanner ? "header-item-banner" : "header-item-hide"}>
                    <UserBanner initials={userInitials}  name={userName}></UserBanner>
                </div>
            </div>
        </div>
    );
}

