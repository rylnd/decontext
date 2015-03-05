$(function() {
  var swapItems = function(array, index, otherIndex) {
    var tempItem = array[index];

    array[index] = array[otherIndex];
    array[otherIndex] = tempItem;

    return array;
  },
  shuffle = function(array) {
    var randomRemainingIndex;

    array.forEach(function(_, index) {
      randomRemainingIndex = Math.floor(Math.random() * index);
      swapItems(array, index, randomRemainingIndex);
    });

    return array;
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var $sentences = $('.sentences'),
        text = $('[name=document]').val();

    var sentences = text.split(/\.\s+/),
        shuffledSentences = shuffle(sentences),
        paragraphs = "<p>" + shuffledSentences.join(".</p><p>") + "</p>";

    $sentences.html(paragraphs);
  });
})
