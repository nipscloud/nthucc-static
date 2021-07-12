var langCss = document.createElement("link");
langCss.setAttribute("rel", "stylesheet");
langCss.setAttribute("type", "text/css");

if(navigator.language.startsWith("en")){
   /* hide chinese div when browser language is English */
   langCss.setAttribute("href", "https://cdn.jsdelivr.net/gh/nipscloud/nthucc-static@main/css/package-en.css")
}else{
   langCss.setAttribute("href", "https://cdn.jsdelivr.net/gh/nipscloud/nthucc-static@main/css/package-zh.css");
}

document.head.appendChild(langCss);
