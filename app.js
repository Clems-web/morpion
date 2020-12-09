let carre = document.getElementsByClassName("case");

document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

for (let div of carre) {
    let player1 = "x";
    let player2 = "o";
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");
    let div5 = document.getElementById("div5");
    let div6 = document.getElementById("div6");
    let div7 = document.getElementById("div7");
    let div8 = document.getElementById("div8");
    let div9 = document.getElementById("div9");

    div.addEventListener("mouseup", function (event) {
        switch (event.button) {
            case 0:
                if (div.innerHTML === "") {
                 div.innerHTML = player1;
                }
                break;
            case 2:
                if (div.innerHTML === "") {
                    div.innerHTML = player2;
                }
                break;
        }

        /* check si player1 a gagné*/
        if ((div1.innerHTML === player1) && (div2.innerHTML === player1) && (div3.innerHTML === player1)) {
            alert("Player 1 win !");
            window.location.reload();
        }
        else if ((div4.innerHTML === player1) && (div5.innerHTML === player1) && (div6.innerHTML === player1)) {
            alert("Player 1 win !");
            window.location.reload();
        }
        else if ((div7.innerHTML === player1) && (div8.innerHTML === player1) && (div9.innerHTML === player1)) {
            alert("Player 1 win !");
            window.location.reload();
        }
        else if ((div1.innerHTML === player1) && (div4.innerHTML === player1) && (div7.innerHTML === player1)) {
            alert("Player 1 win !");
            window.location.reload();
        }
        else if ((div2.innerHTML === player1) && (div5.innerHTML === player1) && (div8.innerHTML === player1)) {
            alert("Player 1 win !");
            window.location.reload();
        }
        else if ((div3.innerHTML === player1) && (div6.innerHTML === player1) && (div9.innerHTML === player1)) {
            alert("Player 1 win !");
            window.location.reload();
        }
        else if ((div1.innerHTML === player1) && (div5.innerHTML === player1) && (div9.innerHTML === player1)) {
            alert("Player 1 win !");
            window.location.reload();
        }
        else if ((div3.innerHTML === player1) && (div5.innerHTML === player1) && (div7.innerHTML === player1)) {
            alert("Player 1 win !");
            window.location.reload();
        }

        /* check si player 2 a gagné*/
        else if ((div1.innerHTML === player2) && (div2.innerHTML === player2) && (div3.innerHTML === player2)) {
            alert("Player 2 win !")
            window.location.reload();
        }
        else if ((div4.innerHTML === player2) && (div5.innerHTML === player2) && (div6.innerHTML === player2)) {
            alert("Player 2 win !");
            window.location.reload();
        }
        else if ((div7.innerHTML === player2) && (div8.innerHTML === player2) && (div9.innerHTML === player2)) {
            alert("Player 2 win !");
            window.location.reload();
        }
        else if ((div1.innerHTML === player2) && (div4.innerHTML === player2) && (div7.innerHTML === player2)) {
            alert("Player 2 win !");
            window.location.reload();
        }
        else if ((div2.innerHTML === player2) && (div5.innerHTML === player2) && (div8.innerHTML === player2)) {
            alert("Player 2 win !");
            window.location.reload();
        }
        else if ((div3.innerHTML === player2) && (div6.innerHTML === player2) && (div9.innerHTML === player2)) {
            alert("Player 2 win !");
            window.location.reload();
        }
        else if ((div1.innerHTML === player2) && (div5.innerHTML === player2) && (div9.innerHTML === player2)) {
            alert("Player 2 win !");
            window.location.reload();
        }
        else if ((div3.innerHTML === player2) && (div5.innerHTML === player2) && (div7.innerHTML === player2)) {
            alert("Player 2 win !");
            window.location.reload();
        }

    })
}

