import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t={email:"",message:""},l="feedback-form-state",e=document.querySelector(".feedback-form");e.addEventListener("input",s);e.addEventListener("submit",o);function s(){t.email=e.elements.email.value.trim(),t.message=e.elements.message.value.trim(),localStorage.setItem(l,JSON.stringify(t))}n();function n(){const a=localStorage.getItem(l);if(a){const m=JSON.parse(a);e.elements.email.value=m.email||"",e.elements.message.value=m.message||""}}function o(a){if(a.preventDefault(),e.elements.email.value.trim()===""||e.elements.message.value.trim()===""){alert("Fill please all fields");return}console.log(t),localStorage.removeItem(l),t.email="",t.message="",e.reset()}
//# sourceMappingURL=2-form.js.map
