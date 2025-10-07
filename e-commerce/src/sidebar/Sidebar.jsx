import Category from "./catogory/Catogory.jsx";
import Price from "./Price/Price";
import Colors from "./colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>🛒</h1>
                </div>
                <Category handleChange={handleChange} />
                <Price handleChange={handleChange} />
                <Colors handleChange={handleChange} />
            </section>
        </>
    );
};

export default Sidebar;