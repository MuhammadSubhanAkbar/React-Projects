import {useState} from "react";
import './index.css'

function Accordion({title, content}, index) {

    const[isActive, setActive] = useState(false);

    return (
        <section className="accordion-card" key={index}>
            <div
                onClick={() => setActive(!isActive)}
                className="header">
                <div>
                    {title}
                </div>


                <div className="content">
                    <p className='icon'>
                        {isActive ? "-" :"+"}
                    </p>

                    {isActive &&
                    <p className='card-info'>
                        {content}
                    </p>
                    }
                </div>
            </div>
        </section>
    )
}

export default Accordion;