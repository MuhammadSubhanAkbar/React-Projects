import {accordionData} from "./utili/content.js";
import Accordion from "./Accordian.jsx";

function App() {

  return (
    <>
        <div className="accordion">
            {accordionData.map(({ title, content }, index) => (
                <Accordion
                    key={index}
                    title={title}
                    content={content}
                />
            ))}
        </div>
    </>
  )
}

export default App
