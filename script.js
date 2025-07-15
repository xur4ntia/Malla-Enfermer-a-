// Datos de la malla curricular
const mallaData = [
    {
        semestre: "Semestre I",
        cursos: [
            { nombre: "Disciplina y profesión de enfermería I", prerrequisitos: [] },
            { nombre: "Química general y orgánica", prerrequisitos: [] },
            { nombre: "Biología y genética", prerrequisitos: [] },
            { nombre: "Matemática", prerrequisitos: [] },
            { nombre: "Física", prerrequisitos: [] },
            { nombre: "Salud y Sociedad I", prerrequisitos: [] },
            { nombre: "Fundamentos de ética y bioética", prerrequisitos: [] },
            { nombre: "CFG I", prerrequisitos: [] }
        ]
    },
    {
        semestre: "Semestre II",
        cursos: [
            { nombre: "Disciplina y profesión de enfermería II", prerrequisitos: ["Disciplina y profesión de enfermería I"] },
            { nombre: "Bioquímica", prerrequisitos: ["Química general y orgánica", "Biología y genética"] },
            { nombre: "Anatomía", prerrequisitos: ["Biología y genética"] },
            { nombre: "Histoembriología", prerrequisitos: ["Biología y genética"] },
            { nombre: "Fisiología general", prerrequisitos: ["Biología y genética", "Física"] },
            { nombre: "Salud y Sociedad II", prerrequisitos: [] },
            { nombre: "CGF II", prerrequisitos: [] },
            { nombre: "Inglés I", prerrequisitos: [] }
        ]
    },
    // Continúa con los demás semestres...
    // (Puedes copiar el resto de la estructura de tu malla original aquí)
];

// Estado de la aplicación
const state = {
    cursosAprobados: new Set()
};

// Elementos del DOM
const dom = {
    mallaContainer: null,
    resetBtn: null,
    completeAllBtn: null
};

// Inicialización
function init() {
    // Configurar elementos del DOM
    dom.mallaContainer = document.getElementById('malla-container');
    dom.resetBtn = document.getElementById('reset-btn');
    dom.completeAllBtn = document.getElementById('complete-all-btn');

    // Cargar estado guardado
    loadState();

    // Generar la malla
    renderMalla();

    // Configurar event listeners
    setupEventListeners();
}

// Renderizar toda la malla
function renderMalla() {
    dom.mallaContainer.innerHTML = '';

    mallaData.forEach(semestre => {
        const semestreElement = document.createElement('div');
        semestreElement.className = 'semester';

        const titleElement = document.createElement('div');
        titleElement.className = 'semester-title';
        titleElement.textContent = semestre.semestre;
        semestreElement.appendChild(titleElement);

        semestre.cursos.forEach(curso => {
            const cursoElement = document.createElement('div');
            cursoElement.className = getCourseClassName(curso);
            cursoElement.textContent = curso.nombre;
            cursoElement.dataset.course = curso.nombre;

            // Agregar información de prerrequisitos si existe
            if (curso.prerrequisitos.length > 0) {
                const prereqInfo = document.createElement('div');
                prereqInfo.className = 'prerequisite-info';
                prereqInfo.textContent = Prerrequisitos: ${curso.prerrequisitos.join(', ')};
                cursoElement.appendChild(prereqInfo);
                cursoElement.dataset.prerequisites = curso.prerrequisitos.join(',');
            }

            semestreElement.appendChild(cursoElement);
        });

        dom.mallaContainer.appendChild(semestreElement);
    });
}

// Obtener clase CSS para un curso
function getCourseClassName(curso) {
    if (state.cursosAprobados.has(curso.nombre)) {
        return 'course completed';
    }

    if (curso.prerrequisitos.length > 0) {
        const todosPrerrequisitosCumplidos = curso.prerrequisitos.every(prereq => 
            state.cursosAprobados.has(prereq)
        );

        return todosPrerrequisitosCumplidos ? 'course pending' : 'course locked';
    }

    return 'course pending';
}

// Configurar event listeners
function setupEventListeners() {
    // Delegación de eventos para los cursos
    dom.mallaContainer.addEventListener('click', function(e) {
        const courseElement = e.target.closest('.course');
        if (!courseElement) return;

        if (courseElement.classList.contains('locked')) {
            const prerequisites = courseElement.dataset.prerequisites;
            alert(Este curso tiene los siguientes prerrequisitos: ${prerequisites});
            return;
        }

        const courseName = courseElement.dataset.course;
        toggleCourseStatus(courseName);
    });

    // Botón de reinicio
    dom.resetBtn.addEventListener('click', function() {
        state.cursosAprobados.clear();
        saveState();
        renderMalla();
    });

    // Botón de completar todo
    dom.completeAllBtn.addEventListener('click', function() {
        mallaData.forEach(semestre => {
            semestre.cursos.forEach(curso => {
                state.cursosAprobados.add(curso.nombre);
            });
        });
        saveState();
        renderMalla();
    });
}

// Cambiar estado de un curso
function toggleCourseStatus(courseName) {
    if (state.cursosAprobados.has(courseName)) {
        state.cursosAprobados.delete(courseName);
    } else {
        state.cursosAprobados.add(courseName);
    }
    saveState();
    renderMalla();
}

// Guardar estado en localStorage
function saveState() {
    localStorage.setItem('mallaState', JSON.stringify({
        cursosAprobados: Array.from(state.cursosAprobados)
    }));
}

// Cargar estado desde localStorage
function loadState() {
    const savedState = localStorage.getItem('mallaState');
    if (savedState) {
        const parsedState = JSON.parse(savedState);
        state.cursosAprobados = new Set(parsedState.cursosAprobados);
    }
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
