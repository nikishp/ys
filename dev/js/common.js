//$(document).ready(function() {

  $(function() {

    svg4everybody();
    objectFitImages();

    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


    $('.f-menu-control').on('click', function(event) {
      $(this).children('.hamburger').toggleClass('is-active');
      $('.f-menu').stop(true, true).slideToggle();
    });


    var mouseX = 0;
    var mouseY = 0;
    var popupCounter = 0;

    document.addEventListener("mousemove", function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
        // document.getElementById("coordinates").innerHTML = "<br />X: " + e.clientX + "px<br />Y: " + e.clientY + "px";
      });

    $(document).mouseleave(function() {
      if (mouseY < 30) {
        if (popupCounter < 1) {
          $.fancybox.open({
            src: '#form7',
            type: 'inline',
            touch: false
          });
        }
        popupCounter++;
      }
    });








    var idleState = false;
    //removeIf(production)
    var idleState = true; // удалить на продакшин
    //endRemoveIf(production)

    $(document).on('click', function(event) {
      idleState = true;
    });

    $(window).on('scroll', function(event) {
        // console.log("idleState", idleState);
        if (!idleState && $(window).scrollTop() > $('.guests').offset().top) {
            // console.log("сеция гостей" );
            $.fancybox.open({
              src: '#form3',
              type: 'inline',
              touch: false
            });
            idleState = true;
          }

        });

    $('.btn--recall-js').on('click', function(event) {

      var day = moment.tz("Europe/Moscow").format("HH:mm:ss");

      if (day > '09:00' && day < '18:00') {
            // if (day > '07:00' &&  day < '18:00' ) {
              $.fancybox.open({
                src: '#form1',
                type: 'inline',
                touch: false
              });
            } else {
              $.fancybox.open({
                src: '#form2',
                type: 'inline',
                touch: false
              });
            };

          });




    $('.popup-close').on('click', function(event) {
      $.fancybox.close();
    });

    $('.call-control input').on('change', function(event) {
        // console.log($(this).val());
        $(this).parent().addClass('call-control__item--active').siblings().removeClass('call-control__item--active');
        //form1

        // console.log($(this).parents('form').prop('id'))

        if ($(this).parents('form').prop('id') == 'form1' || $(this).parents('form').prop('id') == 'form11') {

          if ($(this).val() == 'Позвонить сейчас') {
                // console.log('Позвонить сейчас!');
                $('.form__item--datetime input').prop('disabled', true);
              } else {
                // console.log('"Позвонить позже"!');
                $('.form__item--datetime input').prop('disabled', false);
              }
            }
          });


    $(".form__item input, .form__item textarea").focus(function() {
      $(this).parent().addClass("form__item--focus");
    }).blur(function() {
        // if ($(this).val() === '') {
          $(this).parent().removeClass("form__item--focus");
        // }
      });

    $(".form__item--datetime input").flatpickr({
      "locale": "ru",
        dateFormat: "d-m-Y, H:i", //Y-m-d 
        time_24hr: true,
        enableTime: true,
        minTime: "9:00",
        maxTime: "18:00"
      });



    $('.f-menu__list-item').on('click', function(event) {
      $(this).addClass('f-menu__list-item--active').siblings().removeClass('f-menu__list-item--active');
    });


    $('.lazy').Lazy({
        // enableThrottle: false
      });

    $('.sl').each(function(index, el) {
      var arrowSelector = $(el).parent().find('.sl__control .sl__control-arrow');
        // console.log("arrowSelector", arrowSelector);
        $(el).slick({
          centerMode: true,
          centerPadding: '380px',
          lazyLoad: 'ondemand',
          initialSlide: 1,
          infinite: false,
          arrows: true,
          prevArrow: '<div class="sl-btn sl-btn--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.596 240.822"><path d="M 57.633,129.007 165.93,237.268 c 4.752,4.74 12.451,4.74 17.215,0 4.752,-4.74 4.752,-12.439 0,-17.179 L 83.438,120.418 183.133,20.747 c 4.752,-4.74 4.752,-12.439 0,-17.191 -4.752,-4.74 -12.463,-4.74 -17.215,0 L 57.621,111.816 c -4.679,4.691 -4.679,12.511 0.012,17.191 z" transform="translate(-54.113 -.001)"/></svg></div>',
          nextArrow: '<div class="sl-btn sl-btn--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.596 240.822"><path d="M 183.189,111.816 74.892,3.555 c -4.752,-4.74 -12.451,-4.74 -17.215,0 -4.752,4.74 -4.752,12.439 0,17.179 l 99.707,99.671 -99.695,99.671 c -4.752,4.74 -4.752,12.439 0,17.191 4.752,4.74 12.463,4.74 17.215,0 L 183.201,129.006 c 4.68,-4.691 4.68,-12.511 -0.012,-17.19 z" transform="translate(-54.113)"/></svg></div>',
          appendArrows: arrowSelector,
          slidesToShow: 1,
          responsive: [{
            breakpoint: 1300,
            settings: {
              centerMode: true,
              centerPadding: '120px',
            }
          }, {
            breakpoint: 768,
            settings: {
              centerMode: false,
              centerPadding: '0',
              slidesToShow: 1
            }
          }]
        });
      });


    $(".scene").each(function(index, elem) {
      new Parallax(elem, {
        'relativeInput': true,
        'clipRelativeInput': true,
        'pointer-events': true
      });
    });

    //youtube video
    function youtubeContent() {
      $('.video__item').each(function() {
        var $this = $(this),
        dataYoutube = $this.data('youtube');
        ($this).html('<div class="video__item-height"></div><div class="video__item-mask"><svg class="svg__youtube" viewBox="0 0 30.1 30.1"><path class="st0" d="M20 14.4l-6.2-4.5c-.2-.2-.5-.2-.8-.1-.3.1-.4.4-.4.7v9.1c0 .3.2.5.4.7.1.1.2.1.3.1.2 0 .3 0 .4-.1l6.2-4.5c.2-.1.3-.4.3-.6.1-.4 0-.6-.2-.8z"/><path class="st0" d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15c.1-8.3-6.7-15-15-15zm0 27.5C8.1 27.5 2.5 21.9 2.5 15S8.1 2.5 15 2.5 27.5 8.1 27.5 15 21.9 27.5 15 27.5z"/></svg><img src="https://img.youtube.com/vi/' + dataYoutube + '/maxresdefault.jpg" alt="image"></div>');

            //качество картинок может быть одно из: 0, 1, 2, 3, default, mqdefault, hqdefault, maxresdefault

            //$('.video__item:eq(0)').find('img').attr("src", 'custom img src'); // если нужно поставить "свою" картинку
          });
    };
    youtubeContent();

    $('.video__item').on('click', function() {
      var $this = $(this),
      dataYoutube = $this.data('youtube');
      youtubeContent();
      $this.html('<div class="video__item-height"></div><iframe class="video__item-iframe" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>');
    });
    //youtube video end



    $('.email-parse').on('change', function(event) {
      var emailVal = $(this).val();
        // console.log(emailVal.substr(emailVal.indexOf("@")));
        localStorage.setItem('emailVal', emailVal.substr(emailVal.indexOf("@")));

      });

    var $form = $('.form');

    $form.on('click', function(event) {
        // var formId = $(this).attr("id");
        // console.log('formId ' + formId); 
        // localStorage.setItem('form', formId);
        var pageName = window.location.pathname;
        // console.log('pageName ' + pageName);
        localStorage.setItem('currentPage', pageName);
      });

    //	E-mail Ajax Send
    $form.each(function() {
        //    var $this = $(this);
        $(this).validate({

            // rules: {
            // 	phone: {
            // 		required: true,
            // 		minlength: 6,
            // 		number: true
            // 	}
            // }, 

            submitHandler: function(form) {
              var formData = new FormData(form);
              $.ajax({
                type: "POST",
                url: "mail.php",
                data: formData,
                contentType: false,
                // dataType: "json",
                processData: false,
                beforeSend: function() {
                  $(form).find('.btn').attr("disabled", true);
                  $(form).find('.form-load').css({
                    'width': '20px',
                    'margin-left': '10px'
                  });
                  console.log('before send')
                }
              }).done(function() {
                $(form).find('.btn').attr("disabled", false);
                $(form).find('.form-load').css({
                  'width': '0',
                  'margin-left': '0'
                });

                var formID = $(form).attr('id');
                    // console.log("formID", formID);

                    if (formID == 'form1' || formID == 'form2') {
                        // $.fancybox.close();
                        window.location.href = "thanks.html";
                        // setTimeout(function(){
                        //   $.fancybox.open({
                        //     src  : '#form3',
                        //     type : 'inline',
                        //     touch: false
                        //   })
                        // },100);

                      };

                      if (formID == 'form11') {
                        $.fancybox.close();
                        // window.location.href = "thanks.html";
                        setTimeout(function() {
                          $.fancybox.open({
                            src: '#form4',
                            type: 'inline',
                            touch: false
                          })
                        }, 100);

                      };

                      if (formID == 'form22') {
                        $.fancybox.close();
                        // window.location.href = "thanks.html";
                        setTimeout(function() {
                          $.fancybox.open({
                            src: '#form4',
                            type: 'inline',
                            touch: false
                          })
                        }, 100);

                      };

                      if (formID == 'form3') {
                        window.location.href = "thanks.html";
                      };
                      if (formID == 'form4') {
                        window.location.href = "thanks2.html";
                      };

                      if (formID == 'form5') {
                        $.fancybox.close();
                        // window.location.href = "thanks.html";
                        setTimeout(function() {
                          $.fancybox.open({
                            src: '#form6',
                            type: 'inline',
                            touch: false
                          })
                        }, 100);

                      };
                      if (formID == 'form6') {
                        window.location.href = "thanks.html";
                      };
                      if (formID == 'form7') {
                        window.location.href = "thanks2.html";
                      };





                      $(form).trigger("reset");
                    // $.magnificPopup.close();
                    //window.location.href = "thanks.html";
                    console.log('done')
                  }).fail(function() {
                    alert("Error, email not sent !");
                    console.log('error')
                  });
                }
              });
      });

    //popup form
    // $('.popup-js').magnificPopup({
    //   type: 'inline',
    //   preloader: false,
    //   focus: '#name',
    //   callbacks: {
    //     beforeOpen: function () {
    //       if ($(window).width() < 700) {
    //         this.st.focus = false;
    //       } else {
    //         this.st.focus = '#name';
    //       }
    //     }
    //   }
    // });

    //phone mask
    $("input[type='tel']").mask("+7(999)999-99-99");

    //animate pege element
    //	 if (screen.width > 768) {
    //	   $(".mission h2").animated("bounceIn");
    //		 $(".mission h2").css('animation-delay', '0.5s').animated("bounceInLeft");
    //	 };

    //form styler
    // $('input, select').styler();


    //menu on click
    // var startWidth = 1100;
    // var menu = $('.header__list');
    // var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // $(window).resize(function(){
    // windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    //   if(windowWidth > startWidth && menu.is(':hidden')) {
    //     menu.attr("style", "");
    //   };
    // });

    // $('#openup').on('click', function(e) {
    //   e.preventDefault();
    //   menu.stop(true,true).slideToggle();
    //   $('.hamburger--collapse').stop(true,true).toggleClass('is-active');
    //   $('.header__list-sublist-wrap').css('display', 'none');
    // });


    // $('.header__list-item').on('click', '.header__list-link', function(e) {
    //   $this = $(e.delegateTarget);

    //   if($this.find('.header__list-sublist-wrap').length>0){
    //     e.preventDefault();
    //     $this.children('.header__list-sublist-wrap').stop(true,true).slideToggle(10).parent('.header__list-item').siblings().children('.header__list-sublist-wrap').css('display', 'none');

    //   }else{
    //     $('.header__list-sublist-wrap').css('display', 'none');
    //     if(windowWidth < startWidth){
    //       menu.stop(true,true).slideToggle();
    //       $('.hamburger--collapse').stop(true,true).toggleClass('is-active');
    //     };
    //   };
    // });

    // $('.header-sublist__link').on('click',  function(event) {
    //   $('.header__list-sublist-wrap').css('display', 'none');
    //   if(windowWidth < startWidth){
    //     menu.stop(true,true).slideToggle();
    //     $('.hamburger--collapse').stop(true,true).toggleClass('is-active');
    //   };
    // });
    // // close menu if click on "body"
    // $(document).mouseup(function (e) {
    //   if(menu.is(":visible") && $(e.target).closest('.header__nav-wrap').length == 0 && windowWidth < startWidth){
    //     $('.header__list-sublist-wrap').css('display', 'none');
    //     menu.stop(true,true).slideToggle();
    //     $('.hamburger--collapse').stop(true,true).toggleClass('is-active');
    //     console.log('close menu if click on "body"')
    //   }
    // });

    // menu on click end


    //menu on hover
    // var startWidth = 1100;
    // var menu = $('.header__list');
    // var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // function removeInline() {
    //   if (windowWidth > startWidth) {
    //     menu.attr("style", "");

    //     $('.header__list-sublist-wrap').attr("style", "");
    //     $('.hamburger--collapse').removeClass('is-active');
    //   };
    // };
    // removeInline();

    // function menuOn() {
    //     //activate the menu only if the width of the window is less than the specified
    //     if (windowWidth <= startWidth) {

    //         //open menu
    //         // $('#openup').on('click', function (e) {
    //         //   e.preventDefault();
    //         //   $('.header__list-open-submenu').removeClass('header__list-open-submenu--open');
    //         //   $('.hamburger--collapse').stop(true, true).toggleClass('is-active');
    //         //   $('.header__list-sublist-wrap').attr("style", "");
    //         //   menu.stop(true, true).slideToggle();
    //         // });

    //         // //hide the menu when clicking on the first and second level link
    //         // $('.header__list-link,.header-sublist__link').on('click',  function(event) {
    //         //   $('.header__list-sublist-wrap').css('display', 'none');
    //         //   $('.header__list-open-submenu').removeClass('header__list-open-submenu--open');
    //         //   menu.stop(true, true).slideToggle();
    //         //   $('.hamburger--collapse').stop(true, true).toggleClass('is-active');
    //         // });

    //         // //open submenu
    //         // $('.header__list-open-submenu').on('click', function(event) {
    //         //   if ( $( this ).hasClass( "header__list-open-submenu--open" ) ) {
    //         //     $('.header__list-open-submenu').removeClass('header__list-open-submenu--open');
    //         //     $('.header__list-sublist-wrap').attr("style", "");
    //         //     $(this).removeClass('header__list-open-submenu--open').parents('.header__list-item').find('.header__list-sublist-wrap').attr("style", "");
    //         //     // console.log('true')
    //         //   }else{
    //         //     $('.header__list-open-submenu').removeClass('header__list-open-submenu--open');
    //         //     $('.header__list-sublist-wrap').attr("style", "");
    //         //     $(this).addClass('header__list-open-submenu--open').parents('.header__list-item').find('.header__list-sublist-wrap').css('display', 'block');
    //         //     // console.log('false')
    //         //   }
    //         // });

    //         // close menu if click on "body"
    //         $(document).mouseup(function(e) {
    //             if (menu.is(":visible") && $(e.target).closest('.header__nav-wrap').length == 0) {
    //                 $('.header__list-sublist-wrap').css('display', 'none');
    //                 $('.header__list-open-submenu').removeClass('header__list-open-submenu--open');
    //                 menu.stop(true, true).slideToggle();
    //                 $('.hamburger--collapse').stop(true, true).toggleClass('is-active');
    //                 // console.log('close menu if click on "body"')
    //             }
    //         });

    //     };
    //     /*if < window width*/

    // };
    /*menuON*/
    // menuOn();

    $(window).resize(function() {
      windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // console.log("windowWidth", windowWidth);
        // removeInline();
        refreshVar(); //part of the function of fixing the menu
      });
    //menu on hover end

//     $(window).on('scroll', function(event) {

// refreshVar()
//     });


    //menu fixed on scroll
    var navPos, winPos, navHeight;

    function refreshVar() {
      windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if(windowWidth<768){
        navPos = 800;
      }else{
        navPos = $('.ab-nav').offset().top;
      }
        // navPos = $('.header').outerHeight(true) / 2;
        // console.log("navPos", navPos);
        if(windowWidth<992){
          navHeight = 50;
        }else{
          navHeight = $('.ab-nav').outerHeight(true);
        }
        // console.log("navHeight", navHeight);
      };
      refreshVar();

      $('<div class="ab-nav--clone"></div>').insertBefore('.ab-nav').css('height', navHeight).hide();

      $(window).scroll(function() {

        winPos = $(window).scrollTop();
        // console.log("winPos", winPos);
        if (winPos >= navPos) {
          $('.ab-nav').addClass('ab-nav--fixed');
          $('.ab-nav--clone').show();
        } else {
          $('.ab-nav').removeClass('ab-nav--fixed');
          $('.ab-nav--clone').hide();
        }

      });
    //menu fixed on scroll end

    //menu scroll and add class on scroll

    //scroll
    // var navHeight = $(".header__top-line").outerHeight(true);
    // console.log("navHeight", navHeight);

    function showSection(section, isAnimate) {
      var direction = section.replace(/#/, '');
        // console.log(direction)
        var reqSection = $('.section').filter('[data-section="' + direction + '"]');

        var reqSectionPos = reqSection.offset().top - navHeight + 1;
        // console.log("reqSectionPos", reqSectionPos);

        if (isAnimate) {
          $('body, html').animate({
            scrollTop: reqSectionPos
          }, 500);
        } else {
          $('body, html').scrollTop(reqSectionPos);
        }
      };

    //вызывать по клику  showSection($(this).attr('href'), true);
    $('.ab-nav__link').on('click', function(event) {
      event.preventDefault();
      navHeight = $('.ab-nav').outerHeight(true);
        // console.log("navHeight", navHeight);
        showSection($(this).attr('href'), true);
      });
    //scroll end


    //menu scroll
    $(".f-menu__list-link").on("click", function(event) {
      event.preventDefault();
      var id = $(this).attr('href');
      navHeight = $('.ab-nav').outerHeight(true);
      var top = $(id).offset().top - navHeight + 1;
      $('body,html').animate({
        scrollTop: top
      }, 600);
    });



    //add class
    function checkSection() {

      $('.section').each(function() {
        var $this = $(this),
        topEdge = $this.offset().top - $('.ab-nav').outerHeight(true),
        bottomEdge = topEdge + $this.outerHeight(true),
        wScroll = $(window).scrollTop();

        if (topEdge < wScroll && bottomEdge > wScroll) {

          var currentId = $this.data('section'),
          reqLink = $('.f-menu__list-link').filter('[href="#' + currentId + '"]');

          reqLink.closest('.f-menu__list-item').addClass('f-menu__list-item--active').siblings().removeClass('f-menu__list-item--active');

                //простовляния хешей в адрессную строку
                // if (history.pushState) {
                //   history.pushState(null, null, "#" + currentId);
                //   // console.log("modern work");
                // } else {
                //   // window.location.hash = currentId;
                //   location.hash = currentId;
                //   // console.log("old work");
                // }

              }
            });

    };

    // уменьшаю количество вызова функций при скролле
    /*
    var scrollTimeout;  // global for any pending scrollTimeout
    $(window).scroll(function () {
      if (scrollTimeout) {
        // clear the timeout, if one is pending
        clearTimeout(scrollTimeout);
        scrollTimeout = null;
      }
      scrollTimeout = setTimeout(checkSection, 500);
    });
    */

    var didScroll = false;

    window.onscroll = doThisStuffOnScroll;

    function doThisStuffOnScroll() {
      didScroll = true;
    }

    setInterval(function() {
      if (didScroll) {
        didScroll = false;
        checkSection();
      }
    }, 500);

    //add class end

    //menu scroll and add class on scroll end

    // timer
    // in html: .counter#clock
    // var finishData = moment.tz("2018-09-12 13:00", "Europe/Moscow"),
    //     countTextDay = 'Day',
    //     countTextHour = 'Hour',
    //     countTextMinute = 'Minute',
    //     countTextSecond = 'Second';

    // $('#clock').countdown(finishData.toDate(), function(event) {
    //     // $(this).html(event.strftime('<span>%D</span>  <span>%H</span> <span>%M</span> <span> %S</span>'));
    //     $(this).html(event.strftime('<div class="counter__item counter__item--day"><div class="counter__item-info"><div class="counter__item-numb">%D</div><div class="counter__item-title">' + countTextDay + '</div></div><div class="counter__item-dots"><svg xmlns="http://www.w3.org/2000/svg" width="202.857" height="570" viewBox="0 0 53.673 150.813"><g transform="translate(-27.403 -29.582)"><circle cx="54.618" cy="56.04" r="26.458"/><circle cx="53.862" cy="153.936" r="26.458"/></g></svg></div></div><div class="counter__item counter__item--hour"><div class="counter__item-info"><div class="counter__item-numb">%H</div><div class="counter__item-title">' + countTextHour + '</div></div><div class="counter__item-dots"><svg xmlns="http://www.w3.org/2000/svg" width="202.857" height="570" viewBox="0 0 53.673 150.813"><g transform="translate(-27.403 -29.582)"><circle cx="54.618" cy="56.04" r="26.458"/><circle cx="53.862" cy="153.936" r="26.458"/></g></svg></div></div><div class="counter__item counter__item--minute"><div class="counter__item-info"><div class="counter__item-numb">%M</div><div class="counter__item-title">' + countTextMinute + '</div></div><div class="counter__item-dots"><svg xmlns="http://www.w3.org/2000/svg" width="202.857" height="570" viewBox="0 0 53.673 150.813"><g transform="translate(-27.403 -29.582)"><circle cx="54.618" cy="56.04" r="26.458"/><circle cx="53.862" cy="153.936" r="26.458"/></g></svg></div></div><div class="counter__item counter__item--second"><div class="counter__item-info"><div class="counter__item-numb">%S</div><div class="counter__item-title">' + countTextSecond + '</div></div></div>'));
    // });



}); //jQuery


//removeIf(production)
function pageWidget(pages) {
  var widgetWrap = $('<div class="widget_wrap"><ul  class="widget_list"></ul></div>');
  widgetWrap.prependTo("body");

  var allPage = $('<ul class="allPage-list"></ul');
    // allPage.prependTo("body"); //выводит все старницы в начало страницы

    var widgetPageList = '';

    for (var i = 0; i < pages.length; i++) {
      $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
        //виводит линку на кажду страницу в лишке
        // $('<li class="allPage-list__item"><a class="allPage-list__link" href="http://you_site/' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.allPage-list');
      }

      var widgetStilization = $('<style>body{position:relative}.widget_wrap{position:fixed;top:0;left:-23px;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;transition:all .3s ease;transform:translate(-100%,0)}.widget_wrap ul{max-width:220px;width:100%;display:flex;flex-wrap:wrap}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) 50% 50% no-repeat #222;cursor:pointer}.widget_wrap:hover{left:0;transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{display:block;color:#fff;text-decoration:none;font-size:15px;width:100px}.widget_link:hover{color:#fff;text-decoration:underline}</style>');
      widgetStilization.prependTo(".widget_wrap")
    };
    pageWidget(['index', 'thanks', 'thanks2'])


//pixel-glass-js-master
// function pixelGlass(){'use strict';var doc=document;var controlsPanel;var bodyContentWrapper;var panelClass='controls-panel';var canBeDisabled=[];var prefix='pg';var filtersList=['none','invert'];var statesList=['off','on'];var currents={state:getCurrent('state',statesList[1]),filter:getCurrent('filter',filtersList[0]),opacity:getCurrent('opacity',0.5)};var targets={state:{elem:doc.documentElement,attr:'data'},filter:{elem:doc.body,attr:'data'},opacity:{elem:doc.body,attr:'style'}};var paramsStates={elemTag:'button',elemText:'on',listName:'states',itemName:'state',target:targets.state,type:'button',list:statesList,canDisableAll:!0,attrs:{tabindex:1,}};var paramsFilters={elemTag:'button',elemText:'invert',listName:'filters',itemName:'filter',target:targets.filter,type:'button',list:filtersList,attrs:{tabindex:2,}};var paramsOpacity={itemName:'opacity',type:'number',target:targets.opacity,setAttr:'style',attrs:{min:0,max:1,step:0.1,tabindex:3,}};init();function init(){createContolsPanel();applyCurrentData();if(currents.state==='on'){applyCurrentStyles()}}
// function createContolsPanel(){var targetElem=doc.documentElement;if(hasData(doc.body,'has-sticky-point')){var stickyPoint=doc.querySelector('.sticky-point');if(stickyPoint&&!localStorage['pg-released']){targetElem=stickyPoint}
// currents.state='off'}
// controlsPanel=doc.createElement('div');controlsPanel.classList.add(panelClass);targetElem.appendChild(controlsPanel);var sides=['top','right','bottom','left'];sides.forEach(function(item){var itemVal=getCurrent(item,'');if(itemVal){controlsPanel.style[item]=itemVal}});initControls()}
// function initControls(){createButton(paramsStates);createButton(paramsFilters);createInputNumber(paramsOpacity);createDragButton()}
// function createButton(params){var listName=params.listName;var itemName=params.itemName;var elemTag=params.elemTag;var elemText=params.elemText;var type=params.type;var list=params.list;var action=params.action;var currentVal=currents[itemName];var attrs=params.attrs;var currentNum=list.indexOf(currentVal);var canDisableAll=params.canDisableAll;var id=itemName;var input=doc.createElement(elemTag);setClasses(input,[panelClass+'__control',panelClass+'__control--'+type]);input.setAttribute('type',type);input.setAttribute('id',id);setData(input,'state-num',currentNum);if(attrs){for(var attr in attrs){input.setAttribute(attr,attrs[attr])}}
// if(elemTag==='button'){input.innerHTML=elemText}
//   if(!canDisableAll){canBeDisabled.push(input)}
//     controlsPanel.appendChild(input);input.onclick=function(){if(!params.target){return}
//   currentNum=+!currentNum;currentVal=list[currentNum];setData(input,'state-num',currentNum);setData(params.target.elem,itemName,currentVal);saveLocalStorage(itemName,currentVal);if(canDisableAll&&canDisableAll===!0){if(currentVal==='off'){removeCurrentStyles();disableInputs()}
//   else{applyCurrentStyles();enableInputs()}}}}
//   function createInputNumber(params){var itemName=params.itemName;var attrs=params.attrs;var type=params.type;var setAttr=params.setAttr;var canDisableAll=params.canDisableAll;var id=itemName;var input=doc.createElement('input');setClasses(input,[panelClass+'__control',panelClass+'__control--'+type]);input.setAttribute('type',type);input.setAttribute('id',id);for(var attr in attrs){input.setAttribute(attr,attrs[attr])}
//   input.setAttribute('value',currents[itemName]);if(!canDisableAll){canBeDisabled.push(input)}
//   controlsPanel.appendChild(input);input.oninput=function(){if(setAttr==='style'){params.target.elem.style[itemName]=this.value;saveLocalStorage(itemName,this.value)}}}
//   function createDragButton(){var input=doc.createElement('button');setClasses(input,[panelClass+'__control',panelClass+'__control--drag-n-drop']);input.setAttribute('type','button');input.innerHTML=' ';controlsPanel.appendChild(input);input.onmousedown=function(){var offsetTop=this.offsetTop;var offsetLeft=controlsPanel.clientWidth-this.clientWidth;var styles=getComputedStyle(controlsPanel);controlsPanel.style.top=styles.top;controlsPanel.style.left=styles.left;controlsPanel.style.right='auto';controlsPanel.style.bottom='auto';doc.onmousemove=function(ev){var x=(ev.clientX-offsetLeft)+'px';var y=(ev.clientY)+'px';controlsPanel.style.left=x;controlsPanel.style.top=y}};input.onmouseup=function(){var styles=getComputedStyle(controlsPanel);var left=+styles.left.replace(/px/,'');var right=+styles.right.replace(/px/,'');var top=+styles.top.replace(/px/,'');var bottom=+styles.bottom.replace(/px/,'');if(left>right){saveLocalStorage('left','auto');saveLocalStorage('right',styles.right);controlsPanel.style.right=styles.right;controlsPanel.style.left='auto'}
//   else{saveLocalStorage('left',styles.left);saveLocalStorage('right','auto')}
//   if(top>bottom){saveLocalStorage('top','auto');saveLocalStorage('bottom',styles.bottom);controlsPanel.style.bottom=styles.bottom;controlsPanel.style.top='auto'}
//   else{saveLocalStorage('top',styles.top);saveLocalStorage('bottom','auto')}
//   doc.onmousemove=null}}
//   function disableInputs(){canBeDisabled.forEach(function(item){item.setAttribute('disabled','')})}
//   function enableInputs(){canBeDisabled.forEach(function(item){item.removeAttribute('disabled')})}
//   function getCurrent(name,defaultValue){var itemName=[prefix,name].join('-');var localStorageVal=localStorage[itemName];return localStorageVal?localStorageVal:defaultValue}
//   function saveLocalStorage(name,value){var itemName=[prefix,name].join('-');localStorage[itemName]=value}
//   function getBodyOpacity(){var opacityStr=getComputedStyle(doc.body).opacity;return+opacityStr}
//   function addExternalCSS(){var styleElem=doc.createElement('style');var cssLink=doc.createElement('link');cssLink.setAttribute('rel','stylesheet');cssLink.setAttribute('href','../pixel-glass-js/styles.css');doc.head.appendChild(cssLink)}
//   function applyCurrentData(){for(var key in targets){var target=targets[key];var current=currents[key];if(target.attr==='data'){setData(target.elem,key,current)}}
//   if(currents.state==='off'){disableInputs()}}
//     function applyCurrentStyles(){for(var key in targets){var target=targets[key];var current=currents[key];if(target.attr==='style'){target.elem.style[key]=current}}}
//   function removeCurrentStyles(){for(var key in targets){var target=targets[key];if(target.attr==='style'){target.elem.style[key]=''}}}
//   function hasData(elem,dataName){if(!elem){return!1}
//   dataName='data-'+dataName;if(elem.getAttribute(dataName)!==undefined&&elem.getAttribute(dataName)!==null){return!0}
//   return!1}
//   function setData(elem,dataName,dataVal){if(!elem){return}
//   dataName='data-'+dataName;elem.setAttribute(dataName,dataVal)}
//   function setClasses(elem,classes){if(!elem){return}
//   if(classes.length>0){classes.forEach(function(className){elem.classList.add(className)})}}}
//     window.onload=function(){pixelGlass()}


//endRemoveIf(production)

// disable context menu and f12
//eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(8).7(9(0){3(0.2==d){4 1}6 3(0.5&&0.c&&0.2==a){4 1}6 3(0.5&&0.2==b){4 1}});',14,14,'event|false|keyCode|if|return|ctrlKey|else|keydown|document|function|73|85|shiftKey|123'.split('|'),0,{}))
//
// document.addEventListener("contextmenu", function (e) {
//        e.preventDefault();
//    }, false);