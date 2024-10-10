document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation
    const links = document.querySelectorAll("nav a");

    for (const link of links) {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetElementId = targetId.substring(1);
                document.getElementById(targetElementId).scrollIntoView({ behavior: "smooth" });
            }
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

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml6 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
        .add({
            targets: '.ml6 .letter',
            translateY: ["1.5em", 0],
            translateZ: 0,
            duration: 900,
            delay: (el, i) => 15 * i
        }).add({
            targets: '.ml6',
            opacity: 0,
            duration: 200,
            easing: "easeOutExpo",
            delay: 1000
        });

    // Modal functionality
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-description");
    const closeButton = document.querySelector(".close-button");
    const detailsButtons = document.querySelectorAll(".details-button");

    detailsButtons.forEach(button => {
        button.addEventListener("click", () => {
            const projectId = button.getAttribute("data-project");
            const project = document.querySelector(`.project[data-category][data-project='${projectId}']`);
            
            if (project) {
                modalContent.innerHTML = project.innerHTML;
                modal.style.display = "block";
            } else {
                console.error("Project not found:", projectId);
            }
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
