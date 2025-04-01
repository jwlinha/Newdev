document.addEventListener('DOMContentLoaded', () => {
    // Tema claro/escuro
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Aplicar tema salvo
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Alternador de tema
    themeToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Previne interferência com outros eventos
        
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        themeToggle.animate([
            { transform: 'translateY(0) rotate(0deg) scale(1)' },
            { transform: 'translateY(-5px) rotate(180deg) scale(1.1)' },
            { transform: 'translateY(0) rotate(360deg) scale(1)' }
        ], {
            duration: 500,
            easing: 'ease-in-out'
        });
    });

    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }

    function floatAnimation() {
        themeToggle.animate([
            { transform: 'translateY(0)' },
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(0)' }
        ], {
            duration: 3000,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    }

    floatAnimation();
});
    // ANIMAÇÃO DE CONFETE
    const btnCandidatura = document.querySelector('.btn-candidatura');
    
    if (btnCandidatura) {
        btnCandidatura.addEventListener('click', (e) => {
            e.preventDefault();
            
            for(let i = 0; i < 50; i++) {
                createConfetti();
            }
            
            btnCandidatura.textContent = 'Enviado! ✓';
            btnCandidatura.disabled = true;
            
            setTimeout(() => {
                alert('Candidatura enviada com sucesso!');
            }, 1500);
        });
    }

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.innerHTML = ['🎉', '✨', '🌟'][Math.floor(Math.random() * 3)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        document.body.appendChild(confetti);
        
        // Remover após animação
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }

    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });