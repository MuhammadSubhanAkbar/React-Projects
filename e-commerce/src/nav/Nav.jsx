import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import './Nav.css'

function Navigation() {
    return (
        <nav>
        <div className="nav-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search"
            />
        </div>
            <div className="profile-container">
                {/* Heart */}
                <a href="#">
                    <FiHeart
                        className="nav-icons"
                    />
                </a>

                {/* Shopping Cart */}
                <a href="#">
                    <AiOutlineShoppingCart
                        className="nav-icons"/>
                </a>

                <a href="#">
                    <FaUserCircle className="nav-icons"/>
                </a>

            </div>
        </nav>
    )
}

export default Navigation;