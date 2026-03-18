const to_do_list=[];

render();


function render()
{
let todolistHTML='';

for(let i=0;i<to_do_list.length;i++)
{
  const todo=to_do_list[i];
  // const name=todo.name;
  // // const date=todo.date;

  const { name,dueDate }=todo;//Destructring;

  const html=`
  <div>${name}</div>
  <div>${dueDate}</div>
    <button
   
    class="
    deleteButton
    js-delete
    "
    >
    Delete
    </button>
  `;//generating html
  todolistHTML += html;
}

document.querySelector('.printer').innerHTML=todolistHTML;//we did this because html does support <p> nesting

document.querySelectorAll('.js-delete').forEach((value,index)=>
{
  value.addEventListener('click',()=>{

    to_do_list.splice(index,1);
    render();
  })
});
}

document.querySelector('.add-todo-ad').addEventListener('click',()=>{
  addTodo();
});



function addTodo()
{
  const input_element=document.querySelector('.js_input');
  const date_input=document.querySelector('.Date');
  const date= date_input.value;


  const name =input_element.value;
   console.log(input_element);
  console.log(name);

  to_do_list.push({
    name:name,
  dueDate:date
});
  console.log(to_do_list); 

  input_element.value='';
  render();
}

