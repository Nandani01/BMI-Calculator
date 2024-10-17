const form = document.querySelector('.valuecontainer');
const submitbutton = document.querySelector('.submitbutton');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseFloat(document.querySelector('.height').value);
    const weight = parseFloat(document.querySelector('.weight').value);

    const bmi = (weight / (height * height)).toFixed(2);
    const value = document.querySelector(".value");
    value.innerHTML = bmi;
    console.log(bmi);
})