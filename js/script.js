document.addEventListener('DOMContentLoaded',()=>{
  const t=document.querySelector('.nav-toggle'), m=document.querySelector('.nav-menu');
  if(t) t.addEventListener('click',()=>m.classList.toggle('active'));
});
