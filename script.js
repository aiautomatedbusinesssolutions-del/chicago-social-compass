// Vibe Dictionary - Full Grid: Every Neighborhood has every Vibe category
const vibeDictionary = {
    'Wicker Park': {
        'Artists': [
            { name: "The Wormhole Coffee", address: "1462 N Milwaukee Ave, Chicago, IL 60622" },
            { name: "Quimby's Bookstore", address: "1854 W North Ave, Chicago, IL 60622" },
            { name: "Myopic Books", address: "1564 N Milwaukee Ave, Chicago, IL 60622" }
        ],
        'Tech': [
            { name: "Ground Up Coffee & Tea", address: "1000 W Washington Blvd, Chicago, IL 60607" },
            { name: "Filter Coffee", address: "1373 N Milwaukee Ave, Chicago, IL 60622" },
            { name: "Ipsento Coffee", address: "2035 N Western Ave, Chicago, IL 60647" }
        ],
        'Sports': [
            { name: "Anthem", address: "1725 W Division St, Chicago, IL 60622" },
            { name: "The Boundary", address: "1932 W Division St, Chicago, IL 60622" },
            { name: "Flat Top Grill", address: "1579 N Milwaukee Ave, Chicago, IL 60622" }
        ],
        'Foodies': [
            { name: "Etta", address: "1840 W North Ave, Chicago, IL 60622" },
            { name: "Big Star", address: "1531 N Damen Ave, Chicago, IL 60622" },
            { name: "Mindy's Hot Chocolate", address: "1747 N Damen Ave, Chicago, IL 60647" }
        ],
        'Music': [
            { name: "Subterranean", address: "2011 W North Ave, Chicago, IL 60647" },
            { name: "The Empty Bottle", address: "1035 N Western Ave, Chicago, IL 60622" },
            { name: "Double Door", address: "1551 N Damen Ave, Chicago, IL 60622" }
        ]
    },
    'West Loop': {
        'Artists': [
            { name: "Kavi Gupta Gallery", address: "835 W Washington Blvd, Chicago, IL 60607" },
            { name: "Rhona Hoffman Gallery", address: "1711 W Chicago Ave, Chicago, IL 60622" },
            { name: "Monique Meloche Gallery", address: "451 N Paulina St, Chicago, IL 60622" }
        ],
        'Tech': [
            { name: "Soho House Chicago", address: "113-125 N Green St, Chicago, IL 60607" },
            { name: "Sawada Coffee", address: "112 N Green St, Chicago, IL 60607" },
            { name: "Café Integral", address: "200 N Green St, Chicago, IL 60607" }
        ],
        'Sports': [
            { name: "Haymarket Pub & Brewery", address: "737 W Randolph St, Chicago, IL 60661" },
            { name: "WestEnd", address: "1326 W Madison St, Chicago, IL 60607" },
            { name: "The Ogden", address: "1301 W Ogden Ave, Chicago, IL 60607" }
        ],
        'Foodies': [
            { name: "Au Cheval", address: "800 W Randolph St, Chicago, IL 60607" },
            { name: "Girl & The Goat", address: "809 W Randolph St, Chicago, IL 60607" },
            { name: "Monteverde", address: "1020 W Madison St, Chicago, IL 60607" }
        ],
        'Music': [
            { name: "City Winery Chicago", address: "1200 W Randolph St, Chicago, IL 60607" },
            { name: "The Allis", address: "113-125 N Green St, Chicago, IL 60607" },
            { name: "Cindy's Rooftop", address: "12 S Michigan Ave, Chicago, IL 60603" }
        ]
    },
    'Wrigleyville': {
        'Artists': [
            { name: "Gman Tavern", address: "3740 N Clark St, Chicago, IL 60613" },
            { name: "The Metro", address: "3730 N Clark St, Chicago, IL 60613" },
            { name: "Schubas Tavern", address: "3159 N Southport Ave, Chicago, IL 60657" }
        ],
        'Tech': [
            { name: "Capital One Café", address: "3601 N Clark St, Chicago, IL 60613" },
            { name: "Starbucks Reserve", address: "3443 N Clark St, Chicago, IL 60657" },
            { name: "Colectivo Coffee", address: "3300 N Clark St, Chicago, IL 60657" }
        ],
        'Sports': [
            { name: "Murphy's Bleachers", address: "3655 N Sheffield Ave, Chicago, IL 60613" },
            { name: "Cubby Bear", address: "1059 W Addison St, Chicago, IL 60613" },
            { name: "Yard House", address: "3519 N Clark St, Chicago, IL 60657" }
        ],
        'Foodies': [
            { name: "Swift & Sons", address: "1000 W Fulton Market, Chicago, IL 60607" },
            { name: "Old Crow Smokehouse", address: "3506 N Clark St, Chicago, IL 60657" },
            { name: "Sluggers Sports Bar", address: "3540 N Clark St, Chicago, IL 60657" }
        ],
        'Music': [
            { name: "Metro", address: "3730 N Clark St, Chicago, IL 60613" },
            { name: "Schubas Tavern", address: "3159 N Southport Ave, Chicago, IL 60657" },
            { name: "Lincoln Hall", address: "2424 N Lincoln Ave, Chicago, IL 60614" }
        ]
    },
    'Logan Square': {
        'Artists': [
            { name: "Comfort Station", address: "2579 N Milwaukee Ave, Chicago, IL 60647" },
            { name: "The Whistler", address: "2421 N Milwaukee Ave, Chicago, IL 60647" },
            { name: "Logan Square Arts", address: "2549 N Milwaukee Ave, Chicago, IL 60647" }
        ],
        'Tech': [
            { name: "Same Day Café", address: "2657 N Milwaukee Ave, Chicago, IL 60647" },
            { name: "New Wave Coffee", address: "2557 N Milwaukee Ave, Chicago, IL 60647" },
            { name: "Gaslight Coffee Roasters", address: "2385 N Milwaukee Ave, Chicago, IL 60647" }
        ],
        'Sports': [
            { name: "The Logan Theatre", address: "2646 N Milwaukee Ave, Chicago, IL 60647" },
            { name: "Revolution Brewing", address: "2323 N Milwaukee Ave, Chicago, IL 60647" },
            { name: "The Owl", address: "2521 N Milwaukee Ave, Chicago, IL 60647" }
        ],
        'Foodies': [
            { name: "Lula Cafe", address: "2537 N Kedzie Blvd, Chicago, IL 60647" },
            { name: "Longman & Eagle", address: "2657 N Kedzie Ave, Chicago, IL 60647" },
            { name: "Giant", address: "3209 W Armitage Ave, Chicago, IL 60647" }
        ],
        'Music': [
            { name: "Rosa's Lounge", address: "3420 W Armitage Ave, Chicago, IL 60647" },
            { name: "The Whistler", address: "2421 N Milwaukee Ave, Chicago, IL 60647" },
            { name: "Sleeping Village", address: "3734 W Belmont Ave, Chicago, IL 60618" }
        ]
    },
    'The Loop': {
        'Artists': [
            { name: "Chicago Cultural Center", address: "78 E Washington St, Chicago, IL 60602" },
            { name: "Art Institute of Chicago", address: "111 S Michigan Ave, Chicago, IL 60603" },
            { name: "Museum of Contemporary Art", address: "220 E Chicago Ave, Chicago, IL 60611" }
        ],
        'Tech': [
            { name: "Hero Coffee Bar", address: "22 E Jackson Blvd, Chicago, IL 60604" },
            { name: "Intelligentsia Coffee", address: "53 E Randolph St, Chicago, IL 60601" },
            { name: "Starbucks Reserve Roastery", address: "646 N Michigan Ave, Chicago, IL 60611" }
        ],
        'Sports': [
            { name: "Billy Goat Tavern", address: "430 N Michigan Ave, Chicago, IL 60611" },
            { name: "The Gage", address: "24 S Michigan Ave, Chicago, IL 60603" },
            { name: "Miller's Pub", address: "134 S Wabash Ave, Chicago, IL 60603" }
        ],
        'Foodies': [
            { name: "The Purple Pig", address: "500 N Michigan Ave, Chicago, IL 60611" },
            { name: "Lou Malnati's Pizzeria", address: "439 N Wells St, Chicago, IL 60654" },
            { name: "Wildberry Pancakes & Cafe", address: "130 E Randolph St, Chicago, IL 60601" }
        ],
        'Music': [
            { name: "Chicago Theatre", address: "175 N State St, Chicago, IL 60601" },
            { name: "Symphony Center", address: "220 S Michigan Ave, Chicago, IL 60604" },
            { name: "Jazz Showcase", address: "806 S Plymouth Ct, Chicago, IL 60605" }
        ]
    }
};

// Vibe name mapping (from button labels to dictionary keys)
const vibeMapping = {
    'Sports': 'Sports',
    'Tech': 'Tech',
    'Artists': 'Artists',
    'Foodies': 'Foodies',
    'Music': 'Music'
};

// State
let selectedVibe = null;
let selectedNeighborhood = null;

// Initialize pill buttons
function initializePills() {
    const vibeButtons = document.querySelectorAll('#vibeContainer .pill-button');
    const neighborhoodButtons = document.querySelectorAll('#neighborhoodContainer .pill-button');
    const findButton = document.getElementById('findButton');

    vibeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active from all vibe buttons
            vibeButtons.forEach(btn => btn.classList.remove('active'));
            // Add active to clicked button
            button.classList.add('active');
            selectedVibe = button.getAttribute('data-vibe');
            updateFindButton();
        });
    });

    neighborhoodButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active from all neighborhood buttons
            neighborhoodButtons.forEach(btn => btn.classList.remove('active'));
            // Add active to clicked button
            button.classList.add('active');
            selectedNeighborhood = button.getAttribute('data-neighborhood');
            updateFindButton();
        });
    });

    findButton.addEventListener('click', showCrowd);
}

// Update find button state
function updateFindButton() {
    const findButton = document.getElementById('findButton');
    if (selectedVibe && selectedNeighborhood) {
        findButton.disabled = false;
    } else {
        findButton.disabled = true;
    }
}

// Find spots based on selections - exact grid match
function findSpots(neighborhood, vibe) {
    const neighborhoodData = vibeDictionary[neighborhood];
    if (!neighborhoodData) {
        return [];
    }

    const vibeKey = vibeMapping[vibe];
    if (!vibeKey) {
        return [];
    }

    const spots = neighborhoodData[vibeKey];
    
    // Return all spots (or top 3 if more than 3)
    if (!spots || spots.length === 0) {
        return [];
    }
    
    return spots.slice(0, 3);
}

// Display results in mission briefing style
function displayResults(spots) {
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsList = document.getElementById('resultsList');
    
    if (spots.length === 0) {
        resultsList.innerHTML = '<p class="mission-empty">Expanding to nearby habitats soon...</p>';
        resultsContainer.style.display = 'block';
        return;
    }
    
    resultsList.innerHTML = spots.map(spot => `
        <div class="mission-briefing">
            <div class="mission-header">
                <span class="mission-label">TARGET</span>
            </div>
            <div class="mission-content">
                <div class="mission-name"><strong>${spot.name}</strong></div>
                <div class="mission-address"><strong>${spot.address}</strong></div>
            </div>
        </div>
    `).join('');
    
    resultsContainer.style.display = 'block';
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Show error message
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

// Main function to show the crowd
function showCrowd() {
    const resultsContainer = document.getElementById('resultsContainer');
    const errorMessage = document.getElementById('errorMessage');
    
    // Hide previous results and errors
    resultsContainer.style.display = 'none';
    errorMessage.style.display = 'none';
    
    if (!selectedVibe || !selectedNeighborhood) {
        showError('Please select both a vibe and a neighborhood.');
        return;
    }
    
    // Find spots
    const spots = findSpots(selectedNeighborhood, selectedVibe);
    
    // Display results
    displayResults(spots);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializePills();
});
