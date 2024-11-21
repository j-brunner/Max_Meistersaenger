document.addEventListener("DOMContentLoaded", () => {
    const languageSwitcher = document.getElementById("language-switcher");
    const sections = {
        about: document.getElementById("about"),
        projects: document.getElementById("projects"),
        contact: document.getElementById("contact"),
    };

    // Load content based on the selected language
    function loadContent(language) {
        fetch(`content/${language}/about.txt`)
            .then(response => response.text())
            .then(data => sections.about.innerHTML = `<h2>About Me</h2><p>${data}</p>`);

        fetch(`content/${language}/projects.txt`)
            .then(response => response.text())
            .then(data => sections.projects.innerHTML = `<h2>Projects</h2><p>${data}</p>`);

        fetch(`content/${language}/contact.txt`)
            .then(response => response.text())
            .then(data => sections.contact.innerHTML = `<h2>Contact</h2><p>${data}</p>`);
    }

    // Initial load in English
    loadContent("en");

    // Language switch event
    languageSwitcher.addEventListener("change", (event) => {
        loadContent(event.target.value);
    });
});
