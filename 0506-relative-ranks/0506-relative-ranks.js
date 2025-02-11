function findRelativeRanks(score) {
    // 점수를 내림차순으로 정렬한 복사본을 생성
    let sortedScores = [...score].sort((a, b) => b - a);
    
    // 점수를 기반으로 순위 매핑을 생성
    let rankMap = new Map();
    for (let i = 0; i < sortedScores.length; i++) {
        if (i === 0) {
            rankMap.set(sortedScores[i], "Gold Medal");
        } else if (i === 1) {
            rankMap.set(sortedScores[i], "Silver Medal");
        } else if (i === 2) {
            rankMap.set(sortedScores[i], "Bronze Medal");
        } else {
            rankMap.set(sortedScores[i], (i + 1).toString());
        }
    }

    // 원래 점수 배열을 순회하면서 순위 배열을 생성
    return score.map(s => rankMap.get(s));
}

// 테스트 케이스
console.log(findRelativeRanks([5,4,3,2,1])); // ["금메달", "은메달", "동메달", "4", "5"]
console.log(findRelativeRanks([10,3,8,9,4])); // ["금메달","5","동메달","은메달","4"]