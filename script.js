const lists = ["ali", "reza", "sara", "sina"];

let btn = document.querySelector("#btn");
let parag = document.querySelector("#showCase");
let paragList=document.querySelector('#list')
let DivContent=document.querySelector('#content')
let btnChecknumber=document.querySelector('#getnumber')
let DivResult=document.querySelector('div.result')

paragList.textContent=lists.join()
//.....................................................function check textbox value.........................
var checkValue = (e) => {
  
  //Get the input value by finding the element by its ID
  var textboxValue = document.getElementById("txt_name").value;
  //Check if the value is in the array
  var spn=document.querySelector('#error')
  if (lists.indexOf(textboxValue) < 0 && textboxValue !== null) {
    parag.textContent = "search case does not exist";
    spn.className='unsuccess'
    parag.className = "display-4 p-3 unsuccess";
  } else {
    parag.className = "display-4 p-3 success";
    spn.className="active"
    parag.textContent = `search case exist: ${textboxValue}`;
  }
};
btn.addEventListener("click", checkValue);
//............................................................................................................

let numbers = [3, 5, 35, 1, 9, 12, 6];
let students = ["jhon", "jack", "bruce", "lora", "reygan"];
// console.log(students.toString())
var checknumer=() => {
  
  var album = document.getElementById("txt_name").value;
  if(numbers.indexOf(album) < 0){
    console.log(`value of textbox is: ${album}`)
    DivResult.textContent=album
  }else if(album !=null){
    console.log('error')
    DivResult.textContent='please enter any thing'
  }
}
btnChecknumber.addEventListener('click',checknumer)
// let students='ali,reza,sina'

console.log(students.slice(1,-1))
console.log(students.splice(1,3))

// console.log(numbers.sort((a,b) => a-b))
// console.log(students.includes('hjkli'))
// let teachers=['sam','saly','suzan']
// let res= (numbers.filter((n) => n>5))
// console.log(students.concat(teachers,'poul'))
// console.log(res.sort((a,b) => a-b))
