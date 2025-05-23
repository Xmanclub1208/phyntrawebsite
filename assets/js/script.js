// Configuration settings for the server
const config = {
    companyName: "GamerVault Hosting",
    discordServerID: "1160224295348359348"
};

// Function to update the company name in the HTML
function updateCompanyName() {
    const companyNameElement = document.getElementById('companyNameDisplay');
    if (companyNameElement) {
        companyNameElement.textContent = config.companyName;
    } else {
        console.error('Element with ID "companyNameDisplay" not found.');
    }
}

// Call the function to update the company name when the page loads
window.onload = updateCompanyName;


// Out Of Stock Button
function togglePlans() {
    var plans = document.querySelectorAll('.out-of-stock-plans');
    var button = document.querySelector('.show-btn');
    plans.forEach(function(plan) {
        if (plan.classList.contains('show')) {
            plan.classList.remove('show');
            setTimeout(function() {
                plan.style.display = 'none';
            }, 500); // Match this to the duration of the transition
            button.innerHTML = '<i class="fas fa-eye"></i> Show Out of Stock Plans';
        } else {
            plan.style.display = 'block';
            setTimeout(function() {
                plan.classList.add('show');
            }, 10); // Small delay to ensure display:block is applied before the transition
            button.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Out of Stock Plans';
        }
    });
}

/*Mobile navbar (open, close)*/
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navbarLinks.classList.toggle("active");
})


document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.specs').forEach(spec => spec.classList.remove('active'));
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});


function showDetails(plan) {
    alert(`Showing details for the ${plan} plan.`);
}

document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".minecraft-tab-button");
    const specs = document.querySelectorAll(".minecraft-specs");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tab = button.getAttribute("data-tab");

            // Remove active class from all buttons and specs
            tabButtons.forEach(btn => btn.classList.remove("active"));
            specs.forEach(spec => spec.classList.remove("active"));

            // Add active class to the clicked button and the corresponding specs
            button.classList.add("active");
            document.getElementById(tab).classList.add("active");
        });
    });

    // Set the default tab to be active
    document.querySelector(".minecraft-tab-button[data-tab='minecraft-budget']").click();
});


// Tab functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.discordbot-tab-button');
    const tabs = document.querySelectorAll('.discordbot-specs');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-tab');

            // Hide all tabs
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            // Remove active class from all tab buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Show the clicked tab
            document.getElementById(target).classList.add('active');
            button.classList.add('active');
        });
    });

    // Set default tab
    if (tabButtons.length > 0) {
        tabButtons[0].click(); // Click the first tab to activate it by default
    }
});
