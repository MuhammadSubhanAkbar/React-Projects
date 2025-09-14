import { useState } from "react";
import "./App.css"; // make sure you import your CSS

function App() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const encrypt = (input) => {
        return input.split("").map((char) => {
            if (/[a-z]/.test(char)) {
                return char === "z" ? "a" : String.fromCharCode(char.charCodeAt(0) + 1);
            } else if (/[A-Z]/.test(char)) {
                return char === "Z" ? "A" : String.fromCharCode(char.charCodeAt(0) + 1);
            } else {
                return char;
            }
        }).join("");
    };

    const decrypt = (input) => {
        return input.split("").map((char) => {
            if (/[a-z]/.test(char)) {
                return char === "a" ? "z" : String.fromCharCode(char.charCodeAt(0) - 1);
            } else if (/[A-Z]/.test(char)) {
                return char === "A" ? "Z" : String.fromCharCode(char.charCodeAt(0) - 1);
            } else {
                return char;
            }
        }).join("");
    };

    const handleEncrypt = () => {
        const encrypted = encrypt(input);
        setOutput(encrypted);
        console.log("Encrypted:", encrypted);
    };

    const handleDecrypt = () => {
        const decrypted = decrypt(input);
        setOutput(decrypted);
        console.log("Decrypted:", decrypted);
    };

    return (
        <div className="app">
            <div className="card">
                <h1 className="title">Encryption App</h1>

                <form onSubmit={(e) => e.preventDefault()} className="form">
                    <input
                        type="text"
                        value={input}
                        placeholder="Enter your message"
                        onChange={handleChange}
                        className="input"
                    />
                </form>

                <div className="button-group">
                    <button onClick={handleEncrypt} type="button" className="btn btn-encrypt">
                        Encrypt
                    </button>
                    <button onClick={handleDecrypt} type="button" className="btn btn-decrypt">
                        Decrypt
                    </button>
                </div>

                <div className="output-box">
                    <h2 className="output-title">Output:</h2>
                    <p className="output-text">{output || "—"}</p>
                </div>
            </div>
        </div>
    );
}

export default App;
