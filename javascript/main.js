let primary = getComputedStyle(document.documentElement).getPropertyValue(
    "--primary"
);
let secondary = getComputedStyle(document.documentElement).getPropertyValue(
    "--secondary"
);
let tertiary = getComputedStyle(document.documentElement).getPropertyValue(
    "--tertiary"
);
let accent = getComputedStyle(document.documentElement).getPropertyValue(
    "--accent"
);
let text = getComputedStyle(document.documentElement).getPropertyValue(
    "--text"
);

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

    switchColours.style.color = text;
    disableOne.style.color = tertiary;
    disableTwo.style.color = tertiary;
    disableThree.style.color = tertiary;
    disableFour.style.color = tertiary;
    disableFive.style.color = tertiary;

    switchColours.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.1)";
    disableOne.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.0)";
    disableTwo.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.0)";
    disableThree.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.0)";
    disableFour.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.0)";
    disableFive.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.0)";
}

let currentLanguage = "en"; // Default language

function loadLanguage(language) {
    return fetch(`languages/${language}.json`).then((response) =>
        response.json()
    );
}

function displayContent(languageData) {
    document.getElementById("welcome-message").textContent =
        languageData.welcome_message;
    document.getElementById("corner").textContent = languageData.corner;
    document.getElementById("page-selector-text").textContent =
        languageData.select_category;
    document.getElementById("settings-selector-text").textContent =
        languageData.settings;
    document.getElementById("nav-page-selector").innerHTML = "";
    document.getElementById("settings-selector").innerHTML = "";
    document.getElementById("search-bar").placeholder = languageData.search_bar;

    for (let page of languageData.pages) {
        let li = document.createElement("li");
        li.className = "nav-select";
        li.id = page.id;
        li.innerHTML = `<i class="fa-solid ${page.icon}"></i> ${page.name}`;
        li.onclick = function () {
            pageSelect(`#${page.id}`);
        };
        document.getElementById("nav-page-selector").appendChild(li);
    }

    for (let setting of languageData.settings_options) {
        let li = document.createElement("li");
        li.className = "nav-select";
        li.id = setting.id;
        li.innerHTML = `<i class="fa-solid ${setting.icon}"></i> ${setting.name}`;
        li.onclick = function () {
            pageSelect(`#${setting.id}`);
        };
        document.getElementById("settings-selector").appendChild(li);
    }
}

function changeLanguage(language) {
    loadLanguage(language).then((languageData) => {
        displayContent(languageData);
        currentLanguage = language;
        document.getElementById("current-language").textContent =
            language === "en" ? "English" : "Polish";
    });
}

function languageDropdown() {
    let dropdownContent = document.querySelector(".language-dropdown-content");
    let button = document.querySelector("#language-dropdown-button");

    if (dropdownContent.style.display !== "block") {
        button.style.borderRadius = "16px 16px 0px 0px";
        button.style.backgroundColor = accent;
        button.style.color = text;

        dropdownContent.style.display = "block";

        document.addEventListener("click", function (event) {
            if (
                dropdownContent.style.display === "block" &&
                event.target !== button
            ) {
                button.style.borderRadius = "16px 16px 16px 16px";
                button.style.backgroundColor = secondary;
                button.style.color = tertiary;

                dropdownContent.style.display = "none";
            }
        });
    } else {
        button.style.borderRadius = "16px 16px 16px 16px";
        button.style.backgroundColor = secondary;
        button.style.color = tertiary;

        dropdownContent.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    changeLanguage(currentLanguage);
});

function switchTheme() {
    let icon = document.querySelector(".theme-switcher");
    let allElements = document.querySelectorAll("*");

    let searchBarIcon = document.querySelector("#search-bar-icon");
    let languageDropdownButton = document.querySelector(
        "#language-dropdown-button"
    );

    let homePage = document.querySelector("#home-page");
    let projectsPage = document.querySelector("#projects-page");
    let contactPage = document.querySelector("#contact-page");
    let blogPage = document.querySelector("#blog-page");
    let themesSettings = document.querySelector("#themes-settings");
    let accessibilitySettings = document.querySelector(
        "#accessibility-settings"
    );

    let buttonsToChange = [
        homePage,
        projectsPage,
        contactPage,
        blogPage,
        themesSettings,
        accessibilitySettings,
    ];

    if (icon.innerHTML === '<i class="fa-solid fa-moon"></i>') {
        icon.innerHTML = '<i class="fa-solid fa-sun"></i>';

        // Disable transitions for all elements
        allElements.forEach(element => {
            const computedTransition = getComputedStyle(element).getPropertyValue('transition');
            if (computedTransition.includes('0.25s')) {
                element.style.transition = '0.001s';
            }
        });

        document.documentElement.style.setProperty("--primary", "#F1E9E1");
        document.documentElement.style.setProperty("--secondary", "#DFD1C4");
        document.documentElement.style.setProperty("--tertiary", "#B1A393");
        document.documentElement.style.setProperty("--text", "#ffffff");

        primary = getComputedStyle(document.documentElement).getPropertyValue(
            "--primary"
        );
        secondary = getComputedStyle(document.documentElement).getPropertyValue(
            "--secondary"
        );
        tertiary = getComputedStyle(document.documentElement).getPropertyValue(
            "--tertiary"
        );
        text = getComputedStyle(document.documentElement).getPropertyValue(
            "--text"
        );

        searchBarIcon.style.color = tertiary;
        languageDropdownButton.style.backgroundColor = secondary;
        languageDropdownButton.style.color = tertiary;

        buttonsToChange.forEach((button) => {
            const buttonBackgroundColor = getComputedStyle(button).getPropertyValue("background-color").trim();

            if (buttonBackgroundColor != 'rgb(249, 177, 122)') {
                button.style.backgroundColor = primary;
                button.style.color = tertiary;
            }
        });
    } else {
        icon.innerHTML = '<i class="fa-solid fa-moon"></i>';

        // Disable transitions for all elements
        allElements.forEach(element => {
            const computedTransition = getComputedStyle(element).getPropertyValue('transition');
            if (computedTransition.includes('0.25s')) {
                element.style.transition = '0.001s';
            }
        });

        document.documentElement.style.setProperty("--primary", "#2d3250");
        document.documentElement.style.setProperty("--secondary", "#424769");
        document.documentElement.style.setProperty("--tertiary", "#676f9d");
        document.documentElement.style.setProperty("--text", "#ffffff");

        primary = getComputedStyle(document.documentElement).getPropertyValue(
            "--primary"
        );
        secondary = getComputedStyle(document.documentElement).getPropertyValue(
            "--secondary"
        );
        tertiary = getComputedStyle(document.documentElement).getPropertyValue(
            "--tertiary"
        );
        text = getComputedStyle(document.documentElement).getPropertyValue(
            "--text"
        );

        searchBarIcon.style.color = tertiary;
        languageDropdownButton.style.backgroundColor = secondary;
        languageDropdownButton.style.color = tertiary;

        buttonsToChange.forEach((button) => {
            const buttonBackgroundColor = getComputedStyle(button).getPropertyValue("background-color").trim();
        
            if (buttonBackgroundColor != 'rgb(249, 177, 122)') {
                button.style.backgroundColor = primary;
                button.style.color = tertiary;
            }
        });
    }

    // Enable transitions after theme change
    setTimeout(() => {
        allElements.forEach(element => {
            const computedTransition = getComputedStyle(element).getPropertyValue('transition');
            if (computedTransition.includes('0.001s')) {
                element.style.transition = '0.25s';
            }
        });
    }, 0);2
}
