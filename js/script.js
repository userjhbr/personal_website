document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('3d-env-button').addEventListener('click', function () {
        unlockAchievement('visited_3d_env');
    });

    document.getElementById('timeline-button').addEventListener('click', function () {
        unlockAchievement('viewed_timeline');
    });
});

function unlockAchievement(id) {
    if (!localStorage.getItem(id)) {
        localStorage.setItem(id, 'true');
        alert('Achievement unlocked: ' + id);
    }
}
