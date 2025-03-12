import {useState} from 'react';
import './Todo.css';
import { v4 as uuidv4 } from 'uuid';



export default function Todo(){
    let[todos,setTodos]=useState([{task:'Sample Task', id:uuidv4()}]);
    //NEW STATE VARIABLE FOR TRACKING WHAT IS ADDING IN INPUT 
    let [newTask,setNewTask]=useState(['']);
    
    
    function addNewTask(){
        //newtask ko isliya all kiya kunkay iskay andar hum inputs ko save karwa rahay hain.

    setTodos((prevTodos)=>{
        return [...prevTodos,{task:newTask, id:uuidv4()}]});
    }
    //ya function new inputs ki value ko setnewTask ko da raha hai.
    function updateNewTask(evt){
        setNewTask(evt.target.value);
    }

    // delete
function deleteTodo(id){
    setTodos((prevTodo)=>todos.filter((prevTodo)=> prevTodo.id!=id));
    }
    
    
    return(
        <div className='whole'>
        <h2>Todo List</h2>
       <div className="list" style={{display:"flex"}}>        
        <input placeholder="Add your tasks:" value={newTask} onChange={updateNewTask}style={{backgroundColor:'white', color:'black' ,border: '2px solid white', padding: '3%' }}></input>
        <button style={{backgroundColor:'purple', color:'white'}} onClick={addNewTask}>Add +</button>
        </div>
                <br></br>
                <hr></hr>
    <h3>Todo tasks</h3>
    <ul> {todos.map((todo)=>(
              <li key={todo.id}>
                <span>{todo.task}</span>
                &nbsp; &nbsp; &nbsp;
                <i className="fa-solid fa-trash delete" onClick={()=>deleteTodo(todo.id)}></i>  
               
                </li>
                
    ))
    }
    </ul>
    <br></br>

        </div>
    );
}