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
  $(document).keypress(function (e) {
    e.preventDefault();
    console.log(letterIndex);
    console.log(currentSentence.charCodeAt(letterIndex));
    console.log(e.keyCode);
    $(`#${e.keyCode}`).addClass("highlight");
    if (currentSentence.charCodeAt(letterIndex) == e.keyCode) {
      $("#yellow-block").css("left", "+=17.5");
      letterIndex++;
    }
    if (letterIndex == currentSentence.length) {
      letterIndex = 0;
      sentenceIndex++;
      $("#sentence").text(sentences[sentenceIndex]);
      currentSentence = senteces[sentenceIndex];
      $("#yellow-block").css("left", "17.5");
    }
  });

  let sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate",
  ];
  let sentenceIndex = 0;
  let currentSentence = sentences[sentenceIndex];

  $("#sentence").text(currentSentence);
});
