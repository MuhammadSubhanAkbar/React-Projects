import './Sidebar.css';
import Categories from "./catogory/Catogory.jsx";
import Price from "./Price/Price.jsx";
import Colors from "./colors/Colors.jsx";

function Sidebar() {
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>🛒</h1>
                </div>
                <Categories />
                <Price/>
                <Colors/>
            </section>
        </>
    )
}

export default Sidebar;