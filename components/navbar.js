function navbar() {
  return `<div id="navbar">
    <div id="logo">
      <a href="./index.html">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt=""
        />
      </a>
    </div>

    <div id="search">
      <input type="text" placeholder="Search Users" id = "search-input" />
      <button id="search-button">Search</button>
    </div>

    <div id="options">
      <ul id="list">
        <li>Pull Request</li>
        <li>Issues</li>
        <li>Marketplace</li>
        <a href="./explore.html"><li>Explore</li></a>
      </ul>
    </div>
  </div>`;
}

export default navbar;
