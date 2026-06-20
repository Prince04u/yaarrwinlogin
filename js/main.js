document.addEventListener('DOMContentLoaded',function(){
var btn=document.querySelector('.menu-btn');var nav=document.querySelector('.nav');
if(btn&&nav){btn.addEventListener('click',function(){nav.classList.toggle('open');var ex=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',(!ex).toString());});}
});