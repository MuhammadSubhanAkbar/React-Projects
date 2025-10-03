import './index.css'
import {useState} from 'react'

function ToggleBackground () {
    const [background, setBackground] = useState('white')
    const [textcolor, setTextcolor] = useState('#1b1b1b')
    const [buttonStyle, setButtonStyle] = useState('white')

    const handleClick = () => {
        const newBackground = background === 'white' ? '#1b1b1b' : 'white'
        const newTextcolor = textcolor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b'
        const newButtonStyle = background === 'white' ? '#1b1b1b' : 'white'

        setBackground(newBackground)
        setTextcolor(newTextcolor)
        setButtonStyle(newButtonStyle)
    }

    return(
        <div style={{backgroundColor: background, color: textcolor, minHeight: '100vh'}}>
            <button
                style={{
                    backgroundColor: buttonStyle,
                    color: textcolor,
                    border: `2px solid ${textcolor}`,
                    padding: '10px 20px',
                    cursor: 'pointer'
                }}
                onClick={handleClick}>
                {background === '#1b1b1b' ? 'Black Theme' : 'White Theme'}
            </button>

            <section className="content">
                <h1>
                    WELCOME TO A <br/>
                    REAL WORLD....
                </h1>
            </section>
        </div>
    )
}

export default ToggleBackground;