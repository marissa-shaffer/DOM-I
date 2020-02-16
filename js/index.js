const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Task 1: Create selectors to point your data into elements
const menu = document.querySelector("nav");
const navItems = document.querySelector("a");
const logoImg = document.querySelector("#logo-img");
const ctaH1 = document.querySelector("h1");
const ctaButton = document.querySelector("button");
const ctaImage = document.querySelector("#cta-img");
const subheadings = document.querySelectorAll("h4");
const content = document.querySelectorAll("p");
const middleImg = document.querySelector('middle-img');

// Task 2: Update the HTML with the JSON data
    const navData = siteContent.nav;
    const ctaData = siteContent.cta;
    const mainData = siteContent["main-content"];
    const contactData = siteContent.contact;
    const footerData = siteContent.footer;

    //Nav
    navItems.forEach((nav, ndx) => {
      nav.innerText = navData["nav-item-" + (ndx + 1)]
    });
    
    //logo image
    logoImg.setAttribute("src", navData["img-src"]);

// Task 3: Add new content
    //  Change the color of the navigation text to be green.
    
    //  Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you want.
    
    //  Check your work by looking at the original html in the browser

