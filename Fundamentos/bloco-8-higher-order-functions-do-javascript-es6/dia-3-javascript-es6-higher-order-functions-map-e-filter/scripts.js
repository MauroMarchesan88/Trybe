const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const tabela = (product, prices) => products.map((product, index) => ( {
    [product]:prices[index]}));

console.log(tabela(products, prices));