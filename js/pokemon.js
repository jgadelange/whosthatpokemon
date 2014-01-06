/*
 * pokemon.js
 *
 * All in-game functionality is in this file
 */

// Initialise some variables
var currentPokemonNumber;
var currentPokemonNames = {}; // a dictionary which stores English, French and German names of the current Pokemon
var currentPokemonImageUrl;
var selectedLanguage = 'en';

// For generation selection
var minPokemonNumber = 1;
var maxPokemonNumber = 649;

// For countdown timer after a correct answer
var nextTimer = 3;
var intervalId;

// For timing how long an answer takes
var startTime;

// Used for difficulty setting
var currentDifficulty = 0;
var newDifficulty = 0;
var imageDirectory;

// Set if a Pokemon image has been preloaded
var pokemonPreloaded = false;

// This will store the current image loaded
var loadedImage;

// Counts the number of times in a row an image has failed to load
var consecutiveLoadFails = 0;

// Will be used to hold the ID of the image loading timeout so it can be disabled if necessary
var imageTimeoutId;

// Will be used as an array to store upcoming Pokemon
var upcomingPokemon;
var upcomingPokemonArrayPos;


/*
 * Initiates the page on first load
 */

$(document).ready(function() {
    generateNewNumbers(true);
    newPokemon();
});

/*
 * Sets the difficulty level, which is essentially choosing where we get the images from.
 */

function setDifficulty(selectedDifficulty) {

    if (selectedDifficulty == 0) {
        imageDirectory = 'images/artwork/';
    } else if (selectedDifficulty == 1) {
        imageDirectory = 'images/sprites/front/';
    } else if (selectedDifficulty == 2) {
        imageDirectory = 'images/sprites/back/';
    } else {
        imageDirectory = null;
    }

    if (newDifficulty == -1) {
        document.getElementById('diff' + selectedDifficulty).className += " current";
        currentDifficulty = selectedDifficulty;
    } else {
        document.getElementById('diff' + newDifficulty).className = document.getElementById('diff' + newDifficulty).className.replace('selected','');

        if(selectedDifficulty != currentDifficulty)
            document.getElementById('diff' + selectedDifficulty).className += " selected";

        document.getElementById('infoBoxMain').setAttribute('style', 'display: inherit');
    }

    newDifficulty = selectedDifficulty;

}

/*
 * Remove the silhouette of the Pokemon, and show the user that they are right, if they
 * managed to guess themselves.
 */
 
function revealPokemon() {

    clearTimeout(imageTimeoutId);

    silhouette(currentPokemonImageUrl, 'shadowImage', false);

    // Give the Pokemon name
    document.getElementById('pokemonGuess').value = currentPokemonNames[selectedLanguage];

    // Update to any new settings that have been selected
    generateNewNumbers();
    
    // Preload the next Pokemon
    preloadPokemon();
}



/*
 * Creates a new random array of Pokemon numbers if the selected generation has changed.
 * The force parameter will ignore the check for a generation change.
 */

function generateNewNumbers(force) {

    if(force || (currentGen !== newGen)) {
        var i=0, j;
        
        upcomingPokemon = new Array();
        upcomingPokemonArrayPos = 0;
        
        for(j=minPokemonNumber; j<=maxPokemonNumber; j++) {
            upcomingPokemon[i] = j;
            i++;
        }
        
        shuffle(upcomingPokemon);
    }

}

/*
 * Generates a new Pokemon and loads the image, but doesn't display it. Returns true if
 * it preloaded, false otherwise.
 */

function preloadPokemon() {
    currentPokemonNumber = getRandomPokemonNumber();
    
    if(currentPokemonNumber > 0) {
        currentPokemonNames = getPokemonNames(currentPokemonNumber);
        currentPokemonImageUrl = getPokemonImageUrl(currentPokemonNumber);
    } else {
        return false;
    }
    
    if(currentPokemonImageUrl !== null) {
        img = new Image();
        img.src = currentPokemonImageUrl;
        pokemonPreloaded = true;
        return true;
    } else {
        return false;
    }
}



/*
 * Display a new random Pokemon
 */
 
function newPokemon() {

    clearCanvas('shadowImage');
    
    /*
     * Generate a new Pokemon if one hasn't already been preloaded, or if the settings have
     * changed since the Pokemon was revealed.
     */
    if(!pokemonPreloaded) {
        currentPokemonNumber = getRandomPokemonNumber();
    }
    
    nextTimer = 3;
    clearInterval(intervalId);

    pokemonPreloaded = false;

    currentPokemonNames = getPokemonNames(currentPokemonNumber);
    currentPokemonImageUrl = getPokemonImageUrl(currentPokemonNumber);

    // Now load the next Pokemon
    if(currentPokemonImageUrl !== null) {
        silhouette(currentPokemonImageUrl, 'shadowImage', true);
        imageTimeoutId = setTimeout(checkPokemonLoaded, 10000);
    }

    /*
     * This will get set again on loading of the silhouette, but we need to specify it here
     * so we have a timer for non-image guessing
     */
    startTime = new Date().getTime();
    
}


/*
 * Checks to see if the Pokemon image has been loaded. If not, a link is offered to try to 
 * load another.
 */
 
function checkPokemonLoaded() {
 
    if(!loadedImage.complete || loadedImage.naturalWidth == 0 || loadedImage.naturalHeight == 0) {
    
        if(++consecutiveLoadFails < 3) {
            document.getElementById('nextCountdown').innerHTML = 'This is taking a while to load. Do you want to try loading another one? It won\'t affect your streak. <a href="#" onclick="newPokemon();">Load a new Pok&eacute;mon?</a>';
        } else {
            document.getElementById('nextCountdown').innerHTML = 'Is your connection slow or down? Maybe try a harder difficulty, they load faster. <a href="#" onclick="newPokemon();">Load a new Pok&eacute;mon?</a>';
        }
        
        document.getElementById('nextCountdown').setAttribute('style', 'display: block');
    
    } else {
    
        consecutiveLoadFails = 0;
    
    }
 
 }

/*
 * Wipes the canvas clean. This is useful if a Pokemon is slow to load, as we don't
 * want the previous Pokemon still there while the other is loading -- that's confusing to the user.
 */

function clearCanvas(canvasId) {
    var canvas = document.getElementById(canvasId),
        ctx = canvas.getContext('2d');
        
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


/*
 * Function: silhouette
 * Description: Creates a silhouette from a given image URL and draws it to a given canvas. For
 *              this to work properly, the image must have transparency of some sort.
 * Parameters:  imageURL: URL of the image to load
 *              canvasId: The ID of the canvas to which the new image will be drawn
 *              doSilhouette: Set this to true to actually do the silhouette. If false, the image
 *                            will be drawn directly to the canvas without silhouetting it. This
 *                            is useful if you want to do some sort of click-to-reveal functionality.
 * Returns: None
 */
 
function silhouette(imageUrl, canvasId, doSilhouette) {

    if(imageUrl === null)
        return false;

    var canvas = document.getElementById(canvasId),
        ctx = canvas.getContext('2d');
        
    loadedImage = new Image();
        
    loadedImage.src = imageUrl;

    loadedImage.onload = function() {   
        // On higher difficulties, the images are smaller. This makes them bigger.
        if(loadedImage.width <= 100) {
            canvas.width = loadedImage.width * 4;
            canvas.height = loadedImage.height * 4;
        } else {
            canvas.width = loadedImage.width;
            canvas.height = loadedImage.height;
        }
        
        ctx.drawImage(loadedImage, 0, 0, canvas.width, canvas.height);
  
        if(doSilhouette) {
            var rawImage = ctx.getImageData(0,0,canvas.width,canvas.height);
            
            for (var i=0; i<rawImage.data.length;i+=4) {
                if(rawImage.data[i+3] >= 100) {
                    rawImage.data[i] = 30;
                    rawImage.data[i+1] = 30;
                    rawImage.data[i+2] = 30;
                    rawImage.data[i+3] = 255;
                } else {
                    rawImage.data[i+3] = 0;
                }
            }
            
            ctx.putImageData(rawImage,0,0);
        }
        centrePokemon();
        startTime = new Date().getTime();
    }
}

/*
 * Give the answer if the user has given up.
 */
 
function giveAnswer() {
    revealPokemon();
}



/*
 * Centres the canvas with the Pokemon in it
 */

function centrePokemon() {
    c = document.getElementById('shadowImage');
    c.setAttribute('style', 'margin-top:' + Math.floor((350 - c.height) / 2) + 'px');
}

/*
 * Sort of a relic from when the number was randomly generated on demand. Still useful to
 * have to return a number from the randomised array.
 */
 
function getRandomPokemonNumber() {
    var number;
    if(upcomingPokemonArrayPos > (maxPokemonNumber-minPokemonNumber+1)) {
        number = -1;
    } else {
        number = upcomingPokemon[upcomingPokemonArrayPos++];
    }
    return number;
}

/*
 * Get the names of a Pokemon, given the number. The array of names starts at 0, so we need to
 * subtract 1 from the given number to get the right name.
 */
 
function getPokemonNames(number) {
    var names = { 'en' : englishPokemon[number-1], 'fr' : frenchPokemon[number-1], 'de' : germanPokemon[number-1] };
    return names;
}

function getLocalPokemonName(number) {
    return getPokemonNames(number)[selectedLanguage];
}


/*
 * Get the URL of the Pokemon image. The format is 123.png. On failure, it returns false.
 */
 
function getPokemonImageUrl(number) {
    if(imageDirectory !== null)
        return imageDirectory + number + '.png';
    else
        return null;
}

/*
 * Fisher-Yates array shuffle from http://bost.ocks.org/mike/shuffle/
 */
 
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

/*
 * Cookie stuff from http://www.quirksmode.org/js/cookies.html
 */
 
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
