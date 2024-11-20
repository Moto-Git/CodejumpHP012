// スクロール on
document.addEventListener("DOMContentLoaded", function () {
    const backgroundSection = document.querySelector('.background-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                backgroundSection.classList.add('active');
            } else {
                backgroundSection.classList.remove('active');
            }
        });
    });

    observer.observe(backgroundSection);
});