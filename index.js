function createHeaderNavigation() {
    let nav = document.createElement('nav');
    nav.innerHTML = `
    <section class="main-content-box">
        <img src="images/logo.png" alt="logo.png"> Some text
    </section>
    `;
    document.body.appendChild(nav);
}

createHeaderNavigation()
