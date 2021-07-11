var userLang = navigator.language;

if(userLang === "zh"){
   /* hide english div when browswer language is Chinese */
   var packages_en = document.getElementsByClassName("package-description-en"); 
   packages_en.length? Array.from(packages_en).forEach(x => x.style = "display: none"):void(0);
}else{
  /* hide chinese div */
   var packages_zh = document.getElementsByClassName("package-description-zh"); 
   packages_zh.length? Array.from(packages_zh).forEach(x => x.style = "display: none"):void(0);
}
