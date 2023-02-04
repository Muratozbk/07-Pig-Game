'use strict';

const mainContainer = document.querySelector('.main-container');
const thanksContainer = document.querySelector('.thank-you');

const submitButton = document.getElementById('submit');

const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

thanksContainer.addEventListener('click', function () {
    mainContainer.style.display = 'block';
    thanksContainer.classList.add('hidden');
    rating.innerHTML = '';
    document.querySelector('.gray').textContent = 'Please Select Number'
    //Short fix problem for now.
})

rates.forEach(rate => {
    rate.addEventListener('click', () => {
        rating.innerHTML = (rate.innerHTML)
    })
    console.log(rate.innerHTML, rate);
})
//If no number clicked It wont submit. But second time when rate it submit somehow, I will be pleased if you give feedback for solve this. For now  when second rate no number selected, it writes 'please select number'. 
rates.forEach(occurence => {
    let id = occurence.getAttribute('id');
    occurence.addEventListener('click', function () {

        submitButton.addEventListener('click', () => {
            thanksContainer.classList.remove('hidden');
            mainContainer.style.display = 'none'
        })
    });
});