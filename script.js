document.addEventListener("DOMContentLoaded", () => {
  // Below are the cards
  const cardArray = [
    {
      name: "myLogo",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2F58ca378a0f9c7fec7bac822110585439.png?v=1611670269851"
    },
    {
      name: "myLogo",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2F58ca378a0f9c7fec7bac822110585439.png?v=1611670269851"
    },
    {
      name: "bin",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2Fe4a8256d7400d5985a97ff4f37be340b.png?v=1611670624776"
    },
    {
      name: "bin",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2Fe4a8256d7400d5985a97ff4f37be340b.png?v=1611670624776"
    },
    {
      name: "unicorn",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2Ffc7179b92ed73c9405ffb887ce8c6581.png?v=1611670627225"
    },
    {
      name: "unicorn",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2Ffc7179b92ed73c9405ffb887ce8c6581.png?v=1611670627225"
    },
    {
      name: "flowers",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2Fd05ce5df1151d3da41649d6b7f136387.jpg?v=1611670631345"
    },
    {
      name: "flowers",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2Fd05ce5df1151d3da41649d6b7f136387.jpg?v=1611670631345"
    },
    {
      name: "myInNature",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2Fc0a71514a02701b13cfd19cf16705d2e.jpg?v=1611670637390"
    },
    {
      name: "myInNature",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2Fc0a71514a02701b13cfd19cf16705d2e.jpg?v=1611670637390"
    },
    {
      name: "iphone",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2Fe79c45e5b4c4be5b6d458d049a34fb3e.png?v=1611670640527"
    },
    {
      name: "iphone",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2Fe79c45e5b4c4be5b6d458d049a34fb3e.png?v=1611670640527"
    },
    {
      name: "yellowShirt",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2F2333711700e3b41dc7ddb8915fb4b9f3.jpg?v=1611670649213"
    },
    {
      name: "yellowShirt",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2F2333711700e3b41dc7ddb8915fb4b9f3.jpg?v=1611670649213"
    },
    {
      name: "arzonia",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2F5de256abd29055ea6f32fd80b9b37c54.jpg?v=1611670707829"
    },
    {
      name: "arzonia",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2F5de256abd29055ea6f32fd80b9b37c54.jpg?v=1611670707829"
    },
    {
      name: "cat",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2FScreen%20Shot%202021-01-27%20at%207.36.32%20AM.png?v=1611751036497"
    },
    {
      name: "cat",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2FScreen%20Shot%202021-01-27%20at%207.36.32%20AM.png?v=1611751036497"
    },
    {
      name: "lighting",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2FScreen%20Shot%202021-01-27%20at%207.37.51%20AM.png?v=1611751097721"
    },
    {
      name: "lighting",
      img:
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2FScreen%20Shot%202021-01-27%20at%207.37.51%20AM.png?v=1611751097721"
    }
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const img = document.querySelector("#img");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  // creating the flip card board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute(
        "src",
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2FScreen%20Shot%202021-01-27%20at%207.36.32%20AM.png?v=1611751036497"
      );
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
  //things to do and fix//
  // this will check for matches
  // matching does not work accuratly
  // need to work on adding score

  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosenId[0] === cardsChosenId[1]) {
      alert("You found a match!!");
      cards[optionOneId].setAttribute(
        "src",
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2FScreen%20Shot%202021-01-27%20at%207.37.51%20AM.png?v=1611751097721"
      );
      cards[optionTwoId].setAttribute(
        "src",
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2FScreen%20Shot%202021-01-27%20at%207.37.51%20AM.png?v=1611751097721"
      );
      cardsWon.push(cardsChosen);

      // may just need to add a blank card aka blank img perhaps
    } else if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute(
        "src",
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2FScreen%20Shot%202021-01-27%20at%207.37.51%20AM.png?v=1611751097721"
      );
      cards[optionOneId].setAttribute(
        "src",
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2FScreen%20Shot%202021-01-27%20at%207.37.51%20AM.png?v=1611751097721"
      );
      alert("You have clicked the same image!");
    } else {
      // find an "x" or blank card for below
      cards[optionOneId].setAttribute(
        "src",
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2FScreen%20Shot%202021-01-27%20at%207.36.32%20AM.png?v=1611751036497"
      );
      // find an "x" or blank card for below

      cards[optionTwoId].setAttribute(
        "src",
        "https://cdn.glitch.com/a3a75522-6dc9-4e61-b73d-e3f7cc2ff23c%2FScreen%20Shot%202021-01-27%20at%207.36.32%20AM.png?v=1611751036497"
      );
      alert("Sorry, try again");
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congradulations!!🥳 You won the game!";
    }
  }

  //write code to flip the card over

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
