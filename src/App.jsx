const App = () => {

  let x = "Hi.. User  Welcome to our first Project."
  let data = "boy";
  return (
    <div>
      {x}
      {data==="boy"?<h1>Boy</h1>:<h1>Girl</h1>}
    </div>
  )
}

export default App
