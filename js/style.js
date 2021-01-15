
  /* this is function belongs to four buttons that capable to open the specific tab and shows the contentent of that tab & hide the tab content before click on button*/
    
  function opentab( tabname){
        var i,  tabContent ;
        tabContent= document.getElementsByClassName("tabContent") ;
       for ( i=0 ; i< tabContent.length ; i++) {
           tabContent[i].style.display ="none" ;
       
        document.getElementById( tabname).style.display ="block" ;
    }
}


