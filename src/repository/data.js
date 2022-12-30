let persons = [
    { id: 1, name: 'Fernando Rocha', age: 25 },
    { id: 2, name: 'Alice Ribeiro', age: 22 },
    { id: 3, name: 'Janine Teodoro', age: 20 }
];

let posts = [
    { id: 1, title: 'Não teve sala de guerra!!', author: persons[0] },
    { id: 2, title: 'Alguém precisando de apoio?', author: persons[1] },
    { id: 3, title: 'Ai meu Deus! Não me lembro...', author: persons[2] }
];

module.exports = { persons, posts };
