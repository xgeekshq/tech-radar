
const radar = document.querySelector(".radarr");
const sideMenu = document.querySelector(".techs");

function disableStyleSheet() {
    setTimeout(function () {
        document.styleSheets[4].disabled = true;
    }, 500);
}

radar.addEventListener('click',function(e){

    //console.log(document.styleSheets);

    if(e.path[0].id !== "radar-plot" && JSON.stringify(e.target.className) === "{}"){
        console.log("map maximazed");
        sideMenu.style.opacity="0";
        disableStyleSheet();

    }else if( JSON.stringify(e.target.className) === "\"home-link selected\""){
        console.log("Map minimized");
        //sideMenu.style.display ="initial";
        sideMenu.style.opacity="1";
        document.styleSheets[4].disabled = false;

    }
    
    

});


