const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const wrapper = document.querySelector('.wrapper');

openBtn.addEventListener('click', () => {
    wrapper.classList.add('open');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('open');
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});
