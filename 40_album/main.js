function make_Album(artist, title, track) {
    var album = { artist: artist, title: title };
    if (track) {
        album["track"] = track;
    }
    return album;
}
console.log(make_Album("one artist", "the first album"));
console.log(make_Album("two artist", "the second album"));
console.log(make_Album("third artist", "the third album", 15));
