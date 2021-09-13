
console.log("Entrou script");
const dropDowns = document.querySelectorAll(".drop-down");
const container = document.querySelector(".container");
const techs = document.querySelector(".techs");


respondToVisibility = function(element, callback) {
    var options = {
      root: document.documentElement
    }
  
    var observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        callback(entry.intersectionRatio > 0);
      });
    }, options);
  
    observer.observe(element);
  }
  
  for(let i =0 ; i< dropDowns.length;i++){
    
    respondToVisibility(dropDowns[i], visible => {
        if(techs.offsetHeight > 800){
        if(visible) {
            adjustContainerHeight();
         }
         else {
            adjustContainerHeight();
         }
        }else{
            container.style.height="800px";
        }
      });
  }

 function adjustContainerHeight(){
     container.style.height = (techs.offsetHeight + 100 + "px");
 }


