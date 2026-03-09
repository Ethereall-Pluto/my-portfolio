// ============================================================
// TRANSLATIONS — all languages
// ============================================================
const translations = {
    en: {
        'welcome-title': 'Welcome',
        'welcome-subtitle': 'Choose your preferences',
        'theme-label': 'Theme:',
        'language-label': 'Language:',
        'confirm-btn': 'Continue',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-services': 'Services',
        'nav-portfolio': 'Portfolio',
        'nav-why': 'Why Me',
        'nav-contact': 'Contact',
        'status-available': 'Available',
        'hero-eyebrow': 'Freelance Specialist',
        'hero-title': 'Freelance Technical Specialist',
        'hero-subtitle': 'Python • C++ • Networking • 2D/3D AutoCAD',
        'btn-hire': 'Hire Me',
        'btn-work': 'See My Work',
        'btn-view': 'View Project',
        'stat-years': 'Years Exp.',
        'stat-projects': 'Projects',
        'stat-skills': 'Core Skills',
        'scroll-hint': 'Scroll',
        'about-label': '// about_me',
        'about-title': 'About Me',
        'about-text': 'I provide freelance services in software development, network configuration, and CAD design. My focus is delivering efficient, reliable, and practical solutions.',
        'about-text-2': 'Based in Germany, I work with clients internationally — bridging technical precision with clear communication across languages and disciplines.',
        'skills-label': '// tech_stack',
        'skills-title': 'Skills',
        'skill-cat-dev': 'Development',
        'skill-cat-net': 'Networking',
        'skill-cat-cad': 'CAD Design',
        'services-label': '// what_i_do',
        'services-title': 'Services',
        'service-1-title': 'Automation & Scripts',
        'service-1-desc': 'Python bots, data parsers, automation tools for clients.',
        'service-2-title': 'Networking',
        'service-2-desc': 'Design and configuration of networks in Cisco Packet Tracer.',
        'service-3-title': 'CAD Design',
        'service-3-desc': '2D technical drawings and 3D models with full documentation.',
        'service-4-title': 'Technical Consulting',
        'service-4-desc': 'Advice and solutions for technical and IT projects.',
        'portfolio-label': '// case_studies',
        'portfolio-title': 'Portfolio',
        'project-1-title': 'Telegram Automation Bot',
        'project-1-desc': 'A multi-feature Telegram bot for client automation — scheduling messages, parsing data feeds, and generating daily reports.',
        'project-2-title': 'Enterprise Network Design',
        'project-2-desc': 'Full network topology for a mid-size company: VLAN segmentation, inter-VLAN routing, DHCP, ACLs — all configured in Cisco Packet Tracer.',
        'project-3-title': 'Mechanical Parts – 3D Models',
        'project-3-desc': 'Set of 3D AutoCAD models for industrial mechanical parts with full technical documentation, dimensions, tolerances, and assembly drawings.',
        'showcase-caption': '// my_workspace.png',
        'why-label': '// why_me',
        'why-title': 'Why Choose Me',
        'why-1-title': 'Fast Communication',
        'why-1': 'Fast and clear communication — you always know where your project stands.',
        'why-2-title': 'Documented Solutions',
        'why-2': 'Structured and documented solutions delivered clean and maintainable.',
        'why-3-title': 'Wide Expertise',
        'why-3': 'Wide technical expertise spanning code, networks, and mechanical design.',
        'why-4-title': 'Quality Focus',
        'why-4': 'Focus on efficiency and quality — no bloat, just results.',
        'testimonials-label': '// client_feedback',
        'testimonials-title': 'Testimonials',
        'testimonial-1': '"Olexander delivered the Python automation tool ahead of schedule. Clear documentation and fast replies throughout the entire project."',
        'testimonial-1-role': 'IT Manager, Germany',
        'testimonial-2': '"The network design was exactly what we needed — structured, well-documented, and easy to hand off to our team. Highly recommended."',
        'testimonial-2-role': 'Startup Founder, Ukraine',
        'testimonial-3': '"Great CAD work — professional drawings with proper dimensions and full documentation. Would work with Olexander again."',
        'testimonial-3-role': 'Engineer, Netherlands',
        'contact-label': '// get_in_touch',
        'contact-title': 'Contact',
        'contact-intro': 'Ready to start a project? Reach out through any channel below.',
        'contact-email': 'Email',
        'contact-whatsapp': 'WhatsApp',
        'contact-telegram': 'Telegram',
        'contact-location': 'Location',
        'contact-status': 'Status',
        'contact-available': 'Available for freelance projects',
        'form-name-label': 'Name',
        'form-name-ph': 'Your Name',
        'form-email-label': 'Email',
        'form-email-ph': 'Your Email',
        'form-message-label': 'Message',
        'form-message-ph': 'Your Message',
        'form-submit': 'Send Message',
        'footer-text': 'Available for freelance projects',
    },
    uk: {
        'welcome-title': 'Ласкаво просимо',
        'welcome-subtitle': 'Виберіть свої переваги',
        'theme-label': 'Тема:',
        'language-label': 'Мова:',
        'confirm-btn': 'Продовжити',
        'nav-about': 'Про мене',
        'nav-skills': 'Навички',
        'nav-services': 'Послуги',
        'nav-portfolio': 'Портфоліо',
        'nav-why': 'Чому я',
        'nav-contact': 'Контакти',
        'status-available': 'Доступний',
        'hero-eyebrow': 'Фрилансер',
        'hero-title': 'Фрилансер-спеціаліст',
        'hero-subtitle': 'Python • C++ • Networking • 2D/3D AutoCAD',
        'btn-hire': 'Найняти мене',
        'btn-work': 'Мої роботи',
        'btn-view': 'Переглянути',
        'stat-years': 'Роки досвіду',
        'stat-projects': 'Проектів',
        'stat-skills': 'Навичок',
        'scroll-hint': 'Гортати',
        'about-label': '// про_мене',
        'about-title': 'Про мене',
        'about-text': 'Я надаю послуги з розробки програмного забезпечення, конфігурації мереж і дизайну САПР. Мій фокус — надавати ефективні, надійні та практичні рішення.',
        'about-text-2': 'Базуюся в Німеччині, працюю з клієнтами з усього світу — поєдную технічну точність з чіткою комунікацією.',
        'skills-label': '// технології',
        'skills-title': 'Навички',
        'skill-cat-dev': 'Розробка',
        'skill-cat-net': 'Мережі',
        'skill-cat-cad': 'CAD-дизайн',
        'services-label': '// що_я_роблю',
        'services-title': 'Послуги',
        'service-1-title': 'Автоматизація та скрипти',
        'service-1-desc': 'Телеграм-боти, парсери даних, інструменти автоматизації.',
        'service-2-title': 'Мережі',
        'service-2-desc': 'Проектування та конфігурація мереж в Cisco Packet Tracer.',
        'service-3-title': 'САПР-дизайн',
        'service-3-desc': '2D креслення, 3D моделі та повна технічна документація.',
        'service-4-title': 'Технічне консультування',
        'service-4-desc': 'Рекомендації та рішення для технічних та IT-проектів.',
        'portfolio-label': '// кейси',
        'portfolio-title': 'Портфоліо',
        'project-1-title': 'Telegram-бот для автоматизації',
        'project-1-desc': 'Багатофункціональний Telegram-бот: розсилки, парсинг даних, автоматичні звіти.',
        'project-2-title': 'Корпоративна мережа',
        'project-2-desc': 'Повна топологія мережі з VLAN, роутингом, DHCP та ACL у Cisco Packet Tracer.',
        'project-3-title': 'Механічні деталі — 3D моделі',
        'project-3-desc': '3D моделі AutoCAD для промислових деталей із повною технічною документацією.',
        'showcase-caption': '// моє_робоче_місце.png',
        'why-label': '// чому_я',
        'why-title': 'Чому саме я',
        'why-1-title': 'Швидка комунікація',
        'why-1': 'Швидка і ясна комунікація — ви завжди знаєте статус проекту.',
        'why-2-title': 'Задокументовані рішення',
        'why-2': 'Структуровані та задокументовані рішення, чисті й підтримувані.',
        'why-3-title': 'Широка експертиза',
        'why-3': 'Широка технічна експертиза: код, мережі та механічне проектування.',
        'why-4-title': 'Якість перш за все',
        'why-4': 'Акцент на ефективність і якість — без зайвого, тільки результат.',
        'testimonials-label': '// відгуки',
        'testimonials-title': 'Відгуки',
        'testimonial-1': '"Олександр здав інструмент автоматизації раніше терміну. Чітка документація і швидкі відповіді протягом усього проекту."',
        'testimonial-1-role': 'IT-менеджер, Німеччина',
        'testimonial-2': '"Мережевий дизайн — саме те, що нам потрібно. Структурований, задокументований, легко передати команді."',
        'testimonial-2-role': 'Засновник стартапу, Україна',
        'testimonial-3': '"Відмінна CAD-робота — професійні креслення з розмірами і повною документацією. Рекомендую."',
        'testimonial-3-role': 'Інженер, Нідерланди',
        'contact-label': '// зв\'язатися',
        'contact-title': 'Контакти',
        'contact-intro': 'Готові розпочати проект? Зв\'яжіться будь-яким зручним способом.',
        'contact-email': 'Email',
        'contact-whatsapp': 'WhatsApp',
        'contact-telegram': 'Telegram',
        'contact-location': 'Місцезнаходження',
        'contact-status': 'Статус',
        'contact-available': 'Доступний для фрилансових проектів',
        'form-name-label': 'Ім\'я',
        'form-name-ph': 'Ваше ім\'я',
        'form-email-label': 'Email',
        'form-email-ph': 'Ваш email',
        'form-message-label': 'Повідомлення',
        'form-message-ph': 'Ваше повідомлення',
        'form-submit': 'Надіслати',
        'footer-text': 'Доступний для фрилансових проектів',
    },
    de: {
        'welcome-title': 'Willkommen',
        'welcome-subtitle': 'Wählen Sie Ihre Einstellungen',
        'theme-label': 'Thema:',
        'language-label': 'Sprache:',
        'confirm-btn': 'Fortfahren',
        'nav-about': 'Über mich',
        'nav-skills': 'Fähigkeiten',
        'nav-services': 'Leistungen',
        'nav-portfolio': 'Portfolio',
        'nav-why': 'Warum ich',
        'nav-contact': 'Kontakt',
        'status-available': 'Verfügbar',
        'hero-eyebrow': 'Freiberufler',
        'hero-title': 'Freiberuflicher Technischer Spezialist',
        'hero-subtitle': 'Python • C++ • Networking • 2D/3D AutoCAD',
        'btn-hire': 'Mich einstellen',
        'btn-work': 'Meine Projekte',
        'btn-view': 'Ansehen',
        'stat-years': 'Jahre Erfahrung',
        'stat-projects': 'Projekte',
        'stat-skills': 'Kernkompetenzen',
        'scroll-hint': 'Scrollen',
        'about-label': '// über_mich',
        'about-title': 'Über mich',
        'about-text': 'Ich biete Dienstleistungen in Softwareentwicklung, Netzwerkkonfiguration und CAD-Design an. Mein Ziel: effiziente, zuverlässige und praktische Lösungen.',
        'about-text-2': 'Ich lebe in Deutschland und arbeite mit Kunden weltweit — technische Präzision und klare Kommunikation auf allen Ebenen.',
        'skills-label': '// technologien',
        'skills-title': 'Fähigkeiten',
        'skill-cat-dev': 'Entwicklung',
        'skill-cat-net': 'Netzwerke',
        'skill-cat-cad': 'CAD-Design',
        'services-label': '// was_ich_tue',
        'services-title': 'Leistungen',
        'service-1-title': 'Automatisierung & Skripte',
        'service-1-desc': 'Telegram-Bots, Datenparser, Automatisierungstools für Kunden.',
        'service-2-title': 'Netzwerkdesign',
        'service-2-desc': 'Netzwerk- und Konfiguration in Cisco Packet Tracer.',
        'service-3-title': 'CAD-Design',
        'service-3-desc': '2D-Zeichnungen, 3D-Modelle und vollständige technische Dokumentation.',
        'service-4-title': 'Technische Beratung',
        'service-4-desc': 'Beratung und Lösungen für technische und IT-Projekte.',
        'portfolio-label': '// fallstudien',
        'portfolio-title': 'Portfolio',
        'project-1-title': 'Telegram-Automatisierungsbot',
        'project-1-desc': 'Multifunktionaler Telegram-Bot: Nachrichten planen, Daten parsen, tägliche Berichte generieren.',
        'project-2-title': 'Unternehmensnetzwerk',
        'project-2-desc': 'Komplette Netzwerktopologie mit VLAN, Routing, DHCP und ACLs in Cisco Packet Tracer.',
        'project-3-title': 'Mechanische Teile – 3D-Modelle',
        'project-3-desc': '3D-AutoCAD-Modelle für industrielle Teile mit vollständiger technischer Dokumentation.',
        'showcase-caption': '// mein_arbeitsplatz.png',
        'why-label': '// warum_ich',
        'why-title': 'Warum ich',
        'why-1-title': 'Schnelle Kommunikation',
        'why-1': 'Schnelle und klare Kommunikation — Sie wissen immer, wo Ihr Projekt steht.',
        'why-2-title': 'Dokumentierte Lösungen',
        'why-2': 'Strukturierte und dokumentierte Lösungen — sauber und wartbar.',
        'why-3-title': 'Breite Expertise',
        'why-3': 'Umfangreiche technische Expertise: Code, Netzwerke und mechanisches Design.',
        'why-4-title': 'Qualitätsfokus',
        'why-4': 'Fokus auf Effizienz und Qualität — keine Bloat, nur Ergebnisse.',
        'testimonials-label': '// kundenbewertungen',
        'testimonials-title': 'Referenzen',
        'testimonial-1': '"Olexander hat das Automatisierungstool pünktlich geliefert. Klare Dokumentation und schnelle Antworten während des gesamten Projekts."',
        'testimonial-1-role': 'IT-Manager, Deutschland',
        'testimonial-2': '"Das Netzwerkdesign war genau das, was wir brauchten — strukturiert, dokumentiert und leicht zu übergeben."',
        'testimonial-2-role': 'Startup-Gründer, Ukraine',
        'testimonial-3': '"Tolle CAD-Arbeit — professionelle Zeichnungen mit korrekten Maßen und vollständiger Dokumentation."',
        'testimonial-3-role': 'Ingenieur, Niederlande',
        'contact-label': '// kontakt',
        'contact-title': 'Kontakt',
        'contact-intro': 'Bereit für ein Projekt? Kontaktieren Sie mich über einen der folgenden Kanäle.',
        'contact-email': 'E-Mail',
        'contact-whatsapp': 'WhatsApp',
        'contact-telegram': 'Telegram',
        'contact-location': 'Standort',
        'contact-status': 'Status',
        'contact-available': 'Verfügbar für freiberufliche Projekte',
        'form-name-label': 'Name',
        'form-name-ph': 'Ihr Name',
        'form-email-label': 'E-Mail',
        'form-email-ph': 'Ihre E-Mail',
        'form-message-label': 'Nachricht',
        'form-message-ph': 'Ihre Nachricht',
        'form-submit': 'Nachricht senden',
        'footer-text': 'Verfügbar für freiberufliche Projekte',
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

// ============================================================
// LANGUAGE
// ============================================================
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update language select if present
    const langSelect = document.getElementById('language-select');
    if (langSelect) langSelect.value = lang;
}

// ============================================================
// THEME
// ============================================================
const htmlElement = document.documentElement;

function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const sel = document.getElementById('theme-select');
    if (sel) sel.value = theme;
}

function initThemeSwitcher() {
    const themeSelect = document.getElementById('theme-select');
    if (!themeSelect) return;
    const saved = localStorage.getItem('theme') || 'dark';
    applyTheme(saved);
    themeSelect.addEventListener('change', e => applyTheme(e.target.value));
}

function initLanguageSwitcher() {
    const langSelect = document.getElementById('language-select');
    if (!langSelect) return;
    langSelect.value = currentLanguage;
    langSelect.addEventListener('change', e => setLanguage(e.target.value));
}

// ============================================================
// WELCOME MODAL
// ============================================================
function initWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    const isFirstVisit = !localStorage.getItem('hasVisited');

    if (isFirstVisit) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
        applyTheme(localStorage.getItem('theme') || 'dark');
        initThemeSwitcher();
        initLanguageSwitcher();
        setLanguage(currentLanguage);
    }

    const themeBtns = document.querySelectorAll('[data-theme]');
    const langBtns = document.querySelectorAll('[data-lang]');
    const confirmBtn = document.getElementById('confirm-btn');

    let selectedTheme = 'dark';
    let selectedLang = 'en';

    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            themeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedTheme = btn.getAttribute('data-theme');
            // Preview theme live
            htmlElement.setAttribute('data-theme', selectedTheme);
        });
    });

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedLang = btn.getAttribute('data-lang');
        });
    });

    confirmBtn.addEventListener('click', () => {
        applyTheme(selectedTheme);
        localStorage.setItem('language', selectedLang);
        localStorage.setItem('hasVisited', 'true');
        modal.classList.add('hidden');
        initThemeSwitcher();
        initLanguageSwitcher();
        setLanguage(selectedLang);
    });

    if (!isFirstVisit) {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        const savedLang = localStorage.getItem('language') || 'en';
        document.querySelector(`[data-theme="${savedTheme}"]`)?.classList.add('active');
        document.querySelector(`[data-lang="${savedLang}"]`)?.classList.add('active');
    } else {
        document.getElementById('btn-dark')?.classList.add('active');
        document.getElementById('btn-en')?.classList.add('active');
    }
}

// ============================================================
// HAMBURGER MENU
// ============================================================
function initHamburger() {
    const btn = document.getElementById('hamburger');
    const ul = document.querySelector('nav ul');
    if (!btn || !ul) return;
    btn.addEventListener('click', () => {
        ul.classList.toggle('open');
    });
    // Close on nav link click
    ul.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => ul.classList.remove('open'));
    });
}

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const skillFills = document.querySelectorAll('.skill-bar-fill');
    const skillsAnimated = new Set();

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    // Skill bar animation
    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated.has(entry.target)) {
                skillsAnimated.add(entry.target);
                entry.target.querySelectorAll('.skill-bar-fill').forEach(fill => {
                    const w = fill.getAttribute('data-width');
                    setTimeout(() => { fill.style.width = w + '%'; }, 200);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.skill-category').forEach(cat => skillObserver.observe(cat));
}

// ============================================================
// STATS COUNTER ANIMATION
// ============================================================
function animateCounter(el, target, duration) {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
        start += step;
        if (start >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = start;
        }
    }, 16);
}

function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    const observed = new Set();

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !observed.has(entry.target)) {
                observed.add(entry.target);
                const target = parseInt(entry.target.getAttribute('data-count'));
                animateCounter(entry.target, target, 1000);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

// ============================================================
// SMOOTH SCROLLING
// ============================================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ============================================================
// CONTACT FORM
// ============================================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const subject = `Contact from ${name}`;
        const body = `From: ${name} (${email})\n\n${message}`;
        window.location.href = `mailto:alexanderpokryschuk@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}

// ============================================================
// NAV SCROLL EFFECT
// ============================================================
function initNavScroll() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            nav.style.background = 'rgba(13, 15, 20, 0.95)';
        } else {
            nav.style.background = '';
        }
    }, { passive: true });
}

// ============================================================
// INIT
// ============================================================
function init() {
    initWelcomeModal();
    initThemeSwitcher();
    initLanguageSwitcher();
    initHamburger();
    initScrollAnimations();
    initCounters();
    initSmoothScroll();
    initContactForm();
    initNavScroll();
    setLanguage(currentLanguage);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
