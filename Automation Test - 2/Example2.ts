//Movie ticket booking system where seats are stored in an array.
 
    let seats: string[] = ["S1", "S2", "S3", "S4"];
    let selectedSeatIndex = 2; // User selects seat at index 5
   
    // Checking if the seat exists: If the seat number is out of range, we display a message instead of causing an error. If the seat exists, we display the seat number.
if (selectedSeatIndex >= 0 && selectedSeatIndex < seats.length){
        console.log("Your seat is:", seats[selectedSeatIndex])
    } else {
        console.log("Selected seat does not exist.")
    }
 
