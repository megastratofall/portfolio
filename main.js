/*Toggle icon navbar START---------------> */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => { 
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*Toggle icon navbar END-----------------> */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        let link = document.querySelector('header nav a[href*=' + id + ']');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the current link
            link.classList.add('active');
        }
    });

/*Sticky navbar-------START-------------------------------------> */
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/* remove toggle icon and navbar when click navbar link (scroll)*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
/*Sticky navbar-----END-----------------------------------------> */
};

/*scroll reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 50
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*FORM START------------------------------------------------------------------------------------> */

function validateForm() {
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Verificar que se haya ingresado un correo electrónico válido
    if (!validateEmail(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return false;
    }

    // Verificar que el número de teléfono tenga un formato válido (opcional)
    if (phone !== '' && !validatePhone(phone)) {
    alert('Por favor, ingrese un número de teléfono válido.');
    return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^\d{10}$/; // Esto valida un número de teléfono de 10 dígitos, ajusta según sea necesario
    return re.test(phone);
}

const $form = document.querySelector('#form')
const $loader = document.createElement('div');
$loader.classList.add('loader');
$form.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(this);
    // Agregar el loader al formulario
    $form.appendChild($loader);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });
    if (response.ok) {
        this.reset();
        // Ocultar el loader después de recibir una respuesta del servidor
        $loader.style.display = 'none';
        alert('Message sent! I will contact you as soon as possible.');
    }
}

/*FORM END------------------------------------------------------------------------------------>*/

