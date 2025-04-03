document.getElementById('filter-button').addEventListener('click', () => {
    document.getElementById('filter-options').style.display = document.getElementById('filter-options').style.display === 'none' ? 'flex' : 'none';
})

document.querySelectorAll('#gallery button').forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById('lightbox-modal').style.display = 'flex';
        document.getElementById('lightbox-image').src = button.parentNode.querySelector ('img').src;
    })
})


document.getElementById('close-lightbox-button').addEventListener('click' , () => {
  document.getElementById('lightbox-modal').style.display = 'none'
})

document.getElementById('interior-filter').addEventListener('click', ()=> {
    document.querySelectorAll('#gallery div').forEach((div) => {
        if (div.querySelector('img').src.includes('interior')) {
            div.style.display = 'flex';
            
        }else{
            div.style.display = 'none'
        }
    })
})

document.getElementById('exterior-filter').addEventListener('click', () => {
    document,querySelectorAll()
})