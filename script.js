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

    // Salva os novos valores no LocalStorage
    saveStats();
}

// Função para atualizar os pontos de tensão
function updateTensionPoints(change) {
    const tensionElement = document.getElementById('tension-current');
    let tensionValue = parseInt(tensionElement.textContent, 10);
    tensionValue += change;

    // Garante que o valor não seja negativo
    if (tensionValue < 0) {
        tensionValue = 0;
    }

    // Garante que o valor não ultrapasse o máximo
    const maxTension = parseInt(document.getElementById('tension-max').textContent, 10);
    if (tensionValue > maxTension) {
        tensionValue = maxTension;
    }

    tensionElement.textContent = tensionValue;

    // Salva os novos valores no LocalStorage
    saveStats();
}

// Salva os valores das barras de vida, sanidade, pontos de shot e tensão no LocalStorage
function saveStats() {
    const vida = document.getElementById('hp-current').textContent;
    const sanidade = document.getElementById('sanity-current').textContent;
    const shot = document.getElementById('shot-current').textContent; // Pega os pontos de shot
    const tension = document.getElementById('tension-current').textContent; // Pega os pontos de tensão

    localStorage.setItem('vida', vida);
    localStorage.setItem('sanidade', sanidade);
    localStorage.setItem('shot', shot); // Salva os pontos de shot
    localStorage.setItem('tension', tension); // Salva os pontos de tensão
}

// Recupera os valores das barras de vida, sanidade, pontos de shot e pontos de tensão do LocalStorage
function loadStats() {
    const savedVida = localStorage.getItem('vida');
    const savedSanidade = localStorage.getItem('sanidade');
    const savedShot = localStorage.getItem('shot'); // Recupera os pontos de shot
    const savedTension = localStorage.getItem('tension'); // Recupera os pontos de tensão

    if (savedVida) {
        document.getElementById('hp-current').textContent = savedVida;
    }
    if (savedSanidade) {
        document.getElementById('sanity-current').textContent = savedSanidade;
    }
    if (savedShot) {
        document.getElementById('shot-current').textContent = savedShot; // Atualiza os pontos de shot
    }
    if (savedTension) {
        document.getElementById('tension-current').textContent = savedTension; // Atualiza os pontos de tensão
    }
}

// Chama a função para carregar os valores ao iniciar a página
window.onload = loadStats;