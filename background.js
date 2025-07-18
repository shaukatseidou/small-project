//FR/ Cette page est codée par Ely-Boss art
//EN/ This page is coded by Ely-Boss art

document.getElementById('lune').addEventListener('click', function () {
    document.getElementById('html').style.backgroundColor = '#cfcccc';
    document.getElementById('lune').style.display = 'none';
    document.getElementById('moon').style.display = 'block';


});
document.getElementById('moon').addEventListener('click', function () {
    document.getElementById('html').style.backgroundColor = '#0e0d0d';
    document.getElementById('moon').style.display = 'none';
    document.getElementById('lune').style.display = 'block';
});
