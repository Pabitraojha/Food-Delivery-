import Navbar  from "./components/Navbar"
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import MenuGrid from "./components/MenuGridCard/MenuGrid";
function App() {
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <CategoryFilter/>
      <MenuGrid/>


    </div>
  )
}

export default App;
