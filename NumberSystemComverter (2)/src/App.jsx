import { useState } from 'react'

const App = () => {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const [fromBase, setFromBase] = useState('10')

    const decimalToBinary = () => {
        if (input === '') {
            setOutput("Please enter a valid decimal")
            return;
        }

        const decimal = parseInt(input)

        if (isNaN(decimal)) {
            setOutput("Please enter a valid decimal")
            return
        }

        const binaryString = decimal.toString(2);
        setOutput(`Binary: ${binaryString}`)
    }

    const decimalToHexDecimal = () => {
        if (input === '') {
            setOutput("Please enter a valid decimal")
            return;
        }

        const decimal = parseInt(input)

        if (isNaN(decimal)) {
            setOutput("Please enter a valid decimal")
            return
        }

        const hexString = decimal.toString(16).toUpperCase();
        setOutput(`Hexadecimal: ${hexString}`)
    }

    const decimalToOctaDecimal = () => {
        if (input === '') {
            setOutput("Please enter a valid decimal")
            return;
        }

        const decimal = parseInt(input)

        if (isNaN(decimal)) {
            setOutput("Please enter a valid decimal")
            return
        }

        const octalString = decimal.toString(8);
        setOutput(`Octal: ${octalString}`)
    }

    // New function: Convert from any base to decimal
    const toDecimal = () => {
        if (input === '') {
            setOutput("Please enter a valid number")
            return;
        }

        const base = parseInt(fromBase)
        const decimal = parseInt(input, base)

        if (isNaN(decimal)) {
            setOutput("Invalid number for selected base")
            return
        }

        setOutput(`Decimal: ${decimal}`)
    }

    const clearAll = () => {
        setInput('')
        setOutput('')
        setFromBase('10')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="card bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-auto border border-gray-100">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Number Converter
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Convert between different number systems
                </p>

                {/* Input Section */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Enter Number:
                    </label>
                    <input
                        type="text"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        placeholder="Enter number here..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    />
                </div>


                {/* Buttons Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md"
                        onClick={decimalToBinary}
                    >
                        To Binary
                    </button>

                    <button
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md"
                        onClick={decimalToHexDecimal}
                    >
                        To Hex
                    </button>

                    <button
                        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md"
                        onClick={decimalToOctaDecimal}
                    >
                        To Octal
                    </button>

                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md"
                        onClick={toDecimal}
                    >
                        To Decimal
                    </button>
                </div>

                {/* Clear Button */}
                <button
                    className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md mb-6"
                    onClick={clearAll}
                >
                    Clear All
                </button>

                {/* Output Section */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Result:</h3>
                    <div className="min-h-12 flex items-center">
                        <p className={`text-lg font-mono ${output ? 'text-gray-800' : 'text-gray-400'}`}>
                            {output || "Your result will appear here..."}
                        </p>
                    </div>
                </div>

                {/* Help Text */}
                <div className="mt-6 text-xs text-gray-500 text-center">
                    <p>• Hexadecimal letters are case-insensitive</p>
                    <p>• Invalid inputs will show error messages</p>
                </div>
            </div>
        </div>
    )
}

export default App