$(document).ready(function () {
    $(function () {
        $(window).on('scroll', function () {
          if ($(window).scrollTop() > 70) {
            $('.navbar').addClass('active');
            $('.navbar').addClass('fixed-top');
          } else {
            $('.navbar').removeClass('active');
            $('.navbar').removeClass('fixed-top');
          }
        });
      });

      $(window).on('scroll', function () {
        $('.num-counter').each(function() {
            var pos_y   = $(this).offset().top - window.innerHeight;
            var $this   = $(this).find('.num'),
                countTo = $this.attr('data-to'),
                during  = parseInt( $this.attr('data-time') ),
                topOfWindow = $(window).scrollTop();

            if ( pos_y < topOfWindow ) {    
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            }
        });
    });

    // if (screen.width > 1025) {
    //     $('.navbar').addClass('navbar-expand');
    // }
    // else{
    //     $('.navbar').removeClass('navbar-expand');
    // }
  });