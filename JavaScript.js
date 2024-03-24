




function showHome() {

    hideAllPages();
    document.getElementById('home').style.display = 'block';
}

function showAbout() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'block';
}
function showHome() {
    hideAllPages();
    document.getElementById('homePage').style.display = 'block';
}

function showAbout() {
    hideAllPages();
    document.getElementById('aboutPage').style.display = 'block';
}

function showService() {
    hideAllPages();
    document.getElementById('servicePage').style.display = 'block';
}

function showDesign() {
    hideAllPages();
    document.getElementById('designPage').style.display = 'block';
}

function showContract() {
    hideAllPages();
    document.getElementById('contractPage').style.display = 'block';
}

function hideAllPages() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('servicePage').style.display = 'none';
    document.getElementById('designPage').style.display = 'none';
    document.getElementById('contractPage').style.display = 'none';
}