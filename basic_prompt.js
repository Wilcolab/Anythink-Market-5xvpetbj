const prompt = `Write a function named toCamelCase that converts an input string to camelCase.

Rules:
- Trim leading and trailing whitespace.
- Split words on spaces, hyphens, underscores, and most punctuation.
- Lowercase the entire first word.
- Capitalize the first letter of each subsequent word and lowercase the rest.
- Remove punctuation between words; preserve digits inside words.
- If input has no alphanumeric characters, return an empty string.
- Return only the resulting camelCase string.

Examples:
- Input: "hello world" -> Output: "helloWorld"
- Input: " Foo_bar-baz QUUX " -> Output: "fooBarBazQuux"
- Input: "version 2 update" -> Output: "version2Update"
`;

module.exports = prompt;