const Header = () => {
    const view = `
        <div class="header-main">
            <div class="header-logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="Rick and Morty logo">
                </a>
            </div>
            <nav class="header-nav">
                <a href="#/about/">
                    About
                </a>
            </nav>
        </div>
    `;

    return view;
}

export default Header;