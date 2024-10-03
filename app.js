// Select DOM Element

const homeLink = document.getElementById('home');
const aboutLink = document.getElementById("about");
const contactLink = document.getElementById('contact');
const contentLink = document.getElementById("content");

// Content for each section 

const content = {
    home: `<p>Welcome to the homepage! Here you'll find the latest news and updates.</p>`,
    about: `<p>About Us: We are a small team of web developers passionate about creating dynamic websites.</p>`,
    contact: `<p>Contact Us: you can reach us at contact@mywebsite.com</p>`
}

// Event listener for navigation link

homeLink.addEventListener("click", () => {
    contentLink.innerHTML = content.home;
});

aboutLink.addEventListener("click", () => {
    contentLink.innerHTML = content.about;
});

contactLink.addEventListener("click", () => {
    contentLink.innerHTML = content.contact;
})