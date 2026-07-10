document.addEventListener("DOMContentLoaded", () => {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarPlaceholder.innerHTML = data;
            })
            .catch(err => console.error("Navbar load error:", err));
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(err => console.error("Footer load error:", err));
    }

    const backbuttonPlaceholder = document.getElementById('back-button-placeholder');
    if (backbuttonPlaceholder) {
        fetch('back.html')
            .then(response => response.text())
            .then(data => {
                backbuttonPlaceholder.innerHTML = data;
            })
            .catch(err => console.error("back load error:", err));
    }
});
