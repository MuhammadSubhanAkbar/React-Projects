import '../index.css'
import {FaSearch} from 'react-icons/fa'
import {useState} from "react";

function HiddenSearchBar() {

    const [showInput, setShowInput] = useState(false); // Start with input hidden
    const [bgColor, setBgColor] = useState("white");

    const handleContainerClick = (e) => {
        // If clicking on the container (not the input or icon), hide the input
        if (e.target === e.currentTarget) {
            setShowInput(false);
            setBgColor("white");
        }
    }

    const handleIconClick = () => {
        setShowInput(true);
        setBgColor("#1a1a1a"); // Add # for hex color
    }

    return (
        <section
            className="container"
            style={{backgroundColor: bgColor}}
            onClick={handleContainerClick}
        >
            {showInput ? (
                <input
                    type="text"
                    placeholder="Search..."
                    // Add onBlur to hide when input loses focus
                    onBlur={() => {
                        setShowInput(false);
                        setBgColor("white");
                    }}
                    autoFocus // Automatically focus when shown
                />
            ) : (
                <FaSearch
                    onClick={handleIconClick}
                    style={{cursor: 'pointer'}}
                />
            )}
        </section>
    )
}

export default HiddenSearchBar;