$(document).ready(function () {
    $(function () {
        $(window).on('scroll', function () {
          if ($(window).scrollTop() > 100) {
            $('.navbar').addClass('active');
            $('.navbar').addClass('fixed-top');
          } else {
            $('.navbar').removeClass('active');
            $('.navbar').removeClass('fixed-top');
          }
        });
      });
    $('#search-icon').click(function (e) { 
        // $('#search-content').css({"display": "block"});
        // alert("click");
        $('#search-content').toggle();
        $('#search-icon-img').toggleClass("fa-solid fa-xmark");
      //  if($('#search-icon-img').attr("src", "images/search-interface-symbol.png")){
      //     $('#search-icon-img').attr("src", "images/dots-menu.png");
      //   }
      //   else if($('#search-icon-img').attr("src", "images/dots-menu.png")){
      //     $('#search-icon-img').attr("src", "images/search-interface-symbol.png")
      //   }
      //   else{
      //     $('#search-icon-img').attr("src", "images/dots-menu.png")
      //   }
    });
  //   $('#search-icon').click(function (e) { 
  //     if($('#search-icon-img').attr("src", "images/search-interface-symbol.png")){
  //       $('#search-icon-img').attr("src", "images/dots-menu.png");
  //     }
  //     else if($('#search-icon-img').attr("src", "images/dots-menu.png")){
  //       $('#search-icon-img').attr("src", "images/search-interface-symbol.png");
  //     }
  //   else{
  //     $('#search-icon-img').attr("src", "images/search-interface-symbol.png");
  //   }  
  // });

$('#side-menu').click(function (e) { 
  $('.side-overlay').css({"display": "block"});
});
$('.side-closing').click(function (e) { 
  $('.side-overlay').css({"display": "none"});
  alert("as")
});
$('.side-closing-div').click(function (e) { 
  $('.side-overlay').css({"display": "none"});
});
$('.side-panel').click(function (e) { 
  $('.side-overlay').css({"display": "block"});
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