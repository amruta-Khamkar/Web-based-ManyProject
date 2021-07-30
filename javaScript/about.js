// for hiding and displaying snapshots 

let sec=document.getElementById('sec');
sec.style.display='none';


let btn=document.getElementById('abtBtn');

btn.addEventListener('click',(()=>{
    sec.style.display='block';
}))