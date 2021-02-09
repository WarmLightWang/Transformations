/* Set options for jshint (my preferred linter)
 * disable the warning about using bracket rather than dot
 * even though dot is better
 * https://stackoverflow.com/questions/13192466/how-to-suppress-variable-is-better-written-in-dot-notation
 */
/* jshint -W069, esversion:6 */

/**
 * This project will define the canvas coordinate systems as specified
 */

window.onload = function () {
    /**
     *
     * @param {HTMLCanvasElement} canvas
     */
    function picture(canvas) {

        let context = canvas.getContext("2d");

        // change the coordinate system to [-100,100] [-100,100]
        // line 1
        // line 2
        context.scale(canvas.width / 200, - canvas.height / 200);
        context.translate(100, -100);
        context.fillStyle = "lightgray";
        context.beginPath();
        context.moveTo(0, -100);
        context.lineTo(100, 0);
        context.lineTo(0, 100);
        context.lineTo(-100, 0);
        context.fill();

        // draw the plus in the center
        context.strokeStyle = "darkred";
        context.lineWidth = 2;
        context.beginPath();
        const dx = 20;
        context.moveTo(0, -dx);
        context.lineTo(0, dx);
        context.moveTo(-dx, 0);
        context.lineTo(dx, 0);
        context.stroke();

        // draw the T
        context.strokeStyle = 'darkblue';
        context.beginPath();
        context.moveTo(-90, 90);
        context.lineTo(-70, 90);
        context.moveTo(-80, 90);
        context.lineTo(-80, 70);
        context.stroke();
    }

    ["canvas1", "canvas2", "canvas3"].forEach(function (name) {
        picture( /** @type {HTMLCanvasElement} */(document.getElementById(name)));
    });
};