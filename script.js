 let game = document.querySelector(".game");
 // 4 buttons
 let buttonShow = document.querySelector(".show");
 let buttonDouble = document.querySelector(".double");
 let buttonShuffle = document.querySelector(".shuffle");
 let buttonFlip = document.querySelector(".flip");
 // Array containing image URLs
 let urlPrefix = "https://cdn.glitch.global/4f674391-ca19-40ba-99ca-d7f3769cc050/Luis%20amaya%20";
 let cards = [
     "blue%20car.jpg?v=1712178147012",
     "green%20car.jpg?v=1712178240909",
     "light%20blue%20car.jpg?v=1712178575311",
     "yellow%20car.jpg?v=1712178637921",
     "red%20car.jpg?v=1712178717431",
     "brown%20car.jpg?v=1712178792927",
     "truck%20car.jpg?v=1712178849879",
     "cyan%20car.jpg?v=1712178984539"
 ];

 // Button to Show Deck
 buttonShow.onclick = function() {

         console.log("Deck has 8 cards!");
         buttonShow.style.color = "grey";

         for (let card of cards) {
             game.insertAdjacentHTML("beforeend",
                 "<div style='background-image: url(" + urlPrefix + card + ")' class='card'>");
         }
 };

         // Button to Double Deck

       buttonDouble.onclick = function () {
           console.log(" Deck has" + cards.length + "cards.");
           for (let card of cards) {
               if (cards.length !==16) {
                   cards.push(card);
                   game.insertAdjacentHTML ("beforeend" , "<div style = 'background-image: url (" + urlPrefix + card +")'class = card'>"
                                            );
               }
           }
           buttonDouble.style.color = "grey";
           console.log("Now the deck has" + cards.length + "cards.");
           
       };