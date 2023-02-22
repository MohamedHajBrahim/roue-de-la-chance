
(function () {
    const roue = document.querySelector('.roue');
    const btnJouer = document.querySelector('.jouer');
    
    let deg = 0;

    btnJouer.addEventListener('click', () => {
      
        btnJouer.style.pointerEvents = 'none';
        
        deg = Math.floor(5000 + Math.random() * 5000);
        roue.style.transition = 'all 10s ease-out';
        roue.style.transform = `rotate(${deg}deg)`;})
    
    roue.addEventListener('transitionend', () => {
    btnJouer.style.pointerEvents = 'auto';
    roue.style.transition = 'none';
    const actualDeg = deg % 360;
    roue.style.transform = `rotate(${actualDeg}deg)`;
    })
})();
