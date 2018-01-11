//making the document listen for when the dom content is loaded
document.addEventListener("DOMContentLoaded", function () {
    //creates a button and puts it on the page
    let button = document.createElement("button");
    let btnText = document.createTextNode("Sing!");
    button.appendChild(btnText);
    document.body.appendChild(button);

    //creates an event for clicking the button
    button.addEventListener("click", function () {
        songOuter(friends);
    })

})

//global array of 5 friends .. two of which are my cats
let friends = ["Audrey", "Yzerman", "Apollo", "Chris", "Josh"];

//outer for loop to generate a song for each friend
function songOuter(whichFriend) {
    for (let j = 0; j < whichFriend.length; j++) {
        console.log(whichFriend[j].toUpperCase() + ":");
        songInner(whichFriend[j]);
    }
}

//inner for loop to generate 100 lines of lyrics per friend
function songInner(currentFriend) {
    for (let i = 100; i > 0; i--) {
        let linesLeft = i;
        let paragraph = document.createElement("p");
        //catch for final line of the song to correct the grammar
        if (i === 1) {
            let paragraphText = document.createTextNode(linesLeft + " line of code in the file, " + linesLeft + " line of code; " + currentFriend + " strikes one out, clears it all out, no more lines of code in the file");
            paragraph.appendChild(paragraphText);
            document.body.appendChild(paragraph);
        //catch for penultimate line of the song to correct the grammar
        } else if (i === 2) {
            let oneLessLine = linesLeft - 1;
            let paragraphText = document.createTextNode(linesLeft + " lines of code in the file, " + linesLeft + " lines of code; " + currentFriend + " strikes one out, clears it all out, " + oneLessLine + " line of code in the file");
            paragraph.appendChild(paragraphText);
            document.body.appendChild(paragraph);
       //standard line for the song 
        } else {
            let oneLessLine = linesLeft - 1;
            let paragraphText = document.createTextNode(linesLeft + " lines of code in the file, " + linesLeft + " lines of code; " + currentFriend + " strikes one out, clears it all out, " + oneLessLine + " lines of code in the file");
            paragraph.appendChild(paragraphText);
            document.body.appendChild(paragraph);
        }
    }
}