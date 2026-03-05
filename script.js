// Language translations
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
        'nav-why': 'Why Choose Me',
        'nav-contact': 'Contact',
        'hero-title': 'Freelance Technical Specialist',
        'hero-subtitle': 'Python • C++ • Networking • 2D/3D AutoCAD',
        'btn-hire': 'Hire Me',
        'about-title': 'About Me',
        'about-text': 'I provide freelance services in software development, network configuration, and CAD design. My focus is delivering efficient, reliable, and practical solutions.',
        'why-title': 'Why Choose Me',
        'why-1': 'Fast and clear communication',
        'why-2': 'Structured and documented solutions',
        'why-3': 'Wide technical expertise',
        'why-4': 'Focus on efficiency and quality',
        'services-title': 'Services',
        'service-1-title': 'Automation & Scripts',
        'service-1-desc': 'Python bots, data parsers, automation tools for clients.',
        'service-2-title': 'Networking',
        'service-2-desc': 'Design and configuration of networks in Cisco Packet Tracer.',
        'service-3-title': 'CAD Design',
        'service-3-desc': '2D technical drawings and 3D models with full documentation.',
        'service-4-title': 'Technical Consulting',
        'service-4-desc': 'Advice and solutions for technical and IT projects.',
        'contact-title': 'Contact',
        'contact-email': 'Email',
        'contact-whatsapp': 'WhatsApp',
        'contact-telegram': 'Telegram',
        'contact-location': 'Location',
        'contact-status': 'Status',
        'contact-available': 'Available for freelance projects',
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
        'nav-why': 'Чому саме я',
        'nav-contact': 'Контакти',
        'hero-title': 'Фрилансер-спеціаліст',
        'hero-subtitle': 'Python • C++ • Networking • 2D/3D AutoCAD',
        'btn-hire': 'Найняти мене',
        'about-title': 'Про мене',
        'about-text': 'Я надаю послуги з розробки програмного забезпечення, конфігурації мереж і дизайну САПР. Мій фокус - надавати ефективні, надійні та практичні рішення.',
        'why-title': 'Чому саме я',
        'why-1': 'Швидка і ясна комунікація',
        'why-2': 'Структуровані та задокументовані рішення',
        'why-3': 'Широка технічна експертиза',
        'why-4': 'Акцент на ефективність і якість',
        'services-title': 'Послуги',
        'service-1-title': 'Автоматизація та скрипти',
        'service-1-desc': 'Телеграм-боти, парсери даних, інструменти автоматизації для клієнтів.',
        'service-2-title': 'Мережі',
        'service-2-desc': 'Проектування та конфігурація мереж в Cisco Packet Tracer.',
        'service-3-title': 'САПР-дизайн',
        'service-3-desc': '2D креслення, 3D моделі та повна технічна документація.',
        'service-4-title': 'Технічне консультування',
        'service-4-desc': 'Рекомендації та рішення для технічних та IT-проектів.',
        'contact-title': 'Контакти',
        'contact-email': 'Email',
        'contact-whatsapp': 'WhatsApp',
        'contact-telegram': 'Telegram',
        'contact-location': 'Місцезнаходження',
        'contact-status': 'Статус',
        'contact-available': 'Доступен для фрилансових проектів',
        'footer-text': 'Доступен для фрилансових проектів',
    },
    de: {
        'welcome-title': 'Willkommen',
        'welcome-subtitle': 'Wählen Sie Ihre Einstellungen',
        'theme-label': 'Thema:',
        'language-label': 'Sprache:',
        'confirm-btn': 'Fortfahren',
        'nav-about': 'Über mich',
        'nav-skills': 'Fähigkeiten',
        'nav-services': 'Dienstleistungen',
        'nav-why': 'Warum ich',
        'nav-contact': 'Kontakt',
        'hero-title': 'Freiberuflicher Technische Spezialist',
        'hero-subtitle': 'Python • C++ • Networking • 2D/3D AutoCAD',
        'btn-hire': 'Mich einstellen',
        'about-title': 'Über mich',
        'about-text': 'Ich biete Dienstleistungen in Softwareentwicklung, Netzwerkkonfiguration und CAD-Design an. Mein Fokus liegt auf der Bereitstellung effizienter, zuverlässiger und praktischer Lösungen.',
        'why-title': 'Warum ich',
        'why-1': 'Schnelle und klare Kommunikation',
        'why-2': 'Strukturierte und dokumentierte Lösungen',
        'why-3': 'Umfangreiche technische Expertise',
        'why-4': 'Fokus auf Effizienz und Qualität',
        'services-title': 'Dienstleistungen',
        'service-1-title': 'Automatisierung & Skripte',
        'service-1-desc': 'Telegram-Bots, Datenparser, Automatisierungstools für Kunden.',
        'service-2-title': 'Netzwerkdesign',
        'service-2-desc': 'Netzwerk- und Konfiguration in Cisco Packet Tracer.',
        'service-3-title': 'CAD-Design',
        'service-3-desc': '2D-Zeichnungen, 3D-Modelle und vollständige technische Dokumentation.',
        'service-4-title': 'Technische Beratung',
        'service-4-desc': 'Beratung und Lösungen für technische und IT-Projekte.',
        'contact-title': 'Kontakt',
        'contact-email': 'Email',
        'contact-whatsapp': 'WhatsApp',
        'contact-telegram': 'Telegram',
        'contact-location': 'Standort',
        'contact-status': 'Status',
        'contact-available': 'Verfügbar für freiberufliche Projekte',
        'footer-text': 'Verfügbar für freiberufliche Projekte',
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

// Function to update page text
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Theme switching
const htmlElement = document.documentElement;

function initThemeSwitcher() {
    const themeSelect = document.getElementById('theme-select');
    if (!themeSelect) {
        console.warn('Theme selector not found. Skipping theme initialization.');
        return;
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    themeSelect.value = savedTheme;

    themeSelect.addEventListener('change', (e) => {
        const selectedTheme = e.target.value;
        htmlElement.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    });
}

// Language switcher
function initLanguageSwitcher() {
    const languageSelect = document.getElementById('language-select');
    if (!languageSelect) {
        console.warn('Language selector not found. Skipping language switcher initialization.');
        return;
    }

    languageSelect.value = currentLanguage;

    languageSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        setLanguage(selectedLang);
    });
}

// Initialize welcome modal on first load
function initWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    const isFirstVisit = !localStorage.getItem('hasVisited');
    
    if (isFirstVisit) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
        initThemeSwitcher();
        initLanguageSwitcher();
        setLanguage(currentLanguage);
    }
    
    // Set up modal button listeners
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
        htmlElement.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('theme', selectedTheme);
        localStorage.setItem('language', selectedLang);
        localStorage.setItem('hasVisited', 'true');
        
        modal.classList.add('hidden');
        initThemeSwitcher();
        initLanguageSwitcher();
        setLanguage(selectedLang);
    });
    
    // Set initial active states if returning user
    if (!isFirstVisit) {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        const savedLang = localStorage.getItem('language') || 'en';
        
        document.querySelector(`[data-theme="${savedTheme}"]`)?.classList.add('active');
        document.querySelector(`[data-lang="${savedLang}"]`)?.classList.add('active');
    } else {
        // Set defaults on first load
        document.getElementById('btn-dark').classList.add('active');
        document.getElementById('btn-en').classList.add('active');
    }
}

// Initialize after DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initWelcomeModal();
        initLanguageSwitcher();
    });
} else {
    initWelcomeModal();
    initLanguageSwitcher();
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

// Fade-in animation on scroll for cards + other elements
const cards = document.querySelectorAll('.card');
const scrollElements = document.querySelectorAll('.animate-on-scroll');

function handleScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });

    scrollElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);

// run once in case some elements are already in view
handleScroll();

// Initial state
cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.5s ease";
});