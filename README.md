# Stone-Paper-Scissor

A simple web-based Stone-Paper-Scissor (Rock-Paper-Scissors) game built using HTML, CSS and JavaScript.

---

## 🎮 Features

- Choose between “Stone”, “Paper” or “Scissor”.  
- Play against the computer which makes a random choice.  
- The game determines the winner of each round:  
  - Stone beats Scissor.  
  - Scissor beats Paper.  
  - Paper beats Stone.  
  - A tie if both choose the same.  
- Display of current score (you vs computer).  
- Simple and clean UI, good for beginners to understand DOM manipulation and basic game logic.

---

## 🧰 Technologies used

- HTML5 for the markup (`index.html`).  
- CSS3 (`style.css`) for styling and layout.  
- JavaScript (`app.js`) for game logic, event handling and dynamic updates.

---

## 🚀 Getting Started

### Prerequisites  
You only need a modern web browser. No additional setup or server required (works locally).

### How to run  
1. Clone this repository:  
   ```bash
   git clone https://github.com/HariomGundale/Stone-Paper-Scissor.git

2. Navigate into the project folder:
   ```bash
   cd Stone-Paper-Scissor

3. Open index.html in your browser.
4. Start playing!

## 📁 Project Structure
```plaintext
Stone-Paper-Scissor/
│
├── index.html        # Main HTML file
├── style.css         # Styling and layout
├── app.js            # Game logic and DOM interactions
└── images/           # (Optional) Image assets used for icons or buttons


## 🧠 How It Works

1. The player selects Stone, Paper, or Scissor.

2. The computer randomly picks one of the three options.

3. JavaScript compares both selections:

    - If choices are the same → it's a tie.
    - Otherwise → the winner is determined using standard rules.

4. The result is displayed on the screen with updated scores.

5. The player can continue playing multiple rounds — scores accumulate dynamically.

## 👤 Author

Hariom Gundale

If you like this project, feel free to ⭐ star the repo and fork it for improvements!