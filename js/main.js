 var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add("nav-colored");
          nav.classList.remove("nav-transparent");
        } else {
            nav.classList.remove("nav-colored");
            nav.classList.add("nav-transparent");
        }
      });


      function openImage1() {
        // URL of the image to open
        const imageUrl = 'imgs/brunch.jpg';

        // Open the image URL in a new tab
        window.open(imageUrl, '_blank');
    }

    function openImage2() {
        // URL of the image to open
        const imageUrl = 'imgs/entrees.jpg';

        // Open the image URL in a new tab
        window.open(imageUrl, '_blank');
    }
    function openImage3() {
        // URL of the image to open
        const imageUrl = 'imgs/cocktails.jpg';

        // Open the image URL in a new tab
        window.open(imageUrl, '_blank');
    }
    function openImage4() {
        // URL of the image to open
        const imageUrl = 'imgs/dessert.jpg';

        // Open the image URL in a new tab
        window.open(imageUrl, '_blank');
    }