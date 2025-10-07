const mainHeart = document.getElementById("mainHeart");
const letter = document.getElementById("letter");
const closeHeart = document.getElementById("closeHeart");

// Set the two image sources
const closedHeartImg = "heart_closed.png"; // your closed heart/envelope image
const openHeartImg = "heart_open.png";     // your open envelope image

mainHeart.addEventListener("click", () => {
  // Shake animation (always resets)
  mainHeart.classList.remove("shake");
  void mainHeart.offsetWidth;
  mainHeart.classList.add("shake");

  // Change to open heart
//   mainHeart.src = openHeartImg;

  // Show letter
  letter.classList.add("show");
  
  mainHeart.src = openHeartImg;

});

closeHeart.addEventListener("click", () => {
  // Hide letter
  letter.classList.remove("show");

  // Change back to closed heart after a short delay
//   setTimeout(() => {
//     mainHeart.src = closedHeartImg;
//   }, 1000); // small delay so it feels natural
});
