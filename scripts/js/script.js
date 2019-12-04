var oldScroll = 0;

window.onload = function () {
    
    //document.body.classList.add("loaded"); //remove preloader

    var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    //Detect scroll to hide unnecesary elements
    var content = document.getElementsByClassName("content")[0];
    content.onscroll = analyzeScroll;
    analyzeScroll();
    document.body.classList.add("loaded");

    //Smartphone menu button
    var menu_button = document.getElementById("menu_button");
    menu_button.onclick = menuDropDown;

    var menu_button_icon = menu_button.getElementsByClassName("icon")[0];
    
    menu_button_icon.classList.toggle("fa-bars"); //Hamburguer menu icon
    menu_button_icon.classList.toggle("fa-times"); //Close icon

    if (windowWidth <= 800) {
        menuDropDown();
    }

    /*
     * Letter Animation
     * by Florin Pop
     * ==============================
     * Gotten from:
     * https://codepen.io/FlorinPop17/pen/WEBNyx
     */

    // Initial animation
    var spans = document.querySelectorAll('#logo span');
    spans.forEach((span, idx) => {
        span.addEventListener('animationend', (e) => {
            e.target.classList.remove('active');
        });

        setTimeout(() => {
            span.classList.add('active');
        }, 750 * (idx + 1))
    });

    //Notifying menus that have submenu
    var dropdowns = document.getElementsByClassName("dropdown_content");

    var dropdownsLen = dropdowns.length;
    for (let dropdownIndex = 0; dropdownIndex < dropdownsLen; dropdownIndex++) {
        var dropdown = dropdowns[dropdownIndex];
        var label = dropdown.previousElementSibling.lastElementChild;
        label.innerText += " +";
    }

}

function analyzeScroll() {
    var content = document.getElementsByClassName("content")[0];
    var scrollTop = this.scrollTop;


    //Hide article heaer
    var previousElementSibling = content.previousElementSibling;
    if (previousElementSibling != null && previousElementSibling != undefined) {
        if (scrollTop > 20) {
            previousElementSibling.parentElement.classList.add('hideHeader');
        } else {
            previousElementSibling.parentElement.classList.remove('hideHeader');
        }
    }

    //Hide menu
    var menu = document.body;
    if (scrollTop > oldScroll) {
        menu.classList.add('hideMenu');
    } else {
        menu.classList.remove('hideMenu');
    }

    oldScroll = scrollTop;

    //console.log(this.scrollHeight - this.scrollTop === this.clientHeight); //is at bottom of the element
}

function menuDropDown() {
    var options = document.getElementsByClassName("options")[0];

    var display = options.style.height;
    if (display == "0vh") { //Will display the options
        options.style.height = "90vh";
        options.style.display = "flex";

    } else { //Will hide it
        options.style.height = "0vh";
        options.style.display = "none";

    }

    var menu_button_icon = document.getElementById("menu_button").getElementsByClassName("fa")[0];
    menu_button_icon.classList.toggle("fa-bars"); //Hamburguer menu icon
    menu_button_icon.classList.toggle("fa-times"); //Close icon
}

function goToURL(url) {
    //window.location.href = url;
    var win = window.open(url, '_blank');
    win.focus();
}