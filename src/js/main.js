AOS.init();

/* || NAVIGATION */
const hamburgerMenu = document.getElementById("hamburger-menu");
const navigationList = document.getElementById("navigation-list");

const toggleNavigation = () => {
  hamburgerMenu.classList.toggle("active");
  navigationList.classList.toggle("active");
};

hamburgerMenu.addEventListener("click", () => {
  toggleNavigation();
});

/* || CONTACT FORM */
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const loader = document.getElementById("contact-form-loader");
  const status = document.getElementById("contact-form-status");
  const data = new FormData(event.target);

  loader.classList.add("active");
  status.classList.remove("error", "success");

  fetch(event.target.action, {
    method: contactForm.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.classList.add("success");
        status.innerHTML = "Thanks for your submission!";
        contactForm.reset();
      } else {
        status.classList.add("error");
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem submitting your form";
    })
    .finally(() => {
      loader.classList.remove("active");
    });
}
