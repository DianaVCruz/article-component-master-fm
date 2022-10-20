const sharesm = document.querySelector('.sm');
const sharebtn = document.querySelector('.share__button');

sharebtn.addEventListener('click', ()=>{
  sharebtn.classList.toggle('active');
  sharesm.classList.toggle('active');
})
