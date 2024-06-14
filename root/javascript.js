function closeAllDropdowns() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = "none";
    }
}

function toggleDropdown(dropdownId) {
    var dropdownContent = document.getElementById(dropdownId);
    if (dropdownContent.style.display === "block") {
        closeAllDropdowns();
        dropdownContent.style.display = "none";
    } else {
        closeAllDropdowns();
        dropdownContent.style.display = "block";
    }
}

window.onclick = function(event) {
    if (!event.target.matches === '.dropdown-button') {
        closeAllDropdowns();
    }
}
