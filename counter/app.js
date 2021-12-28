/* <main>
  <div class="container">
    <h1>counter</h1>
    <span id="value">0</span>
    <div class="button-container">
      <button class="btn decrease">decrease</button>
      <button class="btn reset">reset</button>
      <button class="btn increase">increase</button>
    </div>
  </div>
</main>; */

const value = document.querySelector("#value");
const button = document.querySelectorAll(".btn");
const buttonDecrease = document.querySelector(".decrease");
const buttonIncrease = document.querySelector(".increase");
const buttonReset = document.querySelector(".reset");

let counter = 0;

buttonDecrease.addEventListener("click", () => {
  counter--;
  value.textContent = counter;
});

buttonIncrease.addEventListener("click", () => {
  counter++;
  value.textContent = counter;
});

buttonReset.addEventListener("click", () => {
  counter = 0;
  value.textContent = counter;
});
