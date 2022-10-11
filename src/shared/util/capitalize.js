// Capitalize string
export const toCapitalize = str => {
    if (!str) { return str }
    return str[0].toUpperCase() + str.slice(1).toLowerCase(); 
};

// Capitalize all words
export const toCapitalizeAll = str => {
    const strArr = str.split(' ').map(word => toCapitalize(word));

    return strArr.join(' ');
}