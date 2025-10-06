import './Products.css'
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

function Products() {
    return (
        <>
            <section className="card container">
                <section className="card">
                    <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe"/>
                    <div className="card-detail">
                        <h3 className='card-title'>
                            <section className="card-reviews">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                                <span className="total-reviews">4</span>
                            </section>

                            <section className="card-price">
                                <div className="price">
                                    <del>
                                       $ 300
                                    </del>
                                    200

                                    <div className="bag-icon">
                                        <FaBagShopping />
                                    </div>
                                </div>


                            </section>
                        </h3>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Products;