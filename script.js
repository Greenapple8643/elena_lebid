const translations = {
    en: {
        aboutTitle: "About Elena",
        aboutText: "Elena Lebid is a passionate professional, running multiple successful businesses in child’s speech assisting, choral singing, and theatre performances.",
        servicesTitle: "Services",
        speechService: "Child's Speech Assisting",
        speechText: "Helping children with speech development and confidence building.",
        choralService: "Choral Singing",
        choralText: "Professional choral singing classes and group performances.",
        theatreService: "Theatre Performances",
        theatreText: "Directing theatre productions with both children and adults.",
        reviewsTitle: "Client Reviews",
        contactTitle: "Contact Elena",
        nameLabel: "Name:",
        emailLabel: "Email:",
        messageLabel: "Message:",
        submitButton: "Send Message"
    },
    fr: {
        aboutTitle: "À propos d'Elena",
        aboutText: "Elena Lebid est une professionnelle passionnée, dirigeant plusieurs entreprises prospères dans l'assistance à la parole des enfants, le chant choral et les performances théâtrales.",
        servicesTitle: "Services",
        speechService: "Assistance à la parole des enfants",
        speechText: "Aider les enfants à développer leurs compétences oratoires et à renforcer leur confiance.",
        choralService: "Chant Choral",
        choralText: "Cours de chant choral et performances de groupe.",
        theatreService: "Performances Théâtrales",
        theatreText: "Mise en scène de productions théâtrales avec des enfants et des adultes.",
        reviewsTitle: "Avis des Clients",
        contactTitle: "Contactez Elena",
        nameLabel: "Nom:",
        emailLabel: "E-mail:",
        messageLabel: "Message:",
        submitButton: "Envoyer le message"
    },
    de: {
        aboutTitle: "Über Elena",
        aboutText: "Elena Lebid ist eine leidenschaftliche Fachfrau und betreibt mehrere erfolgreiche Unternehmen in den Bereichen Kinder-Sprachförderung, Chorgesang und Theateraufführungen.",
        servicesTitle: "Dienstleistungen",
        speechService: "Sprachförderung für Kinder",
        speechText: "Hilft Kindern, ihre Sprachfähigkeiten und ihr Selbstvertrauen zu entwickeln.",
        choralService: "Chorgesang",
        choralText: "Professionelle Chorgesangskurse und Gruppenauftritte.",
        theatreService: "Theateraufführungen",
        theatreText: "Regie von Theateraufführungen mit Kindern und Erwachsenen.",
        reviewsTitle: "Kundenbewertungen",
        contactTitle: "Kontaktieren Sie Elena",
        nameLabel: "Name:",
        emailLabel: "E-Mail:",
        messageLabel: "Nachricht:",
        submitButton: "Nachricht senden"
    },
    ua: {
        aboutTitle: "Про Олену",
        aboutText: "Олена Лебідь – пристрасний професіонал, який успішно керує кількома бізнесами, допомагаючи дітям з мовленням, хоровим співом і театральними постановками.",
        servicesTitle: "Послуги",
        speechService: "Допомога дітям з мовленням",
        speechText: "Допомога дітям у розвитку мовлення та впевненості.",
        choralService: "Хоровий спів",
        choralText: "Професійні заняття хоровим співом та групові виступи.",
        theatreService: "Театральні вистави",
        theatreText: "Режисура театральних постановок з дітьми та дорослими.",
        reviewsTitle: "Відгуки клієнтів",
        contactTitle: "Зв'яжіться з Оленою",
        nameLabel: "Ім'я:",
        emailLabel: "Електронна пошта:",
        messageLabel: "Повідомлення:",
        submitButton: "Надіслати повідомлення"
    }
};

// Add event listeners to flags
const flags = document.querySelectorAll('.flag');
flags.forEach(flag => {
    flag.addEventListener('click', function() {
        const selectedLanguage = this.getAttribute('data-lang');
        updateText(translations[selectedLanguage]);
    });
});

function updateText(language) {
    // Update content text for each section, except navbar
    document.getElementById('aboutTitle').textContent = language.aboutTitle;
    document.getElementById('aboutText').textContent = language.aboutText;
    document.getElementById('servicesTitle').textContent = language.servicesTitle;
    document.getElementById('speechService').textContent = language.speechService;
    document.getElementById('speechText').textContent = language.speechText;
    document.getElementById('choralService').textContent = language.choralService;
    document.getElementById('choralText').textContent = language.choralText;
    document.getElementById('theatreService').textContent = language.theatreService;
    document.getElementById('theatreText').textContent = language.theatreText;
    document.getElementById('reviewsTitle').textContent = language.reviewsTitle;
    document.getElementById('contactTitle').textContent = language.contactTitle;
    document.getElementById('nameLabel').textContent = language.nameLabel;
    document.getElementById('emailLabel').textContent = language.emailLabel;
    document.getElementById('messageLabel').textContent = language.messageLabel;
    document.getElementById('submitButton').textContent = language.submitButton;
}

document.addEventListener('DOMContentLoaded', () => {
    // Get all the service lines
    const serviceLines = document.querySelectorAll('.service-line');
    
    // Add the 'visible' class with a delay for each line
    serviceLines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add('visible');
        }, (index + 0.5) * 1000); // 1 second delay for each line
    });
});