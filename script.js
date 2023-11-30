const extendHex = (shortHex) => {
  // write your code here
	shortHex = shortHex.replace("#", "").toLowerCase();

    // Ensure the input is a valid short hex code
    if (!/^[0-9a-f]{3}$/.test(shortHex)) {
        alert("Invalid short hex code. Please enter a valid short hex code.");
        return;
    }

    // Expand the short hex code to the full hex code
    const fullHex = shortHex
        .split("")
        .map((char) => char.repeat(2))
        .join("");

    return `#${fullHex}`;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
