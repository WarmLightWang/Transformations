
/* Set options for jshint (my preferred linter)
 * disable the warning about using bracket rather than dot
 * even though dot is better
 * https://stackoverflow.com/questions/13192466/how-to-suppress-variable-is-better-written-in-dot-notation
 */
/* jshint -W069, esversion:6 */

/**
 * This project will restore the triangle to original position when the “Jump Right” button is released
 */
window.onload = function () {
    /**
     * This is mainly about understanding what translate does.
     */
    /** @type {HTMLCanvasElement} */
    let canvas = ( /** @type {HTMLCanvasElement} */ document.getElementById("canvas1"));
    let context = canvas.getContext('2d');
    /** @type {HTMLButtonElement} */
    let button = ( /** @type {HTMLButtonElement} */ document.getElementById("button1"));

    /**
     * draw the box with a triangle in it - the jump flag says if the
     * button is pressed (if it is, the triangle should move to the right)
     * 
     * This function - without using any negative numbers!
     * 
     * @param {number} jump 
     */
    function draw(jump) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (jump) {
            context.save();
            context.translate(20, 0);
            context.fillStyle = "blue";
        } else {
            context.fillStyle = "red";
        }
        context.beginPath();
        context.moveTo(20, 10);
        context.lineTo(10, 30);
        context.lineTo(30, 30);
        context.fill();
        context.restore();
    }
    // draw the initial triangle
    draw(0);

    // now make the button work
    button.onmousedown = function () {
        draw(1);
    };
    button.onmouseup = function () {
        draw(0);
    };
};