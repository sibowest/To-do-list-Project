const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e)=>{
    (e.keyCode === 13 ? addList(e) : null);
})

function addList(e){
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    // editBtn.innerHTML = '<i class="fa fa-pencil"></i>';

    if(input.value !==''){
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
        newLi.appendChild(editBtn);
    }

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });

    editBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        // const nv = newLi.replaceChild.bind('replaced')
        // newLi.textContent = nv
        // notCompleted.appendChild(newLi);
        // newLi.appendChild(checkBtn);
        // newLi.appendChild(delBtn);
        // newLi.appendChild(editBtn);
    });
}
