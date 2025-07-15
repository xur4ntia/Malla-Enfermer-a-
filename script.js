document.addEventListener('DOMContentLoaded', function() {
    console.log("El DOM está completamente cargado");
    
    const courses = document.querySelectorAll('.course');
    const resetBtn = document.getElementById('reset-btn');
    const completeAllBtn = document.getElementById('complete-all-btn');
    
    if (!courses.length) console.error("No se encontraron elementos con clase 'course'");
    if (!resetBtn) console.error("No se encontró el botón reset-btn");
    if (!completeAllBtn) console.error("No se encontró el botón complete-all-btn");

    // Función para manejar el clic en los cursos
    function handleCourseClick() {
        console.log("Curso clickeado:", this.getAttribute('data-course'));
        
        if (this.classList.contains('locked')) {
            const prerequisites = this.getAttribute('data-prerequisites');
            console.log("Prerrequisitos:", prerequisites);
            alert(Este curso tiene los siguientes prerrequisitos: ${prerequisites});
            return;
        }
        
        if (this.classList.contains('pending')) {
            this.classList.remove('pending');
            this.classList.add('completed');
            console.log("Curso marcado como completado");
        } else if (this.classList.contains('completed')) {
            this.classList.remove('completed');
            this.classList.add('pending');
            console.log("Curso marcado como pendiente");
        }
        
        updateLockedCourses();
        saveProgress();
    }

    // Asignar event listeners a los cursos
    courses.forEach(course => {
        course.addEventListener('click', handleCourseClick);
    });
    
    // Botón para reiniciar todo
    resetBtn.addEventListener('click', function() {
        console.log("Reiniciando todo el progreso");
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
        console.log("Marcando todos los cursos como aprobados");
        courses.forEach(course => {
            course.classList.remove('pending', 'locked');
            course.classList.add('completed');
        });
        saveProgress();
    });
    
    // Actualizar cursos bloqueados
    function updateLockedCourses() {
        console.log("Actualizando cursos bloqueados");
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
                        console.log(Curso ${course.getAttribute('data-course')} desbloqueado);
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
        console.log("Progreso guardado:", completedCourses);
    }
    
    // Cargar progreso desde localStorage
    function loadProgress() {
        try {
            const savedData = localStorage.getItem('completedCourses');
            const completedCourses = savedData ? JSON.parse(savedData) : [];
            console.log("Cargando progreso:", completedCourses);
            
            courses.forEach(course => {
                const courseName = course.getAttribute('data-course');
                if (completedCourses.includes(courseName)) {
                    course.classList.remove('pending', 'locked');
                    course.classList.add('completed');
                }
            });
            updateLockedCourses();
        } catch (e) {
            console.error("Error al cargar el progreso:", e);
        }
    }
    
    // Inicializar
    loadProgress();
});
