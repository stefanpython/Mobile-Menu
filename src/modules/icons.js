export default function displayColorIcons() {
  const allListButtons = document.querySelector(".left-side");

  const dashDefaultSrc = "/dist/images/dashboard.png";
  const walletDefaultSrc = "/dist/images/wallet.png";
  const accountsDefaultSrc = "/dist/images/account.png";
  const reportsDefaultSrc = "/dist/images/financial.png";
  const settingsDefaultSrc = "/dist/images/settings.png";
  const notificationDefaultSrc = "/dist/images/notification.png";
  const helpDefaultSerc = "/dist/images/help.png";

  const dashImg = document.querySelector(".dashImg");
  const walletImg = document.querySelector(".walletImg");
  const accountsImg = document.querySelector(".accountsImg");
  const reportsImg = document.querySelector(".reportsImg");
  const settingsImg = document.querySelector(".settingsImg");
  const notificationImg = document.querySelector(".notificationImg");
  const helpImg = document.querySelector(".helpImg");

  allListButtons.addEventListener("click", (e) => {
    // Dashboard button
    if (e.target.classList.contains("dashboardBtn")) {
      dashImg.setAttribute("src", "/dist/images/dashboard2.png");
      walletImg.src = walletDefaultSrc;
      accountsImg.src = accountsDefaultSrc;
      reportsImg.src = reportsDefaultSrc;
      settingsImg.src = settingsDefaultSrc;
      notificationImg.src = notificationDefaultSrc;
      helpImg.src = helpDefaultSerc;
    }

    // Wallet button
    if (e.target.classList.contains("walletBtn")) {
      walletImg.setAttribute("src", "/dist/images/wallet2.png");
      dashImg.src = dashDefaultSrc;
      accountsImg.src = accountsDefaultSrc;
      reportsImg.src = reportsDefaultSrc;
      settingsImg.src = settingsDefaultSrc;
      notificationImg.src = notificationDefaultSrc;
      helpImg.src = helpDefaultSerc;
    }

    // Accounts button
    if (e.target.classList.contains("accountsBtn")) {
      accountsImg.setAttribute("src", "/dist/images/account2.png");
      dashImg.src = dashDefaultSrc;
      walletImg.src = walletDefaultSrc;
      reportsImg.src = reportsDefaultSrc;
      settingsImg.src = settingsDefaultSrc;
      notificationImg.src = notificationDefaultSrc;
      helpImg.src = helpDefaultSerc;
    }

    // Reports button
    if (e.target.classList.contains("reportsBtn")) {
      reportsImg.setAttribute("src", "/dist/images/financial2.png");
      dashImg.src = dashDefaultSrc;
      walletImg.src = walletDefaultSrc;
      accountsImg.src = accountsDefaultSrc;
      settingsImg.src = settingsDefaultSrc;
      notificationImg.src = notificationDefaultSrc;
      helpImg.src = helpDefaultSerc;
    }

    // Settings button
    if (e.target.classList.contains("settingsBtn")) {
      settingsImg.setAttribute("src", "/dist/images/settings2.png");
      dashImg.src = dashDefaultSrc;
      walletImg.src = walletDefaultSrc;
      reportsImg.src = reportsDefaultSrc;
      accountsImg.src = accountsDefaultSrc;
      notificationImg.src = notificationDefaultSrc;
      helpImg.src = helpDefaultSerc;
    }

    // Notification button
    if (e.target.classList.contains("notificationBtn")) {
      notificationImg.setAttribute("src", "/dist/images/notification2.png");
      dashImg.src = dashDefaultSrc;
      walletImg.src = walletDefaultSrc;
      reportsImg.src = reportsDefaultSrc;
      settingsImg.src = settingsDefaultSrc;
      accountsImg.src = accountsDefaultSrc;
      helpImg.src = helpDefaultSerc;
    }

    // Help button
    if (e.target.classList.contains("helpBtn")) {
      helpImg.setAttribute("src", "/dist/images/help2.png");
      dashImg.src = dashDefaultSrc;
      walletImg.src = walletDefaultSrc;
      accountsImg.src = accountsDefaultSrc;
      reportsImg.src = reportsDefaultSrc;
      settingsImg.src = settingsDefaultSrc;
      notificationImg.src = notificationDefaultSrc;
    }
  });
}
