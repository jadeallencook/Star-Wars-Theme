(function () {
  // attach animation to button
  $('#star-wars-btn').click(function () {
    $('article.starwars').css('display', 'block');
  });
  // starwars codepen
  StarWars = (function () {
    // constructor
    function StarWars(args) {
      // context wrapper
      this.el = $(args.el);
      // start animation
      this.start = $('#star-wars-btn');
      // animation wrapper
      this.animation = this.el.find('.animation');
      // start the animation on click
      this.start.click($.proxy(function () {
        // extract article data
        for (var x = 0, max = document.querySelectorAll('.article-body-text-wrapper > p').length; x < max; x++) {
          var text = '<p>' + document.querySelectorAll('.article-body-text-wrapper > p')[x].innerText + '</p>';
          $('#star-wars-content').append(text);
        }
        // show animation
        window.scrollTo(0, 0);
        this.start.hide();
        this.el.append(this.animation);
        // exiting animation events
        $('.starwars').click(function () {
          $('.starwars').hide();
          $(window).off('scroll.disableScroll');
        });
        $(window).on('scroll.disableScroll', function() {
          window.scrollTo(0, 0);
        });
      }, this));
    }
    return StarWars;
  })();
  new StarWars({
    el: '.starwars'
  });
})();