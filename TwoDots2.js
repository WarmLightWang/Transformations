/* jshint -W069, esversion:6 */

import * as utilities from "./4-utilities.js";

/**
 * Notice that it gets the two points and the context as arguments
 * This function should apply a transformation
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 */
function twoDots(context, x1, y1, x2, y2) {
    let angle = Math.atan2((y2 - y1), (x2 - x1))-(Math.PI / 4);
    let scale = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2)) / (10 * Math.sqrt(2));
    let a = scale * Math.cos(angle);
    let b = scale * Math.sin(angle);
    let c = -scale * Math.sin(angle);
    let d = scale * Math.cos(angle);
    let e = x1;
    let f = y1;
    context.transform(a, b, c, d, e, f);
}

window.onload = function () {
    utilities.setup("canvas1", twoDots);
};