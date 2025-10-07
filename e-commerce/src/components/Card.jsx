import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";


function Card() {
    return (
        <div className="card">
            <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe"/>
            <div className="card-detail">
                <h3 className="card-title">Nike Running Shoes</h3>

                <div className="card-reviews">
                    <FaStar className="rating-star" />
                    <FaStar className="rating-star" />
                    <FaStar className="rating-star" />
                    <FaStar className="rating-star" />
                    <span className="total-reviews">(4)</span>
                </div>

                <div className="card-price">
                    <div className="price">
                        <del>$300</del>
                        $200
                    </div>
                    <div className="bag-icon">
                        <FaBagShopping />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;