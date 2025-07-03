document.querySelectorAll('.qa-question').forEach(btn => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active');
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
