'strict use';


let workingHours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm'];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}



let seattle= {

  name: 'Seattle',

  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerSale: 6.3,
  randomCustomer: [],
  avgCookiesHour: [],

  randomCustomerPerHour: function(){

    for (let i=0; i < workingHours.length; i++){
      this.randomCustomer.push (randomNumber(this.minCustomersPerHour,this.maxCustomersPerHour));

    }

  },

  avgCookiesPerCustomer: function(){

    for (let i=0; i<workingHours.length; i++){

      let floorAvgCookies = Math.floor;
      this.avgCookiesHour.push (floorAvgCookies(this.avgCookiesPerSale * this.randomCustomer[i]));

    }

  },

};


seattle.randomCustomerPerHour();
// console.log(seattle.randomCustomer);

seattle.avgCookiesPerCustomer();
// console.log(seattle.avgCookiesHour);

let sumArrSeattle= seattle.avgCookiesHour[0] + seattle.avgCookiesHour[1]+ seattle.avgCookiesHour[2]+ seattle.avgCookiesHour[3]+ seattle.avgCookiesHour[4]+ seattle.avgCookiesHour[5]+ seattle.avgCookiesHour[6]+ seattle.avgCookiesHour[7]+ seattle.avgCookiesHour[8]+ seattle.avgCookiesHour[9]+ seattle.avgCookiesHour[10]+ seattle.avgCookiesHour[11]+ seattle.avgCookiesHour[12]+ seattle.avgCookiesHour[13];
// console.log(sumArrSeattle);




let tokyo= {

  name: 'Tokyo',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerSale: 1.2,
  randomCustomer: [],
  avgCookiesHour: [],

  randomCustomerPerHour: function(){ for (let i=0; i < workingHours.length; i++){

    this.randomCustomer.push (randomNumber(this.minCustomersPerHour,this.maxCustomersPerHour));
  }
  },

  avgCookiesPerCustomer: function(){

    for (let i=0; i < workingHours.length; i++){

      let floorAvgCookies = Math.floor;
      this.avgCookiesHour.push(floorAvgCookies(this.randomCustomer[i]* this.avgCookiesPerSale));
    }
  },
};

tokyo.randomCustomerPerHour();
// console.log(tokyo.randomCustomer);

tokyo.avgCookiesPerCustomer();
// console.log(tokyo.avgCookiesHour);

let sumArrTokyo= tokyo.avgCookiesHour[0] + tokyo.avgCookiesHour[1]+ tokyo.avgCookiesHour[2]+ tokyo.avgCookiesHour[3]+ tokyo.avgCookiesHour[4]+ tokyo.avgCookiesHour[5]+ tokyo.avgCookiesHour[6]+ tokyo.avgCookiesHour[7]+ tokyo.avgCookiesHour[8]+ tokyo.avgCookiesHour[9]+ tokyo.avgCookiesHour[10]+ tokyo.avgCookiesHour[11]+ tokyo.avgCookiesHour[12]+ tokyo.avgCookiesHour[13];
// console.log(sumArrTokyo);



let dubai= {

  name: 'Dubai',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerSale: 3.7,
  randomCustomer: [],
  avgCookiesHour: [],


  randomCustomerPerHour: function(){ for (let i=0; i < workingHours.length; i++){

    this.randomCustomer.push (randomNumber(this.minCustomersPerHour,this.maxCustomersPerHour));
  }
  },

  avgCookiesPerCustomer: function(){

    for (let i=0; i < workingHours.length; i++){

      let floorAvgCookies = Math.floor;
      this.avgCookiesHour.push(floorAvgCookies(this.randomCustomer[i]* this.avgCookiesPerSale));
    }
  }
};

dubai.randomCustomerPerHour();
// console.log(dubai.randomCustomer);

dubai.avgCookiesPerCustomer();
// console.log(dubai.avgCookiesHour);

let sumArrDubai= dubai.avgCookiesHour[0] + dubai.avgCookiesHour[1]+ dubai.avgCookiesHour[2]+ dubai.avgCookiesHour[3]+ dubai.avgCookiesHour[4]+ dubai.avgCookiesHour[5]+ dubai.avgCookiesHour[6]+ dubai.avgCookiesHour[7]+ dubai.avgCookiesHour[8]+ dubai.avgCookiesHour[9]+ dubai.avgCookiesHour[10]+ dubai.avgCookiesHour[11]+ dubai.avgCookiesHour[12]+ dubai.avgCookiesHour[13];
// console.log(sumArrDubai);




let paris= {

  name: 'Paris',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerSale: 2.3,
  randomCustomer: [],
  avgCookiesHour: [],


  randomCustomerPerHour: function(){ for (let i=0; i < workingHours.length; i++){

    this.randomCustomer.push (randomNumber(this.minCustomersPerHour,this.maxCustomersPerHour));
  }
  },

  avgCookiesPerCustomer: function(){

    for (let i=0; i < workingHours.length; i++){

      let floorAvgCookies = Math.floor;
      this.avgCookiesHour.push(floorAvgCookies(this.randomCustomer[i]* this.avgCookiesPerSale));
    }
  }
};

paris.randomCustomerPerHour();
// console.log(paris.randomCustomer);

paris.avgCookiesPerCustomer();
// console.log(paris.avgCookiesHour);

let sumArrParis= paris.avgCookiesHour[0] + paris.avgCookiesHour[1]+ paris.avgCookiesHour[2]+ paris.avgCookiesHour[3]+ paris.avgCookiesHour[4]+ paris.avgCookiesHour[5]+ paris.avgCookiesHour[6]+ paris.avgCookiesHour[7]+ paris.avgCookiesHour[8]+ paris.avgCookiesHour[9]+ paris.avgCookiesHour[10]+ paris.avgCookiesHour[11]+ paris.avgCookiesHour[12]+ paris.avgCookiesHour[13];
// console.log(sumArrParis);



let lima= {

  name: 'Lima',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerSale: 4.6,
  randomCustomer: [],
  avgCookiesHour: [],

  randomCustomerPerHour: function(){ for (let i=0; i < workingHours.length; i++){

    this.randomCustomer.push (randomNumber(this.minCustomersPerHour,this.maxCustomersPerHour));
  }
  },

  avgCookiesPerCustomer: function(){

    for (let i=0; i < workingHours.length; i++){

      let floorAvgCookies = Math.floor;
      this.avgCookiesHour.push(floorAvgCookies(this.randomCustomer[i]* this.avgCookiesPerSale));
    }
  }
};

lima.randomCustomerPerHour();
// console.log(lima.randomCustomer);

lima.avgCookiesPerCustomer();
// console.log(lima.avgCookiesHour);

let sumArrLima= lima.avgCookiesHour[0] + lima.avgCookiesHour[1]+ lima.avgCookiesHour[2]+ lima.avgCookiesHour[3]+ lima.avgCookiesHour[4]+ lima.avgCookiesHour[5]+ lima.avgCookiesHour[6]+ lima.avgCookiesHour[7]+ lima.avgCookiesHour[8]+ lima.avgCookiesHour[9]+ lima.avgCookiesHour[10]+ lima.avgCookiesHour[11]+ lima.avgCookiesHour[12]+ lima.avgCookiesHour[13];
// console.log(sumArrLima);





