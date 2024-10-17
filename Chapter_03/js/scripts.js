var g=Object.defineProperty;var w=(o,e,i)=>e in o?g(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var r=(o,e,i)=>(w(o,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();document.documentElement.classList.remove("no-js");class p{constructor(e,i,d,t,n){r(this,"nextBtn");r(this,"prevBtn");r(this,"container");r(this,"items");r(this,"duration");r(this,"maxIdx");r(this,"currentIdx");r(this,"polarity");r(this,"random");r(this,"autoMoveContainer",()=>{this.currentIdx=Math.floor(Math.random()*(this.maxIdx+1)),this.moveContainer(this.currentIdx)});r(this,"processClick",e=>{window.clearInterval(this.random),this.polarity=e.target===this.nextBtn?"+":"-",this.polarity==="+"?this.currentIdx=this.currentIdx++>=this.maxIdx?this.maxIdx:this.currentIdx++:this.currentIdx=this.currentIdx--<=0?0:this.currentIdx--,this.moveContainer(this.currentIdx)});r(this,"moveContainer",e=>{const i=this.container.getBoundingClientRect().width;e>0?this.prevBtn.removeAttribute("disabled"):this.prevBtn.setAttribute("disabled",""),e<this.maxIdx?this.nextBtn.removeAttribute("disabled"):this.nextBtn.setAttribute("disabled",""),this.container.style.setProperty("--Dist",`-${i*e}px`)});this.nextBtn=e,this.prevBtn=i,this.container=d,this.items=t,this.maxIdx=t.length-1,this.currentIdx=0,this.polarity="+",this.duration=n,this.nextBtn.addEventListener("click",this.processClick),this.prevBtn.addEventListener("click",this.processClick),this.random=window.setInterval(this.autoMoveContainer,this.duration),window.addEventListener("resize",()=>{this.moveContainer(this.currentIdx)})}}const u=document.getElementById("quoteNext"),h=document.getElementById("quotePrev"),c=document.querySelector(".rwd-Reviews_Container"),m=c.querySelectorAll(".rwd-Review");c&&u&&h&&c&&m&&new p(u,h,c,m,1e4);const x=document.getElementById("imgNext"),f=document.getElementById("imgPrev"),l=document.querySelector(".rwd-New_Media"),v=l&&l.querySelectorAll(".rwd-New_Img");x&&f&&l&&v&&new p(x,f,l,v,8e3);const y=document.querySelector("button.rwd-Nav_Link"),s=document.getElementById("downloadPanel"),I=document.querySelector(".rwd-DownloadPanel_Dismiss");y&&s&&I&&(y.addEventListener("click",()=>{s.open?s.close():s.showModal()}),I.addEventListener("click",()=>{s.close()}),s.addEventListener("click",function(o){console.log(this,o.target),o.target===this&&this.close()}));