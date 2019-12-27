module.exports = function unicorn(string) {
    if (typeof string !== "string") 
        throw new TypeError("Unicorn takes string");
    return `🦄-${string}`;
}