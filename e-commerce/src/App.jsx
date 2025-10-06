import Navigation from "./nav/Nav.jsx";
import Products from "./products/Products.jsx";
import Recommendations from "./recommendations/Recommendation.jsx";
import Categories from "./sidebar/catogory/Catogory.jsx";


function App() {

  return (
    <>
        <Recommendations />
        <Navigation />
        <Products />
        <Categories />
    </>
  )
}

export default App
