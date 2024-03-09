let hdn = document.querySelector('.hdn');

document.querySelector('#all').onclick = () =>{
   hdn.classList.add('active');
}



window.onscroll = () =>{
   hdn.classList.remove('active');
};