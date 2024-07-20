const accordion = document.querySelectorAll('.js-accordion');


accordion.forEach(item =>{
    item.addEventListener('click', () =>{
        item.parentElement.classList.toggle('active');
    })
})