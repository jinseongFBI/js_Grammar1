// const ulEl=document.querySelector('ul')

// for (let i=0;i<10;i+=1){
//   const li=document.createElement('li')
//   li.textContent=`list-${i+1}`
//  if((i+1)%2===0){
//   li.addEventListener('click',function(){
//     console.log(li.textContent)
//   })
//  }
//   ulEl.appendChild(li)
// }
// function scope(){
//     // console.log(a)
//   if(true){
//     // console.log(a)
//     // const a=123
//     var a=123
//     // console.log(a)
//   }
//   // console.log(a)
// }
// scope()

//형변환
// const a=1
// const b='1'
// console.log(a===b)

// truhy(참 같은 값)
// falsy(거짓 같은 값)
// if('false'){
//   console.log(123)
// }
// function sum(x,y){
//  console.log(x+y)
// return x+y
// console.log(x)
// if(x<2){
//   return 123
// }
// return x+y
// }
// const a=sum(1,3)
// const b=sum(4,12)

// console.log(a)
// console.log(b)
// console.log(a+b)

// console.log(sum(7,3))
// function sum(x,y){
//   console.log(arguments)
//   return arguments[0]+arguments[1]
// }
// console.log(sum(7,3))