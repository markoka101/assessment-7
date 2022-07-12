//runtime is O(n^2)
const addToZero = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i]+arr[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

//runtime is O(n^2)
const hasUniqueChars = word => {
    for (let i =0; i < word.length-1; i++) {
        for (let j = i+1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return false;
            }
        }
    }
    return true;
}

//runtime is O(n^2)
const isPangram = str => {
    for (let i = 97; i < 123; i++) {
        if (!(str.includes(String.fromCharCode(i)))) {
            return false;
        }
    }
    return true;
}

//runtime is O(1)
const findLongestWord = (w1,w2) => {
    if (w1.length > w2.length) {
        return w1.length;
    }
    return w2.length;
}
