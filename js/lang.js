var userLang = navigator.language;

if(userLang === "zh){
   /* hide english div when browswer language is Chinese */
  document.getElementsByClassName("package-description-en").length? document.getElementsByClassName("package-description-en").forEach(x => x.style = "display: none"):void(0);
}else{
  /* hide chinese div */
  document.getElementsByClassName("package-description-zh").length? document.getElementsByClassName("package-description-zh").forEach(x => x.style = "display: none"):void(0);
}
