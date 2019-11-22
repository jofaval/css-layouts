window.onload = () => {
    var buttons = document.getElementsByTagName("button");
    var buttonsLen = buttons.length;
    for (let index = 0; index < buttonsLen; index++) {
        buttons[index].onclick = function () {
            var points = this.getAttribute("points");

            var value = this.innerText;
            var finalString = value.substring(0, value.indexOf(" {"));

            if (finalString.length > 0) {
                document.getElementById("selectorCSS").value = finalString;
            }

            showPoints(points);
        };
    }
    var btnSelectorCSS = document.getElementById("btnSelectorCSS");
    btnSelectorCSS.onclick = function () {
        var input = document.getElementById("selectorCSS");
        var value = input.value;
        var points = calculateSpecificity(value);

        showPoints(points);
    };
}

function showPoints(points) {
    document.getElementById("digit1").innerText = points[0];
    document.getElementById("digit2").innerText = points[1];
    document.getElementById("digit3").innerText = points[2];
    document.getElementById("digit4").innerText = points[3];
    
    document.getElementById("counter").setAttribute("title", parseInt(points));
};

function calculateSpecificity(cssLine) {
    var splittedCSSLine = cssLine.split(' ');
    var points = 0;

    splittedCSSLine.forEach(element => {
        if (element.includes("[")
            || element.includes(":")) {
            points += 10;
        }
        if (element.startsWith(".")) {
            points += 10;
        } else if (element.startsWith("#")) {
            points += 100;
        } else if (element.includes("[")) {
            points += 10;
        } else if (element != "+"
            && element != ">"
            && element != "~") {
            points += 1;
        }
    });

    //splittedCSSLine
    return points.toLocaleString(
        undefined, {
            minimumIntegerDigits: 4,
        }
    );
}