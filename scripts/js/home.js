window.addEventListener("load", function() {
    var elements = this.document.getElementsByClassName("element");
    var number = 0;
    var maxNumber = elements.length;
    console.log(maxNumber);

    //elements[maxNumber - 1].getElementsByClassName("arr")[1].click();
    document.body.onkeydown = function() {
        var event = event || window.event;
        var keyCode = event.keyCode;


        switch (keyCode) {
            case 39:
                if (number < (maxNumber - 1)) {
                    number++;
                } else {
                    number = 0;
                }
                elements[number].getElementsByClassName("arr")[1].click();
                break;
            case 37:
                if (number > 0) {
                    number--;
                } else {
                    number = maxNumber - 1;
                }
                elements[number].getElementsByClassName("arr")[0].click();
                break;
                //console.log(elements[number]);

        }
        console.log(number);

    }
});