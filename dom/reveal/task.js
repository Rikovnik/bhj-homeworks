const elemReveals = document.querySelectorAll('.reveal');

    elemReveals.forEach((reveal) => {
        setInterval(() => {
            
            if (isVisible(reveal)) {
                reveal.classList.add('reveal_active');
            } else {
                reveal.classList.remove('reveal_active');
            }
       }, 500); 
    })

function isVisible(item) {
    const { top, bottom } = item.getBoundingClientRect();

    if (bottom < 0 || top > window.innerHeight) {
        return false;
    }
    return true;
}