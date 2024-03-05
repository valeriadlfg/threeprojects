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

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old 🐒' + '</div>';
});

info.innerHTML = details.join('\n');