tailwind.config = {
    theme: {
      extend: {
        colors: {
          customgreen: 'rgb(0, 255, 162)',
          customblack: '#00000046',
          customblackhover: '#000000',
        }
      }
    }
  }
 
  
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          customgreen: 'rgb(0, 255, 162)',
          customblack: '#00000046',
          customblackhover: '#000000',
        }
      }
    }
  }

        document.addEventListener("DOMContentLoaded", function () {
            // Simulate loading delay
            setTimeout(function () {
                document.getElementById("preloader").classList.add("hidden");
                document.getElementById("mainContent").classList.remove("hidden");
            }, 3000); // Adjust the duration as needed
        });

        document.addEventListener("DOMContentLoaded", function () {
            const menuIcon = document.querySelector('.menu-icon');
            const navLinks = document.querySelector('.nav-links');

            menuIcon.addEventListener('click', function () {
                navLinks.classList.toggle('show');
            });
        });

        