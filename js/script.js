
// Basic script to alert when an achievement is unlocked
function unlockAchievement(id) {
    if (!localStorage.getItem(id)) {
        localStorage.setItem(id, true);
        alert('Achievement unlocked: ' + id);
    }
}

// Example usage for gamification.html
document.getElementById('3d-env-button').addEventListener('click', () => unlockAchievement('visited_3d_env'));
document.getElementById('timeline-button').addEventListener('click', () => unlockAchievement('viewed_timeline'));
