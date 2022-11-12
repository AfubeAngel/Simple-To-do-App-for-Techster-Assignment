//declare my variables first

const inputField =document.querySelector("#input-field");
const addBtn =document.querySelector("#add-btn");
const clearBtn =document.querySelector("#clear-btn");
const listItems =document.querySelector("#list-items");


/*THE FUNCTION TO CREATE A LIST IN THE ul HTML ELEMENT*/

function showTodoinTheul(todomenu) {
    const li = document.createElement("li"); //the list is created using he li html element
    li.classList.add("todo__section--todoItem");/*classlist is used to access element's list 
    using using the add(), remove(), replace(), and toggle() methods*/
  
    li.innerHTML = `<div class="yourlist">
    <input class="todo__checkbox" type="checkbox" />
    <span class="todo__text"> ${todomenu} </span>
      
    <div class="todo__actions--wrapper">
      <button id="edit_btn" class="todo__actions edit__btn">
        edit
      </button>
  
      <button id="delete_btn" class="todo__actions delete__btn">
        delete
      </button>
  
    </div>
  </div>`;
  
    listItems.appendChild(li);
    addListenersToDeleteButtons();
    addListenersToEditButtons();
  }


  /*WHAT HAPPENS WHEN YOU CLICK THE ADD BUTTON TO SUBMIT A TODO LIST*/
  function todoFormSumbmitHandler(eventObject) {
    eventObject.preventDefault(); //to stop the page from refreshing and clearing out what was typed
    const inputField = document.querySelector("#input-field");
    const todoValue = inputField.value; //take the value of the inputfield
    showTodoinTheul(todoValue);
    inputField.value = ""
  }
    
  const todoForm = document.getElementById("list-form");  //declare the form id
  todoForm.addEventListener("submit", todoFormSumbmitHandler); //the form listens to the function 

  
/*FUNCTION TO ACT ON THE CLEAR BUTTON*/
  function clearForm() {
    //nputField has been declared earlier
    inputField.value = ""; //means empty it out
}

//clearBtn has been declared earlier
clearBtn.addEventListener("click", clearForm) //clearBtn listens to click action from clearForm fnct