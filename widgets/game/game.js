"use strict";
(function() {
  window.addEventListener("load", init)

  const SOURCES = [
    {
      "src": "https://itch.io/embed-upload/13482626?color=333333",
      "link": "https://laurenk104.itch.io/test"
    }
  ]

  function init() {
    const container = document.querySelector(".game");
    container.innerHTML = '<iframe frameborder="0" src="https://itch.io/embed-upload/13681247?color=333333" allowfullscreen="" width="1120" height="670"><a href="https://laurenk104.itch.io/mixed-emotions">Play Mixed Emotions on itch.io</a></iframe>';
    // let id = container.querySelector("script").getAttribute("data-id");
    // container.appendChild(createEmbed(SOURCES[id]));

    // const styleSheet = document.createElement('link');
    // styleSheet.setAttribute("href", "widgets/menu/menu.css");
    // styleSheet.setAttribute("rel", "stylesheet");
    // document.head.appendChild(styleSheet);
  }

  function createEmbed(source) {
    const frame = document.createElement("iframe");
    frame.setAttribute("frameborder", 0);
    frame.setAttribute("allowfullscreen", "");
    frame.setAttribute("width", 640);
    frame.setAttribute("height", 380);
    frame.setAttribute("src", source.src);

    const link = document.createElement("a");
    link.setAttribute("href", source.link);

    frame.appendChild(link);
    return frame;
  }
})();