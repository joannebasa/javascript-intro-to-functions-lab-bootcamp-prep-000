function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
 console.log(string);
}

function logWhisper(string) {
  return string.toLowerCase();
  console.log();

}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    return "Ilove you, too.";
  }
  if (string.toUpperCase === true) {
    return "YES INDEED!";
  }
  if (string.toLowerCase === true) {
    return "I can\'t hear you!";
  }
}
