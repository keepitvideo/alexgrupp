document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       Theme Switcher Interaction Logic for Split Screen
       ========================================================================== */
    const switcher = document.getElementById('themeSwitcher');
    const autoSide = document.getElementById('autoSide');
    const bauSide = document.getElementById('bauSide');

    // Make the hover interaction robust with explicit JS handlers
    if (autoSide && bauSide) {
        autoSide.addEventListener('mouseenter', () => {
            autoSide.style.flex = '1.5';
            bauSide.style.flex = '1';
            bauSide.style.opacity = '0.5';
            autoSide.style.opacity = '1';
        });

        bauSide.addEventListener('mouseenter', () => {
            bauSide.style.flex = '1.5';
            autoSide.style.flex = '1';
            autoSide.style.opacity = '0.5';
            bauSide.style.opacity = '1';
        });
    }

    // On hover of the switcher, optionally preview the state
    if (switcher) {
        switcher.addEventListener('click', (e) => {
            e.stopPropagation();
            switcher.classList.toggle('is-bau');

            if (switcher.classList.contains('is-bau')) {
                bauSide.style.flex = '1.5';
                autoSide.style.flex = '1';
                autoSide.style.opacity = '0.5';
                bauSide.style.opacity = '1';
            } else {
                autoSide.style.flex = '1.5';
                bauSide.style.flex = '1';
                bauSide.style.opacity = '0.5';
                autoSide.style.opacity = '1';
            }
        });
    }

    /* Reset flex/opacity when mouse leaves the split container area */
    const splitContainer = document.querySelector('.split-container');
    if (splitContainer) {
        splitContainer.addEventListener('mouseleave', () => {
            if (autoSide) {
                autoSide.style.flex = '1';
                autoSide.style.opacity = '1';
            }
            if (bauSide) {
                bauSide.style.flex = '1';
                bauSide.style.opacity = '1';
            }
        });
    }
});
