import './Recommendation.css'

function Recommendations() {
    return (
        <>
            <h2 className="recommended-title">Recommendation</h2>
            <div className="recommended-flex">
                <button className='btns' >All Products</button>
                <button  className='btns' >Nike</button>
                <button  className='btns' >Puma</button>
                <button  className='btns' >Vans</button>
            </div>
        </>
    )
}

export default Recommendations;