document.addEventListener("DOMContentLoaded", function(event) {

    // Get elements from HTML
    var shuffleBtn = document.getElementById("btn-shuffle");
    var sortBtn = document.getElementById("btn-sort");
    var tileContainer = document.getElementById("shuffle-sort-tiles");
    var tiles = document.getElementsByClassName("shuffle-sort-tiles__tile");
    var tileHTMLElements = Array.prototype.filter.call(tiles, function(testElement){
        return testElement.nodeName === 'DIV';
    });

    // Add event listeners on the buttons
    shuffleBtn.addEventListener("click", event => {
        shuffleTiles();
    });
    sortBtn.addEventListener("click", event => {
        sortTiles();
    });

    // Shuffle the tiles into a random order
    function shuffleTiles() {
        var shuffledTiles = shuffle(tileHTMLElements);

        console.log('after shuffle:', shuffledTiles);

        repopulateTiles(shuffledTiles);
    }

    // Sort the tiles into ascending order
    function sortTiles() {
        var sortedTiles = sort(tileHTMLElements);

        console.log('after sort:', sortedTiles);

        repopulateTiles(sortedTiles);
    }

    function repopulateTiles(tileArray) {
        tileContainer.innerHTML = ''; // Wipe contents
        var i;
        for (i = 0; i < tileArray.length; i++) {
            tileContainer.innerHTML += '<div class="shuffle-sort-tiles__tile" id="tile__' + tileArray[i].innerText + '">' + tileArray[i].innerText + '</div>';
        }
    }

    function shuffle(array) {
        var i = array.length, temp, randomI;

        while (0 !== i) {
            randomI = Math.floor(Math.random() * i);
            i -= 1;
            temp = array[i];
            array[i] = array[randomI];
            array[randomI] = temp;
        }

        return array;
    }

    function sort(array) {
        return array.sort(function (a, b) {
            var sortA = a.innerText;
            var sortB = b.innerText;
            if (sortA < sortB) return -1;
            if (sortA < sortB) return 1;
            return 0;
        });
    }
});
