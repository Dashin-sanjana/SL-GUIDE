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
  const sections = document.querySelectorAll('section, #home');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function changeActiveLink() {
    let index = sections.length;
    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[index]) navLinks[index].classList.add('active');
  }
  
  changeActiveLink();
  window.addEventListener('scroll', changeActiveLink);
  
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      scrollToSection(targetId);
    });
  });
  
  // Language Translations
  const translations = {
    en: {
      logo: "TravelSL",
      home: "Home",
      destinations: "Destinations",
      packages: "Packages",
      gallery: "Gallery",
      booking: "Booking",
      contact: "Contact",
      changeLanguage: "Change Language",
      heroTitle: "Explore Beautiful Sri Lanka",
      heroSubtitle: "Your next adventure starts here!",
      discoverBtn: "Discover More",
      topDestinations: "Top Destinations",
      sigiriya: "Sigiriya",
      ella: "Ella",
      galle: "Galle Fort",
      tourPackages: "Tour Packages",
      adventureTour: "Adventure Tour",
      adventureDesc: "7 Days | Mountains & Hikes",
      beachRelaxation: "Beach Relaxation",
      beachDesc: "5 Days | Coastal Getaways",
      culturalTrail: "Cultural Trail",
      culturalDesc: "10 Days | Heritage & History",
      learnMore: "Learn More",
      photoGallery: "Photo Gallery",
      bookingTitle: "Book Your Tour",
      fullName: "Full Name",
      emailAddress: "Email Address",
      selectPackage: "Select Package",
      submitBtn: "Submit",
      contactUs: "Contact Us",
      subject: "Subject",
      yourMessage: "Your Message",
      sendMessageBtn: "Send Message",
      bookingMsgSuccess: "Thank you! Your booking is received.",
      bookingMsgFail: "Submission failed.",
      contactMsgSuccess: "Message sent successfully!",
      contactMsgFail: "Failed to send message.",
      networkError: "Network error. Please try again later."
    },
    si: {
      logo: "TravelSL",
      home: "මුල් පිටුව",
      destinations: "ගමන් මග",
      packages: "සැටැසුම්",
      gallery: "ගැලරිය",
      booking: "බුකින් කිරීම",
      contact: "සම්බන්ධ වන්න",
      changeLanguage: "භාෂාව වෙනස් කරන්න",
      heroTitle: "අලංකාර ශ්‍රී ලංකාව සෙවීම",
      heroSubtitle: "ඔබගේ ඊළඟ සැරිසරීම මෙතැනින් ඇරඹේ!",
      discoverBtn: "තවත් සොයන්න",
      topDestinations: "ප්‍රධාන ගමන් මඟ",
      sigiriya: "සිගිරිය",
      ella: "එල්ල",
      galle: "ගාලු කටුව",
      tourPackages: "ටූර් පැකේජ",
      adventureTour: "අභියසෝදනය",
      adventureDesc: "දින 7 | කඳු හා මඟුල්",
      beachRelaxation: "තිරේ සෙරෙනිටි",
      beachDesc: "දින 5 | වෙරළෙහි නිවාඩු",
      culturalTrail: "සංස්කෘතික මාර්ගය",
      culturalDesc: "දින 10 | උරුමය සහ ඉතිහාසය",
      learnMore: "වැඩි විස්තර",
      photoGallery: "ඡායාරූප ගැලරිය",
      bookingTitle: "ඔබේ ටූර් එක වෙන්කරන්න",
      fullName: "සම්පූර්ණ නම",
      emailAddress: "ඊමේල් ලිපිනය",
      selectPackage: "පැකේජය තෝරන්න",
      submitBtn: "ඉදිරිපත් කරන්න",
      contactUs: "අප අමතන්න",
      subject: "විෂයය",
      yourMessage: "ඔබගේ පණිවිඩය",
      sendMessageBtn: "පණිවිඩය යවන්න",
      bookingMsgSuccess: "ස්තුතියි! ඔබේ ඇණවුම ලැබී ඇත.",
      bookingMsgFail: "යොමු කිරීම අසාර්ථක විය.",
      contactMsgSuccess: "පණිවිඩය සාර්ථකව යවා ඇත!",
      contactMsgFail: "පණිවිඩය යැවීමට අසමත් විය.",
      networkError: "ජාල ගැටළුවක්. කරුණාකර පසුව නැවත උත්සාහ කරන්න."
    }
  };
  
  let currentLang = 'en';
  
  function translatePage(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  
    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
      const key = el.getAttribute('data-key-placeholder');
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });
  
    document.querySelectorAll('select option[data-key-option]').forEach(opt => {
      const key = opt.getAttribute('data-key-option');
      if (translations[lang][key]) {
        opt.textContent = translations[lang][key];
      }
    });
  
    currentLang = lang;
  }
  
  document.querySelector('.language-switcher')?.addEventListener('click', () => {
    translatePage(currentLang === 'en' ? 'si' : 'en');
  });
  
  translatePage('en');
  
  // Show success/error messages
  function displayMessage(id, message, isError = false) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = message;
    el.style.color = isError ? 'red' : '#007c91';
  }
  
  // Booking Form Submission (via Formspree)
  document.getElementById("bookingForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
  
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    })
      .then(response => {
        if (response.ok) {
          displayMessage("bookingMessage", translations[currentLang].bookingMsgSuccess);
          form.reset();
        } else {
          return response.json().then(data => {
            throw new Error(data.error || translations[currentLang].bookingMsgFail);
          });
        }
      })
      .catch(error => {
        displayMessage("bookingMessage", error.message || translations[currentLang].networkError, true);
      });
  });
  
  // Contact Form Submission (via Formspree)
  document.getElementById("contactForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
  
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    })
      .then(response => {
        if (response.ok) {
          displayMessage("contactMessage", translations[currentLang].contactMsgSuccess);
          form.reset();
        } else {
          return response.json().then(data => {
            throw new Error(data.error || translations[currentLang].contactMsgFail);
          });
        }
      })
      .catch(error => {
        displayMessage("contactMessage", error.message || translations[currentLang].networkError, true);
      });
  });
  