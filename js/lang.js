var langCss = document.createElement("link");
langCss.setAttribute("rel", "stylesheet");
langCss.setAttribute("type", "text/css");

if(navigator.language.startsWith("en")){
   /* hide chinese div when browser language is English */
   langCss.setAttribute("href", "https://cdn.jsdelivr.net/gh/nipscloud/nthucc-img@main/css/package-en.css")
   console.log(navigator.language, "use Engish env");
}else{
   langCss.setAttribute("href", "https://cdn.jsdelivr.net/gh/nipscloud/nthucc-img@main/css/package-zh.css");
   console.log(navigator.language, "use Chinese env");
}

document.head.appendChild(langCss);
