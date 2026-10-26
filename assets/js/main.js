const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

function closeNavigation() {
    if (!menuToggle || !primaryNavigation) {
        return;
    }

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "打开导航菜单");
    primaryNavigation.classList.remove("is-open");
}

if (menuToggle && primaryNavigation) {
    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        menuToggle.setAttribute("aria-label", isExpanded ? "打开导航菜单" : "关闭导航菜单");
        primaryNavigation.classList.toggle("is-open", !isExpanded);
    });

    primaryNavigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeNavigation();
        }
    });

    document.addEventListener("click", (event) => {
        if (!primaryNavigation.contains(event.target) && !menuToggle.contains(event.target)) {
            closeNavigation();
        }
    });
}

const currentYear = document.querySelector("[data-current-year]");
if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
}

const revealElements = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
}
