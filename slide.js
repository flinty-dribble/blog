!function(){var e=document.querySelectorAll(".slide"),t=1;function n(n){var l;for(n>e.length&&(t=1),n<1&&(t=e.length),l=0;l<e.length;l+=1)e[l].style.display="none";e[t-1].style.display="block"}n(t);var l=document.querySelector(".left");document.querySelector(".right").addEventListener("click",(function(){n(t+=1)})),l.addEventListener("click",(function(){n(t-=1)}))}();
//# sourceMappingURL=slide.js.map