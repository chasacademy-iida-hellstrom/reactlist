import React, { useState, useRef} from 'react' ;
import Todo from './Todo';

export default function TodoList() {

  const [todos, setTodos] = useState([
    {
    id: 1,
    title: "Home Alone",
    },
    
    {
    id:2,
    title: "Elf"},
    
    {
    id:3,
    title: "Ice sculpture christmas"},

    ]);

  
      

 const inputRef = useRef();
 
 function addItem(event) {
    if (event.keyCode === 13) {
        const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 :1;   
    
    setTodos([...todos, {
    id: newId,
    title: inputRef.current.value

    }]);

    inputRef.current.value = "";

    }


 }

function deleteItem(id) {
    setTodos(todos.filter((item) => item.id !== id));
}

// function to handle when the "Edit" button is clicked
const editItem = index => {
  const newTodos = [...todos];
  todos[index-1].title = inputRef.current.value;
  setTodos(newTodos);
};






return (
 <div>

  <input className="form-control" placeholder="Type movie here:" ref={inputRef} onKeyUp={addItem}></input>
    <ul className="listItems">

    Did you spell the movie wrong? Edit the title here and press the edit- button next to the movie!
<input className="form-control" placeholder="Edit movie title here" ref={inputRef} ></input> 
   
        {todos.map((todo, index) => <Todo key={index} item={todo}  index={index} deleteItem={deleteItem}  editItem={editItem}/>



) }

    </ul>
    
  
  
  </div>
  
)

}



