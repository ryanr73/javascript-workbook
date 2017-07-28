'use strict'

const partnerObj = {
  firstName: 'Ryan',
  lastName: 'Roberts',
  age: '43',
  hairColor: 'brown',
  eyeColor: ()=> 'blue'
};
console.log(partnerObj.age,partnerObj.lastName);
console.log(partnerObj.eyeColor());

partnerObj['age'] = 'cars';

const partnerArr = Object.keys(partnerObj)

for (let i in partnerArr) {
  console.log(partnerArr[i] + ' ' + partnerObj[partnerArr[i]]);
};
