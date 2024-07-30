document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation
    const links = document.querySelectorAll("nav a");

    for (const link of links) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    }

    // Project filter
    const filterButtons = document.querySelectorAll("#project-filter button");
    const projects = document.querySelectorAll(".project");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            projects.forEach(project => {
                if (filter === "all" || project.getAttribute("data-category") === filter) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
    

    // Modal functionality
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-description");
    const closeButton = document.querySelector(".close-button");
    const detailsButtons = document.querySelectorAll(".details-button");

    detailsButtons.forEach(button => {
        button.addEventListener("click", () => {
            const projectId = button.getAttribute("data-project");
            const project = document.querySelector(`.project[data-category][data-project='${

            };

            