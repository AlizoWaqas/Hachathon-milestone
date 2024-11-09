const toggleBottun = document.getElementById('toggle-skills');
const skills = document.getElementById('skills');
toggleBottun.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
