$(function() {

    //Modal

    const modalCall = $('[data-modal');
    const modalClose = $('[data-close');

    modalCall.on('click', function(event) {
        event.preventDefault();

        let $this = $(this);
        let modal = $this.data('modal');

        $(modal).addClass('modal--show');
        $('body').addClass('no-scroll');

        setTimeout(function() {
            $(modal).find(".modal--dialog").css({
                transform: "scale(1)"
            });
        }, 200);
    });

    modalClose.on('click', function(event) {
        event.preventDefault();

        let $this = $(this); 
        let modalParent = $this.parents(".modal");

        modalParent.find(".modal--dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass("modal--show");
            $("body").removeClass("no-scroll");
        }, 200);
    });

   $(".modal").on("click", function(event) {

        let $this = $(this)

        $this.find(".modal--dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function() {
            $this.removeClass("modal--show");
            $("body").removeClass("no-scroll");
        }, 200);

        
    });

    $(".modal--dialog").on("click", function(event) {

        event.stopPropagation();
    });

    //Header

    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

$(window).on("scroll load resize", function() {
  introH = intro.innerHeight();
  scrollPos = $(this).scrollTop();

  checkScroll(scrollPos, introH);
  
});

function checkScroll(scrollPos, introH) {
  if(scrollPos > introH) {
    header.addClass("fixed");
  } else {
    header.removeClass("fixed");
  }
}

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  let elementID = $(this).data('scroll');
  let elementOffset = $(elementID).offset().top;
  
  console.log(elementOffset);

  $("html, body").animate({
    scrollTop: elementOffset - 70
  }, 700);
});

//Disabled btn

//rectangle animation
(function () {
    let rectangle = document.querySelector('.rectangle');
    let rectangleGreen = document.querySelector('.rectangle--green');
    let rectangleBeige = document.querySelector('.rectangle--beige');

  
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('rectangle-animation');
        }
      });
    });
  
    observer.observe(rectangle);
  })();

  (function () {
    let rectangleGreen = document.querySelector('.rectangle--green');
    let rectangleBeige = document.querySelector('.rectangle--beige');

  
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('rectangle-animation');
        }
      });
    });
  
    observer.observe(rectangleBeige);
  })();

  (function () {
    let rectangleGreen = document.querySelector('.rectangle--green');

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('rectangle-animation');
        }
      });
    });
  
    observer.observe(rectangleGreen);
  })();
})