const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function ConfettiPiece() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height - canvas.height;
  this.radius = Math.random() * 6 + 4;
  this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  this.speed = Math.random() * 3 + 2;
  this.tilt = Math.random() * 10 - 5;
}

function createConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push(new ConfettiPiece());
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < confetti.length; i++) {
    let c = confetti[i];
    ctx.beginPath();
    ctx.arc(c.x + c.tilt, c.y, c.radius, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += c.speed;
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawConfetti);
}

createConfetti();
drawConfetti();
