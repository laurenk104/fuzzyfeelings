"use strict";
(function() {
  window.addEventListener("load", init)

  function init() {
    const form = document.getElementById("form");
    form.innerHTML = ' \
        <div class="tab"> \
          <h1>I am a ...</h1> \
          <input value="Kid" type="button" /> \
          <input value="Parent" type="button" /> \
          <input value="Educator" type="button" /> \
          <input value="Investor" type="button" /> \
        </div> \
        <div id="form-body" class="tab hidden"> \
          <button type="reset"><span class="arrow">&larr;</span>Back</button> \
          <label for="first">First name: </label> \
          <input id="first" type="text" /> \
          <label for="last">Last name: </label> \
          <input id="last" type="text" /> \
          <label for="email">Email: </label> \
          <input required id="email" type="email" /> \
          <label for="message">Leave a message! </label> \
          <textarea id="message" rows="4"></textarea> \
          <input type="submit" /> \
        </div> \
        <div class="tab hidden"> \
          <button type="button"><span class="arrow">&larr;</span>Back</button> \
          <p> \
            We are looking for alpha testers to play with and give feedback on \
            Fuzzy Feelings. Ask your parent to get involved! \
          </p> \
        </div> \
        <div class="tab hidden"> \
          <button type="button"><span class="arrow">&larr;</span>Back</button> \
          <p>Thank you! Your response has been recorded.</p> \
        </div> \
      </form>';

    const tabs = form.querySelectorAll(".tab");

    const back = form.querySelectorAll("button");
    for (let i=0; i < back.length; i++) {
      back[i].addEventListener("click", () => {
        tabs[i+1].classList.toggle("hidden");
        tabs[0].classList.toggle("hidden");
      });
    }

    let person;
    const people = tabs[0].querySelectorAll("input");
    people.forEach((e) => {
      e.addEventListener("click", () => {
        person = e.value;
        if (e.value === "Kid") {
          tabs[2].classList.toggle("hidden");
          // submit kid
        } else {
          tabs[1].classList.toggle("hidden");
        }
        tabs[0].classList.toggle("hidden");
      });
    });

    form.addEventListener("submit", function(e) {
      e.preventDefault(); // prevent default behavior of submit (page refresh)
      submitRequest(tabs, person);
    });

    const styleSheet = document.createElement('link');
    styleSheet.setAttribute("href", "widgets/form/form.css");
    styleSheet.setAttribute("rel", "stylesheet");
    document.head.appendChild(styleSheet);
  }

  function submitRequest(tabs, person) {
    let params = new FormData();
    params.append("person", person);
    let options = document.getElementById("form-body").querySelectorAll("input");
    for (let i = 0; i < options.length-1; i++) {
      params.append(options[i].id, options[i].value);
    }
    params.append("message", document.getElementById("message").value);

    fetch("/join", {method: "POST", body: params})
      .then(checkStatus)
      .then(resp => resp.json())
      .then((resp) => thanks(resp, tabs))
      .catch(console.error);
  }

  function thanks(response, tabs) {
    console.log(response);
    tabs[1].classList.toggle("hidden");
    tabs[3].classList.toggle("hidden");
    document.getElementById("form").reset();
  }

  function checkStatus(response) {
    if (!response.ok) {
      throw Error("Error in request: " + response.statusText);
    }
    return response;
  }

})();