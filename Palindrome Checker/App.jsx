import { useState } from "react";

function App() {
    const [input, setInput] = useState("");

    const isPalindrome = (word) => {
        if (!word) return false;
        const reversed = word.split("").reverse().join("");
        return word.toLowerCase() === reversed.toLowerCase(); // Fixed comparison
    }

    const isPal = isPalindrome(input);
    const reversedInput = input.split("").reverse().join("");

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Palindrome Checker
                </h1>

                <form className="mb-6">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter a word or phrase"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                                 focus:outline-none focus:ring-2 focus:ring-blue-500
                                 focus:border-transparent text-gray-800 placeholder-gray-400
                                 transition duration-200"
                    />
                </form>

                {input && (
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Original:</p>
                                <p className="text-lg font-semibold text-gray-800 break-words">{input}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Reversed:</p>
                                <p className="text-lg font-semibold text-gray-800 break-words">{reversedInput}</p>
                            </div>
                        </div>

                        <div className={`p-3 rounded-lg text-center ${
                            isPal ? 'bg-green-100 border border-green-200' : 'bg-red-100 border border-red-200'
                        }`}>
                            <p className={`text-lg font-bold ${
                                isPal ? 'text-green-700' : 'text-red-700'
                            }`}>
                                {isPal ? '✅ Palindrome!' : '❌ Not a palindrome'}
                            </p>
                        </div>

                        {isPal && (
                            <p className="text-center text-sm text-gray-600 mt-2">
                                It reads the same forwards and backwards!
                            </p>
                        )}
                    </div>
                )}

                {!input && (
                    <div className="text-center text-gray-500 py-8">
                        <p>👆 Enter a word above to check if it's a palindrome</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App;