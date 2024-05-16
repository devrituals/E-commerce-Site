document.addEventListener("DOMContentLoaded", function () {
  const tabList = document.querySelector(".tabs");

  tabList.addEventListener("click", (e) => {
    const clickedTab = e.target.closest("[data-tab]");
    if (!clickedTab || clickedTab.classList.contains("active")) return;

    const tabIndex = clickedTab.dataset.tab;
    if (!tabIndex) return;

    const tabs = document.querySelectorAll("[data-tab]");
    tabs.forEach((tab) => {
      if (tab === clickedTab) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    const activePanel = document.querySelector(".panel.active");
    const toActivePanel = document.querySelector(`[data-panel="${tabIndex}"]`);
    activePanel.classList.add("close");
    activePanel.addEventListener(
      "animationend",
      () => {
        activePanel.classList.remove("active");
        activePanel.classList.remove("close");
        toActivePanel.classList.add("active");
      },
      { once: true }
    );
  });

  const showHidePasswords = (type) => {
    const passwordButton = document.getElementById(`${type}-password-eye`);
    passwordButton.addEventListener("click", (e) => {
      const passwordInput = document.getElementById(`${type}-password`);
      const icon = passwordButton.querySelector("i");
      const isVisible = icon.classList.contains("ri-eye-fill");
      passwordInput.type = isVisible ? "password" : "text";
      icon.setAttribute("class", isVisible ? "ri-eye-off-fill" : "ri-eye-fill");
    });
  };

  showHidePasswords("login");
  showHidePasswords("signup");
  showHidePasswords("confirm");
});

