"use strict";
(function() {
  window.addEventListener("load", init)

  function init() {
    const container = document.querySelector("header");
    container.innerHTML = ' \
    <nav role="navigation" aria-label="main navigation"> \
        <div> \
          <a href="index.html">Fuzzy Feelings</a> \
          <a></a> \
        </div> \
        <div class="navbar"> \
          <a href="play.html">Play</a> \
          <a href="learn.html">Learn</a> \
          <a href="about.html">About Us</a> \
          <a href="join.html"> \
            <button id="join">Join Us</button> \
          </a> \
        </div> \
      </nav>';

    const styleSheet = document.createElement('link');
    // styleSheet.setAttribute("href", "./widgets/menu/menu.css");    // Use this line if testing locally
    styleSheet.setAttribute("href", "fuzzyfeelings/widgets/menu/menu.css");   // needed for github
    styleSheet.setAttribute("rel", "stylesheet");
    document.head.appendChild(styleSheet);
  }
})();