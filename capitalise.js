const capitalise = str => {
    if(!(typeof str === 'string')){
        throw new Error('Not string given');
    }

    if(str.charAt(0) === ' '){
        throw new Error('Unwanted beginning space detected');
    }
    return str.charAt(0).toUpperCase()+str.slice(1);
}

module.exports = capitalise