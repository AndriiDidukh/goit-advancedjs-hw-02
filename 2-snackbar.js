import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-Bw_m2H9m.js";const t=document.querySelector(".form");t.addEventListener("submit",n);function n(i){i.preventDefault();const e=parseInt(t.elements.delay.value,10);new Promise((s,r)=>{setTimeout(()=>{t.elements.state.value==="fulfilled"?s(e):r(e)},e)}).then(()=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight",backgroundColor:"green",maxWidth:"300px"})}).catch(()=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight",backgroundColor:"orange",maxWidth:"300px"})})}
//# sourceMappingURL=2-snackbar.js.map
