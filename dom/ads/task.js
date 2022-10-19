const rotators = document.querySelectorAll('.rotator');
rotators.forEach(rotator => {
    const rotatorCases = Array.from(rotator.querySelectorAll('.rotator__case'));
    rotatorCases.forEach(rotatorCase => {
        rotatorCase.style.color = rotatorCase.dataset.color;
    });
    function textCase () {
        let rotatorActiveCase = rotator.querySelector('.rotator__case_active');
        let i = rotatorCases.indexOf(rotatorActiveCase);

        if (i == rotatorCases.length - 1) {
            rotatorCases[i].classList.remove('rotator__case_active');
            i = 0;
            rotatorCases[i].classList.add('rotator__case_active');
        } else {
            rotatorCases[i].classList.remove('rotator__case_active');
            rotatorCases[i + 1].classList.add('rotator__case_active');
        }
    }
    setInterval(textCase, 1000);
});