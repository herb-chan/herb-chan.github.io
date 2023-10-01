let primary = "#2d3250";
let secondary = "#424769";
let teritary = "#676f9d";
let accent = "#f9b17a";

function pageSelect(pageId) {
    let switchColours = document.querySelector(pageId);
    let disableOne, disableTwo, disableThree, disableFour, disableFive;

    if (switchColours === document.querySelector("#home-page")) {
        disableOne = document.querySelector("#projects-page");
        disableTwo = document.querySelector("#contact-page");
        disableThree = document.querySelector("#blog-page");
        disableFour = document.querySelector("#themes-settings");
        disableFive = document.querySelector("#accessibility-settings");
    } else if (switchColours === document.querySelector("#projects-page")) {
        disableOne = document.querySelector("#home-page");
        disableTwo = document.querySelector("#contact-page");
        disableThree = document.querySelector("#blog-page");
        disableFour = document.querySelector("#themes-settings");
        disableFive = document.querySelector("#accessibility-settings");
    } else if (switchColours === document.querySelector("#blog-page")) {
        disableOne = document.querySelector("#home-page");
        disableTwo = document.querySelector("#projects-page");
        disableThree = document.querySelector("#contact-page");
        disableFour = document.querySelector("#themes-settings");
        disableFive = document.querySelector("#accessibility-settings");
    } else if (switchColours === document.querySelector("#contact-page")) {
        disableOne = document.querySelector("#home-page");
        disableTwo = document.querySelector("#projects-page");
        disableThree = document.querySelector("#blog-page");
        disableFour = document.querySelector("#themes-settings");
        disableFive = document.querySelector("#accessibility-settings");
    } else if (switchColours === document.querySelector("#themes-settings")) {
        disableOne = document.querySelector("#home-page");
        disableTwo = document.querySelector("#projects-page");
        disableThree = document.querySelector("#blog-page");
        disableFour = document.querySelector("#contact-page");
        disableFive = document.querySelector("#accessibility-settings");
    } else if (
        switchColours === document.querySelector("#accessibility-settings")
    ) {
        disableOne = document.querySelector("#home-page");
        disableTwo = document.querySelector("#projects-page");
        disableThree = document.querySelector("#blog-page");
        disableFour = document.querySelector("#themes-settings");
        disableFive = document.querySelector("#contact-page");
    }

    switchColours.style.backgroundColor = accent;
    disableOne.style.backgroundColor = primary;
    disableTwo.style.backgroundColor = primary;
    disableThree.style.backgroundColor = primary;
    disableFour.style.backgroundColor = primary;
    disableFive.style.backgroundColor = primary;

    switchColours.style.color = "#fff";
    disableOne.style.color = teritary;
    disableTwo.style.color = teritary;
    disableThree.style.color = teritary;
    disableFour.style.color = teritary;
    disableFive.style.color = teritary;

    switchColours.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.1)";
    disableOne.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.0)";
    disableTwo.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.0)";
    disableThree.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.0)";
    disableFour.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.0)";
    disableFive.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.0)";
}

let currentLanguage = 'en'; // Default language

function loadLanguage(language) {
    return fetch(`languages/${language}.json`)
        .then(response => response.json());
}

function displayContent(languageData) {
    document.getElementById('welcome-message').textContent = languageData.welcome_message;
    document.getElementById('corner').textContent = languageData.corner;
    document.getElementById('page-selector-text').textContent = languageData.select_category;
    document.getElementById('settings-selector-text').textContent = languageData.settings;
    document.getElementById('nav-page-selector').innerHTML = '';
    document.getElementById('settings-selector').innerHTML = '';
    document.getElementById('search-bar').placeholder = languageData.search_bar;

    for (let page of languageData.pages) {
        let li = document.createElement('li');
        li.className = 'nav-select';
        li.id = page.id;
        li.innerHTML = `<i class="fa-solid ${page.icon}"></i> ${page.name}`;
        li.onclick = function() { pageSelect(`#${page.id}`); };
        document.getElementById('nav-page-selector').appendChild(li);
    }

    for (let setting of languageData.settings_options) {
        let li = document.createElement('li');
        li.className = 'nav-select';
        li.id = setting.id;
        li.innerHTML = `<i class="fa-solid ${setting.icon}"></i> ${setting.name}`;
        li.onclick = function() { pageSelect(`#${setting.id}`); };
        document.getElementById('settings-selector').appendChild(li);
    }
}

function changeLanguage(language) {
    loadLanguage(language)
        .then(languageData => {
            displayContent(languageData);
            currentLanguage = language;
            document.getElementById('current-language').textContent = (language === 'en') ? 'English' : 'Polish';
        });
}

function languageDropdown() {
    let dropdownContent = document.querySelector(".language-dropdown-content");
    let button = document.querySelector("#language-dropdown-button");

    if (dropdownContent.style.display !== "block") {
        button.style.borderRadius = "16px 16px 0px 0px";
        button.style.backgroundColor = accent;
        button.style.color = "#fff";

        dropdownContent.style.display = "block";

        document.addEventListener("click", function (event) {
            if (
                dropdownContent.style.display === "block" &&
                event.target !== button
            ) {
                button.style.borderRadius = "16px 16px 16px 16px";
                button.style.backgroundColor = primary;
                button.style.color = teritary;

                dropdownContent.style.display = "none";
            }
        });
    } else {
        button.style.borderRadius = "16px 16px 16px 16px";
        button.style.backgroundColor = primary;
        button.style.color = teritary;

        dropdownContent.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    changeLanguage(currentLanguage);
});

document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');

    searchBar.addEventListener('focus', function() {
        const searchBarIcon = document.getElementById('search-bar-icon');
        searchBarIcon.style.color = '#fff';
    });

    searchBar.addEventListener('blur', function() {
        const searchBarIcon = document.getElementById('search-bar-icon');
        searchBarIcon.style.color = teritary;
    });
});