function Header({ target, text }) {
    if (target) {
        alert("Header\uC0DD\uC131\uD574\uC8FC\uC138\uC694");
        return;
    }
    const Header = document.createElement("h1");
    target.appendChild(Header);
    this.render = ()=>{
        Header.textContent = text;
    };
    this.render();
}

//# sourceMappingURL=index.a8bf6998.js.map
