import Navigation from "./nav/Nav.jsx";
import Products from "./products/Products.jsx";
import Recommendations from "./recommendations/Recommendation.jsx";
import Categories from "./sidebar/catogory/Catogory.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";


function App() {

  return (
    <>
        <Sidebar />
        <Recommendations />
        <Navigation />

        <Products />
    </>
  )
}

export default App
