'use-strict';

var check=document.querySelector('.check');


const handle = function  (){
   

    console.log(document.querySelector('.guess').value);
}
// check()
check.addEventListener('click',handle)