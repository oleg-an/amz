const words = text.split(' ');
const sentences = text.split('.');

const getRandomRows = (length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
        const rowMaxLength = Math.floor(Math.random() * (201 - 10) + 10);
        const wordIndex = Math.floor(Math.random() * words.length);

        let row = words[wordIndex];

        while (row.length <= rowMaxLength) {
            const wordIndex = Math.floor(Math.random() * words.length);
            row += ` ${words[wordIndex]}`;
        }
        result.push(row);
    }

    return result;
};

const getRandomDescriptionByIndex = (index) => {
    if (index < sentences.length) {
        return sentences[index];
    }
    return sentences[Math.floor(Math.random() * sentences.length)];
};
