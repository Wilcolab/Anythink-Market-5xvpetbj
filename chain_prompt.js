/**
 * Converts a given string to kebab-case (lowercase words separated by hyphens).
 * Handles mixed delimiters, camelCase, leading/trailing spaces, and empty/null/undefined.
 * Throws a descriptive error for non-string inputs (except null/undefined).
 */
function toKebabCase(input) {
    // Treat null or undefined as empty string per spec
    if (input === null || input === undefined) return '';

    // Only accept string inputs from here; numbers, arrays, objects should error
    if (typeof input !== 'string') {
        throw new TypeError('Invalid input: expected a string.');
    }

    // Trim leading/trailing whitespace
    let str = input.trim();

    // If the trimmed string is empty, return empty string
    if (str === '') return '';

    // Insert a space between lower-to-upper transitions to break up camelCase (e.g. "helloWorld" -> "hello World")
    // Also handle digits followed by letters and letters followed by digits in the same manner where appropriate
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // Replace any sequence of non-alphanumeric characters (including spaces, underscores, punctuation) with a single hyphen
    // This collapses repeated delimiters (e.g. "a__b  c---d" -> "a-b-c-d")
    str = str.replace(/[^A-Za-z0-9]+/g, '-');

    // Remove any leading/trailing hyphens that may have been introduced
    str = str.replace(/^[-]+|[-]+$/g, '');

    // Convert to lowercase and return the kebab-case string
    return str.toLowerCase();
}

// Example test cases:

console.log(toKebabCase("HelloWorld"));                 // -> "hello-world"
console.log(toKebabCase("hello_world example"));        // -> "hello-world-example"
console.log(toKebabCase(" Mixed Case---Example "));     // -> "mixed-case-example"
console.log(toKebabCase(""));                           // -> ""
console.log(toKebabCase(null));                         // -> ""

// Example showing error for non-string input
try {
    console.log(toKebabCase(123));
} catch (err) {
    console.error(err.message); // -> "Invalid input: expected a string."
}

module.exports = toKebabCase;