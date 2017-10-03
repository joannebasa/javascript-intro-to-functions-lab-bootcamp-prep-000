function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var spy = "hello";
  return string.toUpperCase();
 console.log(spy);
}

function logWhisper(string) {
  var spy = "HELLO";
  return string.toLowerCase();
  console.log(spy);

}

function sayHiToGrandma(string) {
  var greeting = "I love you, Grandma.";
  if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
  if (string.toUpperCase === true) {
    return "YES INDEED!";
  } else {
    return "I can\'t hear you!";
  }
  sayHiToGrandma(greeting);
}
