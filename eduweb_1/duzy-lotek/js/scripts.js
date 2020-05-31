(function() {

    const btn = document.querySelector('#getNumbers');
    const output = document.querySelector('#showNumbers');

    function getRandom(min, max) {

        if (min >= max) {
            return 0;
        }

        return Math.round((Math.random() * (max - min) + min));
    }

    function showRandomNumbers() {
        const numbers = [];
        let rand;

        while (numbers.length < 6) {

            rand = getRandom(1, 49);

            if (!numbers.includes(rand)) {
                numbers.push(rand);
            }

        }

        output.value = numbers.sort((a, b) => {
            return a - b
        });
    }

    btn.onclick = showRandomNumbers;

})();