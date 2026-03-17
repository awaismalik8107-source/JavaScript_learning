const to_do_list=[];

render();


function render()
{
let todolistHTML='';

for(let i=0;i<to_do_list.length;i++)
{
  const todo=to_do_list[i];
  const html=`<p>${todo}</p>`;//generating html
  todolistHTML += html;
}

document.querySelector('.printer').innerHTML=todolistHTML;//we did this because html does support <p> nesting
}
function addTodo()
{
  const input_element=document.querySelector('.js_input');
  const name =input_element.value;
   console.log(input_element);
  console.log(name);

  to_do_list.push(name);
  console.log(to_do_list);

  input_element.value='';
  render();
}

