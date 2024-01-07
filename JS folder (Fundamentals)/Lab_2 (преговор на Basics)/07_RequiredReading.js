function reading(numbPages, pagesReadPerHour, dayToRead) {

    let RequiredTime = numbPages / pagesReadPerHour / dayToRead;

    console.log(RequiredTime);
}

reading(212, 20, 2);
reading(432, 15, 4);