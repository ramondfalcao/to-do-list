
    const input = document.querySelector('#texto-tarefa');

    // console.log(localStorage('texto', 'input'))
    const button = document.querySelector('#criar-tarefa');

    button.addEventListener('click' , function(){
        const texto = input.value;    
        console.log(texto)
        let item = document.createElement('li')
        item.innerText = texto
        document.querySelector('#lista-tarefas').appendChild(item)   
        input.value = ''
    });

