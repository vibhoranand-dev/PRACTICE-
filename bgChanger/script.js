const button = document.querySelectorAll('.button');
const body = document.querySelector('body')


button.forEach(function (button) {
    button.addEventListener('click',function(e){
        /*if(e.target.id==='grey'){
            body.style.backgroundColor = e.target.id;
            body.style.color= 'black'
        }
        if(e.target.id==='red'){
            body.style.backgroundColor= e.target.id
            body.style.color='blue'
        }
        if(e.target.id==='black'){
            body.style.backgroundColor=e.target.id
            body.style.color='cyan'
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id
            body.style.color='yellow'
        }*/
       body.style.backgroundColor=e.target.id;

    })
    
})

