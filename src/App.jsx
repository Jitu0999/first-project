const App = () => {

  let x = "Hi.. User  Welcome to our first Project."
  let array = ["user1", "user2", "user3", "user4", "user5"]
  return (
    <div>
      {x}
      {array.map((user)=>{return <h1>{user}</h1>})}
    </div>
  )
}

export default App
