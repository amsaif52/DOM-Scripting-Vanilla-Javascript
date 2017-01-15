const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');
const mainDiv = document.querySelector('.main');
const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckBox = document.createElement('input');

filterLabel.textContent = "Hide those who haven't responded";
filterCheckBox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckBox);
mainDiv.insertBefore(div, ul);
filterCheckBox.addEventListener('change',(event)=>{
    const isChecked = event.target.checked;
    const lis = ul.children;
    if(isChecked){
      for(let i=0;i<lis.length;i++){
        let list = lis[i];
        if (list.className !== 'responded'){
          list.style.display = 'none';
        }
      }
    }else{
      for (let i = 0; i < lis.length; i += 1) {
        let li = lis[i];
        li.style.display = '';
      }
    }
});

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const text = input.value;
  input.value = '';
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;
  li.appendChild(span);
  const label = document.createElement('label');
  label.textContent = 'Completed';
  const textInput = document.createElement('input');
  textInput.type = 'checkbox';
  label.appendChild(textInput);
  li.appendChild(label);
  const editButton = document.createElement('button');
  editButton.textContent = "Edit";
  li.appendChild(editButton);
  const removeButton = document.createElement('button');
  removeButton.textContent = "Remove";
  li.appendChild(removeButton);
  ul.appendChild(li);
});

ul.addEventListener('change', (event)=>{
    const checkbox = event.target;
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
    const button = event.target;
    const listItem = button.parentNode;
    if(button.textContent === 'Remove'){
      ul.removeChild(listItem);
    }else if (button.textContent === 'Edit'){
      button.textContent = 'Save';
      const span = listItem.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      listItem.insertBefore(input,span);
      listItem.removeChild(span);
    }else if (button.textContent === 'Save') {
      button.textContent = 'Edit';
      const input = listItem.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value
      listItem.insertBefore(span,input);
      listItem.removeChild(input);
    }
  }
});
