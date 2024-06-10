//js구문
//함수란 특정 작업을 수행하는 코드 블럭
function myF() {
    const demo = document.querySelector('.demo')

    // document.getElementById('demo').innerHTML = 'hellow javascript!!'
    demo.innerHTML = 'hellow javascript!!'
    demo.style.color = 'red'
    demo.style.fontSize = '50px'
    demo.style.backgroundColor = 'yellow'
    demo.style.transform = 'translate(100px, 550px) rotate(45deg) scale(1.5)'
}

//변수
//변수란 데이터를 저장하는 공간
//변수 선언(let, const, var)

let a = 20
a = 10
console.log(a)

//재할당이 안되서 이걸 거의 사용
const b = 30
console.log(b)

//데이터 타입
//숫자(number)
let num1 = 1
let num2 = 2
console.log(num1 + num2) //3

//문자(string)
let str1 = '1'
let str2 = '2'
console.log(str1 + str2) //12

//블린(boolean)
const isTrue = true
const isFalse = false
console.log(isTrue, isFalse)

//객체(object)
const post = {
    img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/214.png',
    title: '뉴데일리',
}
console.log(post)
console.log(post.img)
console.log(post.title)

//배열(array)
//순서가 있는 리스트
const arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(arr[0]) //1

//[] 사용 예시
const users = [
    { name: '김가영', age: 27 },
    { name: '김나영', age: 34 },
    { name: '김다영', age: 68 },
]
console.log(users[1]) //{ name: '김나영', age: 34 }
console.log(`${users[1].name} 님 안녕하세요.`) //김나영

//함수
//기명함수
function 함수이름() {}
//함수호출
함수이름()

//익명함수
const fun1 = function () {
    console.log('fun1')
}
fun1()

//화살표함수
const fun2 = () => {
    console.log('fun2')
}
fun2()

//조건문

//if문
const aa = 2

// if (조건) {조건이 참일 때 실행되는 코드}
if (aa === 1) {
    //조건이 참일 때 실행되는 코드
    console.log('aa는 1입니다.')
} else if (aa === 2) {
    console.log('aa는 2입니다.')
} else {
    //조건이 거짓일 때 실행되는 코드
    console.log('aa는 1이 아닙니다.')
}

//slide
let current = 0
const lstSlide = document.querySelector('.slide ul')
const slideCount = document.querySelectorAll('.slide ul li').length

// console.log(slideCount) //3

//확인방법
// console.log(lstSlide)
// lstSlide.style.border = '1px solide red'

//3초마다 슬라이드가 넘어가도록
// setInterval(함수, 시간)
setInterval(function () {
    slide() //슬라이드 함수 호출
}, 3000)

//슬라이드 함수 생성
function slide() {
    // console.log('dd')

    //current 0, 1, 2
    //0 * -100% = 0 (left:0)
    //1 * -100% = -100%(left: -100%)
    //2 * -100% = -200%(left: -200%)
    current = (current + 1) % slideCount
    lstSlide.style.left = current * -100 + '%'
}
