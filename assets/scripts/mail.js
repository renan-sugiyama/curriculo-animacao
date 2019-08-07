
const sendEmail = (envio) => {
    
    envio.preventDefault;
    if (!validaForm()) {
        return
    }
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const message = document.querySelector('#message')

    const dados = {
        name: name.value,
        email: email.value,
        message: message.value
    };

    const url = 'https://curriculo.exceltri.com/mail/mail.php'

    $.post(url, dados).done(function (data) {
        document.querySelector('.alert-success').style.display = 'block'        
        setInterval(() => {
            document.querySelector('.alert-success').style.display = 'none'
        }, 2500);
        clearForm()
    }).fail(function(err) {
        document.querySelector('.alert-warning').style.display = 'block'        
        setInterval(() => {
            document.querySelector('.alert-warning').style.display = 'none'
        }, 2500);
    });
    
}

const clearForm = () => {
    document.querySelector('#name').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#message').value = ''
}

const validaForm = () => {
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const message = document.querySelector('#message')

    if (name.value == "")                                  
    { 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        return false; 
    } 

    if (message.value == "")                                  
    { 
        return false; 
    } 
    return true
}

closeButtons = document.querySelectorAll('.close');

for (let index = 0; index < closeButtons.length; index++) {
    const close = closeButtons[index];
    close.addEventListener('click', () => {
        close.parentElement.style.display = 'none'   
    })
    
}
