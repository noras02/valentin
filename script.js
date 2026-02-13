const flower = document.querySelector(".flower");
const messageBox = document.querySelector(".message");

const messages = [
  "Szeretem benned, hogy milyen gyorsan számolsz fejben:)",
  "Szeretem benned, hogy ennyire türelmes vagy.",
  "Szeretem benned, hogy mindig meghallgatsz, akkor is, ha más nem.",
  "Szeretem a szép kék szemeidet:)",
  "Szeretem benned, hogy őszinte vagy velem.",
  "Szeretem a finom illatodat.",
  "Tetszik benned, hogy van egy értékrended, amihez ragaszkodsz és nem engedsz belőle.",
  "Szeretem benned, hogy mindig küldesz valamilyen szórakoztató videót, hogy feldobd a napom."
];

let messageIndex = 0;

const petalCount = 8;

for (let i = 0; i < petalCount; i++) {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  const angle = (360 / petalCount) * i;
  petal.style.setProperty("--angle", angle + "deg");
  petal.style.transform = `translate(-50%, -150%) rotate(${angle}deg)`;
  petal.style.transform = `rotate(${angle}deg) translateY(-120px)`;
  petal.addEventListener("click", () => {
    if (!petal.classList.contains("removed")) {
      petal.classList.add("removed");

      messageBox.textContent = messages[messageIndex];
      messageIndex++;

      if (messageIndex === petalCount) {
        setTimeout(() => {
          confirm("Töltjük együtt a mai napot?");
        }, 500);
      }
    }
  });

  flower.appendChild(petal);
}
