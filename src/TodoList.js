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
 const inpRef = useRef();


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

const editItem = index => {
  const newTodos = [...todos];
  todos[index].title = inpRef.current.value;
  setTodos(newTodos);
};



return (
 <div>

  <input className="form-control" placeholder="Type movie here:" ref={inputRef} onKeyUp={addItem}></input>
    <ul className="listItems">

     Wrong title? Type the right one here & the edit button for the movie you want to change!
        <input className="form-control" placeholder="Edit movie title here" ref={inpRef} ></input> 
   
        {todos.map((todo, index) => <Todo key={index} item={todo}  index={index} deleteItem={deleteItem}  editItem={editItem}/>

) }

    </ul>
    
  
  
  </div>
  
)

}



