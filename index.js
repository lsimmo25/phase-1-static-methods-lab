class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    const symbols = /[!@$#*(){}^]/g;
    return string.replace(symbols, "");
  }

  static titleize(string) {
    const words = string.split(" ")
    const lowerCaseWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]

    for (let i = 0; i < words.length; i++) {
      if (lowerCaseWords.includes(words[i])) {
        words[i] = words[i].toLowerCase()
      } else {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
      }
    }

    if (words.length > 0) {
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }

    return words.join(" ");

  }
}