document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    var fullName = document.getElementById('full-name').value;
    var guests = document.getElementById('guests').value;
    var attend = document.getElementById('attend').value;

    console.log(attend);
    // Verifica se tutti i campi obbligatori sono compilati
    if (!fullName || ( attend == "yes" && !guests)) {
        event.preventDefault();
        alert("Please fill in all required fields.");
    }
    

    event.preventDefault(); // Prevent form submission to stay on the page

    // Ottieni il modulo
    const form = document.getElementById("rsvp-form");

    // Invia il modulo (senza AJAX) al URL di Google Form
    form.submit();

    // Mostra un messaggio di conferma (opzionale)
    document.getElementById("confirmation-message").style.display = "block";

    // Nascondi il modulo
    document.getElementById("rsvp-form").style.display = "none";

    // Dopo 5 secondi, reindirizza l'utente al tuo sito
    setTimeout(function() {
        window.location.href = "/"; // Modifica con la tua homepage o altra pagina del sito
    }, 200); // 5000ms = 5 secondi



    //alert("Thank you for your submission! Your response has been recorded.");
});

/*
document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission to stay on the page

    // Ottieni il modulo
    const form = document.getElementById("rsvp-form");

    // Invia il modulo (senza AJAX) al URL di Google Form
    form.submit();

    // Mostra un messaggio di conferma (opzionale)
    document.getElementById("confirmation-message").style.display = "block";

    // Nascondi il modulo
    document.getElementById("rsvp-form").style.display = "none";

    // Dopo 5 secondi, reindirizza l'utente al tuo sito
    setTimeout(function() {
        window.location.href = "/"; // Modifica con la tua homepage o altra pagina del sito
    }, 5000); // 5000ms = 5 secondi
});
*/




/*
document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene il comportamento di invio standard del modulo

    console.log("INVATOOO!!");
    // Ottieni i dati dal modulo
    const form = document.getElementById("rsvp-form");
    const formData = new FormData(form);

    // Mostra il messaggio di attesa (facoltativo)
    //document.getElementById("confirmation-message").style.display = "none"; // Nascondi il messaggio di conferma
    document.getElementById("rsvp-form").style.display = "none"; // Nascondi il pulsante per tornare alla home

    // Crea la richiesta AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "YOUR_SERVER_ENDPOINT", true); // Sostituisci con l'endpoint del tuo server o un servizio come Formspree

    // Quando la richiesta è completata
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Mostra il messaggio di conferma dell'invio
            document.getElementById("rsvp-form").style.display = "none"; // Nascondi il modulo
            document.getElementById("confirmation-message").style.display = "block"; // Mostra il messaggio di conferma
            document.getElementById("back-btn").style.display = "inline-block"; // Mostra il pulsante per tornare alla home
        } else {
            // In caso di errore nell'invio
            alert("Sorry, there was an error submitting your form. Please try again.");
        }
    };

    // Invia i dati al server
    xhr.send(formData);
});
*/

// Funzione per determinare il colore di sfondo della sezione
function changeMenuColor() {
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('header');
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Se la sezione è visibile nella finestra, cambia il colore del menù
        if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight) {
            // Cambia il colore del menù in base alla sezione
            const sectionId = section.id;
            switch (sectionId) {
                case 'home':
                    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                    break;
                case 'date-location':
                    nav.style.backgroundColor = 'rgba(10, 10, 10, 0.8)'; // Un grigio scuro per "Date & Location"
                    break;
                case 'program':
                    nav.style.backgroundColor = 'rgba(0, 50, 100, 0.8)'; // Blu per la sezione "Itinerary"
                    break;
                case 'rsvp':
                    nav.style.backgroundColor = 'rgba(255, 165, 35, 0.8)'; // Un arancione per la sezione RSVP
                    break;
                case 'faq':
                    nav.style.backgroundColor = 'rgba(25, 25, 25, 0.8)'; // Un grigio scuro per la sezione FAQ
                    break;
                case 'contact':
                    nav.style.backgroundColor = 'rgba(50, 50, 50, 0.8)'; // Un grigio scuro per la sezione Contact
                    break;
                default:
                    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                    break;
            }
        }
    });
}

// Event listener per il movimento dello scroll
window.addEventListener('scroll', changeMenuColor);

// Esegui la funzione al caricamento della pagina per iniziare con il colore giusto
changeMenuColor();

window.onscroll = function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > 100) {
        document.querySelector('header').classList.add('scrolled');
    } else {
        document.querySelector('header').classList.remove('scrolled');
    }

    // Nasconde il menù quando si scorre verso il basso
    if (currentScroll > 200) {
        document.querySelector('header').classList.add('hide');
    } else {
        document.querySelector('header').classList.remove('hide');
    }
}
/*
i18next.init({
    lng: 'en', // lingua predefinita
    resources: {
        en: {
            translation: {
                "home": "Home",
                "date-location": "Date & Location",
                "program": "Wedding Itinerary",
                "rsvp": "RSVP",
                "faq": "FAQ",
                "contact": "Contact Us",
                "welcome-text": "A Day to Remember",
                "join-us": "An unforgettable event, with you.",
                "celebrate": "Join us in celebrating this special day.",
                "rsvp-button": "RSVP Now",
                "date": "Date",
                "location": "Location",
                "wedding-venue": "Wedding Venue",
                "address": "Address",
                "wedding-itinerary-header": "Wedding Day Itinerary",
                "ceremony-time": "15:00",
                "reception-time": "16:30",
                "dinner-time": "18:00",
                "party-time": "20:30",
                "farewell-time": "Midnight",
                "confirm-attendance": "Confirm your attendance",
                "rsvp-description": "We are thrilled to celebrate this special day with you! Please confirm your attendance.",
                "name": "Name and Surname",
                "guests": "Number of Guests",
                "special-requests": "Special Requests",
                "will-attend": "Will you be attending?",
                "confirm-attendance-button": "Confirm your attendance",
                "faq-header": "Frequently Asked Questions",
                "plus-one": "Can I bring a plus one?",
                "plus-one-answer": "Absolutely! If you would like to bring a guest, please indicate the number in the RSVP section.",
                "dress-code": "What is the dress code?",
                "dress-code-answer": "We would love to see everyone dressed elegantly, so we recommend formal attire for the occasion.",
                "children": "Can I bring children?",
                "children-answer": "For logistical reasons, we would prefer a child-free wedding. If you have specific needs, please contact us directly.",
                "allergies": "Are there options for guests with food allergies?",
                "allergies-answer": "We will accommodate all special requests, as indicated in the RSVP section. Please make sure to notify us in advance.",
                "venue-access": "How do I get to the venue?",
                "venue-access-answer": "The venue is easily accessible by public transport or by car. You can check the map in the Date & Location section.",
                "contact-header": "Contact Us",
                "contact-description": "Have any questions or requests? We are here to help!",
                "message": "Message",
                "send-message": "Send Message"
            }
        },
        ur: {
            translation: {
                "home": "گھر",
                "date-location": "تاریخ اور مقام",
                "program": "شادی کا پروگرام",
                "rsvp": "آر ایس وی پی",
                "faq": "عمومی سوالات",
                "contact": "ہم سے رابطہ کریں",
                "welcome-text": "یادگار دن",
                "join-us": "ایک ناقابل فراموش موقع، آپ کے ساتھ۔",
                "celebrate": "ہمارے ساتھ اس خاص دن کو منائیں۔",
                "rsvp-button": "اب شرکت کی تصدیق کریں",
                "date": "تاریخ",
                "location": "مقام",
                "wedding-venue": "شادی کی جگہ",
                "address": "پتہ",
                "wedding-itinerary-header": "شادی کا پروگرام",
                "ceremony-time": "15:00",
                "reception-time": "16:30",
                "dinner-time": "18:00",
                "party-time": "20:30",
                "farewell-time": "دھیری رات",
                "confirm-attendance": "اپنی شرکت کی تصدیق کریں",
                "rsvp-description": "ہمیں اس خاص دن کو آپ کے ساتھ منانے کا خوشی ہے! براہ کرم اپنی شرکت کی تصدیق کریں۔",
                "name": "نام اور عہدہ",
                "guests": "مہمانوں کی تعداد",
                "special-requests": "خصوصی درخواستیں",
                "will-attend": "کیا آپ شرکت کریں گے؟",
                "confirm-attendance-button": "اپنی شرکت کی تصدیق کریں",
                "faq-header": "عمومی سوالات",
                "plus-one": "کیا میں ایک اضافی مہمان لا سکتا ہوں؟",
                "plus-one-answer": "بالکل! اگر آپ کوئی مہمان لانا چاہتے ہیں، تو براہ کرم RSVP سیکشن میں اس کی تعداد بتائیں۔",
                "dress-code": "کیا ڈریس کوڈ ہے؟",
                "dress-code-answer": "ہم چاہتے ہیں کہ ہر شخص دلکش نظر آئے، اس لیے ہم رسمی لباس کی تجویز دیتے ہیں۔",
                "children": "کیا میں بچے لا سکتا ہوں؟",
                "children-answer": "لاجسٹک وجوہات کی بنا پر، ہم بچوں کے بغیر شادی کو ترجیح دیتے ہیں۔ اگر آپ کے پاس مخصوص ضروریات ہیں تو براہ کرم ہم سے براہ راست رابطہ کریں۔",
                "allergies": "کیا کھانے کی حساسیتوں کے لیے مہمانوں کے لیے آپشنز ہیں؟",
                "allergies-answer": "ہم تمام خصوصی درخواستوں کو پورا کریں گے، جیسا کہ RSVP سیکشن میں بتایا گیا ہے۔ براہ کرم پیشگی اطلاع دیں۔",
                "venue-access": "میں مقام تک کیسے پہنچوں؟",
                "venue-access-answer": "مقام عوامی نقل و حمل یا کار کے ذریعے آسانی سے پہنچا جا سکتا ہے۔ آپ تاریخ اور مقام کے سیکشن میں نقشہ دیکھ سکتے ہیں۔",
                "contact-header": "ہم سے رابطہ کریں",
                "contact-description": "کیا آپ کے پاس کوئی سوالات یا درخواستیں ہیں؟ ہم مدد کے لیے یہاں ہیں!",
                "message": "پیغام",
                "send-message": "پیغام بھیجیں"
            }
        }
    }
});



function changeLanguage() {
    const language = document.getElementById('language-select').value;
    i18next.changeLanguage(language, () => {
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            el.innerHTML = i18next.t(el.getAttribute('data-i18n'));
        });
    });
}
*/
