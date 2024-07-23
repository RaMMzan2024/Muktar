document.addEventListener('DOMContentLoaded', function() {
    const managersBtn = document.getElementById('managers-btn');
    const regionsBtn = document.getElementById('regions-btn');
    const managersPage = document.getElementById('managers');
    const regionsPage = document.getElementById('regions');
    const buttons = document.querySelectorAll('.sidebar-left button');
    const pages = document.querySelectorAll('.page-left');

    function resetActiveStates() {
        buttons.forEach(button => button.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));
    }

    function setActivePage(pageId, buttonId) {
        resetActiveStates();
        document.getElementById(buttonId).classList.add('active');
        document.getElementById(pageId).classList.add('active');
        localStorage.setItem('activePage', pageId);
        localStorage.setItem('activeButton', buttonId);
    }

    managersBtn.addEventListener('click', function() {
        setActivePage('managers', 'managers-btn');
    });

    regionsBtn.addEventListener('click', function() {
        setActivePage('regions', 'regions-btn');
    });

    
    const activePage = localStorage.getItem('activePage') || 'managers';
    const activeButton = localStorage.getItem('activeButton') || 'managers-btn';
    setActivePage(activePage, activeButton);
});

document.getElementById("addManagerBtn").onclick = function() {
    document.getElementById("modal").style.display = "flex";
};

document.getElementById("addManagerBtn-2").onclick = function() {
    document.getElementById("modal-2").style.display = "flex";
};

document.querySelectorAll(".close-btn").forEach(function(btn) {
    btn.onclick = function() {
        document.querySelectorAll(".modal").forEach(function(modal) {
            modal.style.display = "none";
        });
    };
});

window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};





document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('loggedIn')) {
        window.location.href = 'registration.html';
    }
});
















































