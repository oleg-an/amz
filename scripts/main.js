document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchButton = document.getElementById('search-button');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const length = parseInt(document.getElementById('length').value, 10);
        const limit = parseInt(document.getElementById('limit').value, 10);

        if (limit > length) {
            alert('Limit must be less than or equal to Length');
            return;
        }

        const blockLength = document.getElementById('block-length');
        blockLength.textContent = length.toString();

        searchButton.disabled = true;

        queue(getRandomRows(length), mapper, limit).then(_ => {
            searchButton.disabled = false;
        });
    });
});
