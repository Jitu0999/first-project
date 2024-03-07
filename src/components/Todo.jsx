import'./CSS/Todo.css'
const Todo = () => {
  return (
    <div className='todo'>
      <div className='todo-header'>To-Do List</div>
      <div className='tod-add'>
        <input type='text' placeholder='Add Your Task' className='todo-input' />
        
      </div>
      
    </div>
  )
}

export default Todo
