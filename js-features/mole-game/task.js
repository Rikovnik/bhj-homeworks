let miss = document.getElementById("lost");
let deadMole = document.getElementById("dead");
function moleHunting() {
  if (this.className.includes( 'hole_has-mole' ) == true) {
    deadMole.textContent = Number(deadMole.textContent) + 1;
  } else {
    miss.textContent = Number(miss.textContent) + 1;
  };

  if (Number(deadMole.textContent) == 10) {
    alert('Вы убили всех кротов! Поздравляем!');
    deadMole.textContent = 0;
    miss.textContent = 0;
    return;
  }
  if (Number(miss.textContent) == 5) {
    alert('Вы проиграли');
    miss.textContent = 0;
    deadMole.textContent = 0;
    return;
  }
};


for (let i = 1; i < 10; i++) {
  const getHole = document.getElementById(`hole${i}`);
  getHole.onclick = moleHunting;
}