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
        $('#star-wars-content').append($('.article-body-text-wrapper')[0].innerText);
        window.scrollTo(0, 0);
        this.start.hide();
        this.el.append(this.animation);
        $('.starwars').click(function () {
          $('.starwars').hide();
        });
      }, this));
    }
    return StarWars;
  })();
  new StarWars({
    el: '.starwars'
  });
})();