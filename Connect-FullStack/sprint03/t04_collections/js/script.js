
console.log('---guestList(WeakSet):');
const guestList = new WeakSet();

let guest1 = {name: 'David Clark'};
let guest2 = {name: 'Gary Morgan'};
let guest3 = {name: 'Lori Ford'};
let guest4 = {name: 'Keith Brown'};
let guest5 = {name: 'Charlene Holt'};

guestList.add(guest1);
guestList.add(guest2);
guestList.add(guest3);
guestList.add(guest4);
guestList.add(guest5);

console.log(guestList);
console.log(`guestList has guest4: ${guestList.has(guest4)}`);
guestList.delete(guest4);
console.log(`Delete. guestList has guest4: ${guestList.has(guest4)}`);


console.log('---menu(Map):');
const menu = new Map();

menu.set('Borsch', 100);
menu.set('Soup', 90);
menu.set('Salad', 75);
menu.set('Buckwheat', 80);
menu.set('Pasta', 80);

console.log(menu);
console.log(`menu size = ${menu.size}`);
console.log(`menu has salad: ${menu.has('Salad')}`);
menu.delete('Salad');
console.log(`Delete. menu has salad: ${menu.has('Salad')}`);
menu.forEach((price, dish) => {
  console.log(`${dish} costs ${price}`);
})
console.log('Clear:');
menu.clear();
console.log(menu);


console.log('---bankVault(WeakMap):');
const bankVault = new WeakMap();

let credentials1 = {key: '9999'};
let credentials2 = {key: '7856'};
let credentials3 = {key: '5467'};
let credentials4 = {key: '4234'};
let credentials5 = {key: '2333'};

bankVault.set(credentials1, 'David Clark');
bankVault.set(credentials2, 'Gary Morgan');
bankVault.set(credentials3, 'Lori Ford');
bankVault.set(credentials4, 'Keith Brown');
bankVault.set(credentials5, 'Charlene Holt');

console.log(bankVault);
console.log(`bankVault has credentials5: ${bankVault.has(credentials5)}`);
console.log(`bankVault get credentials5: ${bankVault.get(credentials5)}`);
bankVault.delete(credentials5);
console.log(`Delete. bankVault has credentials5: ${bankVault.has(credentials5)}`);


console.log('---coinCollection(Set):');
const coinCollection = new Set();

coinCollection.add('coin1');
coinCollection.add('coin2');
coinCollection.add('coin3');
coinCollection.add('coin4');
coinCollection.add('coin5');

console.log(coinCollection);
console.log(`coinCollection size = ${coinCollection.size}`);
console.log(`coinCollection has coin1: ${coinCollection.has('coin1')}`);
coinCollection.delete('coin1');
console.log(`Delete. coinCollection has coin1: ${coinCollection.has('coin1')}`);
coinCollection.forEach((coin) => {
  console.log(coin);
})
console.log('Clear:');
coinCollection.clear();
console.log(coinCollection);
