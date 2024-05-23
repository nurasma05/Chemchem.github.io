 let by = document.getElementById('scroll-by');
     by.addEventListener('click',(ev)=>{
           document.documentElement.scrollBy(0,350);//250px down from current potition
       
           by.scrollBy(true)
           by.scrollby({
             behavior:"smooth",
         })
       });
 
