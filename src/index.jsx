 import React from "react";
 import ReactDOM from "react-dom";
 import "./index.html";
 import TodoItem from "./todoItem/todoitem.jsx";
 
class Task extends React.Component{
  
   render(){

      return(
         
         <>
         
         <TodoItem
         name='go to shopping'
        
         />

         <TodoItem
         name='walk the dog'

         />
         <TodoItem
         name='cook the dinner'

         />
         </>


      )


   }



}
 

 


ReactDOM.render(<Task />, document.querySelector('.app'));


// <button>Check</button>
//             <img className="logo logo__cross" src={check}/>
//             <button>Cross</button>
//             <img className="logo logo__cross" src={cross}/>
//             <button>Question</button>
//             <img className="logo logo__question" src={question}/>