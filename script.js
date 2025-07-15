document.addEventListener('DOMContentLoaded', function() {
    const courses = document.querySelectorAll('.course');
    const resetBtn = document.getElementById('reset-btn');
    const completeAllBtn = document.getElementById('complete-all-btn');
    
    // Cargar estado guardado
    loadProgress();
    
    // Manejar clic en cursos
    courses.forEach(course => {
        course.addEventListener('click', function() {
            if (this.classList.contains('locked')) {
                const prerequisites = this.getAttribute('data-prerequisites');
                alert(Este curso tiene los siguientes prerrequisitos: ${prerequisites});
                return;
            }
            
            if (this.classList.contains('pending')) {
                this.classList.remove('pending');
                this.classList.add('completed');
            } else if (this.classList.contains('completed')) {
                this.classList.remove('completed');
                this.classList.add('pending');
            }
            
            updateLockedCourses();
            saveProgress();
        });
    });
    
    // Botón para reiniciar todo
    resetBtn.addEventListener('click', function() {
        courses.forEach(course => {
            if (!course.classList.contains('locked')) {
                course.classList.remove('completed');
                course.classList.add('pending');
            }
        });
        updateLockedCourses();
        saveProgress();
    });
    
    // Botón para marcar todo como aprobado
    completeAllBtn.addEventListener('click', function() {
        courses.forEach(course => {
            course.classList.remove('pending', 'locked');
            course.classList.add('completed');
        });
        saveProgress();
    });
    
    // Actualizar cursos bloqueados
    function updateLockedCourses() {
        courses.forEach(course => {
            if (course.classList.contains('locked')) {
                const prerequisites = course.getAttribute('data-prerequisites');
                if (prerequisites) {
                    const prereqList = prerequisites.split(',');
                    const allPrereqsMet = prereqList.every(prereq => {
                        return Array.from(document.querySelectorAll('.course')).some(c => {
                            return c.getAttribute('data-course') === prereq && c.classList.contains('completed');
                        });
                    });
                    
                    if (allPrereqsMet) {
                        course.classList.remove('locked');
                        course.classList.add('pending');
                    }
                }
            }
        });
    }
    
    // Guardar progreso en localStorage
    function saveProgress() {
        const completedCourses = [];
        courses.forEach(course => {
            if (course.classList.contains('completed')) {
                completedCourses.push(course.getAttribute('data-course'));
            }
        });
        localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
    }
    
    // Cargar progreso desde localStorage
    function loadProgress() {
        const completedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];
        courses.forEach(course => {
            const courseName = course.getAttribute('data-course');
            if (completedCourses.includes(courseName)) {
                course.classList.remove('pending', 'locked');
                course.classList.add('completed');
            }
        });
        updateLockedCourses();
    }
});
