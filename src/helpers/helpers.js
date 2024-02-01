export const ConvertNumberFormat = (number) =>{
    return '₱'+ number?.toLocaleString("en-US")
}
export const generateSlug=(input) =>  {
    return input
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '') 
      .replace(/^-+|-+$/g, ''); 
}
