export const parseVideoDuration = (duration) => {
   


    const durationParts = duration
    .replace("PT","")
    .replace("H",":")
    .replace("M",":")
    .replace("S","")
    .split(":");

    

    
}

