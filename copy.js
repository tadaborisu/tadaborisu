function copy() {
    
    var copyText = document.getElementById("myInput");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    document.execCommand("copy");
 }