// 'strict use';


// let workingHours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm'];

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }



// let seattle= {

//   name: 'Seattle',

//   minCustomersPerHour: 23,
//   maxCustomersPerHour: 65,
//   avgCookiesPerSale: 6.3,
//   randomCustomer: [],
//   avgCookiesHour: [],

//   randomCustomerPerHour: function(){

//     for (let i=0; i < workingHours.length; i++){
//       this.randomCustomer.push (randomNumber(this.minCustomersPerHour,this.maxCustomersPerHour));

//     }

//   },

//   avgCookiesPerCustomer: function(){

//     for (let i=0; i<workingHours.length; i++){

//       let floorAvgCookies = Math.floor;
//       this.avgCookiesHour.push(floorAvgCookies(this.avgCookiesPerSale * this.randomCustomer[i]));

//     }

//   },

// };


// seattle.randomCustomerPerHour();
// // console.log(seattle.randomCustomer);

// seattle.avgCookiesPerCustomer();
// // console.log(seattle.avgCookiesHour);


// let sumArrSeattle=0;

// for(let i=0; i<workingHours.length; i++){

//   sumArrSeattle= sumArrSeattle + seattle.avgCookiesHour[i];
// }
// // console.log(sumArrSeattle);


// let parentSeattle = document.getElementById('seattle');

// let h3Seattle= document.createElement('h3');

// parentSeattle.appendChild(h3Seattle);

// h3Seattle.textContent= 'Seattle';

// let ulSeattle= document.createElement('ul');

// parentSeattle.appendChild(ulSeattle);

// for(let i=0; i<workingHours.length; i++){

//   let liSeattle= document.createElement('li');

//   ulSeattle.appendChild(liSeattle);

//   liSeattle.textContent= `${workingHours[i]}: ${seattle.avgCookiesHour[i]} cookies`;

// }
// // console.log(parentSeattle);




// let tokyo= {

//   name: 'Tokyo',
//   minCustomersPerHour: 3,
//   maxCustomersPerHour: 24,
//   avgCookiesPerSale: 1.2,
//   randomCustomer: [],
//   avgCookiesHour: [],

//   randomCustomerPerHour: function(){ for (let i=0; i < workingHours.length; i++){

//     this.randomCustomer.push (randomNumber(this.minCustomersPerHour,this.maxCustomersPerHour));
//   }
//   },

//   avgCookiesPerCustomer: function(){

//     for (let i=0; i < workingHours.length; i++){

//       let floorAvgCookies = Math.floor;
//       this.avgCookiesHour.push(floorAvgCookies(this.randomCustomer[i]* this.avgCookiesPerSale));
//     }
//   },
// };

// tokyo.randomCustomerPerHour();
// // console.log(tokyo.randomCustomer);

// tokyo.avgCookiesPerCustomer();
// // console.log(tokyo.avgCookiesHour);

// let sumArrTokyo=0;

// for(let i=0; i<workingHours.length; i++){

//   sumArrTokyo= sumArrTokyo + tokyo.avgCookiesHour[i];
// }
// // console.log(sumArrTokyo);


// let parentTokyo = document.getElementById('tokyo');

// let h3Tokyo= document.createElement('h3');

// parentTokyo.appendChild(h3Tokyo);

// h3Tokyo.textContent= 'Tokyo';

// let ulTokyo= document.createElement('ul');

// parentTokyo.appendChild(ulTokyo);

// for(let i=0; i<workingHours.length; i++){

//   let liTokyo= document.createElement('li');

//   ulTokyo.appendChild(liTokyo);

//   liTokyo.textContent= `${workingHours[i]}: ${tokyo.avgCookiesHour[i]} cookies`;

// }
// // console.log(parentTokyo);



// let dubai= {

//   name: 'Dubai',
//   minCustomersPerHour: 11,
//   maxCustomersPerHour: 38,
//   avgCookiesPerSale: 3.7,
//   randomCustomer: [],
//   avgCookiesHour: [],


//   randomCustomerPerHour: function(){ for (let i=0; i < workingHours.length; i++){

//     this.randomCustomer.push (randomNumber(this.minCustomersPerHour,this.maxCustomersPerHour));
//   }
//   },

//   avgCookiesPerCustomer: function(){

//     for (let i=0; i < workingHours.length; i++){

//       let floorAvgCookies = Math.floor;
//       this.avgCookiesHour.push(floorAvgCookies(this.randomCustomer[i]* this.avgCookiesPerSale));
//     }
//   }
// };

// dubai.randomCustomerPerHour();
// // console.log(dubai.randomCustomer);

// dubai.avgCookiesPerCustomer();
// // console.log(dubai.avgCookiesHour);

// let sumArrDubai=0;

// for(let i=0; i<workingHours.length; i++){

//   sumArrDubai= sumArrDubai + dubai.avgCookiesHour[i];
// }
// // console.log(sumArrDubai);


// let parentDubai = document.getElementById('dubai');

// let h3Dubai= document.createElement('h3');

// parentDubai.appendChild(h3Dubai);

// h3Dubai.textContent= 'Dubai';

// let ulDubai= document.createElement('ul');

// parentDubai.appendChild(ulDubai);

// for(let i=0; i<workingHours.length; i++){

//   let liDubai= document.createElement('li');

//   ulDubai.appendChild(liDubai);

//   liDubai.textContent= `${workingHours[i]}: ${dubai.avgCookiesHour[i]} cookies`;

// }
// // console.log(parentDubai);




// let paris= {

//   name: 'Paris',
//   minCustomersPerHour: 20,
//   maxCustomersPerHour: 38,
//   avgCookiesPerSale: 2.3,
//   randomCustomer: [],
//   avgCookiesHour: [],


//   randomCustomerPerHour: function(){ for (let i=0; i < workingHours.length; i++){

//     this.randomCustomer.push (randomNumber(this.minCustomersPerHour,this.maxCustomersPerHour));
//   }
//   },

//   avgCookiesPerCustomer: function(){

//     for (let i=0; i < workingHours.length; i++){

//       let floorAvgCookies = Math.floor;
//       this.avgCookiesHour.push(floorAvgCookies(this.randomCustomer[i]* this.avgCookiesPerSale));
//     }
//   }
// };

// paris.randomCustomerPerHour();
// // console.log(paris.randomCustomer);

// paris.avgCookiesPerCustomer();
// // console.log(paris.avgCookiesHour);

// let sumArrParis=0;

// for(let i=0; i<workingHours.length; i++){

//   sumArrParis= sumArrParis + paris.avgCookiesHour[i];
// }
// // console.log(sumArrParis);


// let parentParis = document.getElementById('paris');

// let h3Paris= document.createElement('h3');

// parentParis.appendChild(h3Paris);

// h3Paris.textContent= 'Paris';

// let ulParis= document.createElement('ul');

// parentParis.appendChild(ulParis);

// for(let i=0; i<workingHours.length; i++){

//   let liParis= document.createElement('li');

//   ulParis.appendChild(liParis);

//   liParis.textContent= `${workingHours[i]}: ${paris.avgCookiesHour[i]} cookies`;

// }
// // console.log(parentParis);




// let lima= {

//   name: 'Lima',
//   minCustomersPerHour: 2,
//   maxCustomersPerHour: 16,
//   avgCookiesPerSale: 4.6,
//   randomCustomer: [],
//   avgCookiesHour: [],

//   randomCustomerPerHour: function(){ for (let i=0; i < workingHours.length; i++){

//     this.randomCustomer.push (randomNumber(this.minCustomersPerHour,this.maxCustomersPerHour));
//   }
//   },

//   avgCookiesPerCustomer: function(){

//     for (let i=0; i < workingHours.length; i++){

//       let floorAvgCookies = Math.floor;
//       this.avgCookiesHour.push(floorAvgCookies(this.randomCustomer[i]* this.avgCookiesPerSale));
//     }
//   }
// };

// lima.randomCustomerPerHour();
// // console.log(lima.randomCustomer);

// lima.avgCookiesPerCustomer();
// // console.log(lima.avgCookiesHour);

// let sumArrLima=0;

// for(let i=0; i<workingHours.length; i++){

//   sumArrLima= sumArrLima + lima.avgCookiesHour[i];
// }
// // console.log(sumArrLima);


// let parentLima = document.getElementById('lima');

// let h3Lima= document.createElement('h3');

// parentLima.appendChild(h3Lima);

// h3Lima.textContent= 'Lima';

// let ulLima= document.createElement('ul');

// parentLima.appendChild(ulLima);

// for(let i=0; i<workingHours.length; i++){

//   let liLima= document.createElement('li');

//   ulLima.appendChild(liLima);

//   liLima.textContent= `${workingHours[i]}: ${lima.avgCookiesHour[i]} cookies`;

// }
// // console.log(parentLima);



//====================================== Constructors objects ============================================================


function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let workingHours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm'];


let shops= [];


function Shops (locationName,minCustomersPerHour,maxCustomersPerHour,avgCookiesPerSale){

  this.locationName= locationName;
  this.minCustomersPerHour= minCustomersPerHour;
  this.maxCustomersPerHour= maxCustomersPerHour;
  this.avgCookiesPerSale= avgCookiesPerSale;
  this.total= 0;

  this.randomCustomer= [];
  this.avgCookiesHour= [];

  shops.push(this);

}

let seattle= new Shops('Seattle',23,65,6.3);
let tokyo= new Shops('Tokyo',3,24,1.2);
let dubai= new Shops('Dubai',11,38,3.7);
let paris= new Shops('Paris',20,38,2.3);
let lima= new Shops('Lima',2,16,4.6);



Shops.prototype.randomCustomerPerHour= function(){

  for (let i=0; i < workingHours.length; i++){

    this.randomCustomer.push(randomNum(this.minCustomersPerHour,this.maxCustomersPerHour));
  }
};



Shops.prototype.avgCookiesPerCustomer= function(){

  for (let i=0; i < workingHours.length; i++){

    this.avgCookiesHour.push(Math.floor(this.randomCustomer[i]* this.avgCookiesPerSale));

    this.total += this.avgCookiesHour[i];

  }
};


// ================ TABLE ===========================


let parentElement= document.getElementById('salesTable');

let table= document.createElement('table');
parentElement.appendChild(table);





function headerElement(){

  let tableHeader= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm','Daily Location Total'];

  let tHead= document.createElement('thead');
  table.appendChild(tHead);

  let tr1Element= document.createElement('tr');
  tHead.appendChild(tr1Element);

  for(let i=0; i<tableHeader.length; i++ ){

    let thElement= document.createElement('th');
    tr1Element.appendChild(thElement);

    thElement.textContent= tableHeader[i];
  }

}
headerElement();




Shops.prototype.render= function(){

  let tBody= document.createElement('tbody');
  table.appendChild(tBody);

  let tr2Element= document.createElement('tr');
  tBody.appendChild(tr2Element);


  for (let i=0; i<workingHours.length; i++){

    let tdElement= document.createElement('td');
    tr2Element.append(tdElement);
    tdElement.textContent= this.avgCookiesHour[i];

  }

  let tdElement1= document.createElement('td');
  tr2Element.append(tdElement1);
  tdElement1.textContent= this.total;

};



function footerElement(){

  let tFoot= document.createElement('tfoot');
  table.appendChild(tFoot);

  let tr3Element= document.createElement('tr');
  tFoot.appendChild(tr3Element);

  for(let i=0; i<workingHours.length; i++ ){

    let tdElement1= document.createElement('td');
    tr3Element.appendChild(tdElement1);

  }
}
footerElement();




for (let i = 0; i < shops.length; i++) {


  shops[i].randomCustomerPerHour();
  shops[i].avgCookiesPerCustomer();
  shops[i].render();

}
