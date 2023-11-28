let hexRGB = (hex) => {
    //parseInt accepting radix values
    //radix values are unique values
    //slice does not take index but the element position
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // returning rgb values up to 255 
    return { r, g, b };
}


//enter the hex rgb code
console.log(hexRGB("#872341"));

//console displaying
//{r: 135, g: 35, b:65}