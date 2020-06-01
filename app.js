$(document).ready(function () {
  $("#keyboard-upper-container").hide();

  $(document).keydown(function (e) {
    if (e.keyCode === 16) {
      $("#keyboard-lower-container").hide();
      $("#keyboard-upper-container").show();
    }
  });
  $(document).keyup(function (e) {
    $(".highlight").removeClass("highlight");
    if (e.keyCode === 16) {
      $("#keyboard-lower-container").show();
      $("#keyboard-upper-container").hide();
    }
  });

  let letterIndex = 0;
  let sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate",
  ];
  let sentenceIndex = 0;
  let currentSentence = sentences[sentenceIndex];

  $(document).keypress(function (e) {
    e.preventDefault();
    $(`#${e.keyCode}`).addClass("highlight");
    if (currentSentence.charCodeAt(letterIndex) == e.keyCode) {
  $("#feedback").append("<span class = 'glyphicon glyphicon-ok'></span>")
      $("#yellow-block").css("left", "+=17.5");
      letterIndex++;
    } else {
      $("#feedback").append("<span class = 'glyphicon glyphicon-remove'></span>")
    } 
    if (letterIndex == currentSentence.length) {
      letterIndex = 0;
      sentenceIndex++;
      $("#yellow-block").css("left", "initial");
      $("#sentence").text(sentences[sentenceIndex]);
      currentSentence = sentences[sentenceIndex];
    } 
  });

  $("#sentence").text(currentSentence);
});
