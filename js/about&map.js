            var link = document.querySelector(".about-contact-btn");
            
            var popup = document.querySelector(".modal-content");
            var overlay = document.querySelector(".modal-overlay");
            var close = popup.querySelector(".modal-content-close");
            
            var login = popup.querySelector("[name=feedback-name]");
            
            link.addEventListener("click", function(event) {
                event.preventDefault();
                popup.classList.add("modal-content-show");
                overlay.classList.add("modal-overlay-show");
                login.focus();
            });
            
            close.addEventListener("click", function(event) {
                event.preventDefault();
                popup.classList.remove("modal-content-show");
                overlay.classList.remove("modal-overlay-show");
            });
            
            var mapOpen = document.querySelector(".about-contact-map");
            
            var mapPopup = document.querySelector (".modal-content-map");
            var overlay = document.querySelector(".modal-overlay");
            var mapClose = mapPopup.querySelector(".modal-content-close");
            
            mapOpen.addEventListener("click", function(event) {
                event.preventDefault();
                mapPopup.classList.add("modal-content-map-show");
                overlay.classList.add("modal-overlay-show");
            });

            mapClose.addEventListener("click", function(event) {
                event.preventDefault();
                mapPopup.classList.remove("modal-content-map-show");
                overlay.classList.remove("modal-overlay-show");
            });
            
            