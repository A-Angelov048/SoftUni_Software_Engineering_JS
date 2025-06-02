export function trimValue(values) {
  const trimValues = {};

  for (let key in values) {
    let value;

    if (typeof values[key] === "number") {
      value = values[key];
    } else if (typeof values[key] === "object") {
      value = values[key].map((x) => x.trim());
    } else {
      value = values[key].trim();
    }

    Object.assign(trimValues, { [key]: value });
  }

  return trimValues;
}
