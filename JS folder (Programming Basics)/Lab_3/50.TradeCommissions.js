function trade(input) {

    let town = input[0];
    let sells = Number(input[1]);
    let result = 0;

    if (town === "Sofia") {

        if (sells >= 0 && sells <= 500){
        result = 0.05 * sells;

        } else if ( sells > 500 && sells <= 1000) {
        result = 0.07 * sells;

        } else if ( sells > 1000 && sells <= 10000) {
            result = 0.08 * sells;

        } else if ( sells > 10000) {
        result = 0.12 * sells;
        }

    } else if (town === "Varna") {

        if (sells >= 0 && sells <= 500){
        result = 0.045 * sells;

        } else if ( sells > 500 && sells <= 1000) {
        result = 0.075 * sells;

        } else if ( sells > 1000 && sells <= 10000) {
            result = 0.10 * sells;

        } else if ( sells > 10000) {
            result = 0.13 * sells;
            }

    } else if (town === "Plovdiv") {

        if (sells >= 0 && sells <= 500){
        result = 0.055 * sells;

        } else if ( sells > 500 && sells <= 1000) {
        result = 0.08 * sells;

        } else if ( sells > 1000 && sells <= 10000) {
            result = 0.12 * sells;

        } else if ( sells > 10000) {
            result = 0.145 * sells;
            }
}

 
if (result === 0){
   console.log("error");
} else {
   console.log(result.toFixed(2));
}

}

trade(["Kaspichan",
"-50"])


