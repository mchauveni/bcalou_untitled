const btn = document.querySelector('.header__button.theme');

btn.addEventListener('click', () => {
    if (getComputedStyle(document.body).getPropertyValue('--theme') == "dark") {
        document.body.style.setProperty("--theme", null);
    } else {
        document.body.style.setProperty("--theme", "dark");
    }
})