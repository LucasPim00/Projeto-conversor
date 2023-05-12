const form = document.getElementById ('form');
form.addEventListener ('submit', handleSubmit)

const inputValue = document.getElementById ('valor');
const selectedCurrency = document.getElementById ('currency')
const result = document.getElementById ('result');
let valueConverted = 0;

function handleSubmit (e) 
{   
    e.preventDefault();

    if(!inputValue.value || inputValue.value < 0)
        {alert ('Valor inválido!');
    return;}

    else if (!selectedCurrency.value)
        {alert('Escolha uma moeda!');
    return;}

    converter();
};

function converter()
{   
    if(selectedCurrency.value === 'euro')
        {valueConverted = inputValue.value*5.34;
        result.innerHTML = valueFormatter('pr-br', 'EUR');
        animateResult();}

    else if(selectedCurrency.value === 'dolar')
        {valueConverted = inputValue.value*4.92;
        result.innerHTML = valueFormatter('en-us', 'USD');
        animateResult();}

    else if(selectedCurrency.value === 'libra')
        {valueConverted = inputValue.value*6.13;
        result.innerHTML = valueFormatter('en-gb', 'GBP');
        animateResult();}

    else if(selectedCurrency.value === 'iene')
        {valueConverted = inputValue.value*0.04;
        result.innerHTML = valueFormatter('zh-cn', 'CNY');
        animateResult();}

    else if(selectedCurrency.value === 'rublo')
        {valueConverted = inputValue.value*0.06;
        result.innerHTML = valueFormatter('ru-ru', 'RUB');
        animateResult();}

    else if(selectedCurrency.value === 'yuan')
        {valueConverted = inputValue.value*0.71;
        result.innerHTML = valueFormatter('zh-cn', 'CNY');
        animateResult();}

    else if(selectedCurrency.value === 'lira')
        {valueConverted = inputValue.value*0.25;
        result.innerHTML = valueFormatter('tr-tr', 'TRY' );
        animateResult();}
        
    inputValue.value = '';
    selectedCurrency.value = '';
};

function valueFormatter(locale, currency)
{   
    const value = valueConverted.toLocaleString(`${locale}`, {style:'currency', currency: `${currency}`});
    return `<span>🤑</span> ${value} <span>🤑</span>`;
};

function animateResult()
{
    return result.animate([
        {transform: 'translateY(-100px)'},
        {transform: 'translateY(0px)'},
    ],
    {duration:800});
};

    
    

