// Sticky Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Scroll spy - highlight nav links on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function changeActiveLink() {
    let index = sections.length;
  
    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  
    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[index]) navLinks[index].classList.add('active');
  }
  
  changeActiveLink();
  window.addEventListener('scroll', changeActiveLink);
  
  // Lightbox Gallery
  const galleryImages = document.querySelectorAll('.gallery-grid img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.add('active');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });
  
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });
  
  // Close lightbox on outside click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });
  
  // Language Switcher (Basic example, toggling text in body)
  const langSwitcher = document.getElementById('lang-switcher');
  let isEnglish = true;
  
  const translations = {
    "Explore Beautiful Sri Lanka": "සුන්දර ශ්‍රී ලංකාව සොයා ගන්න",
    "Your next adventure starts here!": "ඔබේ ඊළඟ සන්සන්දනය මෙතැනින් ආරම්භ වේ!",
    "Discover More": "තව විස්තර බලන්න",
    "Top Destinations": "ප්‍රධාන ගමනාන්ත",
    "Sigiriya": "සීගිරිය",
    "Ella": "ඇල්ල",
    "Galle Fort": "ගාල්ල යාබද ගල් භවනය",
    "Tour Packages": "සංචාර පැකේජ",
    "Adventure Tour": "සහාසික සංචාරය",
    "7 Days | Mountains & Hikes": "දින 7 | කඳු සහ පාදගාමීත්වය",
    "Beach Relaxation": "වෙරළ විවේකය",
    "5 Days | Coastal Getaways": "දින 5 | වෙරළ ආසන්නය",
    "Cultural Trail": "සංස්කෘතික මාර්ගය",
    "10 Days | Heritage & History": "දින 10 | උරුමය සහ ඉතිහාසය",
    "Photo Gallery": "ඡායාරූප ගැලරිය",
    "Book Your Tour": "ඔබේ සංචාරය ඇනවුම් කරන්න",
    "Full Name": "සම්පූර්ණ නම",
    "Email Address": "ඊමේල් ලිපිනය",
    "Select Package": "පැකේජය තෝරන්න",
    "Choose Payment Method": "ගෙවීම් ක්‍රමය තෝරන්න",
    "Submit": "ඇතුළත් කරන්න",
    "Contact Us": "අප අමතන්න",
    "Your Name": "ඔබේ නම",
    "Your Email": "ඔබේ ඊමේල්",
    "Your Message": "ඔබේ පණිවිඩය",
    "Send Message": "පණිවිඩය යවන්න",
    "All rights reserved.": "සියලුම හිමිකම් ඇවිරිණි."
  };
  
  langSwitcher.addEventListener('click', () => {
    isEnglish = !isEnglish;
    if (isEnglish) {
      langSwitcher.textContent = "🌐 EN | සිං";
      swapLanguage('en');
    } else {
      langSwitcher.textContent = "🌐 සිං | EN";
      swapLanguage('si');
    }
  });
  
  function swapLanguage(lang) {
    // For demo: swap fixed text nodes only by simple querySelectorAll for these texts
    // This is a simple toggle example and can be improved for large apps.
    const elements = document.querySelectorAll('h2, h3, p, button, input[placeholder], textarea[placeholder], label');
  
    elements.forEach(el => {
      // Replace placeholders separately for input and textarea
      if (el.placeholder) {
        if (lang === 'si' && translations[el.placeholder]) {
          el.placeholder = translations[el.placeholder];
        } else if (lang === 'en' && Object.values(translations).includes(el.placeholder)) {
          // revert to English key
          el.placeholder = Object.keys(translations).find(key => translations[key] === el.placeholder) || el.placeholder;
        }
      }
      // Replace innerText for others
      if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
        if (lang === 'si' && translations[el.innerText]) {
          el.innerText = translations[el.innerText];
        } else if (lang === 'en' && Object.values(translations).includes(el.innerText)) {
          el.innerText = Object.keys(translations).find(key => translations[key] === el.innerText) || el.innerText;
        }
      }
    });
  }
  
  // Booking form submit handler (dummy)
  document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const packageSelected = this.package.value;
    const name = this.name.value;
    const email = this.email.value;
    const date = this.date.value;
    const payment = this.payment.value;
    alert(`Thank you, ${name}! Your booking for the ${packageSelected} on ${date} is received. Payment method: ${payment}`);
    this.reset();
  });
  
  // Contact form submit handler (dummy)
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
    this.reset();
  });
  