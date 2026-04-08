export const categories = [
  { id: '1', name: 'Lanches' },
  { id: '2', name: 'Bebidas' },
  { id: '3', name: 'Sobremesas' },
  { id: '4', name: 'Pizzas' },
  { id: '5', name: 'Massas' },
  { id: '6', name: 'Pratos Feitos' },
];

export const products = [
  {
    id: '1',
    category: 'Lanches',
    name: 'X-Burguer',
    description: 'Pão, carne, queijo e molho especial.',
    price: 18.9,
  },
  {
    id: '2',
    category: 'Lanches',
    name: 'X-Salada',
    description: 'Pão, carne, queijo, alface e tomate.',
    price: 19.9,
  },
  {
    id: '3',
    category: 'Lanches',
    name: 'Batata Frita',
    description: 'Porção média de batata frita crocante.',
    price: 12.5,
  },
  {
    id: '4',
    category: 'Bebidas',
    name: 'Refrigerante',
    description: 'Lata 350ml gelada.',
    price: 6.5,
  },
  {
    id: '5',
    category: 'Bebidas',
    name: 'Suco Natural',
    description: 'Copo de 300ml sabor laranja.',
    price: 8.0,
  },
  {
    id: '6',
    category: 'Sobremesas',
    name: 'Pudim',
    description: 'Fatia individual de pudim de leite.',
    price: 9.5,
  },
  {
    id: '7',
    category: 'Sobremesas',
    name: 'Brownie',
    description: 'Brownie de chocolate com cobertura.',
    price: 10.0,
  },
  {
    id: '8',
    category: 'Pizzas',
    name: 'Pizza Calabresa',
    description: 'Fatia de pizza de calabresa com cebola.',
    price: 12.0,
  },
  {
    id: '9',
    category: 'Massas',
    name: 'Lasanha Bolonhesa',
    description: 'Porção individual de lasanha.',
    price: 24.9,
  },
  {
    id: '10',
    category: 'Pratos Feitos',
    name: 'PF de Frango',
    description: 'Arroz, feijão, frango grelhado e salada.',
    price: 22.0,
  },
];

export const loggedUser = {
  name: 'João da Silva',
  email: 'joao@email.com',
};

export const orders = [
  {
    id: '101',
    item: 'X-Burguer',
    quantity: 2,
    status: 'Em preparo',
    total: 37.8,
  },
  {
    id: '102',
    item: 'Refrigerante',
    quantity: 1,
    status: 'Saiu para entrega',
    total: 6.5,
  },
  {
    id: '103',
    item: 'Pudim',
    quantity: 1,
    status: 'Entregue',
    total: 9.5,
  },
];

export const restaurants = [
  {
    id: '1',
    name: 'Rio Burguer',
    category: 'Lanches',
    address: 'Av. Rio Branco, 120 - Centro, Rio de Janeiro',
    menuItem: 'X-Burguer com fritas',
    mapPosition: { top: 35, left: 30 },
  },
  {
    id: '2',
    name: 'Sabor Carioca',
    category: 'Prato Executivo',
    address: 'Rua da Assembleia, 55 - Centro, Rio de Janeiro',
    menuItem: 'Prato executivo de frango grelhado',
    mapPosition: { top: 55, left: 85 },
  },
  {
    id: '3',
    name: 'Ponto da Pizza',
    category: 'Pizzaria',
    address: 'Rua Sete de Setembro, 88 - Centro, Rio de Janeiro',
    menuItem: 'Fatia de pizza calabresa',
    mapPosition: { top: 42, left: 145 },
  },
  {
    id: '4',
    name: 'Doce Centro',
    category: 'Sobremesas',
    address: 'Rua do Ouvidor, 40 - Centro, Rio de Janeiro',
    menuItem: 'Pudim de leite',
    mapPosition: { top: 95, left: 60 },
  },
  {
    id: '5',
    name: 'Carioca Grill',
    category: 'Grelhados',
    address: 'Av. Presidente Vargas, 300 - Centro, Rio de Janeiro',
    menuItem: 'Contrafilé com arroz e batata',
    mapPosition: { top: 102, left: 115 },
  },
  {
    id: '6',
    name: 'Massas do Porto',
    category: 'Massas',
    address: 'Praça Mauá, 15 - Centro, Rio de Janeiro',
    menuItem: 'Lasanha bolonhesa',
    mapPosition: { top: 120, left: 165 },
  },
  {
    id: '7',
    name: 'Café Lapa Centro',
    category: 'Cafeteria',
    address: 'Rua da Carioca, 95 - Centro, Rio de Janeiro',
    menuItem: 'Café expresso com pão de queijo',
    mapPosition: { top: 148, left: 38 },
  },
  {
    id: '8',
    name: 'Tempero do Dia',
    category: 'Comida Caseira',
    address: 'Rua Uruguaiana, 130 - Centro, Rio de Janeiro',
    menuItem: 'Feijão, arroz e carne assada',
    mapPosition: { top: 155, left: 92 },
  },
  {
    id: '9',
    name: 'Bebidas RJ',
    category: 'Bebidas',
    address: 'Rua Buenos Aires, 77 - Centro, Rio de Janeiro',
    menuItem: 'Suco natural de laranja',
    mapPosition: { top: 160, left: 145 },
  },
  {
    id: '10',
    name: 'Delícias da Praça',
    category: 'Lanches',
    address: 'Praça Tiradentes, 10 - Centro, Rio de Janeiro',
    menuItem: 'Sanduíche natural',
    mapPosition: { top: 68, left: 180 },
  },
];

export const checkoutMockData = {
  cep: '01001000',
  address: '',
  paymentMethod: 'Cartão de crédito',
};