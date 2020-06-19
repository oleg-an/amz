function queue(objects, mapper, limit) {
    const generator = mapper(objects);
    const promises = [];

    for (let i = 0; i < limit; i++) {
        promises.push(new Promise((resolve) => {
            iterateSearchResult(generator, () => {
                resolve();
            });
        }))
    }
    return Promise.all(promises);
}

function iterateSearchResult(generator, onEnded) {
    const next = generator.next();
    if (next.done) {
        onEnded();
        return;
    }
    next.value.then(_ => {
        iterateSearchResult(generator, onEnded);
    });
}

function* mapper(objects) {
    const blocksNode = new BlocksNode();

    for (let i = 0; i < objects.length; i++) {
        yield new Promise(resolve => {
            const number = i + 1;

            const cellNode = new CellNode();
            cellNode.addTitle(`${number}. ${objects[i]}`);
            blocksNode.add(cellNode);

            setTimeout(() => {
                const description = getRandomDescriptionByIndex(i);
                cellNode.addDescription(description);
                blocksNode.updateProgress();

                resolve();
            }, Math.round(Math.random() * 3000) + 1000);
        });
    }
}
