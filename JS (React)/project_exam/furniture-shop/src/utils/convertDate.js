export function convertDate (date){

    const dateToConvert = new Date(date);
    
    return dateToConvert.toLocaleString();
}