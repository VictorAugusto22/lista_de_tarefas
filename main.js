var button = document.getElementsByTagName('button')[0].addEventListener('click', ()=>{
    if(document.getElementById('task').value.length == 0){
        alert("Please rigth a task")
    }else{
        var tarefa = document.getElementById('task')
        var ul = document.getElementById('ul')
        var li = document.createElement('li')
        ul.appendChild(li)
        li.innerHTML += tarefa.value

        var delet = document.createElement('button') 
        delet.setAttribute('class', 'delet')
        delet.innerHTML = "<i class='bx bx-trash' style='font-size:20px'  ></i>"
        li.appendChild(delet)
        tarefa.value=''

        delet.addEventListener('click',()=>{
            if( confirm("deseja remover?")){
                
                li.remove()
            }
        })



    }
})
