function languageDropdown() {
    let dropdownContent = document.querySelector(".language-dropdown-content");
    let button = document.querySelector("#language-dropdown-button");

    if (dropdownContent.style.display !== "block") {
        button.style.borderRadius = "16px 16px 0px 0px";
        button.style.backgroundColor = secondary;
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

function changeLanguage() {
    let currentLanguageElement = document.querySelector("#current-language");
    let currentLanguageText = currentLanguageElement.innerHTML;

    let anotherLanguageElement = document.querySelector("#another-language");
    let anotherLanguageText = anotherLanguageElement.innerHTML;

    if (currentLanguageText === "English") {
        currentLanguageElement.innerHTML = anotherLanguageText;
        anotherLanguageElement.innerHTML = currentLanguageText;
    }
    if (currentLanguageText === "Polish") {
        currentLanguageElement.innerHTML = anotherLanguageText;
        anotherLanguageElement.innerHTML = currentLanguageText;
    }
}