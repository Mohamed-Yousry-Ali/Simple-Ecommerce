/** 
* Slices a string to a specified maximum length and appends ellipsis (...) if necessary.
 * @param {string} txt - The input string to be sliced.
 * @param {number} [max=50] - The maximum length of the sliced string. Default is 50.
 * @returns {string} The sliced string. If the input string is shorter than the maximum length, 
 * the original string is returned unchanged.
 */

export function txtSlicer (txt : string , max : number =50){
    if(txt.length >= max) return `${txt.slice(0 , max)}...`;
    else return txt
}