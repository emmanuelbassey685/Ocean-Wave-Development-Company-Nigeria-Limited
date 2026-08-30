export default function setupNavigation() {

  const menuToggle =
    document.querySelector("#menuToggle");

  const mainNavigation =
    document.querySelector("#mainNavigation");


  /* =========================================
     HELPER FUNCTIONS
  ========================================= */

  function closeDropdown(dropdown) {

    dropdown.classList.remove("open");

    const toggle =
      dropdown.querySelector(
        ".nav-dropdown-toggle"
      );

    toggle?.setAttribute(
      "aria-expanded",
      "false"
    );
  }


  function closeAllDropdowns() {

    document
      .querySelectorAll(
        ".nav-dropdown.open"
      )
      .forEach(dropdown => {

        closeDropdown(dropdown);

      });

  }


  function closeMobileMenu() {

    if (!mainNavigation) return;

    mainNavigation.classList.remove(
      "active"
    );

    menuToggle?.setAttribute(
      "aria-expanded",
      "false"
    );

  }


  /* =========================================
     MOBILE MENU
  ========================================= */

  menuToggle?.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      const isOpen =
        mainNavigation.classList.toggle(
          "active"
        );

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      /*
       * Close dropdowns when
       * mobile menu is closed.
       */

      if (!isOpen) {

        closeAllDropdowns();

      }

    }
  );


  /* =========================================
     DROPDOWN TOGGLES
  ========================================= */

  const dropdownToggles =
    document.querySelectorAll(
      ".nav-dropdown-toggle"
    );


  dropdownToggles.forEach(toggle => {

    toggle.addEventListener(
      "click",
      event => {

        event.preventDefault();
        event.stopPropagation();


        const dropdown =
          toggle.closest(
            ".nav-dropdown"
          );


        if (!dropdown) return;


        const isOpen =
          dropdown.classList.contains(
            "open"
          );


        /*
         * Close all other dropdowns
         */

        document
          .querySelectorAll(
            ".nav-dropdown.open"
          )
          .forEach(item => {

            if (item !== dropdown) {

              closeDropdown(item);

            }

          });


        /*
         * Toggle current dropdown
         */

        if (isOpen) {

          closeDropdown(dropdown);

        } else {

          dropdown.classList.add(
            "open"
          );

          toggle.setAttribute(
            "aria-expanded",
            "true"
          );

        }

      }
    );

  });


  /* =========================================
     CLOSE MOBILE MENU WHEN
     A NORMAL LINK IS SELECTED
  ========================================= */

  if (mainNavigation) {

    mainNavigation
      .querySelectorAll(
        "a:not(.nav-dropdown-toggle)"
      )
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            closeAllDropdowns();

            closeMobileMenu();

          }
        );

      });

  }


  /* =========================================
     CLOSE DROPDOWN / MENU WHEN
     CLICKING OUTSIDE
  ========================================= */

  document.addEventListener(
    "click",
    event => {

      /*
       * Ignore clicks inside navigation.
       */

      if (
        event.target.closest(
          "#mainNavigation"
        ) ||
        event.target.closest(
          "#menuToggle"
        )
      ) {

        return;

      }


      closeAllDropdowns();

      closeMobileMenu();

    }
  );


  /* =========================================
     ESCAPE KEY
  ========================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key !== "Escape") {
        return;
      }


      closeAllDropdowns();

      closeMobileMenu();


      /*
       * Return keyboard focus
       * to the hamburger button.
       */

      menuToggle?.focus();

    }
  );


  /* =========================================
   RESPONSIVE CLEANUP
========================================= */

window.addEventListener(
  "resize",
  () => {

    /*
     * Header switches to desktop
     * above 950px.
     */

    if (window.innerWidth > 950) {

      closeMobileMenu();
      closeAllDropdowns();

    }

    }
  );

}