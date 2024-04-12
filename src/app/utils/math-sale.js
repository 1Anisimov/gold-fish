
export const MathSale = (price, sale) => {
    const newPrice = Math.floor( (price / 100) * (100 - sale) )
    return newPrice;
}