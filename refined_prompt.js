/**
 * Convert a string to camelCase.
 *
 * Behavior:
 * - Trims leading and trailing whitespace and special characters.
 * - Collapses any sequence of non-letter characters (including digits and symbols)
 *   into word boundaries. Only Unicode letters are preserved; digits and symbols
 *   are removed from the output.
 * - Preserves letters from all alphabets by using Unicode letter classification.
 * - The first preserved word is entirely lowercased. Each subsequent preserved
 *   word is lowercased and then capitalized (first letter uppercased).
 * - If the input is an empty string, or contains no Unicode letters after
 *   filtering, the function returns an empty string.
 *
 * Notes:
 * - The implementation relies on Unicode property escapes (e.g. \p{L}) and thus
 *   requires an environment that supports ECMAScript 2018+ regular expressions.
 *
 * @function toCamelCase
 * @param {string} input - The string to convert. May contain spaces, underscores,
 *   hyphens, punctuation, numbers, and letters from any alphabet. Leading and
 *   trailing whitespace/special characters are ignored.
 * @returns {string} The camelCased result. Examples:
 *   - toCamelCase("hello world") => "helloWorld"
 *   - toCamelCase("Hello_world-example") => "helloWorldExample"
 *   - toCamelCase("") => ""
 *   - toCamelCase("123-.-") => "" (no letters remain)
 * @throws {TypeError} Throws if input is not a string (e.g. null, undefined,
 *   number, object).
 *
 * @example
 * // Basic usage
 * toCamelCase("hello world"); // "helloWorld"
 *
 * @example
 * // Mixed delimiters and non-letter characters are removed
 * toCamelCase("  __Foo-BAR__123!!baz  "); // "fooBarBaz"
 *
 * @example
 * // Unicode letters are preserved
 * toCamelCase("Привет мир"); // "приветМир"
 */
 
/**
 * Convert a string to dot.case.
 *
 * Behavior:
 * - Trims leading and trailing whitespace and special characters.
 * - Collapses any sequence of non-letter characters (including digits and symbols)
 *   into word boundaries. Only Unicode letters are preserved; digits and symbols
 *   are removed from the output.
 * - Preserves letters from all alphabets by using Unicode letter classification.
 * - All preserved words are lowercased and joined with a single dot ('.').
 * - If the input is an empty string, or contains no Unicode letters after
 *   filtering, the function returns an empty string.
 *
 * Notes:
 * - The implementation relies on Unicode property escapes (e.g. \p{L}) and thus
 *   requires an environment that supports ECMAScript 2018+ regular expressions.
 *
 * @function toDotCase
 * @param {string} input - The string to convert. May contain spaces, underscores,
 *   hyphens, punctuation, numbers, and letters from any alphabet. Leading and
 *   trailing whitespace/special characters are ignored.
 * @returns {string} The dot.case result. Examples:
 *   - toDotCase("hello world") => "hello.world"
 *   - toDotCase("Hello_world-example") => "hello.world.example"
 *   - toDotCase("") => ""
 *   - toDotCase("2020_--") => "" (no letters remain)
 * @throws {TypeError} Throws if input is not a string (e.g. null, undefined,
 *   number, object).
 *
 * @example
 * // Basic usage
 * toDotCase("hello world"); // "hello.world"
 *
 * @example
 * // Mixed delimiters and non-letter characters are removed
 * toDotCase("  __Foo-BAR__123!!baz  "); // "foo.bar.baz"
 *
 * @example
 * // Unicode letters are preserved
 * toDotCase("こんにちは 世界"); // "こんにちは.世界"
 */

    const trimmed = input.trim();
    if (trimmed === '') return '';

    // Replace any sequence of non-letter characters with a single space.
    // Uses Unicode property \p{L} so it preserves letters from other alphabets too.
    const lettersOnly = trimmed.replace(/[^\p{L}]+/gu, ' ').trim();
    if (lettersOnly === '') return '';

    const parts = lettersOnly.split(/\s+/).map(p => p.toLowerCase());
    return parts.join('.');
}

module.exports = toDotCase;

// ...existing code...