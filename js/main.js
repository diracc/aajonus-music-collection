/* Variables */
const $playlist = document.getElementsByClassName("playlist")[0];
const $items = document.getElementById("items");
const $filter = document.getElementById("filter");
const $playerWrapper = document.getElementById("player-wrapper");
const $player = document.getElementById("player");
const $songList = document.getElementById("song-list");
const $close = document.getElementById("close");
const $clear = document.getElementById("clear");

let player;
let currentTapeIndex;
let currentSongIndex;
// Workaround for correct stripes (1/3)
let nthStripe = 1;


/* Init */
// clear the input field
$filter.value = "";

// load the IFrame Player API code
// const $script = document.createElement("script");
// const $firstScriptTag = document.getElementsByTagName("script")[0];
// $script.src = "https://www.youtube.com/iframe_api";
// $firstScriptTag.parentNode.insertBefore($script, $firstScriptTag);

// Render the playlist
tapes.forEach(function (tape, index) {
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
    
    $cover.addEventListener("click", selectAlbum.bind(tape[5]));
    $album.addEventListener("click", selectAlbum.bind(tape[5]));

    appendChildren($infos, $artist, $album, $released);
    appendChildren($item, $cover, $infos, $length);
    $items.appendChild($item);
    tape.$element = $item;
    tape[5].index = index;
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

function onYouTubeIframeAPIReady() {
    player = new YT.Player($player, {
        height: "315",
        width: "560",
        playerVars: {
            "playsinline": 1,
            "autoplay": 1
        },
        events: {
            "onStateChange": onPlayerStateChange
        }
    });
}

function onPlayerStateChange(e) {
    if (e.data === YT.PlayerState.ENDED) {
        const tape = tapes[currentTapeIndex][5];

        if (!tape.id && currentSongIndex + 1 < tape.list.length) {
            tape.list[++currentSongIndex][2].click();
        } else {
            if (currentTapeIndex + 1 < tapes.length) {
                const nextTapeIndex = ++currentTapeIndex;
                currentTapeIndex = undefined;
                currentSongIndex = 0;
                selectAlbum.apply(tapes[nextTapeIndex][5]);
            }
        }
    }
}

// function determineSongIndex(songlist, time) {
//     let songIndex = 0;

//     songlist.forEach(function (song, index) {
//         if (song[0] >= time) {
//             return;
//         }
        
//         songIndex = index;
//     });

//     return songIndex;
// }

function selectAlbum(e) {
    e && e.preventDefault();
    updatePlayer(getId(this), 0);
    renderSongList(this);
    $playerWrapper.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    currentTapeIndex = this.index;
    currentSongIndex = 0;
}

function getId(tape) {
    return tape.id || tape.list[0][0];
}

function updatePlayer(id, time) {
    if (time !== 0) {
        player.seekTo(time);
    } else {
        player.loadVideoById(id, time);
    }
}

function renderSongList(tape) {
    $songList.innerHTML = ""; // Remove current playlist
    tape.list.forEach(function (song, index) {
        const $li = createElement("li", "");
        const $a = createElement("a", "song", { innerText: song[1] });
        $a.dataset.start = tape.id ? song[0] : 0;
        $a.dataset.id = tape.id || song[0];
        $a.dataset.index = index;
        $a.href = "#";
        $li.appendChild($a);
        $songList.appendChild($li);
        song[2] = $a;
    });
}

function selectSong(e) {
    e.preventDefault();
    if (e.target.className === "song") {
        currentSongIndex = +e.target.dataset.index;
        updatePlayer(e.target.dataset.id, +e.target.dataset.start);
    }
}

function closePlayer() {
    player.stopVideo();
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