
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
       
    });

    const gray = "rgb(128, 128, 128)"

    let selecionado = ''
    
    let ol = document.querySelector('#lista-tarefas')
    
    ol.addEventListener('click', function(event){
        let item = event.target;     
        if (document.querySelector('.selected')) {
            document.querySelector('.selected').classList.remove('selected')
        } 
        item.classList.add('selected')
    })

    ol.addEventListener('dblclick', function(event){
        let item = event.target;     
        if (item.classList.contains('completed')) {
           item.classList.remove('completed')
        } else {
            item.classList.add('completed')
        }
    })

    let buttonApagaTudo = document.querySelector('#apaga-tudo') 

    buttonApagaTudo.addEventListener('click', function(){
        document.location.reload(true);
    })

    let buttonRemoveFinalizados = document.querySelector('#remover-finalizados')


    buttonRemoveFinalizados.addEventListener('click', function(){
        let itemFinalizado = document.querySelectorAll('.completed')
        for (let i = 0; i < itemFinalizado.length; i++) {
          let task = itemFinalizado[i]
          task.remove();
        }
    })
    