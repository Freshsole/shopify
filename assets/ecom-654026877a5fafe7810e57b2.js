/* Publish by EComposer at 2024-01-05 23:28:37*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-vct7sywllrc"]=  window.__ectimmers["ecom-vct7sywllrc"] || {};
let e=this.$el.querySelector(".ecom-collection__description-view-more-btn"),i=this.settings.content_type,t=this.$el.querySelector(".ecom-collection__description--full"),n=this.$el.querySelector(".ecom-collection__description-view-less-btn"),s=this.$el.querySelector(".ecom-collection__description--paragraph");e&&(e.addEventListener("click",function(){i==="text"&&t?(t.style.display="inherit",s.style.display="none"):s.style.maxHeight=null,this.style.display="none",n&&(n.style.display="flex")}),n&&n.addEventListener("click",function(){e.style.display="flex",this.style.display="none",i==="text"&&t?(t&&(t.style.display="none"),s.style.display="block"):s.style.maxHeight="var(--ecom-description-height)"}))

                    });
                    const settings = {"content_type":"text"};
                    const ID = 'ecom-vct7sywllrc';
                    document.querySelectorAll('.ecom-vct7sywllrc').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-tpy5db6wzrk"]=  window.__ectimmers["ecom-tpy5db6wzrk"] || {};
var j;let e=this.$el,s=this.isLive,i=(j=this.settings.close_filter)!=null?j:!1;if(!e)return;s||setTimeout(function(){e.closest(".ecom-block")&&(e.closest(".ecom-block").style.zIndex=2,e.style.zIndex=7)},500);const M=this,H=this.settings.filter_type;e.querySelectorAll(".ecom-collection__filters-group-list").forEach(o=>{o.childNodes.length&&o.closest(".ecom-collection__filters-group").classList.remove("ecom-d-none")});function w(){e.querySelector(".ecom-collection__filters-dropdown")&&e.querySelector(".ecom-collection__filters-dropdown").classList.add("ecom-filter-dropdown-desktop");let o=e.querySelectorAll(".ecom-filter-dropdown-desktop .ecom-collection__filters-group .ecom-collection__filters-group-summary");!o||o.forEach(t=>{let l=t.closest(".ecom-collection__filters-group"),n=l.dataset.attrsMax,p=l.querySelectorAll(".ecom-collection__filters-group-list-item-max"),r=l.querySelector(".ecom-more-filter");r&&r.addEventListener("click",()=>{k(p),r.style.display="none"}),p.length>0&&n&&(n=parseInt(n),k(p,n)),i&&t.closest(".ecom-collection__filters-group").classList.contains("active")&&t.closest(".ecom-collection__filters-group").classList.remove("active"),t.addEventListener("click",()=>{let a=t.closest(".ecom-collection__filters-group");console.log("%cECOM DEBUG - VAR: contain","color: #6dec6d",a),a.classList.contains("active")?a.classList.remove("active"):(o.forEach(_=>_.closest(".ecom-collection__filters-group").classList.contains("active")&&_.closest(".ecom-collection__filters-group").classList.remove("active")),a.classList.add("active"))})})}function k(o,t){o.forEach((l,n)=>{t===void 0||n<t?l.style.display="block":l.style.display="none"})}const $=this.settings.collapse_mobile;this.settings.filter_type=="dropdown"&&w();const u=e.querySelector("#ecom-modal-block"),S=e.querySelector("#button_menu_block"),h=u?u.closest("div.ecom-core.core__block"):"",g=u?u.closest("div.ecom-column.ecom-core"):"",T=e.querySelector("#ecom-modal-close"),E=window.matchMedia("only screen and (max-width: 911px)");E.addEventListener("change",B),$&&E.matches&&B(E);function F(){u.style.display="block",h&&(h.style.zIndex="99"),g&&(g.style.zIndex="99"),document.querySelector("body").classList.add("ecom-filter-opened")}function L(){u.style.display="none",h&&(h.style.zIndex="1"),g&&(g.style.zIndex="1"),document.querySelector("body").classList.remove("ecom-filter-opened")}function B(o){let t=e.querySelectorAll(".ecom-collection__filters-group--display");o.matches?M.settings.collapse_mobile&&u&&S&&T&&(u&&(u.style.display="none"),M.settings.filter_type=="dropdown"&&t.forEach(l=>{l.style.position="relative"}),S.addEventListener("click",()=>{F()}),T.addEventListener("click",()=>{L()}),window.addEventListener("click",()=>{event.target==u&&L()}),h&&(h.style.zIndex="99"),g&&(g.style.zIndex="99")):(u&&(u.style.display="block"),h&&(h.style.zIndex="1"),g&&(g.style.zIndex="1"),M.settings.filter_type=="dropdown"&&t&&t.forEach(l=>{l.style.position="absolute"}))}(this.settings.filter_type=="collapse"||this.settings.filter_type=="push_down"&&this.settings.collapse_mobile)&&(S.addEventListener("click",()=>{F()}),T.addEventListener("click",()=>{L()}),window.addEventListener("click",()=>{event.target==u&&L()}));let b=0,z=0,v=0,I=15;function q(o){b===0&&(o.style.maxHeight="100%"),b=o.offsetHeight,v=b,o.classList.remove("ecom-show--filter");var t=b/10;o.style.overflow="hidden",z= window.__ectimmers["ecom-tpy5db6wzrk"]["d344hoxmp"] = setInterval(function(){v-=t,v>0?o.style.maxHeight=v+"px":(o.style.maxHeight=0,clearInterval(z))},I)}function D(o){var t=b/10;o.classList.add("ecom-show--filter"),z= window.__ectimmers["ecom-tpy5db6wzrk"]["telenlw8y"] = setInterval(function(){v+=t,v<b?o.style.maxHeight=v+"px":(o.style.maxHeight=b+"px",clearInterval(z))},I)}function V(){const o=e.querySelector('.ecom-container-filter-list--wrapper[data-type="push_down"]');o&&(q(o),o.style.display="none",o.style.opacity="1",S.addEventListener("click",()=>{o.classList.contains("ecom-show--filter")?q(o):(o.style.display="grid",D(o))}))}V();function R(o=!1){let t=1,l=15e3;if(!e.querySelector(".ecom-collection__filters-group-price"))return!0;let n=e.querySelector(".ecom-collection__filters-price-range-max"),p=e.querySelector(".ecom-collection__filters-price-range-min"),r=e.querySelector("#ecom-collection-filters--input-min"),a=e.querySelector("#ecom-collection-filters--input-max");if(t=parseFloat(p.getAttribute("min")),l=parseFloat(n.getAttribute("max")),o===!0){r.value=r.getAttribute("min"),a.value=a.getAttribute("max"),m();return}function _(d){return window.EComposer.formatMoney(d)}function m(){let d=(l-t)*r.value/100+t,f=(l-t)*a.value/100+t;p.value=d.toFixed(2),n.value=f.toFixed(2),e.querySelector("#ecom-collection-filters--price-from").innerHTML=`${_(Math.floor(d*100))}`,e.querySelector("#ecom-collection-filters--price-to").innerHTML=`${_(Math.floor(f*100))}`}a.addEventListener("input",()=>{let d=parseInt(r.value),f=parseInt(a.value);f<d+10&&(r.value=f-10,d===parseInt(r.min)&&(a.value=10)),m()}),r.addEventListener("input",()=>{let d=parseInt(r.value),f=parseInt(a.value);d>f-10&&(a.value=d+10,f===parseInt(a.max)&&(r.value=parseInt(a.max)-10)),m()})}function U(){var o=e.querySelectorAll(".ecom-shopify__menu-item--has-children > .ecom-menu_item, .ecom-shopify__menu-child-link-item--has-children > .ecom-menu_item");if(!!o){var t,l="false",n=e.querySelector(".ecom-shopify_menu");if(n&&n.dataset.showAll)var l=n.dataset.showAll;for(t=0;t<o.length;t++){let p=function(r){let a=r.nextElementSibling,_=null;if(r.classList.contains("ecom-item-active")){if(r.classList.remove("ecom-item-active"),a){a.style.maxHeight=null;var m=a.querySelectorAll(".ecom-menu_item");m&&m.forEach(d=>{var f=d.nextElementSibling;f&&(f.style.maxHeight=null),d.classList.remove("ecom-item-active")}),_=r.closest(".ecom-shopify__menu-sub-menu"),_&&(_.style.maxHeight=parseInt(_.style.maxHeight)-a.scrollHeight+"px")}}else r.classList.add("ecom-item-active"),a&&(_=r.closest(".ecom-shopify__menu-sub-menu"),_&&(_.style.maxHeight=parseInt(_.style.maxHeight)+a.scrollHeight+"px"),a.style.maxHeight=a.scrollHeight+"px")};l&&l=="true"&&(o[t].classList.contains("ecom-item-active")||p(o[t])),o[t].addEventListener("click",function(r){r.preventDefault(),p(this)})}}}U();const O=function(){return{searchParamsInitial:window.location.search.slice(1),searchParamsPrev:window.location.search.slice(1),init(){const o=e.querySelectorAll(".ecom-collection__filters-form");if(o.length==0)return;const t=o[0].closest(".ecom-sections[data-section-id]"),l=o[0].closest(".ecom-row.ecom-section");!t||!t.dataset.sectionId||(this.facetForms=o,this.wrapper=t,this.sectionId=t.dataset.sectionId,this.wrapper_product=l,this.debouncedOnSubmit=this.debounce(n=>{this.onSubmitHandler(n)},100),this.facetForms.forEach(n=>n.addEventListener("input",this.debouncedOnSubmit.bind(this))),this.handleRemoveFilter(),this.setListeners())},setListeners(){const o=t=>{const l=t.state?t.state.searchParams:this.searchParamsInitial;if(l===this.searchParamsPrev)return;const n=`${window.location.pathname}?section_id=${this.sectionId}&${l}`;this.handleLoadProduct(n,l,t,!1)};window.addEventListener("popstate",o)},debounce(o,t){let l;return(...n)=>{clearTimeout(l),l=setTimeout(()=>o.apply(this,n),t)}},onSubmitHandler(o){o.preventDefault();const t=[];this.facetForms.forEach(a=>{t.push(this.createSearchParams(a))});let l=t.join("&"),n=window.location.search.match(/&sort_by=\S*/gm)&&window.location.search.match(/&sort_by=\S*/gm).length&&window.location.search.match(/&sort_by=\S*/gm)[0];n&&(l+=n);const p=`${window.location.pathname}?section_id=${this.sectionId}&${l}`;this.handleLoadProduct(p,l,o);let r=e.querySelector('.ecom-container-filter-list--wrapper[data-type="push_down"]');r&&i&&q(r)},createSearchParams(o){const t=new FormData(o);return new URLSearchParams(t).toString()},handleLoadProduct(o,t,l,n=!0){const p=this;this.searchParamsPrev=t;const r=async function(a){return(await fetch(a,{method:"GET",headers:{"Content-Type":"text/html"}})).text()};p.wrapper_product.classList.add("ecom-doing-filter"),r(o).then(function(a){const _=document.createElement("div");_.innerHTML=a;let m=null,d=0;const f=p.wrapper_product.querySelectorAll(".ecom-collection__product-main.ecom-collection_product_template_collection");if(f.length>1?f.forEach(function(G,J){m||(window.screen.width>1024&&!G.closest(".hide-on-desktop")||window.screen.width>767&&window.screen.width<=1024&&!G.closest(".hide-on-tablet")||window.screen.width<=767&&!G.closest(".hide-on-mobile"))&&(m=G,d=J)}):m=f[0],!m)return;let Y=_.querySelectorAll(".ecom-collection__filters-form")[0].closest(".ecom-row.ecom-section").querySelectorAll(".ecom-collection__product-main.ecom-collection_product_template_collection");m.innerHTML=Y&&Y[d].innerHTML,n&&p.updateURLHash(t),p.renderFilters(_,l),p.renderActiveFacets(_),m.querySelector(".ecom-collection__product--wrapper-items")&&m.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:m}}))}).finally(function(){(H==="collapse"||H==="block"&&window.screen.width<1025&&$)&&i&&L(),p.wrapper_product.classList.remove("ecom-doing-filter"),w()})},updateURLHash(o){history.pushState({searchParams:o},"",`${window.location.pathname}${o&&"?".concat(o)}`)},renderActiveFacets(o){const t=o.querySelector(".ecom-collection__filters-applied-block"),l=this.wrapper_product.querySelector(".ecom-collection__filters-applied-block"),n=this.wrapper_product.querySelectorAll(".ecom-collection__filter-values");!l&&t?this.facetForms.forEach(p=>{p.prepend(t)}):l&&t?l.innerHTML=t.innerHTML:l&&!t&&this.facetForms.forEach(p=>{p.querySelector(".ecom-collection__filters-applied-block")&&p.querySelector(".ecom-collection__filters-applied-block").remove()}),n.length>0&&n.forEach(p=>{t?p.innerHTML=t.querySelector(".ecom-collection-filters--active_values").innerHTML:p.innerHTML=""})},renderFilters(o,t){const l=o.querySelectorAll(".ecom-js-filter"),n=m=>{if(t.target===window)return!1;const d=t?t.target.closest(".ecom-js-filter"):void 0;return d?m.dataset.index===d.dataset.index:!1},p=Array.from(l),r=Array.from(l).find(n);p.forEach(m=>{this.wrapper_product.querySelector(`.ecom-js-filter[data-index="${m.dataset.index}"]`).innerHTML=m.innerHTML}),a(o,this.wrapper_product),r&&_(r,t.target.closest(".ecom-js-filter"));function a(m,d){const f=m.querySelector(".ecom-collection-filters--active_values-list"),N=d.querySelector(".ecom-collection-filters--active_values-list");!f||!N||(N.innerHTML=f.innerHTML)}function _(m,d){if(!d)return;const f=d.querySelector(".ecom-collection__filters-group--selected"),N=m.querySelector(".ecom-collection__filters-group--selected"),K=d.querySelector(".ecom-collection__filters-group-summary"),Y=m.querySelector(".ecom-collection__filters-group-summary");N&&f&&(d.querySelector(".ecom-collection__filters-group--selected").outerHTML=m.querySelector(".ecom-collection__filters-group--selected").outerHTML),K&&Y&&(d.querySelector(".ecom-collection__filters-group-summary").outerHTML=m.querySelector(".ecom-collection__filters-group-summary").outerHTML)}},handleRemoveFilter(){this.facetForms.forEach(t=>{t.addEventListener("click",o.bind(this))});function o(t){if(t.target.closest(".ecom-collection__filters-group-list-item-clear")||t.target.closest(".ecom-collection__filters-group-reset-filter")){t.preventDefault();const l=t.target.closest(".ecom-collection__filters-group-list-item-clear")||t.target.closest(".ecom-collection__filters-group-reset-filter");if(!l.href)return;let n=l.href.indexOf("?")==-1?"":l.href.slice(l.href.indexOf("?")+1),p=window.location.search.match(/&sort_by=\S*/gm)&&window.location.search.match(/&sort_by=\S*/gm).length&&window.location.search.match(/&sort_by=\S*/gm)[0];p&&(n+=p);const r=`${window.location.pathname}?section_id=${this.sectionId}&${n}`;this.handleLoadProduct(r,n,t),R(!0)}}}}}();s&&(R(),this.settings.enable_ajax?O.init():this.$el.querySelector(".ecom-collection__filters-form").addEventListener("change",function(){this.submit()}))

                    });
                    const settings = {"close_filter":false,"filter_type":"dropdown","collapse_mobile":true,"enable_ajax":true};
                    const ID = 'ecom-tpy5db6wzrk';
                    document.querySelectorAll('.ecom-tpy5db6wzrk').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-jp6s1euv9u"]=  window.__ectimmers["ecom-jp6s1euv9u"] || {};
if(this.isLive){const e=this,i=this.settings.enable_ajax,t=function(){return{searchParamsInitial:window.location.search.slice(1),searchParamsPrev:window.location.search.slice(1),init(){const n=e.$el.querySelector(".ecom-collection__sorting-select");if(n.length==0)return;const s=n.closest(".ecom-sections[data-section-id]"),o=s.querySelector(".ecom-collection__product-wrapper");if(!s||!s.dataset.sectionId)return;this.selected=n,this.wrapper=s,this.sectionId=s.dataset.sectionId,this.wrapper_product=o;const a=this;this.selected.addEventListener("change",function(r){const c=window.location.search.replace("?","").replace(/&sort_by=\S*/gm,"")+"&sort_by="+r.target.value,u=`${window.location.pathname}?section_id=${a.sectionId}&${c}`;a.handleLoadProduct(u,c)}),this.setListeners()},setListeners(){const n=s=>{const o=s.state?s.state.searchParams:this.searchParamsInitial;if(o===this.searchParamsPrev)return;const a=`${window.location.pathname}?section_id=${this.sectionId}&${o}`;this.handleLoadProduct(a,o,!1)};window.addEventListener("popstate",n)},handleLoadProduct(n,s,o=!0){this.searchParamsPrev=s;const a=this,r=async function(c){return(await fetch(c,{method:"GET",headers:{"Content-Type":"text/html"}})).text()};a.wrapper_product.classList.add("ecom-doing-filter"),r(n).then(function(c){const u=document.createElement("div");u.innerHTML=c;const l=a.wrapper_product.querySelector(".ecom-collection__product-main.ecom-collection_product_template_collection");!l||(l.innerHTML=u.querySelector(".ecom-collection__product-main.ecom-collection_product_template_collection").innerHTML,o&&a.updateURLHash(s),l.querySelector(".ecom-collection__product--wrapper-items")&&l.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:l}})))}).finally(function(){a.wrapper_product.classList.remove("ecom-doing-filter")})},updateURLHash(n){history.pushState({searchParams:n},"",`${window.location.pathname}${n&&"?".concat(n)}`)}}}();i?t.init():this.$el.querySelector('[name="sort_by"]').addEventListener("change",function(n){window.EComposer.queryParams.sort_by=n.target.value,window.location.search=new URLSearchParams(window.EComposer.queryParams).toString()})}

                    });
                    const settings = {"enable_ajax":true};
                    const ID = 'ecom-jp6s1euv9u';
                    document.querySelectorAll('.ecom-jp6s1euv9u').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-up0bxdqndd"]=  window.__ectimmers["ecom-up0bxdqndd"] || {};
var U,Z,K;let e=this.$el;if(!e)return;let a=!0,t=e.querySelectorAll(".ecom-collection__product-variants"),m=this.isLive,w=(U=this.settings.show_featured_media)!=null?U:!1,M=(Z=this.settings.bage_sale)!=null?Z:"",o=(K=this.settings.enable_progress_pagination)!=null?K:!1;const E=this.settings.sale_badge_type;let y=this.settings.slider_speed,$=this.settings.slider_speed__tablet,k=this.settings.slider_speed__mobile;const z=function(i,s={},n=""){return window.innerWidth>1024&&i[0]&&(s[`${n}`]=i[0]),window.innerWidth<=1024&&window.innerWidth>768&&i[1]?s[`${n}`]=i[1]:i[0]&&(s[`${n}`]=i[0]),window.innerWidth<768&&i[2]?s[`${n}`]=i[2]:i[1]?s[`${n}`]=i[1]:i[0]&&(s[`${n}`]=i[0]),s};let H=e.querySelectorAll(".ecom-collection__product-item");H&&H.forEach(function(i){let s=i.querySelector(".ecom-collection__product-quantity-input"),n=i.querySelector(".ecom-collection__quantity-controls-plus"),l=i.querySelector(".ecom-collection__quantity-controls-minus");l&&l.addEventListener("click",function(){s.stepDown(),s.dispatchEvent(new Event("change"))}),n&&n.addEventListener("click",function(){s.stepUp(),s.dispatchEvent(new Event("change"))}),s&&s.addEventListener("change",function(c){let p=i.querySelector("a.ecom-collection__product-submit");if(c.target.value>parseInt(c.target.max)&&(c.target.value=parseInt(c.target.max)),p){let r=p.getAttribute("href");p.setAttribute("href",r.replace(/quantity=(\d*)/gm,`quantity=${c.target.value}`))}})});function D(i=!1,s){const n=e.querySelector(".ecom-paginate__progress-bar--outner"),l=e.querySelector(".ecom-paginate__progress-bar--inner"),c=e.querySelector(".ecom-paginate__progress-text");if(!o||!m||!n||!l||!c)return;let{total:p,initProduct:r}=n&&n.dataset,h=c&&c.dataset.text,_=0,u=1,g=0,b=0;r=parseInt(r),i?(u=1,g=r*s):(window.location.href.match(/page=\d*/gm)&&(_=new URL(window.location.href).searchParams.get("page"),_===1?u=1:u=r*(_-1)+1),g=u+r-1),g>p&&(g=p),b=Math.round(g/p*100),l.style.width=`${b}%`,h=h.replace("{_start}",u),h=h.replace("{_end}",g),h=h.replace("{_total}",p),c.innerText=h}D(!1,1);function N(i,s){var n=s.variantIdField.closest(".ecom-collection__product-item");let l=n.querySelector(".ecom-collection__product-submit"),c=n.querySelector(".ecom-collection__product-quantity-input"),p=n.querySelector(".ecom-collection__product-price"),r=n.querySelector(".ecom-collection__product-price--regular"),h=n.querySelector(".ecom-unit-price");r&&r.classList.add("ecom-collection__product--compare-at-price");let _=n.querySelector(".ecom-collection__product-price--bage-sale"),u=n.querySelector(".ecom-collection__product-item-sku-element"),g="";if(i===null){let d=n.querySelector('select[name="variant_id"]'),f=n.querySelector(".product-json"),S=null;try{S=JSON.parse(f.innerHTML)}catch(O){return 1}let W=n.querySelector("select#"+d.id+"-option-0");if(!W)return;const C=W.value;C&&S.variants.forEach(function(O){if(O.options.includes(C)){i=O;return}})}if(i){if(p&&(p.innerHTML=window.EComposer.formatMoney(i.price)),r&&(r.innerHTML=window.EComposer.formatMoney(i.compare_at_price)),h){i.unit_price?h.style.display="block":h.style.display="none";const d=h.querySelector(".ecom-ground-price_unit-price");d&&(d.innerHTML=window.EComposer.formatMoney(i.unit_price))}if(i.compare_at_price>i.price){r&&(r.style.display="inherit");let d="";d=e.querySelector(".ecom-collection__product-main").dataset.sale,e.querySelector(".ecom-collection__product-main").dataset.translate=="false"&&(d=M),E==="amount"?(g=i.compare_at_price-i.price,_&&(_.style.display="inherit",_.innerHTML=d.replace(/\{{.*\}}/g,window.EComposer.formatMoney(g)))):(g=(i.compare_at_price-i.price)*100/i.compare_at_price,_&&(_.style.display="inherit",_.innerHTML=d.replace(/\{{.*\}}/g,Math.round(g))))}else r&&(r.style.display="none"),_&&(_.style.display="none",_.innerHTML="");if(u&&(i.sku?(u.querySelector(".ecom-collection__product-item-sku").innerHTML=i.sku,u.style.display="flex"):u.style.display="none"),i.featured_image){let d=n.querySelector(".ecom-collection__product-media img");if(!w){let f=d.closest("div");f.classList.add("ecom-product-image-loading"),d.setAttribute("src",i.featured_image.src),d.removeAttribute("srcset"),d.addEventListener("load",function(){f.classList.remove("ecom-product-image-loading")})}}if(i.options.length&&!w)for(var b=0;b<i.options.length;b++)n.querySelectorAll(`.ecom-collection__product-swatch-item[data-option-index="${b}"][data-value="${encodeURI(i.options[b])}"]`).forEach(function(d){let f=d.parentNode.children;for(let S=0;S<f.length;S++)f[S].classList.remove("ecom-product-swatch-item--active");d.classList.add("ecom-product-swatch-item--active")}),n.querySelectorAll(`select.ecom-collection__product-swatch-select[data-option-index="${b}"]`).forEach(function(d){d.value&&(d.value=i.options[b])});if(l)if(i.available){if(!i.inventory_management||i.inventory_management&&i.inventory_quantity>0){if(l.removeAttribute("disabled"),c){let d=c.closest(".ecom-collection__product-quantity--wrapper");d&&(d.style.display="flex"),c.style.display="flex",i.inventory_management?c.max=i.inventory_quantity:c.max=9999}l.classList.add("ecom-collection__product-form__actions--add"),l.classList.remove("ecom-collection__product-form__actions--soldout"),l.classList.remove("ecom-collection__product-form__actions--unavailable"),l.querySelector(".ecom-add-to-cart-text").innerHTML=l.getAttribute("data-text-add-cart")}else if(i.inventory_policy=="continue"&&i.inventory_quantity<=0){if(l.removeAttribute("disabled"),c){let d=c.closest(".ecom-collection__product-quantity--wrapper");d&&(d.style.display="flex"),c.max=9999,c.style.display="flex"}l.classList.add("ecom-collection__product-form__actions--add"),l.classList.remove("ecom-collection__product-form__actions--soldout"),l.classList.remove("ecom-collection__product-form__actions--unavailable"),l.querySelector(".ecom-add-to-cart-text").innerHTML=l.getAttribute("data-text-pre-order")}}else{if(l.setAttribute("disabled","disabled"),c){let d=c.closest(".ecom-collection__product-quantity--wrapper");d&&(d.style.display="none"),c.style.display="none"}l.classList.add("ecom-collection__product-form__actions--soldout"),l.classList.remove("ecom-collection__product-form__actions--add"),l.classList.remove("ecom-collection__product-form__actions--unavailable"),l.querySelector(".ecom-add-to-cart-text").innerHTML=l.getAttribute("data-text-sold-out")}}else p.html=window.EComposer.formatMoney(0),r&&(r.innerHTML=window.EComposer.formatMoney(0),r.style.display="none"),l&&(l.setAttribute("disabled","disabled"),l.classList.add("ecom-collection__product-form__actions--unavailable"),l.classList.remove("ecom-collection__product-form__actions--add"),l.classList.remove("ecom-collection__product-form__actions--soldout"),l.querySelector(".ecom-add-to-cart-text").innerHTML=l.getAttribute("data-text-unavailable"))}function P(i){i.classList.add("ecom-swatch-init");let s=i.querySelector(".ecom-collection__product-form");if(!s)return;let n=s.querySelector('select[name="variant_id"]'),l=i.querySelector(".product-json"),c=null;try{c=JSON.parse(l.innerHTML)}catch(p){return 1}new window.EComposer.OptionSelectors(n.id,{product:c,onVariantSelected:N,enableHistoryState:!1}),i.querySelectorAll(".ecom-collection__product-swatch-item").forEach(function(p){p.addEventListener("click",function(){w=!1;var r=this.closest("li");if(r.classList.contains("ecom-product-swatch-item--active"))return!1;r.parentNode.querySelectorAll(".ecom-product-swatch-item--active").forEach(function(g){g.classList.remove("ecom-product-swatch-item--active")}),r.classList.add("ecom-product-swatch-item--active");var h=r.getAttribute("data-option-index"),_=r.getAttribute("data-value");let u=i.querySelector("select#"+n.id+"-option-"+h);u.value=_,u.dispatchEvent(new Event("change"))})}),i.querySelectorAll("select.ecom-collection__product-swatch-select").forEach(function(p){p.addEventListener("change",function(){var r=this,h=r.getAttribute("data-option-index"),_=r.value;i.querySelectorAll("select#"+n.id+"-option-"+h).forEach(function(u){u.value=_,u.dispatchEvent(new Event("change"))})})})}if(this.settings.layout==="slider"){let i=this.$el,s=i.querySelector(".ecom-swiper-container"),n=s&&s.dataset.optionSwiper;if(!n)return;n=JSON.parse(n),n.pagination={el:i.querySelector(".ecom-swiper-pagination"),type:"bullets",clickable:!0},n.navigation={nextEl:i.querySelector(".ecom-swiper-button-next"),prevEl:i.querySelector(".ecom-swiper-button-prev")},n.autoHeight=!1,n.on={init:function(){this.el.classList.add("ecom-swiper-initialized")}};let l=[y,$,k];if(!m)setTimeout(function(){n=z(l,n,"speed"),new window.EComSwiper(s,n)},200);else{n=z(l,n,"speed");const c=new window.EComSwiper(s,n);n.autoplay.enabled&&(c.on("touchStart",function(p,r){p.params.speed=300,p.autoplay.stop()}),c.on("touchEnd",function(p,r){window.innerWidth>1024&&y&&(p.params.speed=y),window.innerWidth<=1024&&window.innerWidth>768&&$?p.params.speed=$:y&&(p.params.speed=y),window.innerWidth<768&&k?p.params.speed=k:$?p.params.speed=$:y&&(p.params.speed=y),p.autoplay.start()}))}}t.forEach(P);const I=function(i){i.querySelectorAll(".ecom-collection__product-form__actions--quickshop").forEach(function(s){s.addEventListener("click",function(n){this.style.display="none";let l=this.closest(".ecom-collection__product-item");l.querySelectorAll(".ecom-collection__product-variants").forEach(function(c){c.classList.add("ecom-active")}),l.querySelectorAll(".ecom-collection__product-quick-shop-wrapper").forEach(function(c){c.style.display="inherit"})})}),i.querySelectorAll(".ecom-collection__product-close").forEach(function(s){s.addEventListener("click",function(n){let l=this.closest(".ecom-collection__product-item");l.querySelectorAll(".ecom-collection__product-variants").forEach(function(c){c.classList.remove("ecom-active")}),l.querySelectorAll(".ecom-collection__product-quick-shop-wrapper").forEach(function(c){c.style.display="none"}),l.querySelectorAll(".ecom-collection__product-form__actions--quickshop").forEach(function(c){c.style.display="inherit"})})})};I(e);const R=e.querySelector(".ecom-collection__product-main");let x=R.dataset,L=R.dataset.countdownShows;const T=/\[([^\]]+)\]/gm;var q="";if(L.indexOf("week")>=0&&x.week){let i="",s=x.week.replace(T,(...n)=>(i=n[1],""));q+=`
                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--week">
                                <span class="ecom-collection__product-time--number">
                                    ${i}
                                </span>
                                <span class="ecom-collection__product-time--label">
                                    ${s}
                                </span>
                            </div>`}if(L.indexOf("day")>=0&&x.day){let i="",s=x.day.replace(T,(...n)=>(i=n[1],""));q+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--day">
                                    <span class="ecom-collection__product-time--number">
                                        ${i}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${s}
                                    </span>
                                </div> `}if(L.indexOf("hour")>=0&&x.hour){let i="",s=x.hour.replace(T,(...n)=>(i=n[1],""));q+=`
                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--hour">
                                <span class="ecom-collection__product-time--number">
                                    ${i}
                                </span>
                                <span class="ecom-collection__product-time--label">
                                    ${s}
                                </span>
                            </div>
                        `}if(L.indexOf("minute")>=0&&x.minute){let i="",s=x.minute.replace(T,(...n)=>(i=n[1],""));q+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--minute">
                                    <span class="ecom-collection__product-time--number">
                                        ${i}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${s}
                                    </span>
                                </div>
                            `}if(L.indexOf("second")>=0&&x.second){let i="",s=x.second.replace(T,(...n)=>(i=n[1],""));q+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--second">
                                    <span class="ecom-collection__product-time--number">
                                        ${i}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${s}
                                    </span>
                                </div>`}function F(i){let s=this.closest(".ecom-collection__product-countdown-wrapper"),n=s.querySelector(".ecom-collection__product-countdown-progress-bar"),l=s.querySelector(".ecom-collection__product-countdown-progress-bar--timer"),c=this.getAttribute("data-ecom-countdown-from")||0;if(this.innerHTML=i.strftime(q),n&&c){let p=new Date().getTime(),r=new Date(c),h=r.getTime(),_=i.finalDate.getTime();if(h<p&&_>h){n.style.removeProperty("display");let u=_-h,g=_-p,b=Math.round(g*100/u)+"%";l.style.width=b}else n.style.display="none"}}function A(i){if(i.dataset.ecomCountdown){if(i.dataset.ecomCountdownFrom&&new Date().getTime()>new Date(i.dataset.ecomCountdown).getTime()&&m)return i.closest(".ecom-collection__product-countdown-wrapper").style.display="none",!1;window.EComCountdown&&window.EComCountdown(i,new Date(i.dataset.ecomCountdown),F),i.addEventListener("stoped.ecom.countdown",()=>{i.closest(".ecom-collection__product-countdown-wrapper").style.display="none"})}}if(e.querySelectorAll(".ecom-collection__product-countdown-time").forEach(function(i){A(i)}),m){const i=e.querySelector(".ecom-collection__product-main");let s=1;const n=function(p){p.preventDefault();const r=this.dataset.get,h=this.closest(".ecom-sections[data-section-id]"),_=e.closest(".ecom-row.ecom-section");if(!r||!h||!h.dataset.sectionId)return;const u=h.dataset.sectionId,g=`${r}&section_id=${u}`;s++,D(!0,s),this.classList.add("ecom-loading"),c(g,h,this,"loadmore",_)},l=function(p){function r(_,u){new IntersectionObserver((b,d)=>{b.forEach(f=>{f.isIntersecting&&(u.cb?u.cb(_):h(f.target),d.unobserve(f.target))})},u).observe(_)}function h(_){const u=_.dataset.get,g=_.closest(".ecom-sections[data-section-id]"),b=_.closest(".ecom-row.ecom-section");if(!u||!g||!g.dataset.sectionId)return;const d=g.dataset.sectionId,f=`${u}&section_id=${d}`;a&&(e.classList.add("ecom-doing-scroll"),c(f,g,_,"infinite",b))}r(p,{})},c=function(p,r,h,_,u){a=!1,async function(b){return(await fetch(b,{method:"GET",cache:"no-cache",headers:{"Content-Type":"text/html"}})).text()}(p).then(function(b){const d=document.createElement("div");d.innerHTML=b;const f=d.querySelector(".ecom-collection__product-main.ecom-collection_product_template_collection .ecom-collection__product--wrapper-items");if(!f)return;const S=u.querySelector(".ecom-collection__product--wrapper-items"),W=u.querySelector(".ecom-products-pagination-loadmore");for(;f.firstChild;)S.appendChild(f.firstChild);if(f.parentNode.removeChild(f),_==="loadmore"){const C=d.querySelector(".ecom-products-pagination-loadmore");C?W.innerHTML=C.innerHTML:W.remove()}else{h.remove();const C=d.querySelector(".ecom-products-pagination-infinite");C&&(S.after(C),l(C))}i.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:i}}))}).finally(function(){window.EComposer&&window.EComposer.initQuickview(),a=!0,e.classList.remove("ecom-doing-scroll"),h.classList.remove("ecom-loading")})};if(i&&i.dataset.pagination){const p=i.dataset.pagination;if(p==="loadmore")e.querySelector(".ecom-products-pagination-loadmore-btn")&&e.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",n);else if(p==="infinit"){const r=e.querySelector(".ecom-products-pagination-infinite");if(!r)return;l(r)}}i.addEventListener("ecom-products-init",function(p){const r=p.detail.wrapper;if(!r)return;if(i&&i.dataset.pagination){const _=i.dataset.pagination;if(_==="loadmore")e.querySelector(".ecom-products-pagination-loadmore-btn")&&e.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",n);else if(_==="infinit"){const u=e.querySelector(".ecom-products-pagination-infinite");u&&l(u)}}r.querySelectorAll(".ecom-collection__product-variants:not(.ecom-swatch-init)").length&&r.querySelectorAll(".ecom-collection__product-variants:not(.ecom-swatch-init)").forEach(P),r.querySelectorAll(".ecom-collection__product-countdown-time").length&&r.querySelectorAll(".ecom-collection__product-countdown-time").forEach(function(_){A(_)}),I(r),r.querySelector(".ecom-products-pagination-loadmore-btn")&&r.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",n),window.EComposer&&typeof window.EComposer.init=="function"&&window.EComposer.init(),v(r);const h=r.querySelector(".ecom-collection__product--wishlist-wrapper");B(h)})}function v(i){if(i&&i.dataset.reviewPlatform)switch(i.dataset.reviewPlatform){case"product-reviews":if(window.SPR)try{window.SPR.$=window.jQuery,window.SPR.initDomEls(),window.SPR.loadBadges()}catch(s){console.info(s.message)}break;case"judgeme":if(window.jdgm){try{window.jdgm.batchRenderBadges()}catch(s){console.info(s.message)}e.querySelectorAll('[data-average-rating="0.00"]').forEach(function(s){s.style.display="block !important"})}break;case"product-reviews-addon":window.StampedFn&&window.StampedFn.loadBadges();break;case"lai-reviews":typeof window.SMARTIFYAPPS!="undefined"&&window.SMARTIFYAPPS.rv.installed&&window.SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();break}}function B(i){if(i)switch(i.dataset.wishlistApp){case"swym-relay":window._swat&&window._swat.initializeActionButtons(".ecom-collection__product-wishlist-button");break;case"wishlist-hero":e.querySelectorAll(".wishlist-hero-custom-button").forEach(function(s){var n=new CustomEvent("wishlist-hero-add-to-custom-element",{detail:s});document.dispatchEvent(n)});break}}if(!m){const i=e.querySelector(".ecom-collection__product-main");v(i);const s=e.querySelector(".ecom-collection__product--wishlist-wrapper");B(s)}if(this.settings.enable_preload){var Y=e.querySelectorAll(".ecom-collection__product-item");Y.forEach(function(i){i.addEventListener("mouseenter",function(){let s=document.createElement("link");s.rel="prefetch",document.head.appendChild(s);var n=this.querySelector("a.ecom-collection__product-item-information-title").getAttribute("href");s.href=n},{once:!0})})}if(this.settings.show_compare&&!m){var J=e.querySelectorAll(".ecom-product__compare-link");J.forEach(function(i){i.addEventListener("click",function(){this.classList.contains("ecom-product__compare-link-added")?this.classList.remove("ecom-product__compare-link-added","ecom-button-active"):this.classList.add("ecom-product__compare-link-added","ecom-button-active")})})}if(this.settings.show_wishlist&&!m){var et=e.querySelectorAll(".ecom-product__wishlist-link");et.forEach(function(i){i.addEventListener("click",function(){this.classList.contains("ecom-product__wishlist-link-added")?this.classList.remove("ecom-product__wishlist-link-added","ecom-button-active"):this.classList.add("ecom-product__wishlist-link-added","ecom-button-active")})})}

                    });
                    const settings = {"show_featured_media":false,"bage_sale":"-{{sale}}%","sale_badge_type":"percent","slider_speed":200,"layout":"grid","enable_preload":false};
                    const ID = 'ecom-up0bxdqndd';
                    document.querySelectorAll('.ecom-up0bxdqndd').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
;try{
 /* cena zatahovani */
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var filtersGroup = document.querySelector('.ecom-collection__filters-group');

    filtersGroup.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });
</script>
} catch(error){console.error(error);}