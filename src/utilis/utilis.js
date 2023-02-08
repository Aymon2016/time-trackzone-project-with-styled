

export const getOffsets = ( ending = 12)=>{

    const offsets = [];
    for (let i = 0; i <= ending; i+=0.5) {
       offsets.push(i)
        
    }
    return offsets
}


