// //화살표함수
// const double=function(x){return x*2}

// console.log('double',double(7))

// const doubleArrow = x => 
// //  x*2 
// // {return x*2}
// ({  name:'heropy' })
// console.log('doubleArrow',doubleArrow(7))



// 즉시실행함수
// const a=7
// function double(){
//   console.log (a*2)
// }
// double();

// (function(){
//   console.log(a*2)
// })  ();
// (function(){
//   console.log(a*2)
// } () );//권장


// //호이스팅
// const a=7
// double()
// // const double = function(){
// //   console.log(a*2)
// // }
// function double(){
//   console.log(a*2)
// }

//타이머 함수
// setTimeout(함수,시간):일정 시간 후 함수 실행
// setInterval(함수,시간):시간 간격마다 함수 실행
// clearTimeout():설정된 Timeout 함수를 종료
// clearInterval():설정된 Interval 함수를 종료

// setTimeout(function() {
//   console.log('heropy!')
// },3000)
// const timer=setTimeout(()=>{
//   console.log('heropy!')
// },3000)

// const h1El=document.querySelector('h1')
// h1El.addEventListener('click',()=>{
//   clearTimeout(timer)
// })
// const timer=setInterval(() => {
//   console.log('heropy!')
// },3000)

// const h1El=document.querySelector('h1')
// h1El.addEventListener('click',()=>{
//   clearInterval(timer)
// })

// 콜백:함수의 인수로 사용되는 함수
//실행위치를 보장해주는 용도로 사용
// settimeout(함수,시간)
function timeout(callback){
  setTimeout(() =>{
    console.log('Heropy')
    callback()
  },3000)
}
timeout( ()=>{
  console.log('Done!')
} )
