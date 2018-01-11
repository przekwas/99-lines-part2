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

        //creates a div for each iteration with class name friend
        let friendDiv = document.createElement("div");
        friendDiv.className = "friend";

        //creates a h3 for friends name and add it to the div
        let friendHeading = document.createElement("h3");
        friendDiv.appendChild(friendHeading);

        //adds the div w/ class friend to body
        document.body.appendChild(friendDiv);
        //adds friends name as h3 in div w/ class friend
        friendHeading.appendChild(document.createTextNode(whichFriend[j].toUpperCase() + ": "));

        //inner loop to generate each line
        for (let i = 100; i > 0; i--) {
            let linesLeft = i;

            //catch for final line of the song to correct the grammar
            if (i === 1) {
                let paragraph = document.createElement("p");
                let paragraphText = document.createTextNode(linesLeft + " line of code in the file, " + linesLeft + " line of code; " + whichFriend[j] + " strikes one out, clears it all out, no more lines of code in the file");
                paragraph.appendChild(paragraphText);
                friendDiv.appendChild(paragraph);

            //catch for penultimate line of the song to correct the grammar
            } else if (i === 2) {
                let paragraph = document.createElement("p");

                let oneLessLine = linesLeft - 1;
                let paragraphText = document.createTextNode(linesLeft + " lines of code in the file, " + linesLeft + " lines of code; " + whichFriend[j] + " strikes one out, clears it all out, " + oneLessLine + " line of code in the file");
                paragraph.appendChild(paragraphText);
                friendDiv.appendChild(paragraph);

            //standard line for the song 
            } else {
                let paragraph = document.createElement("p");
                let oneLessLine = linesLeft - 1;
                let paragraphText = document.createTextNode(linesLeft + " lines of code in the file, " + linesLeft + " lines of code; " + whichFriend[j] + " strikes one out, clears it all out, " + oneLessLine + " lines of code in the file");
                paragraph.appendChild(paragraphText);
                friendDiv.appendChild(paragraph);
            }
        }
    }
}

// //inner for loop to generate 100 lines of lyrics per friend
// function songInner(currentFriend) {
//     for (let i = 100; i > 0; i--) {
//         let linesLeft = i;
//         let paragraph = document.createElement("p");
//         //catch for final line of the song to correct the grammar
//         if (i === 1) {
//             let paragraphText = document.createTextNode(linesLeft + " line of code in the file, " + linesLeft + " line of code; " + currentFriend + " strikes one out, clears it all out, no more lines of code in the file");
//             paragraph.appendChild(paragraphText);
//             document.body.appendChild(paragraph);
//             //catch for penultimate line of the song to correct the grammar
//         } else if (i === 2) {
//             let oneLessLine = linesLeft - 1;
//             let paragraphText = document.createTextNode(linesLeft + " lines of code in the file, " + linesLeft + " lines of code; " + currentFriend + " strikes one out, clears it all out, " + oneLessLine + " line of code in the file");
//             paragraph.appendChild(paragraphText);
//             document.body.appendChild(paragraph);
//             //standard line for the song 
//         } else {
//             let oneLessLine = linesLeft - 1;
//             let paragraphText = document.createTextNode(linesLeft + " lines of code in the file, " + linesLeft + " lines of code; " + currentFriend + " strikes one out, clears it all out, " + oneLessLine + " lines of code in the file");
//             paragraph.appendChild(paragraphText);
//             document.body.appendChild(paragraph);
//         }
//     }
// }