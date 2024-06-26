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

window.onclick = function (event) {
    if (!event.target.matches === '.dropdown-button') {
        closeAllDropdowns();
    }
}

function validateForm() {
    var pass1 = document.getElementById('passwort').value;
    var pass2 = document.getElementById('passwort2').value;
    if (pass1 !== pass2) {
        alert("Passwords do not match!");
        return false;
    }
    return true;
}