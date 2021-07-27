//this
//일반함수
//화살표:함수는 자신이 선언된 함수 범위에서 this 정의
// const heropy={
//   name:'heropy',
//   normal:function(){
//     console.log(this.name)
//   },
//   arrow:()=>{
//     console.log(this.name)
//   }
// }
// heropy.normal()
// heropy.arrow()

// const amy={
//   name:'Amy',
//   normal:heropy.normal,
//   arrow:heropy.arrow
// }
// amy.normal()
// amy.arrow()

// this
// 일반함수는 호출위치에 따라 this 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의
// function user(name){
//   this.name=name
// }
// user.prototype.normal=function(){
//   console.log(this.name)
// }
// user.prototype.arrow=()=>{
//   console.log(this.name)
// }
// const heropy=new user('heropy')
// heropy.normal()
// heropy.arrow()
const timer={
  name:'heropy!',
  timeout:function(){
    setTimeout(()=>{
      console.log(this.name)
    },2000)
  }
}
timer.timeout()