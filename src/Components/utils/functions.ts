/**
 *
 * @param {string} txt - the input text to be sliced
 * @param {number} [max=50] - the maximum length before truncation
 * @returns the sliced text, with an ellipsis (...) appended if truncated
 */
export function textSlicer(txt: string, max: number = 50) {
  if (txt.length >= max) {
    return `${txt.slice(0, max)}...`;
  } else {
    return txt;
  }
}
