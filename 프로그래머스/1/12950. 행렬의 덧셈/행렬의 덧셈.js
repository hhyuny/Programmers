function solution(arr1, arr2) {
    return arr1.map((item1, idx1) => item1.map((item2, idx2) => item2 + arr2[idx1][idx2]));
}

// ex. 첫 사이클
// item1 = [1, 2]
// idx1 = 0

// 여기서 item1에 map을 쓴다.
// item2 = 1
// idx2 = 0

// item2(=1) + arr2[0][0](=3) = 1 + 3 = 4