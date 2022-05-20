
function reSizeFont() {
    const rngEl = document.querySelector('#font-size-control');
    const textEl = document.querySelector('#text'); 

    rngEl.addEventListener('change', (event) => {
        textEl.style.fontSize = event.target.value + 'px';
    })
}
    
reSizeFont();