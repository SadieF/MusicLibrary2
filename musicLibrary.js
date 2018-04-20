function Library(name, creator) {
  this.name = name
  this.creator = creator
  this.playlists = []
}

function Playlist(name) {
  this.name = name
  this.tracks = []
}
Playlist.prototype = Object.create(Library.prototype);

function Track(title, rating, length) {
  this.title = title
  this.rating = rating
  this.length = length
}
Track.prototype = Object.create(Playlist.prototype);

Library.prototype.overallRating = function(tracks) {
  let totalTrackRating = 0
  tracks.forEach(function(track) {
    totalTrackRating += track.rating
  })
  let averageTrackLength = totalTrackRating / tracks.length;
  return averageTrackLength;
}

Library.prototype.totalDuration = function(tracks) {
  let trackLength = 0
  tracks.forEach(function(track) {
    trackLength += track.length;
  })
  return trackLength;
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
  return playlist.name;
}

Library.prototype.addTracks = function(track) {
  this.tracks.push(track);
  return track.title;
}

const epicLibrary = new Library("Epic Library", "Sadie")

const indieTracks = new Playlist("Indie Anthems");

const molotovGirls = new Track("Molotov Girls", 5, 198);
const myNumber = new Track("My Number", 3, 241);
const newSlang = new Track("New Slang", 5, 231);
const theSuburbs = new Track("The Suburbs", 5, 156);

//Add Playlist to Library
epicLibrary.addPlaylist(indieTracks)

//Add Tracks to Playlist
indieTracks.addTracks(molotovGirls);
indieTracks.addTracks(myNumber);
indieTracks.addTracks(newSlang);
indieTracks.addTracks(theSuburbs);

//Average rating and total duration
epicLibrary.overallRating(indieTracks.tracks)
epicLibrary.totalDuration(indieTracks.tracks)

console.log(`${epicLibrary.creator} has created a library called: ${epicLibrary.name}`);

console.log(`New playlist called: ${indieTracks.name}`);

console.log(`Average Rating is ${(epicLibrary.overallRating(indieTracks.tracks))} out of 5 stars.`);
console.log(`Total Duration ${(epicLibrary.totalDuration(indieTracks.tracks))} seconds.`);