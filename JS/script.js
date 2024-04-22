var index = 0;

function changeColors() {
    var colors = ["red", "blue", "orange", "yellow", "green", "purple", "pink", "black"]

    document.getElementsByTagName("body")[0].style.backgroundColor = colors[index++];
        if (index > colors.length - 1)
            index = 0;
        document.body.style.backgroundColor = colors[index++];
    };