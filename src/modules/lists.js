export default function displayList() {
  const allBtns = document.querySelectorAll(".dropbtn");

  allBtns.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const container = document.querySelector(
        `[data-num="${e.target.dataset.id}"]`
      );

      // Close dropdown list upon pressing other button
      document.querySelectorAll(".dropdown").forEach((el) => {
        if (el !== container) {
          el.style.display = "none";
        }
      });

      if (!container.style.display || container.style.display === "none") {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });
  });
}
