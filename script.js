var p1Score = 0;
var p2Score = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let changeImage = function (action,op) {
    if (action == '1') {
        document.getElementById('hand1').src = 'images/rockLeft.png';
    } else if (action == '2') {
        document.getElementById('hand1').src = 'images/paperLeft.png';
    } else {
        document.getElementById('hand1').src = 'images/scissorLeft.png';
    }

    if (op == 1) {
        document.getElementById('hand2').src = 'images/rockRight.png';
    } else if (op == 2) {
        document.getElementById('hand2').src = 'images/paperRight.png';
    } else {
        document.getElementById('hand2').src = 'images/scissorRight.png';
    }
}

let rps = async function (action) {
    let op = Math.floor(Math.random() * 3) + 1;
    if (op == action) {
        // extra random??
        op = Math.floor(Math.random() * 3) + 1;
    }
    // rock = 1
    // paper = 2
    // scissors = 3
    console.log(op + " " + action);

    changeImage(action,op);

    let outcome = "";
    let reason = " ";
    switch (action) {
        case 1:
            if (op == 1) {
                outcome = "Tie!";
            } else if (op == 2) {
                outcome = "Computer win!";
                reason = "Paper beats rock";
                p2Score++;
            } else {
                outcome = "You win!";
                reason = "Rock beats scissors";
                p1Score++;
            }
            break;
        case 2:
            if (op == 1) {
                outcome = "You win!";
                reason = "Paper beats rock";
                p1Score++;
            } else if (op == 2) {
                outcome = "Tie!";
            } else {
                outcome = "Computer win!";
                reason = "Scissors beats paper";
                p2Score++;
            }
            break;
        case 3:
            if (op == 1) {
                outcome = "Computer win!";
                reason = "Rock beats scissors";
                p2Score++;
            } else if (op == 2) {
                outcome = "You win!";
                reason = "Scissors beats paper";
                p1Score++;
            } else {
                outcome = "Tie!";
            }
    }
    console.log(outcome)
    console.log(reason)
    console.log("Player: " + p1Score + " Computer: " + p2Score);

    document.getElementById('score1').textContent = "You: " + p1Score;
    document.getElementById('score2').textContent = "Computer: " + p2Score;
    document.getElementById('announcer').textContent = outcome;
    document.getElementById('details').textContent = reason;

    let gameover = document.getElementById("gameover");
    let message = document.getElementById("gameoverMessage");
    if (p1Score == 5 || p2Score == 5) {
        // await sleep (250);  
        gameover.style.display = "block";
        if (p1Score == 5) {
            message.textContent = "Congratulations You win!"
        } else {
            message.textContent = "Game over You lost ://"
        }
    }

    // reset hand
    await sleep (2000);
    document.getElementById('hand1').src = 'images/standbyLeft.gif';
    document.getElementById('hand2').src = 'images/standbyRight.gif';
}

let reset = function () {
    location.reload();
}