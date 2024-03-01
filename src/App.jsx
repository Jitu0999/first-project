import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Todo from "./components/Todo"

const App = () => {

  let x = "Welcome to First React JS Project."

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Footer/>
      <Banner/>
      <Todo/>
      {x}
    </div>
  )
}

export default App
