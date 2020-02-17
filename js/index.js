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
    let myNav = document.querySelectorAll('a');
    myNav[0].textContent = siteContent['nav']['nav-item-1'];
    myNav[1].textContent = siteContent['nav']['nav-item-2'];
    myNav[2].textContent = siteContent['nav']['nav-item-3'];
    myNav[3].textContent = siteContent['nav']['nav-item-4'];
    myNav[4].textContent = siteContent['nav']['nav-item-5'];
    myNav[5].textContent = siteContent['nav']['nav-item-6'];
    
    //logo image
    logoImg.setAttribute("src", navData["img-src"]);

    //Text for h1 and button, and src for image in cta class
    let theDomHeader = document.querySelector('h1');
    theDomHeader.textContent = siteContent ['cta'] ['h1'];

    let button = document.querySelector('button');
    button.textContent = siteContent ['cta'] ['button'];

    let logoPic = document.getElementById('cta-img');
    logoPic.setAttribute('src', siteContent["cta"]["img-src"]);

    //Main content
    subheadings[0].innerText = mainData[`features-h4`]
    content[0].innterText = mainData[`features-content`]
    subheadings[1].innerText = mainData[`about-h4`]
    content[1].innerText = mainData[`about-content`]

    //Middle Image
    middleImg.setAttribute("src", ctaData["img-src"])

    //bottom content
    subHeadings[2].innerText = mainData["services-h4"]
    content[2].innerText = mainData["services-content"]
    subheadings[3].innerText = mainData["product-h4"]
    content[3].innerText = mainData['product-content']
    subheadings[4].innerText = mainData['vision-h4']
    content[4].innerText = mainData['vision-content']

    //contact info
    subheadings[5].innerText = contactData['contact-h4']
    content[5].innerText = contactData['address']
    content[6].innerText = contactData['phone']
    content[7].innerText = contactData['email']

    //footer
    content[8].innerText = footerData['copyright']

// Task 3: Add new content
    //  Change the color of the navigation text to be green.
    navItems.forEach(nav => nav.style.color = 'green')
    //  Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you want.
    aPrint.setAttribute('href', '#')
    aPrint.inerText = 'Print'
    aPrint.style.color = 'green'
    aEmployment.setAttribute('href', '#')
    aEmployment.innerText = 'Employment'
    aEmployment.style.color = 'green'

    nav.prepend(aPrint)
    nav.appendChild(aEmployment)
