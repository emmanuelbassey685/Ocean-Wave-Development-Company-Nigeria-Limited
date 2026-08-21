export default function setupNavigation() {

  const menuToggle =
    document.querySelector("#menuToggle");

  const mainNavigation =
    document.querySelector("#mainNavigation");


  /* =========================================
     MOBILE MENU
  ========================================= */

  menuToggle?.addEventListener(
    "click",
    () => {

      const isOpen =
        mainNavigation.classList.toggle(
          "active"
        );

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
      );

    }
  );


  /* =========================================
     DROPDOWNS
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

        const dropdown =
          toggle.closest(".nav-dropdown");

        const isOpen =
          dropdown.classList.contains(
            "open"
          );


        document
          .querySelectorAll(
            ".nav-dropdown.open"
          )
          .forEach(item => {

            if (item !== dropdown) {

              item.classList.remove(
                "open"
              );

              item
                .querySelector(
                  ".nav-dropdown-toggle"
                )
                ?.setAttribute(
                  "aria-expanded",
                  "false"
                );

            }

          });


        dropdown.classList.toggle(
          "open",
          !isOpen
        );

        toggle.setAttribute(
          "aria-expanded",
          !isOpen
        );

      }
    );

  });


  /* =========================================
     CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  ========================================= */

  document.addEventListener(
    "click",
    event => {

      if (
        !event.target.closest(
          ".nav-dropdown"
        )
      ) {

        document
          .querySelectorAll(
            ".nav-dropdown.open"
          )
          .forEach(dropdown => {

            dropdown.classList.remove(
              "open"
            );

            dropdown
              .querySelector(
                ".nav-dropdown-toggle"
              )
              ?.setAttribute(
                "aria-expanded",
                "false"
              );

          });

      }

    }
  );

}