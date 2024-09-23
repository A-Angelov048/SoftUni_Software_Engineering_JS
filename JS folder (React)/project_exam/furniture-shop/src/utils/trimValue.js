export function trimValue(values) {

    const trimValues = {};

    for (let key in values) {

        let value;

        if (typeof values[key] === 'number') {
            value = values[key];
        } else {
            value = values[key].trim();
        }

        Object.assign(trimValues, { [key]: value });
        
    }

    return trimValues;

}