// const timer={
//   name:'heropy',
//   normal:function(){
//    console.log(this.name)
//   },
//   arrow:  ()=>{
//     console.log(this.name)
//   }
// }
// heropy.normal()
// heropy.arrow()


// function User(first,last){
//   this.firstName=first
//   this.lastName=last
// }
// User.prototype.getFullName=function(){
//   return  `${this.firstName} ${this.lastName}`
// }
class User{
  constructor(first,last){
    this.firstName=first
    this.lastName=last
  }
  getFullName(){
    return  `${this.firstName} ${this.lastName}`
  }
}

const heropy = new User('Heropy','park')
const amy = new User('Amy','Clarke')
const neo = new User('Neo','Smith')

console.log(heropy)
console.log(amy.getFullName())
console.log(neo.getFullName())