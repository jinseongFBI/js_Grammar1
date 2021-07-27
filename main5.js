function User(first,last){
  this.firstName=first
  this.lastName=last
}
User.prototype.getFullName=function(){
  return  `${this.firstName} ${this.lastName}`
}

const heropy = new User('Heropy','park')
const amy = new User('Amy','Clarke')
const neo = new User('Neo','Smith')

console.log(heropy.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())