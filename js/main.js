document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       Theme Switcher Interaction Logic for Split Screen
       ========================================================================== */
    const switcher = document.getElementById('themeSwitcher');
    const autoSide = document.getElementById('autoSide');
    const bauSide = document.getElementById('bauSide');

    // On hover of the switcher, optionally preview the state
    if (switcher) {
        switcher.addEventListener('click', (e) => {
            // Prevent the switcher click from triggering location jumps on the split screen,
            // as the split screen itself serves as the navigation.
            // But we'll toggle the visual state for fun/demo purposes.
            e.stopPropagation();
            switcher.classList.toggle('is-bau');
            
            // On a real sub-page (like /auto/index.html), this click would instead do:
            // if (switcher.classList.contains('is-bau')) { window.location.href = '/bau/index.html'; }
            // else { window.location.href = '/auto/index.html'; }
            
            // For the split screen, we can virtually trigger hover states based on the toggle!
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
             // Let CSS handle the hover resets naturally, but reset inline styles if set by click
             if (autoSide) {
                 autoSide.style.flex = '';
                 autoSide.style.opacity = '';
             }
             if (bauSide) {
                 bauSide.style.flex = '';
                 bauSide.style.opacity = '';
             }
             // Optionally sync the switcher back to neutral if we had one
        });
    }
});
