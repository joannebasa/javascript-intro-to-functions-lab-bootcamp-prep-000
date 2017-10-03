function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {

}

function logWhisper(string) {
  const spy = expect.spyOn(console, 'log').andCallThrough()

}

function sayHiToGrandma(string) {

}
