'strict use';

let workingHours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle= {

  name: 'seattle',

  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerSale: 6.3,
  randomCustomer: [],
  avgCookies: [],


  randomCustomerPerHour: function(){

    for (let i=0; i < workingHours.length; i++){
      this.randomCustomer.push (randomNumber(this.minCustomersPerHour,this.maxCustomersPerHour));

    }
  },

  avgCookiesPerCustomer: function(){

    for (let i=0; i<workingHours.length; i++){
      this.avgCookies.push (this.avgCookiesPerSale * this.randomCustomer[i]);
    }

  },

};
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}



seattle.randomCustomerPerHour();
// console.log(seattle.randomCustomer);

seattle.avgCookiesPerCustomer();
// console.log(seattle.avgCookies);
