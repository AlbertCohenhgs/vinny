// Função para rolar um dado de 20 lados
function rollD20() {
    return Math.floor(Math.random() * 6) + 1;
}

// Função para lidar com o clique nas perícias
function handleSkillClick(event) {
    if (event.target.tagName === 'LI') {
        const skillName = event.target.textContent;
        const rollResult = rollD20();
        alert(`Você rolou um dado para ${skillName} e obteve: ${rollResult}`);
    }
}

// Adiciona o evento de clique às perícias
document.addEventListener('DOMContentLoaded', function() {
    const skillsList = document.querySelector('.skills ul');
    skillsList.addEventListener('click', handleSkillClick);
});