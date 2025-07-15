<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Malla Curricular - Enfermería</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1 {
            text-align: center;
            color: #2c3e50;
        }
        .semester-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin-bottom: 30px;
        }
        .semester {
            border: 2px solid #3498db;
            border-radius: 10px;
            padding: 15px;
            background-color: white;
            width: 300px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .semester-title {
            text-align: center;
            font-weight: bold;
            margin-bottom: 15px;
            color: #2c3e50;
            font-size: 1.2em;
        }
        .course {
            padding: 8px;
            margin: 5px 0;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s;
            position: relative;
        }
        .course.pending {
            background-color: #a1c4fd; /* Celeste */
        }
        .course.completed {
            background-color: #4a89dc; /* Azul */
            color: white;
            text-decoration: line-through;
        }
        .course.locked {
            background-color: #e0e0e0; /* Gris */
            cursor: not-allowed;
            color: #888;
        }
        .prerequisite-info {
            font-size: 0.8em;
            color: #666;
            margin-top: 5px;
            display: none;
        }
        .course:hover .prerequisite-info {
            display: block;
        }
        .controls {
            text-align: center;
            margin: 20px 0;
        }
        button {
            padding: 10px 15px;
            margin: 0 10px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>
    <h1>Malla Curricular - Enfermería</h1>
    
    <div class="controls">
        <button id="reset-btn">Reiniciar Todo</button>
        <button id="complete-all-btn">Marcar Todo como Aprobado</button>
    </div>

    <div class="semester-container">
        <!-- Semestre I -->
        <div class="semester">
            <div class="semester-title">Semestre I</div>
            <div class="course pending" data-course="Disciplina y profesión de enfermería I">Disciplina y profesión de enfermería I</div>
            <div class="course pending" data-course="Química general y orgánica">Química general y orgánica</div>
            <div class="course pending" data-course="Biología y genética">Biología y genética</div>
            <div class="course pending" data-course="Matemática">Matemática</div>
            <div class="course pending" data-course="Física">Física</div>
            <div class="course pending" data-course="Salud y Sociedad I">Salud y Sociedad I</div>
            <div class="course pending" data-course="Fundamentos de ética y bioética">Fundamentos de ética y bioética</div>
            <div class="course pending" data-course="CFG I">CFG I</div>
        </div>

        <!-- Semestre II -->
        <div class="semester">
            <div class="semester-title">Semestre II</div>
            <div class="course locked" data-course="Disciplina y profesión de enfermería II" data-prerequisites="Disciplina y profesión de enfermería I">Disciplina y profesión de enfermería II</div>
            <div class="course locked" data-course="Bioquímica" data-prerequisites="Química general y orgánica,Biología y genética">Bioquímica</div>
            <div class="course locked" data-course="Anatomía" data-prerequisites="Biología y genética">Anatomía</div>
            <div class="course locked" data-course="Histoembriología" data-prerequisites="Biología y genética">Histoembriología</div>
            <div class="course locked" data-course="Fisiología general" data-prerequisites="Biología y genética,Física">Fisiología general</div>
            <div class="course pending" data-course="Salud y Sociedad II">Salud y Sociedad II</div>
            <div class="course pending" data-course="CGF II">CGF II</div>
            <div class="course pending" data-course="Inglés I">Inglés I</div>
        </div>

        <!-- Semestre III -->
        <div class="semester">
            <div class="semester-title">Semestre III</div>
            <div class="course locked" data-course="Disciplina y profesión de enfermería III" data-prerequisites="Disciplina y profesión de enfermería II">Disciplina y profesión de enfermería III</div>
            <div class="course locked" data-course="Farmacología general" data-prerequisites="Bioquímica">Farmacología general</div>
            <div class="course locked" data-course="Respuestas inmunes del ser humano" data-prerequisites="Biología y genética,Bioquímica">Respuestas inmunes del ser humano</div>
            <div class="course locked" data-course="Fisiología de sistemas" data-prerequisites="Fisiología general">Fisiología de sistemas</div>
            <div class="course locked" data-course="Nutrición" data-prerequisites="Bioquímica">Nutrición</div>
            <div class="course pending" data-course="Psicología general y social">Psicología general y social</div>
            <div class="course pending" data-course="Educación para la salud">Educación para la salud</div>
            <div class="course pending" data-course="Inglés II">Inglés II</div>
        </div>

        <!-- Semestre IV -->
        <div class="semester">
            <div class="semester-title">Semestre IV</div>
            <div class="course locked" data-course="Enfermería en salud mental" data-prerequisites="Psicología general y social,Disciplina y profesión de enfermería III">Enfermería en salud mental</div>
            <div class="course locked" data-course="Farmacología sistémica para enfermería" data-prerequisites="Fisiología de sistemas,Farmacología general">Farmacología sistémica para enfermería</div>
            <div class="course locked" data-course="Agentes vivos en los procesos de salud-enfermedad" data-prerequisites="Anatomía,Histoembriología,Fisiología general">Agentes vivos en los procesos de salud-enfermedad</div>
            <div class="course locked" data-course="Fisiopatología" data-prerequisites="Fisiología de sistemas">Fisiopatología</div>
            <div class="course pending" data-course="Salud pública I">Salud pública I</div>
            <div class="course locked" data-course="Psicología evolutiva" data-prerequisites="Psicología general y social">Psicología evolutiva</div>
            <div class="course locked" data-course="Educación para la salud y multiculturalidad" data-prerequisites="Educación para la salud,Salud y sociedad I">Educación para la salud y multiculturalidad</div>
            <div class="course pending" data-course="Inglés III">Inglés III</div>
        </div>

        <!-- Semestre V -->
        <div class="semester">
            <div class="semester-title">Semestre V</div>
            <div class="course locked" data-course="Enfermería de la infancia" data-prerequisites="Disciplina y profesión de enfermería III">Enfermería de la infancia</div>
            <div class="course locked" data-course="Enfermería en la adolescencia" data-prerequisites="Disciplina y profesión de enfermería III">Enfermería en la adolescencia</div>
            <div class="course locked" data-course="Salud pública II" data-prerequisites="Salud pública I">Salud pública II</div>
            <div class="course locked" data-course="Investigación en salud y metodologías cuantitativas" data-prerequisites="Física,Matemática">Investigación en salud y metodologías cuantitativas</div>
            <div class="course pending" data-course="Gestión y administración en salud I">Gestión y administración en salud I</div>
            <div class="course pending" data-course="Módulo integrado interdisciplinario multiprofesional I">Módulo integrado interdisciplinario multiprofesional I</div>
        </div>

        <!-- Semestre VI -->
        <div class="semester">
            <div class="semester-title">Semestre VI</div>
            <div class="course locked" data-course="Enfermería en personas adultas" data-prerequisites="Disciplina y profesión de enfermería III">Enfermería en personas adultas</div>
            <div class="course locked" data-course="Enfermería del envejecimiento I" data-prerequisites="Disciplina y profesión de enfermería III">Enfermería del envejecimiento I</div>
            <div class="course pending" data-course="Salud y género">Salud y género</div>
            <div class="course pending" data-course="Metodología de la investigación cualitativa">Metodología de la investigación cualitativa</div>
            <div class="course locked" data-course="Gestión y administración en salud II" data-prerequisites="Gestión y administración en salud I">Gestión y administración en salud II</div>
            <div class="course locked" data-course="Educación para la salud en equipos de trabajo" data-prerequisites="Educación para la salud">Educación para la salud en equipos de trabajo</div>
            <div class="course pending" data-course="CFG III">CFG III</div>
        </div>

        <!-- Semestre VII -->
        <div class="semester">
            <div class="semester-title">Semestre VII</div>
            <div class="course pending" data-course="Enfermería en salud ocupacional">Enfermería en salud ocupacional</div>
            <div class="course locked" data-course="Enfermería del envejecimiento II" data-prerequisites="Disciplina y profesión de enfermería III">Enfermería del envejecimiento II</div>
            <div class="course locked" data-course="Proyecto de investigación I" data-prerequisites="Investigación en salud y metodologías cuantitativas,Metodología de la investigación cualitativa">Proyecto de investigación I</div>
            <div class="course locked" data-course="Gestión y administración en salud III" data-prerequisites="Gestión y administración en salud II">Gestión y administración en salud III</div>
            <div class="course pending" data-course="CFG IV">CFG IV</div>
        </div>

        <!-- Semestre VIII -->
        <div class="semester">
            <div class="semester-title">Semestre VIII</div>
            <div class="course locked" data-course="Enfermería en urgencias y desastres" data-prerequisites="Enfermería en personas adultas,Enfermería en la infancia,Enfermería en la adolescencia">Enfermería en urgencias y desastres</div>
            <div class="course locked" data-course="Enfermería en unidades de tratamiento intermedio" data-prerequisites="Enfermería del envejecimiento I">Enfermería en unidades de tratamiento intermedio</div>
            <div class="course locked" data-course="Proyecto de investigación II" data-prerequisites="Proyecto de investigación I">Proyecto de investigación II</div>
            <div class="course locked" data-course="Módulo integrado interdisciplinario multiprofesional II" data-prerequisites="Módulo integrado interdisciplinario multiprofesional I">Módulo integrado interdisciplinario multiprofesional II</div>
        </div>

        <!-- Semestre IX -->
        <div class="semester">
            <div class="semester-title">Semestre IX</div>
            <div class="course locked" data-course="Práctica profesional integrada I" data-prerequisites="Enfermería en urgencias y desastres,Enfermería en unidades de tratamiento intermedio">Práctica profesional integrada I</div>
            <div class="course locked" data-course="Formación Electiva I" data-prerequisites="Enfermería en urgencias y desastres,Enfermería en unidades de tratamiento intermedio">Formación Electiva I</div>
        </div>

        <!-- Semestre X -->
        <div class="semester">
            <div class="semester-title">Semestre X</div>
            <div class="course locked" data-course="Práctica profesional integrada II" data-prerequisites="Enfermería en urgencias y desastres,Enfermería en unidades de tratamiento intermedio">Práctica profesional integrada II</div>
            <div class="course locked" data-course="Formación Electiva II" data-prerequisites="Enfermería en urgencias y desastres,Enfermería en unidades de tratamiento intermedio">Formación Electiva II</div>
        </div>
    </div>

    <script>
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
    </script>
</body>
</html>
