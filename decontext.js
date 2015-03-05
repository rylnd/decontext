$(function() {
  var swapItems = function(array, index, otherIndex) {
    var tempItem = array[index];

    array[index] = array[otherIndex];
    array[otherIndex] = tempItem;

    return array;
  },
  randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  shuffle = function(array) {
    var randomRemainingIndex;

    for (var index = 0; index < array.length; index++) {
      randomRemainingIndex = randomNumber(index, array.length);
      swapItems(array, index, randomRemainingIndex);
    }

    return array;
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var $sentences = $('.sentences'),
        text = $('[name=document]').val();

    var sentences = text.split(/\.\s+/),
        shuffledSentences = shuffle(sentences),
        paragraphs = shuffledSentences.map(function(sentence) {
          return "<p>" + sentence + ".</p>";
        });

    $sentences.html(paragraphs);
  });
})
