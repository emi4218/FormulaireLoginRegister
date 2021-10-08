window.addEventListener('load', () => {

    let register = false;
    let switchBtn = document.querySelector('.switch');
    let form = document.querySelector('.form');
    let btn = document.querySelector('.btn')


    switchBtn.addEventListener('click', event => {
        if (register === true) {
            form.style.transform = "translateX(0)"
            btn.style.transform = "translateX(0)"
        } else {
            form.style.transform = "translateX(-450px)"
            btn.style.transform = "translateX(178px)"
        }
        register = !register;
    })

})