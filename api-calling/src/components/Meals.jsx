import { useEffect, useState} from "react";
import '../index.css'
import axios from 'axios'

function Meals() {

    const [meals, setMeals] = useState([])

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then((response) => {
            setMeals(response.data.meals)
        }).catch((error) => {
            console.log(error)
        })
    },[])

    const itemsList = meals.map(({strMeal, strMealThumb, idMeal}) =>{
        return (
            <section className="card">
                <img src={strMealThumb} alt={strMeal}/>
                <section className="content">
                    <p>{strMeal}</p>
                </section>
            </section>
        )
    })

    return (
        <div className="items-container">
            {itemsList}
        </div>
    )
}

export default Meals;