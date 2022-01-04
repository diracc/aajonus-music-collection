/* Variables */
const $playlist = document.getElementsByClassName("playlist")[0];
const $items = document.getElementById("items");
const $filter = document.getElementById("filter");
const $playerWrapper = document.getElementById("player-wrapper");
const $player = document.getElementsByTagName("iframe")[0];
const $songList = document.getElementById("song-list");
const $close = document.getElementById("close");
const $clear = document.getElementById("clear");

// Workaround for correct stripes (1/3)
let nthStripe = 1;


/* Init */
// clear the input field
$filter.value = "";

// Render the playlist
tapes.forEach(function (tape) {
    const $item = createElement("div", "item");
    const $cover = createElement("img", "cover", {
        src: `covers/${tape[4]}`,
        alt: `Cover of "${tape[1]}"`
    });
    const $infos = createElement("div", "infos");
    const $artist = createElement("div", "artist", { innerText: tape[0] });
    const $album = createElement("a", "album", {
        innerText: tape[1],
        href: "#"
    });
    const $released = createElement("div", "released", { innerText: tape[3] });
    const $length = createElement("span", "length", { innerText: tape[2] });
    
    $cover.addEventListener("click", selectAlbum.bind(tape));
    $album.addEventListener("click", selectAlbum.bind(tape));

    appendChildren($infos, $artist, $album, $released);
    appendChildren($item, $cover, $infos, $length);
    $items.appendChild($item);
    tape.$element = $item;
});


/* Event listeners */
$songList.addEventListener("click", selectSong);
$close.addEventListener("click", closePlayer);
$filter.addEventListener("input", filterTapes);
$clear.addEventListener("click", clearInput);


/* Functions */
function createElement(element, className, attributes) {
    const $element = document.createElement(element);
    $element.className = className;
    for (attribute in attributes) {
        if (attributes.hasOwnProperty(attribute)) {
            $element[attribute] = attributes[attribute];
        }
    }
    return $element;
}

function appendChildren(parent, ...children) {
    children.forEach(function (child) {
        parent.appendChild(child);
    });
}

function selectAlbum(e) {
    e.preventDefault();
    const tape = this[5];
    const id = tape.id || tape.list[0][0];
    updatePlayer(id);
    renderSongList(tape.list, tape.id);
    $playerWrapper.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updatePlayer(id, time) {
    time = time ? `&start=${time}` : "";
    $player.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1${time}`;
}

function renderSongList(list, id) {
    $songList.innerHTML = ""; // Remove current playlist
    list.forEach(function (song) {
        const $li = createElement("li", "");
        const $a = createElement("a", "song", { innerText: song[1] });
        $a.dataset.start = id ? song[0] : 0;
        $a.dataset.id = id || song[0];
        $a.href = "#";
        $li.appendChild($a);
        $songList.appendChild($li);
    });
}

function selectSong(e) {
    e.preventDefault();
    if (e.target.className === "song") {
        updatePlayer(e.target.dataset.id, +e.target.dataset.start);
    }
}

function closePlayer() {
    $player.src = "";
    $playerWrapper.classList.add("hidden");
}

function filterTapes() {
    const input = this.value.trim().toLowerCase();

    if (this.value === "") {
        $clear.classList.add("hidden");
    } else {
        $clear.classList.remove("hidden");
    }

    tapes.forEach(function (tape) {
        tape.visible = tape[1].toLowerCase().indexOf(input) > -1;
        renderItem(tape, input);
    });

    // Workaround for correct stripes (2/3)
    $playlist.classList.remove("striped");
    nthStripe = 1;
}

function renderItem(tape, input) {
    if (tape.visible) {
        tape.$element.classList.remove("hidden");
        const $album = tape.$element.getElementsByClassName("album")[0];

        if (input === "") {
            // No highlight, if input field is empty
            $album.innerHTML = tape[1];
        } else {
            // Mask special characters like dots and parentheses
            const masked = input.replace(/([\.\[\]\(\)])/g, "\\$1");
            // Highlight filtered text
            const regexp = RegExp(`(${masked})`, "ig");
            const highlight = `<span class="highlight">$1</span>`;
            $album.innerHTML = tape[1].replace(regexp, highlight);
        }

        // Workaround for correct stripes (3/3)
        if (nthStripe++ % 2 === 0) {
            tape.$element.classList.remove("stripe");
        } else {
            tape.$element.classList.add("stripe");
        }
    } else {
        tape.$element.classList.add("hidden");
    }
}

function clearInput() {
    $filter.value = "";
    filterTapes.apply($filter);
}