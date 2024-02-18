const habitInput = document.getElementById('habit-input');
const habitList = document.querySelector('.habit-list');
const addHabitForm = document.getElementById('add-habit-form');
const darkModeToggle = document.getElementById('dark-mode-toggle');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const darkModeText = document.getElementById('dark-mode-text');

    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.textContent = '☀️';
        darkModeText.textContent = 'Toggle Light Mode';
    } else {
        darkModeIcon.textContent = '🌙';
        darkModeText.textContent = 'Toggle Dark Mode';
    }
}

darkModeToggle.addEventListener('click', toggleDarkMode);

function createHabitItem(habitText) {
    const habitItem = document.createElement('div');
    habitItem.classList.add('habit-item');
    habitItem.textContent = habitText;

    // Toggle completion status on click
    habitItem.addEventListener('click', function() {
        habitItem.classList.toggle('completed');
    });

    habitList.appendChild(habitItem);
}

addHabitForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const habitText = habitInput.value.trim();
    if (habitText !== '') {
        createHabitItem(habitText);
        habitInput.value = '';
    }
});
