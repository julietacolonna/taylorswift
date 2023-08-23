const setDefaultValues = (albumClass, imageURL, positionOpen) => {
    const albumDiv = document.getElementsByClassName(albumClass)[0];
    const gradientDiv = albumDiv.getElementsByClassName('gradient')[0];
    
    albumDiv.style.height = '300px';
    albumDiv.style.backgroundPosition = `bottom ${positionOpen}px right 0px`
    albumDiv.style.backgroundImage = `url("${imageURL}")`;
    gradientDiv.style.background = `transparent`;
}

const onClickAlbum = (albumClass, albumSongsClass, color1, imageURL, positionOpen, positionClosed) => {
    const albumDiv = document.getElementsByClassName(albumClass)[0];
    const gradientDiv = albumDiv.getElementsByClassName('gradient')[0];
    const albumSongsDiv = document.getElementsByClassName(albumSongsClass)[0];
    let isOpen = false;
    
    albumDiv.addEventListener('click', e => {
        if (isOpen) {
            albumDiv.style.height = '300px';
            albumDiv.style.backgroundPosition = `bottom ${positionOpen}px right 0px`
            albumDiv.style.backgroundImage = `url("${imageURL}")`;
            gradientDiv.style.background = `transparent`;
        } else {
            albumDiv.style.height = '500px';
            albumDiv.style.backgroundImage = `url("${imageURL}")`;
            albumDiv.style.backgroundPosition = `bottom ${positionClosed}px right 0px`
            gradientDiv.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0) 40%, ${color1} 100%)`;
        }
        
        isOpen = !isOpen;
        
        albumSongsDiv.classList.toggle('js-hidden');
    });
}


const values = [
    ["Fearless", "FearlessSongs", "#f5c98a", "./Fearless.webp", -615, -450],
    ["SpeakNow", "SpeakNowSongs", "#caadcf", "./SpeakNow.webp", -405, -325],
    ["Red", "RedSongs", "#7e3b4a", "./Red.webp", -405, -325],
    ["Nineteen", "NineteenSongs", "#bae7fa", "./1989.webp", -480, -325],
    ["Reputation", "ReputationSongs", "#7e787a", "./Reputation.jpg", -716, -607],
    ["Lover", "LoverSongs", "#f7b2cf", "./Lover.jpg", -424, -337],
    ["Folklore", "FolkloreSongs", "#d1ccc6", "./Folklore.webp", -35, -31],
    ["Evermore", "EvermoreSongs", "#c9af96", "./Evermore.jpg", -547, -424],
    ["Midnights", "MidnightsSongs", "#2f334e", "./Midnights.jpg", -833, -560],
]

for (const value of values) {
    const [album, songs, color, image, posOpen, posClosed] = value;
    
    setDefaultValues(album, image, posOpen);
    onClickAlbum(album, songs, color, image, posOpen, posClosed);
}
