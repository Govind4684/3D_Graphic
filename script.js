const canvas = document.querySelector("canvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 50, 100, 150);

ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(75, 75, 100, 100);

ctx.fillStyle = "rgb(255 0 255 / 75%)";
ctx.fillRect(35, 100, 165, 45);

ctx.strokeStyle = "rgb(255, 255, 255)";
ctx.strokeRect(30, 25, 175, 200);

ctx.lineWidth = 5;
