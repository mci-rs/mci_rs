function initMap() {
  var uluru = {lat: 45.256384, lng: 19.827255};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: uluru,
    mapTypeId: 'terrain',
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2c2c2c"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c3c3c"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ]
  });

  var image = {
    url: '../images/logo/logo-white-small.png', // url
    scaledSize: new google.maps.Size(42.27, 20), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image,
  });


}
$(window).scroll(function() {
  var imagePos = $(window).scrollTop();

  if (imagePos > 160) {
    $('.logo-nav').addClass('fixed');
    $('.region--header').addClass('fixed');
  }
  else {
    $('.logo-nav').removeClass('fixed');
    $('.region--header').removeClass('fixed');
  }
});
// $(document).ready(function(){
//   $(function() {
//     var $content = $('.medium-wrapper');
//     var data = {
//       rss_url: 'https://medium.com/feed/@vladimircurcic/'
//     };
//     $.get('https://api.rss2json.com/v1/api.json', data, function(response) {
//       if (response.status == 'ok') {
//         var output = '';
//         $.each(response.items, function(k, item) {
//
//           var image = item.description.split('</figure>')[0];
//
//           output += '<a target="_blank" class="article-link" href="'+ item.link +'"><div class="article">';
//           output += '<div class="teaser-image">'+ image +'</div>';
//           output += '<h2>'+ item.title +'</h2></div>';
//           output += '<div class="read-more">Read More...</div></a>';
//
//           if (k > 1) {
//             return false
//           }
//         });
//         $content.html(output);
//       }
//
//     });
//   });
// });

$(document).ready(function(){
  var t = new Date().getFullYear();
  var $m = $('.modal');
  var $navToggle = $('.nav__toggle');
  var $regionNav = $('.navigation-region');

  $('a').smoothScroll();

  $('.year').html(t);

  // Mobile-menu toggle.
  $navToggle.click(function(){
    $regionNav.toggleClass('expanded');
    $('.nav').toggleClass('expanded');
    $m.toggleClass('menu-active');
    $(this).toggleClass('is-active');

    if (!$m.hasClass('is-active')) {
      $m.addClass('is-active')
    } else {
      if (!$m.hasClass('menu-active')) {
        $m.removeClass('is-active');
      }

    }

    if ($m.hasClass('contact-active')) {
      closeContact();
    }
  });

  $('nav.nav__menu > a').click(function() {
    closeMenu();
    $m.removeClass('is-active');
  });

  // Contact form open/close.
  $('.modal--activate').click(function() {
    $m.addClass('is-active contact-active');
    $('body').addClass('modal-active');
    if ($m.hasClass('menu-active')) {
      closeMenu();
    }
  });
  $('button.contact__close').click(function() {
    closeContact();
    $('body').removeClass('modal-active');
    $m.removeClass('is-active');
  });

  $(document).on('keyup',function(evt) {
    if($('body').hasClass('modal-active')){
      if (evt.keyCode == 27) {
        closeContact();
        $m.removeClass('is-active');
        $('body').removeClass('modal-active');
      }
    }

  });
  // Detector for left/right :hover event.
  // $('a.contact-action-link').on('mouseenter mouseleave', function (e) {
  //   switch (e.type) {
  //     case 'mouseenter':
  //       var coor = [e.originalEvent.clientX, e.target.offsetLeft + (e.target.offsetWidth / 2)],
  //           klasa = (coor[0] > coor[1]) ? 'hover--right' : 'hover--left';
  //       $(this).addClass(klasa);
  //       break;
  //     case 'mouseleave':
  //       $(this).removeClass('hover--left hover--right');
  //       break;
  //   }
  // });

  function closeMenu() {
    $m.removeClass('menu-active');
    $navToggle.removeClass('is-active');
    $('.nav').removeClass('expanded');
    $regionNav.removeClass('expanded');
  }

  function closeContact() {
    $m.removeClass('contact-active');
  }

    if ($("body").hasClass("blog")) {
        mediumZoom('.region--content img');
    }
});
