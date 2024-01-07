function attachEvents() {

    const url = 'http://localhost:3030/jsonstore/forecaster/locations/';
    const buttonSubmit = document.querySelector('#submit').addEventListener('click', theWeather);
    const inputValue = document.querySelector('#location');
    const forecast = document.querySelector('#forecast');
    const current = document.querySelector('#current');
    const upcoming = document.querySelector('#upcoming');

    const weatherSymbol = {
        'Sunny': '\u2600',
        'Partly sunny': '\u26C5',
        'Overcast': '\u2601',
        'Rain': '\u2614',
        'Degrees': '\u00B0'
    }

    async function theWeather() {
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            
            for (let line of data) {
                if (line.name === inputValue.value) {
                    forecast.style.display = 'block';
                    WeatherConditions(line.code);
                    WeatherForecast(line.code);
                    return;
                }
            }
            throw new Error();
        } catch (error) {
            forecast.innerHTML = '';
            const div = document.createElement('div');
            const div1 = document.createElement('div');
            div.id = 'current';
            div1.className = 'label';
            div1.textContent = 'Error';
            div.appendChild(div1);
            forecast.appendChild(div);
            forecast.style.display = 'block';
        }
    }

    async function WeatherConditions(curCode) {
        
        if (current.children.length > 1){
            const removeDiv = current.children[1];
            removeDiv.remove();
        }
        const url = 'http://localhost:3030/jsonstore/forecaster/today/';
        const response = await fetch(url + curCode);
        const data = await response.json();

        createSpanCurrent(data);
    }

    async function WeatherForecast(curCode) {

        if (upcoming.children.length > 1){
            const removeDiv = upcoming.children[1];
            removeDiv.remove();
        }
        const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
        const response = await fetch(url + curCode);
        const data = await response.json();
        upcomingWeather(data);
    }

    function createSpanCurrent(curData) {

        //create div
        const div = document.createElement('div');
        div.className = 'forecasts';

        //create span to append to div
        const spanSymbol = document.createElement('span');
        spanSymbol.className = 'condition symbol';
        spanSymbol.textContent = weatherSymbol[curData.forecast.condition];
        const spanCon = document.createElement('span');
        spanCon.className = 'condition';

        //create spans to append to span
        const spanNameCity = document.createElement('span');
        spanNameCity.className = 'forecast-data';
        spanNameCity.textContent = curData.name;
        const spanTemperature = document.createElement('span');
        spanTemperature.className = 'forecast-data';
        spanTemperature.textContent = `${curData.forecast.low}${weatherSymbol.Degrees}/${curData.forecast.high}${weatherSymbol.Degrees}`;
        const spanCondition = document.createElement('span');
        spanCondition.className = 'forecast-data';
        spanCondition.textContent = curData.forecast.condition;

        //append all elements
        spanCon.appendChild(spanNameCity);
        spanCon.appendChild(spanTemperature);
        spanCon.appendChild(spanCondition);
        div.appendChild(spanSymbol);
        div.appendChild(spanCon);
        current.appendChild(div);

    }

    function upcomingWeather(curData) {

        //create div
        const div = document.createElement('div');
        div.className = 'forecast-info';

        for (let line of curData.forecast) {

            //create span to append to div
            const spanUpcoming = document.createElement('span');
            spanUpcoming.className = 'upcoming';

            //create spans to append to span
            const spanSymbol = document.createElement('span');
            spanSymbol.className = 'symbol';
            spanSymbol.textContent = weatherSymbol[line.condition];
            const spanTemperature = document.createElement('span');
            spanTemperature.className = 'forecast-data';
            spanTemperature.textContent = `${line.low}${weatherSymbol.Degrees}/${line.high}${weatherSymbol.Degrees}`;
            const spanCondition = document.createElement('span');
            spanCondition.className = 'forecast-data';
            spanCondition.textContent = line.condition;

            //append span elements
            spanUpcoming.appendChild(spanSymbol);
            spanUpcoming.appendChild(spanTemperature);
            spanUpcoming.appendChild(spanCondition);
            div.appendChild(spanUpcoming);
        }
        //append div 
        upcoming.appendChild(div);
    }
}

attachEvents();