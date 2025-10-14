import { useState } from 'react';

function App() {
    const [rangeValue, setRangeValue] = useState(50);

    return (
        <div className="flex flex-col h-screen items-center justify-center space-y-8">
            {/* Red square that grows with range */}
            <div
                className="border border-red-700 flex flex-col text-center items-center justify-center
                hover:bg-red-700 hover:text-white transition-colors duration-700 "
                style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: `${rangeValue}%`,
                }}
            >
                change the shape form rectangle to circle.
            </div>

            {/* Range input */}
            <input
                type="range"
                min="0"
                max="50"
                value={rangeValue}
                onChange={(e) => setRangeValue(parseInt(e.target.value))}
                className="w-64"
            />

            {/* Display current value */}
            <p className="text-lg font-semibold">Value: {rangeValue}</p>
        </div>
    );
}

export default App;