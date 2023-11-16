// Define arrays of names, prices, and occupations
const names = ["Dr. Vintage", "Prof. Andy", "Dr. Jonny", "Dr. Joey", "Prof. Robert", "Prof. Kenneth", "Prof. Grant", "Dr. Nicholas", "Prof. Ronny", "Dr. Dillion", "Prof. Ronald", "Dr. McDonald", "Prof. Vitamin"];
// const prices = [25, 30, 35, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];
const occupations = ["gardener", "programmer", "teacher", "driver", "clerk", "lawyer", "doctor", "cheif", "engineer", "coach", "builder", "tech", "admin", "accountant"];

// Maximum number of freelancers allowed
const maxFreelancers = 20;

// Array to store freelancers
let freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];

// Set interval to add a new freelancer every few seconds
const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

// Function to calculate the average starting price
function calculateAverageStartingPrice() {
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    return totalPrices / freelancers.length || 0;
}

// Function to update the average starting price on the web page
function updateAverageStartingPrice() {
    const averageStartingPrice = calculateAverageStartingPrice();
    const averageStartingPriceElement = document.getElementById("averageStartingPrice");
    averageStartingPriceElement.textContent = averageStartingPrice.toFixed(2);
}

// Function to render freelancers on the web page
function render() {
    const lancerList = document.querySelector("#lancers");

    // Clear the existing list
    lancerList.innerHTML = "";

    // Create list elements for each freelancer and append to the list
    freelancers.forEach(freelancer => {
        const listItem = document.createElement("li");
        listItem.textContent = `${freelancer.name} ${freelancer.occupation} $${freelancer.price}`;
        lancerList.appendChild(listItem);
    });

    // Update the average starting price
    updateAverageStartingPrice();
}

// Function to add a new random freelancer
function addFreelancer() {
    if (freelancers.length >= maxFreelancers) {
        clearInterval(addFreelancerIntervalId);
        return;
    }

    const randomName = names[Math.floor(Math.random() * names.length)];
    // const randomPrice = prices[Math.floor(Math.random() * prices.length)];
    const randomPrice = Math.floor(Math.random() * (100 - 25 + 1)) + 25;
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];

    const newFreelancer = {
        name: randomName,
        price: randomPrice,
        occupation: randomOccupation
    };

    freelancers.push(newFreelancer);
    render();
}

// Initial rendering
render();
