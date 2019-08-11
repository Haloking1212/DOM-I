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




/*nav bar */
const navBar = document.getElementsByTagName("a");
navBar[0].textContent = siteContent.nav["nav-item-1"];
navBar[1].textContent = siteContent.nav["nav-item-2"];
navBar[2].textContent = siteContent.nav["nav-item-3"];
navBar[3].textContent = siteContent.nav["nav-item-4"];
navBar[4].textContent = siteContent.nav["nav-item-5"];
navBar[5].textContent = siteContent.nav["nav-item-6"];

navBar[0].style.color = "green";
navBar[1].style.color = "green";
navBar[2].style.color = "green";
navBar[3].style.color = "green";
navBar[4].style.color = "green";
navBar[5].style.color = "green";

/*top page imgage */
const mainImg = document.querySelector("#cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"]);


/*Main header */
const mainHeader = document.querySelector(".cta h1");
mainHeader.textContent = siteContent.cta["h1"];


/*top page button */
const btn = document.querySelector(".cta button");
btn.textContent = siteContent.cta["button"];




/*Mid page headers */
const mHeadContent = document.querySelectorAll(".text-content h4");

mHeadContent[0].textContent = siteContent["main-content"]["features-h4"];
mHeadContent[1].textContent = siteContent["main-content"]["about-h4"];
mHeadContent[2].textContent = siteContent["main-content"]["services-h4"];
mHeadContent[3].textContent = siteContent["main-content"]["product-h4"];
mHeadContent[4].textContent = siteContent["main-content"]["vision-h4"];






/* mid page image*/
const midImg = document.querySelector("#middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);




/*Mid page paragraphs */
const mParaContent = document.querySelectorAll(".text-content p");

mParaContent[0].textContent = siteContent["main-content"]["features-content"];
mParaContent[1].textContent = siteContent["main-content"]["about-content"];
mParaContent[2].textContent = siteContent["main-content"]["services-content"];
mParaContent[3].textContent = siteContent["main-content"]["product-content"];
mParaContent[4].textContent = siteContent["main-content"]["vision-content"];





/*Contact header */
const bBottomContent = document.querySelector(".contact h4");

bBottomContent.textContent = siteContent["contact"]["contact-h4"];






/*Address*/ 
const addy = document.querySelectorAll(".contact p");

addy[0].textContent = siteContent["contact"]["address"];
addy[1].textContent = siteContent["contact"]["phone"];
addy[2].textContent = siteContent["contact"]["email"];





/*footer */
const foot = document.querySelector("footer p");

foot.textContent = siteContent["footer"]["copyright"]


/* Addind new content to nav */
//Link One
const navLinkOne = document.createElement("a");
navLinkOne.textContent = "LinkOne";

const addedNav = document.querySelector('nav');
addedNav.append(navLinkOne);

//Link Two
const navLinkTwo = document.createElement("a");
navLinkTwo.textContent = "LinkTwo";

const addedNavTwo =  document.querySelector("nav");
addedNavTwo.prepend(navLinkTwo)


