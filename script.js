
    const input = document.querySelector('#texto-tarefa');

    // console.log(localStorage('texto', 'input'))
    const button = document.querySelector('#criar-tarefa');

    button.addEventListener('click' , function(){
        const texto = input.value;        
        let item = document.createElement('li')
        item.innerText = texto
        document.querySelector('#lista-tarefas').appendChild(item)   
        item.className = "item"
        input.value = ''
        item.addEventListener('click', function(){
            item.style.backgroundColor = 'rgb(128, 128, 128)'
        })
    });
    