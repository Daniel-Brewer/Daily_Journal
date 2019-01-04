const journalEntries = [
    {
        concept: "Array methods",
        date: "07/24/2018",
        entry: "We learned about array methods, but only forEach made sense",
        mood: "Ok"
    }
]


function getJournalEntry (newEntry) {

let date = document.querySelector('input[name="journalDate"]').value;
let concept = document.querySelector('input[name="conceptsCovered"]').value;
let entry = document.querySelector('textarea[name="journalEntry"]').value;
let mood = document.querySelector('.mood').value;

journalEntries += newEntry.date

}

// let resource = {
//     date: resourceDate,
//     link: resourceLink,
//     type: resourceType
//   }

//   resourcesArray.push(resource);
//   createAndAppendResources();



document.getElementById("recordJournalEntry").addEventListener("click", getJournalEntry);




