// A JavaScript script that fetches from https://fourtonfish.com/hellosalut/?lang=fr and displays the value of hello from that fetch in the HTML tag DIV#hello.
// The translation of “hello” must be displayed in the HTML tag DIV#hello
// Your script must work when it is imported from the <head> tag
// use the JQuery API
$(document).ready(function () {
  $.getJSON('https://fourtonfish.com/hellosalut/?lang=fr', function (data) {
    const translatedHello = data.hello;
    $('#hello').text(translatedHello);
  });
});
