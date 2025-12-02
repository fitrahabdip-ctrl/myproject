// Tab Navigation Functionality
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");
    
    // Hide all tab content
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  
    }

    // Remove the 'active' class from all tab links
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an 'active' class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";  
    evt.currentTarget.className += " active";
}

// Timeline Animations
const timelineItems = document.querySelectorAll('.timeline-item');

function showTimelineItems() {
    const triggerBottom = window.innerHeight / 5 * 4;

    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < triggerBottom) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', showTimelineItems);
showTimelineItems(); // Initial call to show items when the page loads
