


const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");




// event listener//

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);


// functions//
function addTodo(event){
  event.preventDefault();



  const todoDiv =document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText =todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

              //CHECK MARK button//
  const compltedButton = document.createElement("button");
  compltedButton.innerHTML ='<i class="fas fa-check"></i>';
  compltedButton.classList.add("complete-btn");
  todoDiv.appendChild(compltedButton);


                //TRASH BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML ='<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

               //append to list//

  todoList.appendChild(todoDiv);

              // IF INPUT IS EMPTY
todoInput.value="";
}

         // FOR DELETING

function deleteCheck(e){

  const item = e.target;

  if(item.classList[0]==="trash-btn"){
    const todo = item.parentElement;
    todo.classList.add("fall");

    todo.addEventListener("transitionend",function(){
      todo.remove();
    });

  }


// FOR COMPLETED CLASS

  if(item.classList[0]==="complete-btn"){
    const todo =item.parentElement;
    todo.classList.toggle("completed");
  }
}
