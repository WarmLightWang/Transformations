/* Set options for jshint (my preferred linter)
 * disable the warning about using bracket rather than dot
 * even though dot is better
 * https://stackoverflow.com/questions/13192466/how-to-suppress-variable-is-better-written-in-dot-notation
 */
/* jshint -W069, esversion:6 */

/**
 * Thsi project will make a quadcopter with four attached propellers that moves as specified
 */

window.onload = function () {

    // Getting the canvas
    let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
    let context = canvas.getContext("2d");

    // parameters of the windmill
    const height = 30;
    const width = 5;
    const bladeLength = 15;
    const bladeThin = 2;
    const bladeThick = 4;
    const bladeOffset = 7;

    /**
     * Draw the windmill - it's positioned at X=0, at the bottom of the
     * window (Y is up!). The windmill is drawn at X=0.
     * We pass the angle for the fan/propeller/whatever calling it.
     *
     * @param {number} angle
     */
    function drawMill(x, y, angle) {

        context.save();
        // draw the base - just a triangle
        context.fillStyle = "brown";
        context.beginPath();
        context.moveTo(0, height);
        context.lineTo(-width, 0);
        context.lineTo(width, 0);
        context.fill();

        // draw the propeller
        context.save();
        context.translate(0, height); // we'll build the propeller at the origin, move into place
        context.rotate(angle); // spin the propeller
        // place the different blades at 90 degree angles to the first
        for (let blades = 0; blades < 4; blades++) {
            context.fillStyle = "black";
            context.fillRect(0, -bladeThin / 2, bladeLength, bladeThin);
            context.fillStyle = "gray";
            context.fillRect(bladeOffset, bladeThin / 2, bladeLength, bladeThick);
            context.rotate(Math.PI / 2);
        }
        context.restore();
        context.restore();
    }

    function draw(x, y, a, b) {
        // draw the rectangle
        context.save();
        context.translate(x, y);
        context.rotate(b);
        context.fillStyle = "brown";
        context.fillRect(-20, -40, 50, 80);

        // draw the triangle
        context.fillStyle = "yellow";
        context.beginPath();
        context.moveTo(5, -35);
        context.lineTo(-5, -10);
        context.lineTo(15, -10);
        context.closePath();
        context.fill();

        // Four arms
        context.save();
        context.translate(-15, -33);
        context.rotate(3 * Math.PI / 4);
        drawMill(x, y, a);
        context.restore();

        context.save();
        context.translate(25, -33);
        context.rotate(-3 * Math.PI / 4);
        drawMill(x, y, a);
        context.restore();

        context.save();
        context.translate(-15, 33);
        context.rotate(Math.PI / 4);
        drawMill(x, y, a);
        context.restore();

        context.save();
        context.translate(25, 33);
        context.rotate(-Math.PI / 4);
        drawMill(x, y, a);
        context.restore();
        context.restore();
    }

    function drawScene() {
        // speed control
        let a = performance.now() / 2000;

        //first one runs by a circle
        let b = Math.atan2(-200 * Math.sin(2 * a), 200 * Math.cos(2 * a)) + Math.PI / 2;
        let x = 200 + 100 * Math.sin(2 * a);
        let y = 200 + 100 * Math.cos(2 * a);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.save();
        draw(x, y, a * 30, b);
        context.restore();

        // Second one runs that it turn back when its path is blocked 
        let a1 = performance.now() / 2000;
        let b1 = Math.atan2(-200 * Math.sin(2 * a1), 100 * Math.cos(a1)) + Math.PI / 2;
        let x1 = 400 + 100 * Math.sin(a1);
        let y1 = 400 + 100 * Math.cos(2 * a1);
        context.save();
        draw(x1, y1, a * 30, b1);
        context.restore();
        window.requestAnimationFrame(drawScene);
    }
    drawScene();
};