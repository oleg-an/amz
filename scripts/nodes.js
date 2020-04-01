class BlocksNode {
    #blocks;
    #progress;
    #progressValue;
    #count = 0;

    constructor() {
        this.#blocks = document.getElementById('blocks');
        this.#blocks.innerHTML = '';

        this.#progressValue = document.getElementById('progress-value');
        this.#progressValue.textContent = this.#count;

        this.#progress = document.getElementById('progress');
        this.#progress.style.visibility = 'visible';
    }

    add(value) {
        this.#blocks.appendChild(value.getElement());
        this.#count++;
        this.#progressValue.textContent = this.#count;
    }
}

class CellNode {
    #column;

    constructor() {
        this.#column = document.createElement('div');
    }

    addTitle(value) {
        const titleEl = document.createElement('div');
        titleEl.textContent = value;
        titleEl.classList.add('search-results__title');

        this.#column.appendChild(titleEl);
    }

    addDescription(value) {
        const descriptionEl = document.createElement('div');
        descriptionEl.textContent = value;
        descriptionEl.classList.add('search-results__text');

        this.#column.appendChild(descriptionEl);
    }

    getElement() {
        return this.#column;
    }
}
