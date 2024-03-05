const circle = document.querySelector('#circle');


circle.addEventListener('mouseenter', () => {
    if (!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseleave', () => {
    if (circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});

const cornerCircles = document.querySelectorAll('.corner-circle');
cornerCircles.forEach(cornerCircle => {
    cornerCircle.addEventListener('mouseenter', () => {
        if (!cornerCircle.classList.contains('hover')) {
            cornerCircle.classList.add('hover');
        }
    });

    cornerCircle.addEventListener('mouseleave', () => {
        if (cornerCircle.classList.contains('hover')) {
            cornerCircle.classList.remove('hover');
        }
    });
});
