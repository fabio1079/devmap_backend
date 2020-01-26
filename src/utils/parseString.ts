/**
 * Given a separetor, returns a function that splits string by its
 * separetor.
 *
 * @param sep string separetor
 */
export function stringToArray(sep: string) {
  return (str: string) => {
    return str.split(sep).map((subs: String) => subs.trim());
  };
}

/**
 * Splits string using "," as separetor
 */
export const techsAsArray = stringToArray(",");
