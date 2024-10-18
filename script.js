// Existing JS code - do not modify
const flags = document.querySelectorAll('.flag');
flags.forEach(flag => {
    flag.addEventListener('click', function() {
        const selectedLanguage = this.getAttribute('data-lang');
        updateText(selectedLanguage);
    });
});

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

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;

    // Create a mailto link
    const subject = `Service Request from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ARequested Service: ${service}`;

    // Opens the user's default email client
    window.location.href = `mailto:lebedyl@ukr.net?subject=${subject}&body=${body}`;
});

// Translation object for all sections in English, French, German, and Ukrainian
const translations = {
    en: {
        navbar: ['Home', 'About', 'Services', 'Reviews', 'Contact'],
        home: {
            title: "Elena Lebid",
            services: ['Child\'s Speech Assisting', 'Theatre Performances', 'Choral Singing']
        },
        about: {
            title: 'About Elena',
            description1: 'Elena is a multilingual professional fluent in Ukrainian, Russian, and French. She is deeply committed to helping the Swiss community and has received numerous positive references from those she has worked with. Originally from Ukraine, Elena has a strong background in both music and education, holding a high musical education and a master’s degree from university.',
            description2: 'She offers three key services to her clients. First, she provides child\'s speech assisting, helping children develop clear and confident communication skills. Additionally, Elena leads choral singing classes, guiding group performances and fostering a love for music among her students. Finally, she directs theatre performances, where she encourages creativity and expression through engaging productions. Elena is thankful for the opportunity to contribute and be of service to the people of Switzerland.'
        },
        services: {
            title: 'My Services',
            speech: {
                title: "Child's Speech Assisting",
                description: "Assisting with speech development and confidence building.",
                steps: ['Step 1: Schedule a speech evaluation.', 'Step 2: Receive a tailored speech development program.', 'Step 3: Attend regular sessions.']
            },
            theatre: {
                title: "Theatre Performances",
                description: "Directing theatre productions for children and adults.",
                steps: ['Step 1: Sign up for an upcoming production.', 'Step 2: Attend practice sessions.', 'Step 3: Perform in front of a live audience.']
            },
            choral: {
                title: "Choral Singing",
                description: "Professional choral singing classes and performances.",
                steps: ['Step 1: Register for a singing class.', 'Step 2: Participate in group rehearsals.', 'Step 3: Showcase progress in performances.']
            }
        },
        reviews: {
            title: 'Clients\' Reviews',
            review1: ['Alice Muller', 'Elena\'s guidance helped my child speak with confidence and clarity.'],
            review2: ['Philippe Laurent', 'The theatre classes were an absolute delight. Elena has a unique way of bringing out the best in her students.'],
            review3: ['Sophie Dupont', 'I am amazed at the progress my daughter made in Elena\'s choral singing class.'],
            review4: ['Jean-Luc Favre', 'Elena\'s speech therapy sessions were a game-changer for our family.'],
            review5: ['Maryna Lando', 'Top-notch service! Friendly staff and efficient work. Will return for sure!'],
            review6: ['Tetiana Todorenko', 'Elena\'s expertise in speech therapy made a remarkable difference in our son\'s communication skills.']
        },
        contact: {
            title: 'Contact Me',
            name: 'Name:',
            email: 'Email:',
            phone: 'Phone:',
            service: 'Requested Service:',
            submit: 'Send Message'
        }
    },
    fr: {
        navbar: ['Accueil', 'À propos', 'Services', 'Avis', 'Contact'],
        home: {
            title: "Elena Lebid",
            services: ['Assistance à la parole des enfants', 'Performances théâtrales', 'Chant choral']
        },
        about: {
            title: 'À propos d\'Elena',
            description1: 'Elena est une professionnelle multilingue, maîtrisant l\'ukrainien, le russe et le français. Elle est profondément engagée à aider la communauté suisse et a reçu de nombreuses références positives de ceux avec qui elle a travaillé. Originaire d\'Ukraine, Elena a une solide expérience à la fois en musique et en éducation, avec un diplôme supérieur en musique et une maîtrise universitaire.',
            description2: 'Elle offre trois services clés à ses clients. Premièrement, elle aide les enfants à développer des compétences de communication claires et confiantes. En outre, Elena dirige des cours de chant choral, guidant des performances de groupe et inculquant un amour pour la musique. Enfin, elle met en scène des performances théâtrales, encourageant la créativité et l\'expression à travers des productions engageantes. Elena est reconnaissante de pouvoir contribuer et être au service des habitants de la Suisse.'
        },
        services: {
            title: 'Mes Services',
            speech: {
                title: "Assistance à la parole des enfants",
                description: "Aider au développement de la parole et à la confiance.",
                steps: ['Étape 1: Planifiez une évaluation.', 'Étape 2: Recevez un programme adapté.', 'Étape 3: Participez à des séances régulières.']
            },
            theatre: {
                title: "Performances théâtrales",
                description: "Direction de productions théâtrales pour enfants et adultes.",
                steps: ['Étape 1: Inscrivez-vous à une production.', 'Étape 2: Assistez aux répétitions.', 'Étape 3: Montez sur scène devant un public.']
            },
            choral: {
                title: "Chant choral",
                description: "Cours de chant choral et performances.",
                steps: ['Étape 1: Inscrivez-vous à un cours de chant.', 'Étape 2: Participez aux répétitions.', 'Étape 3: Présentez vos progrès en performance.']
            }
        },
        reviews: {
            title: 'Avis des Clients',
            review1: ['Alice Muller', 'Les conseils d\'Elena ont aidé mon enfant à parler avec confiance et clarté.'],
            review2: ['Philippe Laurent', 'Les cours de théâtre étaient un pur bonheur.'],
            review3: ['Sophie Dupont', 'Je suis impressionnée par les progrès de ma fille dans les cours de chant d\'Elena.'],
            review4: ['Jean-Luc Favre', 'Les séances de thérapie d\'Elena ont transformé la communication de notre enfant.'],
            review5: ['Maryna Lando', 'Service impeccable! Personnel amical et travail efficace. Je reviendrai sûrement!'],
            review6: ['Tetiana Todorenko', 'L\'expertise d\'Elena en thérapie vocale a fait une différence remarquable.']
        },
        contact: {
            title: 'Contactez-moi',
            name: 'Nom:',
            email: 'Email:',
            phone: 'Téléphone:',
            service: 'Service demandé:',
            submit: 'Envoyer le message'
        }
    },
    de: {
        navbar: ['Startseite', 'Über', 'Dienstleistungen', 'Bewertungen', 'Kontakt'],
        home: {
            title: "Elena Lebid",
            services: ['Kinder Sprachassistenz', 'Theateraufführungen', 'Chorgesang']
        },
        about: {
            title: 'Über Elena',
            description1: 'Elena ist eine mehrsprachige Fachkraft, die fließend Ukrainisch, Russisch und Französisch spricht. Sie engagiert sich stark für die Hilfe an die Schweizer Gemeinschaft und hat zahlreiche positive Referenzen erhalten. Ursprünglich aus der Ukraine, hat Elena einen starken Hintergrund in Musik und Bildung, mit einem hohen musikalischen Abschluss und einem Master-Abschluss.',
            description2: 'Sie bietet ihren Kunden drei wichtige Dienstleistungen an. Erstens hilft sie Kindern, klare und selbstbewusste Kommunikationsfähigkeiten zu entwickeln. Darüber hinaus leitet Elena Chorgesangskurse, führt Gruppenaufführungen und fördert die Liebe zur Musik bei ihren Schülern. Schließlich führt sie Theateraufführungen, bei denen sie Kreativität und Ausdruck durch spannende Produktionen fördert. Elena ist dankbar für die Gelegenheit, den Menschen in der Schweiz zu dienen.'
        },
        services: {
            title: 'Meine Dienstleistungen',
            speech: {
                title: "Kinder Sprachassistenz",
                description: "Unterstützung bei der Sprachentwicklung und dem Selbstbewusstsein.",
                steps: ['Schritt 1: Planen Sie eine Bewertung.', 'Schritt 2: Erhalten Sie ein maßgeschneidertes Programm.', 'Schritt 3: Nehmen Sie an regelmäßigen Sitzungen teil.']
            },
            theatre: {
                title: "Theateraufführungen",
                description: "Leitung von Theaterproduktionen für Kinder und Erwachsene.",
                steps: ['Schritt 1: Melden Sie sich für eine Produktion an.', 'Schritt 2: Besuchen Sie Proben.', 'Schritt 3: Treten Sie vor einem Publikum auf.']
            },
            choral: {
                title: "Chorgesang",
                description: "Professionelle Chorgesang-Kurse und Aufführungen.",
                steps: ['Schritt 1: Melden Sie sich für einen Gesangskurs an.', 'Schritt 2: Nehmen Sie an Gruppenproben teil.', 'Schritt 3: Präsentieren Sie Ihre Fortschritte.']
            }
        },
        reviews: {
            title: 'Kundenbewertungen',
            review1: ['Alice Muller', 'Elena hat meinem Kind geholfen, selbstbewusst und klar zu sprechen.'],
            review2: ['Philippe Laurent', 'Die Theaterkurse waren ein absolutes Vergnügen.'],
            review3: ['Sophie Dupont', 'Ich bin erstaunt über den Fortschritt meiner Tochter in Elenas Chorgesang-Kurs.'],
            review4: ['Jean-Luc Favre', 'Elena\'s Sprachtherapie-Sitzungen waren eine Wende für unsere Familie.'],
            review5: ['Maryna Lando', 'Erstklassiger Service! Freundliches Personal und effiziente Arbeit. Wir kommen auf jeden Fall wieder!'],
            review6: ['Tetiana Todorenko', 'Elenas Expertise in der Sprachtherapie hat einen bemerkenswerten Unterschied gemacht.']
        },
        contact: {
            title: 'Kontaktieren Sie mich',
            name: 'Name:',
            email: 'Email:',
            phone: 'Telefon:',
            service: 'Angeforderter Dienst:',
            submit: 'Nachricht senden'
        }
    },
    ua: {
        navbar: ['Головна', 'Про мене', 'Послуги', 'Відгуки', 'Контакти'],
        home: {
            title: "Олена Лебідь",
            services: ['Допомога дітям з мовленням', 'Театральні вистави', 'Хоровий спів']
        },
        about: {
            title: 'Про Олену',
            description1: 'Олена — багатомовний професіонал, яка вільно володіє українською, російською та французькою мовами. Вона глибоко віддана допомозі швейцарській громаді та отримала численні позитивні відгуки від людей, з якими вона працювала. Олена походить з України, має міцну музичну та педагогічну освіту, зокрема вищу музичну освіту та ступінь магістра.',
            description2: 'Вона пропонує три основні послуги своїм клієнтам. По-перше, вона допомагає дітям розвивати чіткі та впевнені навички спілкування. Крім того, Олена проводить заняття з хорового співу, керує груповими виступами та прищеплює своїм учням любов до музики. Нарешті, вона керує театральними виставами, де заохочує творчість і самовираження через захоплюючі постановки. Олена вдячна за можливість допомагати людям у Швейцарії.'
        },
        services: {
            title: 'Мої Послуги',
            speech: {
                title: "Допомога дітям з мовленням",
                description: "Допомога у розвитку мовлення та впевненості.",
                steps: ['Крок 1: Запишіться на оцінку.', 'Крок 2: Отримайте індивідуальну програму.', 'Крок 3: Відвідуйте регулярні заняття.']
            },
            theatre: {
                title: "Театральні вистави",
                description: "Режисура театральних постановок для дітей і дорослих.",
                steps: ['Крок 1: Запишіться на виставу.', 'Крок 2: Відвідуйте репетиції.', 'Крок 3: Виступайте перед аудиторією.']
            },
            choral: {
                title: "Хоровий спів",
                description: "Професійні заняття хоровим співом та виступи.",
                steps: ['Крок 1: Зареєструйтесь на заняття.', 'Крок 2: Відвідуйте репетиції.', 'Крок 3: Покажіть свої досягнення.']
            }
        },
        reviews: {
            title: 'Відгуки Клієнтів',
            review1: ['Аліса Мюллер', 'Керівництво Олени допомогло моїй дитині впевнено і чітко говорити.'],
            review2: ['Філіп Лоран', 'Курси театру були справжнім задоволенням. Олена вміє вивести найкраще в своїх учнях.'],
            review3: ['Софія Дюпон', 'Я вражена прогресом моєї доньки у хорових заняттях Олени.'],
            review4: ['Жан-Люк Фавр', 'Сеанси мовної терапії Олени стали справжньою знахідкою для нашої сім\'ї.'],
            review5: ['Марина Ландо', 'Найвищий рівень послуг! Привітний персонал та ефективна робота. Обов\'язково повернемося!'],
            review6: ['Тетяна Тодоренко', 'Експертиза Олени у мовній терапії принесла неймовірний прогрес у комунікації нашого сина.']
        },
        contact: {
            title: 'Зв\'яжіться зі мною',
            name: 'Ім\'я:',
            email: 'Ел. пошта:',
            phone: 'Телефон:',
            service: 'Запитана послуга:',
            submit: 'Відправити повідомлення'
        }
    }
};

function updateText(language) {
    const selectedLang = translations[language];

    // Update navbar
    const navbarItems = document.querySelectorAll('.navbar li a');
    navbarItems.forEach((item, index) => {
        item.textContent = selectedLang.navbar[index];
    });

    // Update home section
    document.querySelector('#home h1').textContent = selectedLang.home.title;
    const homeServiceLines = document.querySelectorAll('.service-line');
    homeServiceLines.forEach((line, index) => {
        line.textContent = selectedLang.home.services[index];
    });

    // Update about section - properly handle multiple paragraphs
    document.querySelector('#about h1').textContent = selectedLang.about.title;

    // Remove all existing paragraphs in the About section (if more than one exists)
    const aboutSection = document.querySelector('#about');
    const aboutTitle = document.querySelector('#about h1');
    const paragraphs = aboutSection.querySelectorAll('p');
    paragraphs.forEach(paragraph => paragraph.remove()); // Remove all existing paragraphs

    // Create two new paragraph elements with the translated text
    const newParagraph1 = document.createElement('p');
    const newParagraph2 = document.createElement('p');

    newParagraph1.textContent = selectedLang.about.description1; // First paragraph
    newParagraph2.textContent = selectedLang.about.description2; // Second paragraph

    // Append the new paragraphs to the about section
    aboutSection.appendChild(newParagraph1);
    aboutSection.appendChild(newParagraph2);

    // Update services section
    document.querySelector('#services h2').textContent = selectedLang.services.title;
    
    // Update each service card
    document.querySelectorAll('.service-card').forEach((card, index) => {
        if (index === 0) {
            card.querySelector('h3').textContent = selectedLang.services.speech.title;
            card.querySelector('p').textContent = selectedLang.services.speech.description;
            const steps = card.querySelectorAll('.steps p');
            steps.forEach((step, stepIndex) => {
                step.textContent = selectedLang.services.speech.steps[stepIndex];
            });
        } else if (index === 1) {
            card.querySelector('h3').textContent = selectedLang.services.theatre.title;
            card.querySelector('p').textContent = selectedLang.services.theatre.description;
            const steps = card.querySelectorAll('.steps p');
            steps.forEach((step, stepIndex) => {
                step.textContent = selectedLang.services.theatre.steps[stepIndex];
            });
        } else if (index === 2) {
            card.querySelector('h3').textContent = selectedLang.services.choral.title;
            card.querySelector('p').textContent = selectedLang.services.choral.description;
            const steps = card.querySelectorAll('.steps p');
            steps.forEach((step, stepIndex) => {
                step.textContent = selectedLang.services.choral.steps[stepIndex];
            });
        }
    });

    // Update reviews section
    document.querySelector('#reviews h2').textContent = selectedLang.reviews.title;
    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach((card, index) => {
        card.querySelector('.review-name').textContent = selectedLang.reviews[`review${index + 1}`][0];
        card.querySelector('.review-text').textContent = selectedLang.reviews[`review${index + 1}`][1];
    });

    // Update contact section
    document.querySelector('#contact h2').textContent = selectedLang.contact.title;
    document.querySelector('label[for="name"]').textContent = selectedLang.contact.name;
    document.querySelector('label[for="email"]').textContent = selectedLang.contact.email;
    document.querySelector('label[for="phone"]').textContent = selectedLang.contact.phone;
    document.querySelector('label[for="service"]').textContent = selectedLang.contact.service;
    document.querySelector('.submit-btn').textContent = selectedLang.contact.submit;
}
