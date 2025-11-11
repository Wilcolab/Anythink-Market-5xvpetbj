/**
 * Convert a string to camelCase.
 * Handles spaces, underscores, hyphens and other non-alphanumeric separators.
 *
 * Examples:
 *  toCamelCase("first name")     // "firstName"
 *  toCamelCase("user_id")        // "userId"
 *  toCamelCase("SCREEN_NAME")    // "screenName"
 *  toCamelCase("mobile-number")  // "mobileNumber"
 *
 * @param {string} str
 * @returns {string}
 */
function toCamelCase(str) {
    if (typeof str !== 'string') return '';

    // Split on any sequence of non-letter/non-number characters (Unicode-aware)
    const parts = str
        .split(/[^\p{L}\p{N}]+/u)
        .filter(Boolean)
        .map(s => s.toLowerCase());

    if (parts.length === 0) return '';

    const first = parts[0];
    const rest = parts
        .slice(1)
        .map(s => s.charAt(0).toUpperCase() + s.slice(1));

    return first + rest.join('');
}

module.exports = toCamelCase;

// If you prefer ESM exports, uncomment the next line:
// export default toCamelCase;