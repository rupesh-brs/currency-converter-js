const fromEle = document.getElementById('fromCurrency');
const amountEl_one = document.getElementById('amount-one');
const toEle = document.getElementById('toCurrency');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');

// Fetch exchange rates and update the DOM
function calculate() {
    const currency_one = fromEle.value;
    const currency_two = toEle.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        })
        .catch(err => {
            console.error('Error fetching exchange rates:', err);
        });
}

// Event listeners
fromEle.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
toEle.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

calculate();
