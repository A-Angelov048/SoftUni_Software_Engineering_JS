function languages(input) {

    let country = input;
    let result = '';

    switch (country) {
        case 'England': result = 'English'; break;
        case 'USA': result = 'English'; break;
        case 'Spain': result = 'Spanish'; break;
        case 'Argentina': result = 'Spanish'; break;
        case 'Mexico': result = 'Spanish'; break;
        default: result = 'unknown'; break;
    }
    console.log(result);
}

languages('USA');
languages('England');
languages('Spain');
languages('Argentina');
languages('Mexico');
languages('Germany');