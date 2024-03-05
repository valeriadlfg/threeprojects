let data = [
    {
        name: 'Val',
        age: '24'
    },
    {
        name: 'Nassia',
        age: '27'
    },{
        name: 'Marisa',
        age: '50'
    },{
        name: 'Tuna',
        age: '8'
    },{
        name: 'Chuckie',
        age: '4'
    },{
        name: 'Tommy',
        age: '7'
    },
];

const infoContainer = document.querySelector('#info');

function createRectangles() {
    data.forEach(function(item) {
        const rectangle = document.createElement('div');
        rectangle.classList.add('rectangle');
        rectangle.innerHTML = '<div class="info">' + item.name + ' ' + 'is ' + item.age + ' years old 🐒' + '</div>';
        rectangle.addEventListener('click', function() {
            toggleInfo(rectangle, item);
        });
        infoContainer.appendChild(rectangle);
    });
}

function toggleInfo(rectangle, item) {
    const infoElement = rectangle.querySelector('.info');
    if (infoElement.classList.contains('additional-info')) {
        infoElement.textContent = item.name + ' ' + 'is ' + item.age + ' years old 🐒';
        infoElement.classList.remove('additional-info');
    } else {
        infoElement.textContent = item.name  + ' is fun '+ 'to be around 🎉';
        infoElement.classList.add('additional-info');
    }
}


createRectangles();