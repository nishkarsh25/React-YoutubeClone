export const convertRawtoString = (labelValue,isSub=false)=>{

    const num = Math.abs(Number(labelValue));

    if(num >=1.0e9){
        return(num/1.0e9).toFixed(0) +"B"; //1500000000 = 1 B
    }
    
}