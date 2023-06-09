function navbar() {
  return `<div id="navbar">
    <div id="logo">
      <a href="./index.html">
        <img
          src="../assets/githubLogo.png"
          alt="github logo"
        />
      </a>
    </div>

    <div id="search">
      <input type="text" placeholder="Search Users" id = "search-input" />
      <button id="search-button"></button>
    </div>
  </div>`;
}

export default navbar;
