let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const restart = document.querySelector(".restartcontainer");
const msg = document.querySelector("#msg");
const user = document.querySelector("#userscore");
const comp = document.querySelector("#compscore");

const restartbtn = () => {
    userscore = 0;
    compscore = 0;
    user.innerText = userscore;
    comp.innerText = compscore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#280a28";
};

const drawgame = () => {
    msg.innerText = "Game was Draw! Play Again!";
    msg.style.backgroundColor = "rgba(63, 50, 114, 1)";
};

const gencompchoice = () => {
    const option = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return option[idx];
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        user.innerText = userscore;
        msg.innerText = `You Win! Your ${userchoice} beats computer's ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        comp.innerText = compscore;
        msg.innerText = `You Lose! Computer's ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice !== "paper";
        } else if (userchoice === "paper") {
            userwin = compchoice !== "scissor";
        } else {
            userwin = compchoice !== "rock";
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

restart.addEventListener("click", restartbtn);
