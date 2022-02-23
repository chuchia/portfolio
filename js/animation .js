/* 回到頂部 */

let top1 = document.querySelector('.top1')

window.onscroll = function() {
    let height = document.documentElement.scrollTop ;
   
    if (height >= 300) {
        top1.style.display = 'block'
    }
    else {
        top1.style.display = 'none'

    }
}
top1.onclick = function (){
    window.scrollTo({
        top :0 ,
        behavior :"smooth"
    })
}

let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

/* 註冊點集 */
for (let i=0 ; i<list.length ; i++ ) {
    list[i].addEventListener( 'click',function(){
        for (let j=0 ; j<list.length; j++){
            list[j].classList.remove('active')
        }
        this.classList.add('active');
    
        let dataFilter = this.getAttribute('data-filter')


        for(let k=0 ;k<itemBox.length; k++){
            itemBox[k].classList.remove('active')
            itemBox[k].classList.add('hide1')
    
            if(itemBox[k].getAttribute('data-item') == dataFilter || 
            dataFilter == "all"){
                /* itemBox[k].classList.add('active'); */
                itemBox[k].classList.remove('hide1');
            }
        }
    
    
   
    })
}

/* modal */
const cross  = document.querySelector('.cross')
const btn1  = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const modal  = document.querySelector('.modal')

cross.addEventListener('click', closeModal)
btn1.addEventListener('click', OPENModal)
btn2.addEventListener('click', OPENModal)
window.addEventListener('click', outside)

function OPENModal(){
    modal.style.display = 'block'
}
function closeModal(){
    modal.style.display = 'none'
}
function outside(e){
    if (e.target == modal){
        closeModal()
    }
}
/* 導航 */
let iconnav = document.querySelector('.icon-nav')
let iconhide = document.querySelector('.iconhide')
let topnav = document.querySelector('.topnav')
const navbar1 =document.querySelector('.navbar1')

iconnav.addEventListener('click',function(){
    topnav.classList.toggle('active1')

})
iconhide.addEventListener('click',function(){
   
    topnav.classList.toggle('active1')

   
})

/* scroll */

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach( function(link){
    link.addEventListener("click",function(e){
        /* e.preventDefault(); */
        const href = link.getAttribute("href");
        
        if (href === '#' )
        window.scrollTo({
            
                top :0,
                behavior : 'smooth',
            
            });
        else if  (href !== '#' & href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView ({ behavior: 'smooth'})
        }
        /* if(scrollTop > 500){
            topnav.classList.remove('active1');
          };
 */
    });
    
});