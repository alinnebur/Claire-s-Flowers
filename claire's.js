function draw(delta) {
    totalSeconds += delta;
    var x = -1 * (img.width - canvas.width) / 2 * (1 + Math.cos(totalSeconds / Math.PI));
    var y = -1 * (img.height - canvas.height) / 2 * (1 + -Math.sin(totalSeconds / Math.PI));

    context.drawImage(img, x, y);
}