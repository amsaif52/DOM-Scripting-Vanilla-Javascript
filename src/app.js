const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const text = input.value;
  input.value = '';
  const li = document.createElement('li');
  li.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'Completed';
  const textInput = document.createElement('input');
  textInput.type = 'checkbox';
  label.appendChild(textInput);
  const button = document.createElement('button');
  button.textContent = "Remove";
  li.appendChild(label);
  li.appendChild(button);
  ul.appendChild(li);
});

ul.addEventListener('change', (event)=>{
  const checkbox = event.target.value;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
  if(checked){
    listItem.className = "responded";
  }else{
    listItem.className = '';
  }
});

ul.addEventListener('click', (event)=>{
  if(event.target.tagName === 'BUTTON'){
    const listItem = event.target.parentNode;
    ul.removeChild(listItem);
  }
});
