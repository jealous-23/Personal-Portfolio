document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-details-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const details = document.getElementById(button.dataset.target);
      if (!details) return;

      const isHidden = details.hasAttribute("hidden");
      if (isHidden) {
        details.removeAttribute("hidden");
        button.textContent = "Hide details ▲";
      } else {
        details.setAttribute("hidden", "");
        button.textContent = "Show details ▼";
      }
      button.setAttribute("aria-expanded", String(isHidden));
    });
  });

  const greetBtn = document.getElementById("greetBtn");
  const greetMessage = document.getElementById("greetMessage");

  if (greetBtn && greetMessage) {
    greetBtn.addEventListener("click", () => {
      const hour = new Date().getHours();
      let timeGreeting = "Good evening";
      if (hour < 12) {
        timeGreeting = "Good morning";
      } else if (hour < 18) {
        timeGreeting = "Good afternoon";
      }
      greetMessage.textContent = `👋 ${timeGreeting}, and welcome to my portfolio! Thanks for visiting.`;
      greetMessage.classList.add("show");
    });
  }

  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (form) {
    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const messageInput = document.getElementById("contactMessage");
    const emailFeedback = emailInput.nextElementSibling;

    const setFeedback = (text, cssClass) => {
      feedback.textContent = text;
      feedback.className = cssClass;
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const problems = [];

      [
        [nameInput, "name"],
        [emailInput, "email"],
        [messageInput, "message"],
      ].forEach(([input, label]) => {
        const isEmpty = input.value.trim() === "";
        input.classList.toggle("is-invalid", isEmpty);
        if (isEmpty) problems.push(label);
      });

      if (emailInput.value.trim() !== "" && !emailInput.checkValidity()) {
        emailInput.classList.add("is-invalid");
        emailFeedback.textContent = "Please enter a valid email address.";
        problems.push("a valid email");
      } else {
        emailFeedback.textContent = "Please enter your email address.";
      }

      if (problems.length > 0) {
        setFeedback("⚠ Please fill in: " + problems.join(", ") + ".", "small text-danger fw-semibold");
        return;
      }

      setFeedback(`✔ Thanks, ${nameInput.value.trim()}! Demo submitted — no message was actually sent.`, "small text-success fw-semibold");
      form.reset();
    });

    [nameInput, emailInput, messageInput].forEach((input) => {
      input.addEventListener("input", () => input.classList.remove("is-invalid"));
    });
  }

  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
