/* js code for the background color and icon color change */ 

const container = document.body;
      const tabOne = document.querySelector(".link1");
      const tabTwo = document.querySelector(".link2");
      const tabThree = document.querySelector(".link3");
      const tabFour = document.querySelector(".link4");
      const tabFive = document.querySelector(".link5");
      const tabs = document.querySelectorAll(".link");
      tabOne.classList.add("tabone");
      tabOne.addEventListener("click", () => {
        tabOne.classList.add("tabone");
        tabFive.classList.remove("tabone");
        tabFour.classList.remove("tabone");
        tabThree.classList.remove("tabone");
        tabTwo.classList.remove("tabone");
      });
      tabTwo.addEventListener("click", () => {
        tabTwo.classList.add("tabone");
        tabFive.classList.remove("tabone");
        tabFour.classList.remove("tabone");
        tabThree.classList.remove("tabone");
        tabOne.classList.remove("tabone");
      });
      tabThree.addEventListener("click", () => {
        tabThree.classList.add("tabone");
        tabOne.classList.remove("tabone");
        tabTwo.classList.remove("tabone");
        tabFour.classList.remove("tabone");
        tabFive.classList.remove("tabone");
      });
      tabFour.addEventListener("click", () => {
        tabFour.classList.add("tabone");
        tabOne.classList.remove("tabone");
        tabTwo.classList.remove("tabone");
        tabThree.classList.remove("tabone");
        tabFive.classList.remove("tabone");
      });
      tabFive.addEventListener("click", () => {
        container.style.backgroundColor = "rgb(245, 233, 67)";
        tabFive.classList.add("tabone");
        tabOne.classList.remove("tabone");
        tabTwo.classList.remove("tabone");
        tabThree.classList.remove("tabone");
        tabFour.classList.remove("tabone");
      });