// Translation Data
const translations = {
    en: {
        navbar: {
            home: "Home",
            about: "About",
            services: "Services",
            reviews: "Reviews",
            contact: "Contact"
        },
        services: {
            title: "My Services",
            service1_title: "Child's Speech Assisting",
            service1_desc: "Assisting with speech development and confidence building.",
            service1_steps: [
                "Step 1: Schedule a speech evaluation to identify your child's needs.",
                "Step 2: Receive a tailored speech development program.",
                "Step 3: Attend regular sessions to improve speech skills."
            ],
            service2_title: "Theatre Performances",
            service2_desc: "Directing theatre productions with both children and adults.",
            service2_steps: [
                "Step 1: Sign up for an upcoming theatre production.",
                "Step 2: Attend scheduled practice sessions with the cast.",
                "Step 3: Take the stage for live shows with a full audience."
            ],
            service3_title: "Choral Singing",
            service3_desc: "Professional choral singing classes and group performances.",
            service3_steps: [
                "Step 1: Register for a suitable choral singing class.",
                "Step 2: Participate in group rehearsals for skill enhancement.",
                "Step 3: Showcase your progress in group performances."
            ]
        },
        reviews: [
            {
                name: "Alice Muller",
                text: "\"Elena's guidance helped my child speak with confidence and clarity. The progress we’ve seen in just a few months has been truly remarkable!\"",
                location: "Nyon, Switzerland",
                date: "04/10/2023",
                rating: "10/10"
            },
            {
                name: "Philippe Laurent",
                text: "\"The theatre classes were an absolute delight. Elena has a unique way of bringing out the best in her students, making each performance memorable.\"",
                location: "Lausanne, Switzerland",
                date: "06/20/2023",
                rating: "9.5/10"
            },
            {
                name: "Sophie Dupont",
                text: "\"I am amazed at the progress my daughter made in Elena's choral singing class. Her confidence has soared, and her voice has improved greatly.\"",
                location: "Vevey, Switzerland",
                date: "08/05/2023",
                rating: "9.2/10"
            },
            {
                name: "Jean-Luc Favre",
                text: "\"Elena's speech therapy sessions were a game-changer for our family. Our son's communication skills have significantly improved, and we couldn’t be happier.\"",
                location: "Montreux, Switzerland",
                date: "09/15/2023",
                rating: "10/10"
            },
            {
                name: "Maryna Lando",
                text: "\"Top-notch service! Friendly staff and efficient work. Will return for sure!\"",
                location: "Lausanne, Switzerland",
                date: "08/06/2024",
                rating: "9.8/10"
            },
            {
                name: "Tetiana Todorenko",
                text: "\"Elena's expertise in speech therapy made a remarkable difference in our son's communication skills. Highly recommend Elena's services to any parent looking for real results!\"",
                location: "Morges, Switzerland",
                date: "09/20/2024",
                rating: "10/10"
            }
        ]
    },
    fr: {
        navbar: {
            home: "Accueil",
            about: "À propos",
            services: "Services",
            reviews: "Avis",
            contact: "Contact"
        },
        services: {
            title: "Mes Services",
            service1_title: "Assistance Parole Enfants",
            service1_desc: "Aide au développement de la parole et renforcement de la confiance en soi.",
            service1_steps: [
                "Étape 1: Planifiez une évaluation de la parole pour identifier les besoins de votre enfant.",
                "Étape 2: Recevez un programme de développement de la parole sur mesure.",
                "Étape 3: Assistez à des sessions régulières pour améliorer les compétences en parole."
            ],
            service2_title: "Performances Théâtrales",
            service2_desc: "Mise en scène de productions théâtrales avec des enfants et des adultes.",
            service2_steps: [
                "Étape 1: Inscrivez-vous à une production théâtrale à venir.",
                "Étape 2: Participez aux répétitions programmées avec la troupe.",
                "Étape 3: Montez sur scène pour des spectacles en direct devant un public."
            ],
            service3_title: "Chant Choral",
            service3_desc: "Cours de chant choral professionnel et performances de groupe.",
            service3_steps: [
                "Étape 1: Inscrivez-vous à un cours de chant choral adapté.",
                "Étape 2: Participez aux répétitions de groupe pour améliorer vos compétences.",
                "Étape 3: Présentez vos progrès lors de performances de groupe."
            ]
        },
        reviews: [
            {
                name: "Alice Muller",
                text: "\"L'aide d'Elena a permis à mon enfant de parler avec confiance et clarté. Les progrès que nous avons vus en quelques mois sont vraiment remarquables !\"",
                location: "Nyon, Suisse",
                date: "10/04/2023",
                rating: "10/10"
            },
            {
                name: "Philippe Laurent",
                text: "\"Les cours de théâtre étaient un véritable plaisir. Elena a un talent unique pour faire ressortir le meilleur chez ses élèves.\"",
                location: "Lausanne, Suisse",
                date: "20/06/2023",
                rating: "9.5/10"
            },
            {
                name: "Sophie Dupont",
                text: "\"Je suis étonnée des progrès de ma fille dans le cours de chant choral d'Elena. Sa confiance a augmenté, et sa voix s'est grandement améliorée.\"",
                location: "Vevey, Suisse",
                date: "05/08/2023",
                rating: "9.2/10"
            },
            {
                name: "Jean-Luc Favre",
                text: "\"Les séances de thérapie de la parole avec Elena ont changé la vie de notre famille. Les compétences en communication de notre fils se sont grandement améliorées.\"",
                location: "Montreux, Suisse",
                date: "15/09/2023",
                rating: "10/10"
            },
            {
                name: "Maryna Lando",
                text: "\"Service de premier ordre ! Personnel sympathique et travail efficace. Je reviendrai sûrement !\"",
                location: "Lausanne, Suisse",
                date: "06/08/2024",
                rating: "9.8/10"
            },
            {
                name: "Tetiana Todorenko",
                text: "\"L'expertise d'Elena en thérapie de la parole a fait une différence remarquable dans les compétences de communication de notre fils.\"",
                location: "Morges, Suisse",
                date: "20/09/2024",
                rating: "10/10"
            }
        ]
    },
    // Add German and Ukrainian translations similarly...
    de: {
        // German translations for navbar, services, and reviews
    },
    ua: {
        // Ukrainian translations for navbar, services, and reviews
    }
};

// Function to set language
function setLanguage(lang) {
    // Update Navbar
    document.querySelector('a[href="#home"]').textContent = translations[lang].navbar.home;
    document.querySelector('a[href="#about"]').textContent = translations[lang].navbar.about;
    document.querySelector('a[href="#services"]').textContent = translations[lang].navbar.services;
    document.querySelector('a[href="#reviews"]').textContent = translations[lang].navbar.reviews;
    document.querySelector('a[href="#contact"]').textContent = translations[lang].navbar.contact;

    // Update Services Section
    document.querySelector('#services h2').textContent = translations[lang].services.title;
    document.querySelector('.service-card:nth-child(1) h3').textContent = translations[lang].services.service1_title;
    document.querySelector('.service-card:nth-child(1) p').textContent = translations[lang].services.service1_desc;
    document.querySelector('.service-card:nth-child(1) .steps p:nth-child(1)').textContent = translations[lang].services.service1_steps[0];
    document.querySelector('.service-card:nth-child(1) .steps p:nth-child(2)').textContent = translations[lang].services.service1_steps[1];
    document.querySelector('.service-card:nth-child(1) .steps p:nth-child(3)').textContent = translations[lang].services.service1_steps[2];

    document.querySelector('.service-card:nth-child(2) h3').textContent = translations[lang].services.service2_title;
    document.querySelector('.service-card:nth-child(2) p').textContent = translations[lang].services.service2_desc;
    document.querySelector('.service-card:nth-child(2) .steps p:nth-child(1)').textContent = translations[lang].services.service2_steps[0];
    document.querySelector('.service-card:nth-child(2) .steps p:nth-child(2)').textContent = translations[lang].services.service2_steps[1];
    document.querySelector('.service-card:nth-child(2) .steps p:nth-child(3)').textContent = translations[lang].services.service2_steps[2];

    document.querySelector('.service-card:nth-child(3) h3').textContent = translations[lang].services.service3_title;
    document.querySelector('.service-card:nth-child(3) p').textContent = translations[lang].services.service3_desc;
    document.querySelector('.service-card:nth-child(3) .steps p:nth-child(1)').textContent = translations[lang].services.service3_steps[0];
    document.querySelector('.service-card:nth-child(3) .steps p:nth-child(2)').textContent = translations[lang].services.service3_steps[1];
    document.querySelector('.service-card:nth-child(3) .steps p:nth-child(3)').textContent = translations[lang].services.service3_steps[2];

    // Update Reviews Section
    document.querySelectorAll('.review-card').forEach((card, index) => {
        const review = translations[lang].reviews[index];
        card.querySelector('.review-name').textContent = review.name;
        card.querySelector('.review-text').textContent = review.text;
        const info = card.querySelectorAll('.review-info span');
        info[0].textContent = review.location;
        info[1].textContent = review.date;
        info[2].textContent = review.rating;
    });
}

// Set default language (English)
setLanguage('en');

// Event listener for language selection
document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', function () {
        const selectedLang = this.getAttribute('data-lang');
        setLanguage(selectedLang);
    });
});


