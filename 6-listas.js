console.log('Trabalhando com listas')
// const PR = 'Paraná'
// const SP = 'São Paulo';
// const RJ = 'Rio de Janeiro';


const listaDestinos = new Array(
    'Paraná',
    'São Paulo',
    'Rio de Janeiro'


);

listaDestinos.push('Pará') //adicionar um item na lista
console.log("Destinos possíveis:");
// console.log(PR, SP, RJ )
console.log(listaDestinos);

listaDestinos.splice(2,1);
console.log(listaDestinos);

console.log(listaDestinos[1], listaDestinos[0]);