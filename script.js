const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("image-modal");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".modal-close");

const openModal = (src) => {
  modalImage.src = src;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
};

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const fullSrc = item.getAttribute("data-full");
    openModal(fullSrc);
  });
});

closeButton.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll(".scroll-in").forEach((card) => {
  observer.observe(card);
});
