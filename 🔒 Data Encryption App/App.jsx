import React, { useState} from "react";
import CryptoJS from "crypto-js";

const App = () => {
  const key = "51000"; // Secret key for AES

  // Load initial values from localStorage
  const [Message, setMessage] = useState("");
  const [Encrypt, setEncrypt] = useState(() => localStorage.getItem("encrypted") || "");
  const [Dencrypt, setDencrypt] = useState("");

  // Encrypt message
  const handleEncript = () => {
    if (!Message) return;
    const CipherText = CryptoJS.AES.encrypt(Message, key).toString();
    setEncrypt(CipherText);
    localStorage.setItem("encrypted", CipherText); // persist
    setMessage(""); // clear input after encrypt
  };

  // Decrypt message
  const handleDecript = () => {
    if (!Encrypt) return;
    const storedCipher = localStorage.getItem("encrypted") || Encrypt;
    const bytes = CryptoJS.AES.decrypt(storedCipher, key);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    setDencrypt(originalText);
  };

  // Clear encrypted message
  const handleClear = () => {
    setEncrypt("");
    setDencrypt("");
    localStorage.removeItem("encrypted");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white px-6">
      <h1 className="text-3xl font-bold mb-6">🔒 Data Encryption App</h1>

      {/* Input */}
      <div className="w-full max-w-md bg-amber-50 rounded-xl">
        <input
          type="text"
          placeholder="Enter your message..."
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 rounded-xl text-black outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-5">
        <button
          onClick={handleEncript}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium shadow-md transition"
        >
          Encrypt
        </button>
        <button
          onClick={handleDecript}
          className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-xl font-medium shadow-md transition"
        >
          Decrypt
        </button>
        <button
          onClick={handleClear}
          className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-xl font-medium shadow-md transition"
        >
          Clear
        </button>
      </div>

      {/* Output */}
      <div className="mt-6 w-full max-w-md space-y-3">
        {Encrypt && (
          <p className="bg-gray-800 p-3 rounded-xl break-all">
            <strong>Encrypted:</strong> {Encrypt}
          </p>
        )}
        {Dencrypt && (
          <p className="bg-gray-800 p-3 rounded-xl">
            <strong>Decrypted:</strong> {Dencrypt}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
