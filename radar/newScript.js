
const radar = document.querySelector(".radarr");
const sideMenu = document.querySelector(".techs");


function disableSideMenuStyleSheet() {
    setTimeout(function () {
        document.styleSheets[4].disabled = true;
    }, 500);
}

radar.addEventListener('click',function(e){
    if(e.path[0].id !== "radar-plot" && JSON.stringify(e.target.className) === "{}"){
        sideMenu.style.opacity="0";
        disableSideMenuStyleSheet();

    }else if( JSON.stringify(e.target.className) === "\"home-link selected\""){
        sideMenu.style.opacity="1";
        document.styleSheets[4].disabled = false;

    }
});


