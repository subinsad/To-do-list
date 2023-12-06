function Header({ target, text }) {
    if (target) {
        alert('Header생성해주세요');
        return;
    }

    const Header = document.createElement('h1');

    target.appendChild(Header);

    this.render = () => {
        Header.textContent = text;
    };

    this.render();
}
