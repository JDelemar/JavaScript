/**
 * @Method: Returns a number formatted with commas
 * @param {number} number 
 * @returns {string}
 */
export const numberFormatter = (number: number) => {
    if (typeof number !== 'number')
        throw new TypeError('Parameter is not a number');

    return number.toLocaleString();
};

// export numberFormatter;