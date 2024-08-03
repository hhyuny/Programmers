function solution(sizes) {
    let sortedSizes = [[], []];

    sizes.forEach(([w, h]) => {
        if (w > h) {
            sortedSizes[0].push(w);
            sortedSizes[1].push(h);
        } else {
            sortedSizes[0].push(h);
            sortedSizes[1].push(w);
        }
    });

    return Math.max(...sortedSizes[0]) * Math.max(...sortedSizes[1]);   
}