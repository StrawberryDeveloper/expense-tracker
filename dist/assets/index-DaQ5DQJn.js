(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#abo-list`),t=document.querySelector(`#abo-form`),n=document.querySelector(`#abo-name`),r=document.querySelector(`#abo-price`),i=document.querySelector(`#total-price`),a=JSON.parse(localStorage.getItem(`items`)||`[]`);a.forEach(e=>{o(e.name,e.price)});function o(t,n){let r=`
        <div class="flex flex-col justify-between h-full">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="font-bold text-xl text-gray-800 tracking-tight">${t}</h3>
                    <p class="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Abonnement</p>
                </div>
                <span class="text-2xl font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                    ${n}€
                </span>
            </div>
            
            <div class="border-t border-gray-100 pt-3 flex justify-between items-center mt-auto">
                <span class="text-sm text-gray-500">Monatlich</span>
                <button class="cursor-pointer text-sm font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-md transition duration-150">
                    Entfernen
                </button>
            </div>
        </div>
    `,i=document.createElement(`div`);i.className=`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-out`,i.insertAdjacentHTML(`beforeend`,r),i.querySelector(`button`)?.addEventListener(`click`,()=>{i.remove(),a=a.filter(e=>e.name.toLowerCase()!==t.toLowerCase()),localStorage.setItem(`items`,JSON.stringify(a)),s()}),e?.appendChild(i),s()}function s(){let e=0;a.forEach(t=>{e+=parseFloat(t.price)}),i.textContent=e.toFixed(2)}t.addEventListener(`submit`,e=>{e.preventDefault(),o(n.value,r.value),a.push({name:n.value,price:r.value}),localStorage.setItem(`items`,JSON.stringify(a)),t?.reset()});