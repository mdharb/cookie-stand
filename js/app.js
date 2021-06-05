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


  let tr1Element= document.createElement('tr');
  table.appendChild(tr1Element);

  let thLocation= document.createElement('th');
  tr1Element.appendChild(thLocation);
  thLocation.textContent= 'Shop Location';


  for(let i=0; i<workingHours.length; i++ ){

    let thElement= document.createElement('th');
    tr1Element.appendChild(thElement);
    thElement.textContent= workingHours[i];
  }
  let thDailyTotal= document.createElement('th');
  tr1Element.appendChild(thDailyTotal);
  thDailyTotal.textContent= 'Daily Location Total';
}
headerElement();




Shops.prototype.render= function(){


  let tr2Data= document.createElement('tr');
  table.appendChild(tr2Data);

  let locationTd= document.createElement('td');
  tr2Data.appendChild(locationTd);
  locationTd.textContent= this.locationName;


  for (let i=0; i<workingHours.length; i++){

    let tdElement= document.createElement('td');
    tr2Data.append(tdElement);
    tdElement.textContent= this.avgCookiesHour[i];

  }

  let tdElement1= document.createElement('td');
  tr2Data.append(tdElement1);
  tdElement1.textContent= this.total;

};



function footerElement(){

  let tr3DataFoot= document.createElement('tr');
  table.appendChild(tr3DataFoot);

  let thTotalCell= document.createElement('th');
  tr3DataFoot.appendChild(thTotalCell);
  thTotalCell.textContent= 'Totals';

  let megaTotal=0;

  for(let i=0; i<workingHours.length; i++ ){

    let TotalForEachHour=0;

    for(let j=0; j<shops.length; j++){

      TotalForEachHour+= shops[j].avgCookiesHour[i];
      megaTotal+= shops[j].avgCookiesHour[i];
    }
    let thTotalCellsFooter= document.createElement('th');

    tr3DataFoot.appendChild(thTotalCellsFooter);
    thTotalCellsFooter.textContent= TotalForEachHour;

  }

  let finalTh= document.createElement('th');
  tr3DataFoot.appendChild(finalTh);
  finalTh.textContent= megaTotal;

}

for (let i = 0; i < shops.length; i++) {


  shops[i].randomCustomerPerHour();
  shops[i].avgCookiesPerCustomer();
  shops[i].render();

}

footerElement();

// =================================== FORM ==============================================

let shopForm= document.getElementById('shopForm');

shopForm.addEventListener('submit',updatting);

function updatting(event) {

  document.getElementById(shopForm);

  event.preventDefault();


  let locationName= event.target.locationNameField.value;

  let minCustPerHour= parseInt(event.target.minCustPerHourField.value);

  let maxCustPerHour= parseInt(event.target.maxCustPerHourField.value);

  let avgNumCookiesPerSale= parseFloat(event.target.avgNumCookiesPerSaleField.value);

  let addedShop= new Shops(locationName,minCustPerHour,maxCustPerHour,avgNumCookiesPerSale);

  if(locationName===''){

    alert('Please insert location');
  }

  if(minCustPerHour < maxCustPerHour){

    table.textContent='';

    headerElement();


    for (let i = 0; i < shops.length; i++) {


      shops[i].randomCustomerPerHour();
      shops[i].avgCookiesPerCustomer();
      shops[i].render();

    }

    footerElement();


  } else {

    alert('Your Min. Customers Per Hour must be less than your Max. Customers Per Hour');
  }

}
