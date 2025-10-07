import './Catogory.css'

function Categories() {
    return (
        <div>
            <h2 className="sidebar-title">
                Categories
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
                    <span className='checkmark'></span> Sneakers
                </label>

                {/*For Flats*/}
                <label className="sidebar-label-container">
                    <input type='radio' name='test'/>
                    <span className='checkmark'></span> Flats
                </label>

                {/*For sandals*/}
                <label className="sidebar-label-container">
                    <input type='radio' name='test'/>
                    <span className='checkmark'></span> Sandals
                </label>

                {/*For heels*/}
                <label className="sidebar-label-container">
                    <input type='radio' name='test'/>
                    <span className='checkmark'></span> Heels
                </label>
            </div>
        </div>
    )
}

export default Categories;