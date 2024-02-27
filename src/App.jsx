import Banner from "./components/Banner"
import Footer from "./components/Footer"
import HowJsxWorks from "./components/HowJsxWorks"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

const App = () => {

  let x = "Welcome to First React JS Project."

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Footer/>
      <Banner/>
      <HowJsxWorks/>
      {x}
    </div>
  )
}

export default App
