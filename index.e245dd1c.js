document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("content"),e=document.getElementById("pagination"),n=Math.ceil(300);let a=1;function c(){!function(e){t.innerHTML="";const n=1*(e-1)+1,a=Math.min(1*e,300);for(let e=n;e<=a;e++)t.innerHTML+=`<p>Item ${e}: This is some content for item ${e}.</p>`}(a),function(){e.innerHTML="";const t=document.createElement("span");t.className="arrow",t.textContent="«",t.addEventListener("click",(function(){a>1&&(a=1,c())})),1===a&&t.classList.add("disabled"),e.appendChild(t);const d=document.createElement("span");d.className="arrow",d.textContent="←",d.addEventListener("click",(function(){a>1&&(a--,c())})),1===a&&d.classList.add("disabled"),e.appendChild(d);let s=Math.max(1,a-Math.floor(2)),i=Math.min(n,s+4-1);i-s+1<4&&(s=Math.max(1,i-4+1));for(let t=s;t<=i;t++){const n=document.createElement("span");n.className="page-button",n.textContent=t,t===a&&n.classList.add("active"),n.addEventListener("click",(function(){a=t,c()})),e.appendChild(n)}const o=document.createElement("span");o.className="arrow",o.textContent="→",o.addEventListener("click",(function(){a<n&&(a++,c())})),a===n&&o.classList.add("disabled"),e.appendChild(o);const l=document.createElement("span");l.className="arrow",l.textContent="»",l.addEventListener("click",(function(){a<n&&(a=n,c())})),a===n&&l.classList.add("disabled"),e.appendChild(l)}()}c()}));
//# sourceMappingURL=index.e245dd1c.js.map
