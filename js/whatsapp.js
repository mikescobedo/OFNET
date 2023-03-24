function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '+524495848794';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let name = document.querySelector('#name').value
        let city = document.querySelector('#city').value
        let asunto = document.querySelector('#asunto').value
        let message = document.querySelector('#message').value
        
        let mensaje = 'send?phone=' + telefono + '&text=Buen día, mi nombre es: '+ name +'%0A Me comunico de la  ciudad de: '+city+'%0A Asunto: '+ asunto+'%0A El mensaje: '+ message 
        
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Mensaje enviado a WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
}),formulario.reset();

