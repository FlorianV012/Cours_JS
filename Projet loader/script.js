const contLoader = document.querySelector('.container-loader');

window.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('firstDl') === null) {

        contLoader.classList.add('fondu-out');
    } else {
        contLoader.style.display = 'none';
    }

    sessionStorage.setItem('firstDl', 'done')
})

