var e=document.querySelector(".gallery__list"),r=document.querySelector(".gallery__large-img");e.addEventListener("click",function(e){e.preventDefault();var t=e.target;if("IMG"===t.tagName||"A"===t.tagName){var a=t.closest("a");a&&(r.src=a.href)}});
//# sourceMappingURL=index.25276973.js.map
