//As an event organizer, I want to manage the guest list for a party.

let manageGuestList: string[] = ["Ana", "Mihai", "Ioana", "Abel", "George", "Alin"]

// Adding a new guest at the end
let newGuest1 = manageGuestList.push("Alex")

// Adding a new guest at the beginning
let newGuest2 = manageGuestList.unshift("Elena")

// Remove the last guest
let lastRemoved = manageGuestList.pop()

// Remove the first guest
let firstRemoved = manageGuestList.shift()

// Adding new guest at index 1 without removing any guests
let newGuest3 = manageGuestList.splice(1, 0, "Cristian")

// Get the list of first two guests
let firstTwoGuests = manageGuestList.slice(0, 2)

console.log("The new length of the list: ", newGuest1) // Expected: 4
console.log("The new length of the list: ", newGuest2) // Expected: 5
console.log("Removed last guest: ", lastRemoved) // Expected: Alex
console.log("Removed first guest: ", firstRemoved) // Expected: Elena
console.log("The removed guests: ", newGuest3) // Expected: [] . splice returns the removed element, if any
console.log("The first two guests: ", firstTwoGuests) // Expected: ['Ana', 'Cristian']
console.log("Final list: ", manageGuestList) // Expected: ['Ana', 'Cristian', 'Mihai', 'Ioana']