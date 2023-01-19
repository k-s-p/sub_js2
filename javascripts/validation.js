function emailValidation() {
    const form = document.getElementById('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      if(form.email.value !== form.email_confirm.value) {
        const element = document.createElement('p')
        const message = document.createTextNode("Eメールが一致しません")
        form.appendChild(element);
        element.appendChild(message);
        element.classList.add("alert");
        setTimeout(() => {
          form.removeChild(element)
        }, 3000)
      } else {
        form.submit();
      }
    });
  };
  
function emailInputCheck(){
    const email_confirm = document.getElementById("email_confirm");
    const email = document.getElementById("email");
    email_confirm.addEventListener("input", () => {
        const message_elem = document.getElementById("message");
        if(email.value !== email_confirm.value){
            if(message_elem !== null) return;
            const element = document.createElement('p');
            const message = document.createTextNode("Eメールが一致しません");
            const email_line = email_confirm.parentNode.parentNode;
            const parent = email_line.parentNode;
            parent.insertBefore(element, email_line.nextSibling);
            element.appendChild(message);
            element.classList.add("email_alert");
            element.setAttribute("id", "message");
            email_confirm.classList.add("email_confirm");
        }else{
            if(message_elem !== null){
                message_elem.remove();
                email_confirm.classList.remove("email_confirm");
            }
        }
    });

}

window.addEventListener('load', emailValidation);
window.addEventListener('load', emailInputCheck);