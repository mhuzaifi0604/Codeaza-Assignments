
useEffect(() => {
  const converted = (value, string) => {
    if (string === 'dollar') {
      return `${value} PKR == ${value / 287.15} ${string}`;
    } else if (string === 'pound') {
      return `${value} PKR == ${value / 367.36} ${string}`;
    } else if (string === 'yuan') {
      return `${value} PKR == ${value / 40.03} ${string}`;
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const value = parseFloat(event.target.elements.currency.value);
    const selectedCurrency = event.target.elements.single.value;
    const result = document.getElementById('output');
    const paragraph = document.createElement('p');

    if (!isNaN(value) && selectedCurrency) {
      paragraph.textContent = converted(value, selectedCurrency);
      result.appendChild(paragraph);
    } else {
      paragraph.textContent =
        'Please enter a valid amount and select one of the currencies given.';
      result.appendChild(paragraph);
    }
  };
}, []);