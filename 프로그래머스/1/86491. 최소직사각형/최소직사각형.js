function solution(sizes) {    

    const newSizes = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));
    let walletSize = [0, 0];

    newSizes.forEach(([w, h]) => {
        walletSize[0] = w > walletSize[0] ? w : walletSize[0];
        walletSize[1] = h > walletSize[1] ? h : walletSize[1];
    });

    return walletSize[0] * walletSize[1];
//     let newSizes = sizes.map(([w, h]) => w > h ? [w, h] : [h, w]);
    
//     let walletSize = [0, 0];
    
//     newSizes.forEach(([w, h]) => {
//         w > walletSize[0] ? walletSize[0] = w : walletSize[0];
//         h > walletSize[1] ? walletSize[1] = h : walletSize[1];
//     })
    
//     return walletSize[0] * walletSize[1];    
}