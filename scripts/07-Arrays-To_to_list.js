const to_do_list=[];
function addTodo()
{
  const input_element=document.querySelector('.js_input');
  const name =input_element.value;
   console.log(input_element);
  console.log(name);

  to_do_list.push(name);
  console.log(to_do_list);

  input_element.value='';
}