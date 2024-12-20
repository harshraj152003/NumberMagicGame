let mainHtml = document.getElementById("mainHtml");
let nextButton = document.getElementById("nextButton");
let container = document.getElementById("container");

let step = 0;

nextButton.addEventListener('click', function() {
    if (step < 4) {
        step++;

        switch (step) {
            case 1:
                mainHtml.innerHTML = "Now <span>Add 6</span> to that number.";
                break;
            case 2:
                mainHtml.innerHTML = "Great! Now <span>Subtract 3</span> from the number you have.";
                break;
            case 3:
                mainHtml.innerHTML = "Now, subtract the <span>number you initially chose</span> from the result.";
                break;
            case 4:
                mainHtml.innerHTML = "Let's reveal the magic!";
                setTimeout(function() {
                    showResult();
                }, 1000);
                break;
            default:
                break;
        }
    } else {
        resetGame();
    }
});

function showResult() {
    mainHtml.innerHTML = "<p><span class='magicNumber'>3</span></p>";
    createConfetti();
    nextButton.innerHTML = "Restart";
}

function createConfetti() {
    let confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti');
    container.appendChild(confettiContainer);

    for (let i = 0; i < 20; i++) {
        let confettiPiece = document.createElement('span');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confettiPiece);
    }

    setTimeout(() => {
        confettiContainer.remove();
    }, 2000);
}

function resetGame() {
    step = 0;
    mainHtml.innerHTML = "Think of a number between 1 and 10 in your mind.";
    nextButton.innerHTML = "Next";
}
