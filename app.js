let carre = document.getElementsByClassName("case");
let container = document.getElementById("container");

document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

for (let div of carre) {
    let player1 = "x";
    let player2 = "o";
    div.addEventListener("mouseup", function (event) {
        switch (event.button) {
            case 0:
                div.innerHTML = player1;
                break;
            case 2:
                div.innerHTML = player2
                break;
        }
    })
};

