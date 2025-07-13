document.addEventListener('DOMContentLoaded', function() {
    const markCompleteBtn = document.querySelector('.btn-primary');
    
    markCompleteBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const activeLesson = document.querySelector('.lesson-item.active');
        
        if (activeLesson) {
            activeLesson.classList.remove('active');
            activeLesson.classList.add('completed');
            activeLesson.querySelector('i').className = 'fas fa-check-circle';
            
            const progressFill = document.querySelector('.progress-fill');
            const currentWidth = parseInt(progressFill.style.width) || 65;
            progressFill.style.width = (currentWidth + 5) + '%';
            
            const progressText = document.querySelector('.progress-info span');
            const newProgress = Math.min(100, currentWidth + 5);
            progressText.textContent = newProgress + '% Complete';
            
            const moduleTitle = activeLesson.closest('.module').querySelector('.module-title span:last-child');
            if (moduleTitle) {
                const [completed, total] = moduleTitle.textContent.split('/').map(Number);
                moduleTitle.textContent = (completed + 1) + '/' + total;
            }
        }
    });
    
    const submitQuizBtn = document.querySelector('.submit-quiz');
    submitQuizBtn.addEventListener('click', function() {
        alert('Quiz submitted successfully!');
    });
});