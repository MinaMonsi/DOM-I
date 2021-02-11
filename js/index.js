const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute(
  "src",
  "https://github.com/LambdaSchool/DOM-I/blob/main/img/logo.png?raw=true"
);

//NAV
const links = document.querySelectorAll("nav a");
//console.log(links);
links[0].innerHTML = siteContent["nav"]["nav-item-1"];
links[1].innerHTML = siteContent["nav"]["nav-item-2"];
links[2].innerHTML = siteContent["nav"]["nav-item-3"];
links[3].innerHTML = siteContent["nav"]["nav-item-4"];
links[4].innerHTML = siteContent["nav"]["nav-item-5"];
links[5].innerHTML = siteContent["nav"]["nav-item-6"];

//GREEN NAV TEXT
links[0].style.color = "green";
links[1].style.color = "green";
links[2].style.color = "green";
links[3].style.color = "green";
links[4].style.color = "green";
links[5].style.color = "green";

//H1 CTA-TEXT
const ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent["cta"]["h1"];

//MAIN IMG
const ctaImg = document.getElementById("cta-img");
//console.log(ctaImg);
ctaImg.setAttribute(
  "src",
  "https://github.com/MinaMonsi/DOM-I/blob/main/img/header-img.png?raw=true"
);

//BUTTON
const button = document.querySelector("button");
//console.log(button);
button.textContent = "Get Started";

//MAIN TEXT CONTENT
const textContent = document.querySelectorAll(".text-content");
//console.log(textContent);

textContent[0].getElementsByTagName("h4")[0].innerHTML =
  siteContent["main-content"]["features-h4"];
textContent[0].getElementsByTagName("p")[0].innerHTML =
  siteContent["main-content"]["features-content"];

textContent[1].getElementsByTagName("h4")[0].innerHTML =
  siteContent["main-content"]["about-h4"];
textContent[1].getElementsByTagName("p")[0].innerHTML =
  siteContent["main-content"]["about-content"];

textContent[2].getElementsByTagName("h4")[0].innerHTML =
  siteContent["main-content"]["services-h4"];
textContent[2].getElementsByTagName("p")[0].innerHTML =
  siteContent["main-content"]["services-content"];

textContent[3].getElementsByTagName("h4")[0].innerHTML =
  siteContent["main-content"]["product-h4"];
textContent[3].getElementsByTagName("p")[0].innerHTML =
  siteContent["main-content"]["product-content"];

textContent[4].getElementsByTagName("h4")[0].innerHTML =
  siteContent["main-content"]["vision-h4"];
textContent[4].getElementsByTagName("p")[0].innerHTML =
  siteContent["main-content"]["vision-content"];

//MIDDLE-IMG
const midImg = document.getElementById("middle-img");
//console.log(midImg);
midImg.setAttribute(
  "src",
  "https://github.com/MinaMonsi/DOM-I/blob/marina-monsivais/img/mid-page-accent.jpg?raw=true"
);

//CONTACT INFO
const contactInfo = document.querySelectorAll(".contact");
//console.log(contact);
contactInfo[0].getElementsByTagName("h4")[0].innerHTML =
  siteContent["contact"]["contact-h4"];

contactInfo[0].getElementsByTagName("p")[0].innerHTML =
  siteContent["contact"]["address"];

contactInfo[0].getElementsByTagName("p")[1].innerHTML =
  siteContent["contact"]["phone"];

contactInfo[0].getElementsByTagName("p")[2].innerHTML =
  siteContent["contact"]["email"];

//FOOTER
const footer = document.querySelector("footer p");
//console.log(footer);
footer.innerHTML = siteContent["footer"]["copyright"];
