// script.js
function toggleAbility(ability) {
    const description = ability.querySelector('.ability-description');
    if (description.style.display === 'block') {
        description.style.display = 'none';
    } else {
        description.style.display = 'block';
    }
}

function updateStat(statId, change) {
    const statElement = document.getElementById(statId);
    let statValue = parseInt(statElement.textContent, 10);
    statValue += change;

    // Garante que o valor não seja negativo
    if (statValue < 0) {
        statValue = 0;
    }

    statElement.textContent = statValue;
}

// Função para atualizar a estatística
function updateStat(statId, change) {
    const statElement = document.getElementById(statId);
    let statValue = parseInt(statElement.textContent, 10);
    statValue += change;

    // Garante que o valor não seja negativo
    if (statValue < 0) {
        statValue = 0;
    }

    statElement.textContent = statValue;

    // Salva os novos valores no LocalStorage
    saveStats();
}

// Salva os valores das barras de vida e sanidade no LocalStorage
function saveStats() {
    const vida = document.getElementById('hp-current').textContent;
    const sanidade = document.getElementById('sanity-current').textContent;
    const shot = document.getElementById('sanity-current').textContent; // Pega os pontos de shot

    localStorage.setItem('vida', vida);
    localStorage.setItem('sanidade', sanidade);
    localStorage.setItem('shot', shot); // Salva os pontos de shot
}

// Recupera os valores das barras de vida, sanidade e pontos de shot do LocalStorage
function loadStats() {
    const savedVida = localStorage.getItem('vida');
    const savedSanidade = localStorage.getItem('sanidade');
    const savedShot = localStorage.getItem('shot'); // Recupera os pontos de shot

    if (savedVida) {
        document.getElementById('hp-current').textContent = savedVida;
    }
    if (savedSanidade) {
        document.getElementById('sanity-current').textContent = savedSanidade;
    }
    if (savedShot) {
        document.getElementById('shot-current').textContent = savedShot; // Atualiza os pontos de shot
    }
}
// Chama a função para carregar os valores ao iniciar a página
window.onload = loadStats;