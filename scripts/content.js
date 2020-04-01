const text = 'Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes. But I warn you, if you don\'t tell me that this means war, if you still try to defend the infamies and horrors perpetrated by that Antichrist--I really believe he is Antichrist--I will have nothing more to do with you and you are no longer my friend, no longer my \'faithful slave,\' as you call yourself! But how do you do? I see I have frightened you--sit down and tell me all the news." \n' +
    'It was in July, 1805, and the speaker was the well-known Anna Pavlovna Scherer, maid of honor and favorite of the Empress Marya Fedorovna. With these words she greeted Prince Vasili Kuragin, a man of high rank and importance, who was the first to arrive at her reception. Anna Pavlovna had had a cough for some days. She was, as she said, suffering from la grippe; grippe being then a new word in St. Petersburg, used only by the elite. \n' +
    'All her invitations without exception, written in French, and delivered by a scarlet-liveried footman that morning, ran as follows: \n' +
    '"If you have nothing better to do, Count [or Prince], and if the prospect of spending an evening with a poor invalid is not too terrible, I shall be very charmed to see you tonight between 7 and 10--Annette Scherer." \n' +
    '"Heavens! what a virulent attack!" replied the prince, not in the least disconcerted by this reception. He had just entered, wearing an embroidered court uniform, knee breeches, and shoes, and had stars on his breast and a serene expression on his flat face. He spoke in that refined French in which our grandfathers not only spoke but thought, and with the gentle, patronizing intonation natural to a man of importance who had grown old in society and at court. He went up to Anna Pavlovna, kissed her hand, presenting to her his bald, scented, and shining head, and complacently seated himself on the sofa. \n' +
    '"First of all, dear friend, tell me how you are. Set your friend\'s mind at rest," said he without altering his tone, beneath the politeness and affected sympathy of which indifference and even irony could be discerned. \n' +
    '"Can one be well while suffering morally? Can one be calm in times like these if one has any feeling?" said Anna Pavlovna. "You are staying the whole evening, I hope?" \n' +
    '"And the fete at the English ambassador\'s? Today is Wednesday. I must put in an appearance there," said the prince. "My daughter is coming for me to take me there." \n' +
    '"I thought today\'s fete had been canceled. I confess all these festivities and fireworks are becoming wearisome." \n' +
    '"If they had known that you wished it, the entertainment would have been put off," said the prince, who, like a wound-up clock, by force of habit said things he did not even wish to be believed. \n' +
    '"Don\'t tease! Well, and what has been decided about Novosiltsev\'s dispatch? You know everything." \n' +
    '"What can one say about it?" replied the prince in a cold, listless tone. "What has been decided? They have decided that Buonaparte has burnt his boats, and I believe that we are ready to burn ours." \n' +
    'Prince Vasili always spoke languidly, like an actor repeating a stale part. Anna Pavlovna Scherer on the contrary, despite her forty years, overflowed with animation and impulsiveness. To be an enthusiast had become her social vocation and, sometimes even when she did not feel like it, she became enthusiastic in order not to disappoint the expectations of those who knew her. The subdued smile which, though it did not suit her faded features, always played round her lips expressed, as in a spoiled child, a continual consciousness of her charming defect, which she neither wished, nor could, nor considered it necessary, to correct. \n' +
    'In the midst of a conversation on political matters Anna Pavlovna burst out: \n' +
    '"Oh, don\'t speak to me of Austria. Perhaps I don\'t understand things, but Austria never has wished, and does not wish, for war. She is betraying us! Russia alone must save Europe. Our gracious sovereign recognizes his high vocation and will be true to it. That is the one thing I have faith in! Our good and wonderful sovereign has to perform the noblest role on earth, and he is so virtuous and noble that God will not forsake him. He will fulfill his vocation and crush the hydra of revolution, which has become more terrible than ever in the person of this murderer and villain! We alone must avenge the blood of the just one.... Whom, I ask you, can we rely on?... England with her commercial spirit will not and cannot understand the Emperor Alexander\'s loftiness of soul. She has refused to evacuate Malta. She wanted to find, and still seeks, some secret motive in our actions. What answer did Novosiltsev get? None. The English have not understood and cannot understand the self-abnegation of our Emperor who wants nothing for himself, but only desires the good of mankind. And what have they promised? Nothing! And what little they have promised they will not perform! Prussia has always declared that Buonaparte is invincible, and that all Europe is powerless before him.... And I don\'t believe a word that Hardenburg says, or Haugwitz either. This famous Prussian neutrality is just a trap. I have faith only in God and the lofty destiny of our adored monarch. He will save Europe!';

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

/*
Из задачи: "описание -- N-ое предложение из текста ниже (Текст для вставки), где N -
порядковый номер обрабатываемого элемента в массиве."
    - условие не всегда может выполняться (массив может быть большим), поэтому добавил random
 */

const getRandomDescriptionByIndex = (index) => {
    if (index < sentences.length) {
        return sentences[index];
    }
    return sentences[Math.floor(Math.random() * sentences.length)];
};
