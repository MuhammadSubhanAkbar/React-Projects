import './Price.css'

function Price() {
    return (
        <div>
            <h2 className="sidebar-title">
                Price
            </h2>
            <div>

                {/*For all*/}
                <label className="sidebar-label-container">
                    <input type='radio' name='test'/>
                    <span className='checkmark'></span> All
                </label>

                {/*For Sneakers*/}
                <label className="sidebar-label-container">
                    <input type='radio' name='test'/>
                    <span className='checkmark'></span> 50$
                </label>

                {/*For Flats*/}
                <label className="sidebar-label-container">
                    <input type='radio' name='test'/>
                    <span className='checkmark'></span> 100$
                </label>

                {/*For sandals*/}
                <label className="sidebar-label-container">
                    <input type='radio' name='test'/>
                    <span className='checkmark'></span> 150$
                </label>

                {/*For heels*/}
                <label className="sidebar-label-container">
                    <input type='radio' name='test'/>
                    <span className='checkmark'></span> 250$
                </label>
            </div>
        </div>
    )
}

export default Price;