(function(){
    'use strict';

    const addRedFlagBtn = document.querySelector('[class*="checkered"]');
    const addInterventionBtn = document.querySelector('[class*="exclamation-triangle"]');
    const closeRFBtn = document.querySelector('#closeRFBtn');
    const closeIVBtn = document.querySelector('#closeIVBtn');
    const addRedFlag = document.querySelector('#addRedFlag');
    const addIntervention = document.querySelector('#addIntervention');
    addRedFlagBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        addRedFlag.style.display = 'block';
    });
    closeRFBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        addRedFlag.style.display = 'none';
    });
    closeIVBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        addIntervention.style.display = 'none';
    });
    addInterventionBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        addIntervention.style.display = 'block';
    });
})();