$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();

    var $sentences = $('.sentences'),
        text = $('[name=document]').val();

    var sentences = text.split(/\.\s+/),
        paragraphs = "<p>" + sentences.join(".</p><p>") + "</p>";

    $sentences.html(paragraphs);
  });
})
