

const male1 = document.getElementById('male1');
const female1 = document.getElementById('female1');
const male2 = document.getElementById('male2');
const female2 = document.getElementById('female2');









male1.addEventListener("click", function() {
    male1.classList.add('active');
    female1.classList.remove('active');
});
male2.addEventListener("click", function() {
    male2.classList.add('active');
    female2.classList.remove('active');
});

female1.addEventListener("click", function() {
    female1.classList.add('active');
    male1.classList.remove('active');
});
female2.addEventListener("click", function() {
    female2.classList.add('active');
    male2.classList.remove('active');
})