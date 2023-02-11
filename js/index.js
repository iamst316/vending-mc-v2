let menu = [
    {
        item:'Caramel Toffee',
        price:2,
        quantity:200
    },
    {
        item:'Chocolate',
        price:50,
        quantity:120
    },
    {
        item:'Wafer',
        price:25,
        quantity:80
    },
    {
        item:'Silk Chocolate',
        price:150,
        quantity:150
    },
    {
        item:'Donut',
        price:50,
        quantity:200
    },
    {
        item:'Soda',
        price:40,
        quantity:300
    },
    
];//array of objects with item, quantity and price per item

let menuList = document.getElementById('list');

function Add(){
    console.log();
}

let menuTable = document.getElementById('table');


for(let i of menu){
    // menuList.innerHTML = `<li>${i.item}</li>`;
    let numItem = document.createElement('li');
    numItem.innerText = `${i.item}`;
    menuList.appendChild(numItem);
    numItem.setAttribute('onclick','Add()')



    
}

