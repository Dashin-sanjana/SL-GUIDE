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
  const sections = document.querySelectorAll('section, #hero');
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
  const galleryImages = document.querySelectorAll('.gallery img');
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
  
  // Language Switcher (Basic example, only text swapping)
  const langSwitcher = document.getElementById('lang-switcher');
  let isEnglish = true;
  
  const translations = {
    "Explore Paradise Island": "සන්සුන් දූපත සොයා යන්න",
    "Discover the beauty of Sri Lanka’s beaches, hills, and heritage": "ශ්‍රී ලංකාවේ වෙරළ, කඳු, සහ උරුමයේ සුන්දරත්වය සොයා ගන්න",
    "Start Your Journey": "ඔබේ ගමන ආරම්භ කරන්න",
    "Top Destinations": "ප්‍රධාන ගමනාන්ත",
    "Sigiriya": "සීගිරිය",
    "Ancient rock fortress and UNESCO World Heritage Site.": "පුරාතන ගල් තොට සහ UNESCO ලෝක උරුම ස්ථානය.",
    "Colombo": "කොළඹ",
    "Vibrant capital city with culture, food, and nightlife.": "සංස්කෘතිය, ආහාර, සහ රාත්‍රී ජීවිතය ඇති සක්‍රීය අගනුවර.",
    "Ella": "ඇල්ල",
    "Hill country with waterfalls, tea estates, and adventure.": "දිය ඇලි, තේ වතු, සහ සහසිකත්වය ඇති කඳුකරය.",
    "Tour Packages": "සංචාර පැකේජ",
    "Adventure Package": "සහාසික පැකේජය",
    "Hiking, rafting, and wildlife safaris across Sri Lanka.": "ශ්‍රී ලංකාව පුරා පැදුරුම්, රැෆ්ටින්, සහ වනාන්තර සෙරීපිලි.",
    "Price:": "මිල:",
    "Beach Holiday": "වෙරළ නිවාඩුව",
    "Relax on the best beaches with luxury resorts.": "ප්‍රමුඛ වෙරළවල් සහ සුඛෝපභෝගී හෝටල් වල විවේකය ගන්න.",
    "Cultural Tour": "සංස්කෘතික සංචාරය",
    "Explore heritage sites, temples, and traditional villages.": "උරුම ස්ථාන, පන්සල්, සහ සම්ප්‍රදායික ගම්මාන සෙවීම.",
    "Gallery": "ගැලරිය",
    "Book Your Tour": "ඔබේ සංචාරය ඇනවුම් කරන්න",
    "Choose Package:": "පැකේජය තෝරන්න:",
    "Your Full Name:": "ඔබේ සම්පූර්ණ නම:",
    "Email Address:": "ඊමේල් ලිපිනය:",
    "Choose Date:": "දිනය තෝරන්න:",
    "Choose Payment Method:": "ගෙවීම් ක්‍රමය තෝරන්න:",
    "Select a package": "පැකේජයක් තෝරන්න",
    "Select a payment method": "ගෙවීම් ක්‍රමයක් තෝරන්න",
    "Book Now": "දැන් ඇනවුම් කරන්න",
    "Contact Us": "අප අමතන්න",
    "Your Name": "ඔබේ නම",
    "Email": "ඊමේල්",
    "Your Message": "ඔබේ පණිවිඩය",
    "Send Message": "පණිවිඩය යවන්න",
    "Sri Lanka Tours": "ශ්‍රී ලංකා සංචාර",
    "Home": "මුල් පිටුව",
    "Destinations": "ගමනාන්ත",
    "Tour Packages": "සංචාර පැකේජ",
    "Gallery": "ගැලරිය",
    "Booking": "ඇනවුම් කිරීම",
    "Contact": "සම්බන්ධවන්න",
    "All rights reserved.": "සියලුම හිමිකම් ඇවිරිණි."
  };
  
  langSwitcher.addEventListener('click', () => {
    isEnglish = !isEnglish;
    if (isEnglish) {
      langSwitcher.textContent = "EN | සිං";
      Object.keys(translations).forEach(text => {
        document.body.innerHTML = document.body.innerHTML.replace(translations[text], text);
      });
    } else {
      langSwitcher.textContent = "සිං | EN";
      Object.keys(translations).forEach(text => {
        document.body.innerHTML = document.body.innerHTML.replace(text, translations[text]);
      });
    }
  });
  
  // Booking form submit handler (dummy)
  document.getElementById('booking-form')?.addEventListener('submit', function(e) {
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
  document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
    this.reset();
  });
  