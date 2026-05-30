const report = `

===================================================
REPORTE INTERNO GMC
Clasificación: Uso Exclusivo de Personal Administrativo Nivel 3 o Superior
Referencia: IR-77-Δ / Caso de Mitosis Forzada
Ubicación: Steelcleaver, Sector de Mantenimiento Inferior 8-C
Fecha: [REDACTADO]
Estado: Cerrado
Nivel de Riesgo: Moderado
Personal afectado: 11 empleados
Bajas confirmadas: 4
Trabajadores no remunerados incorporados: 2
===================================================

El presente documento resume los eventos ocurridos en el Sector de Mantenimiento Inferior 8-C durante el turno nocturno comprendido entre las 22:00 y las 06:00.

A las 22:47 horas, varios empleados reportaron observar actividad laboral dentro del corredor 8-C-17, una sección que había sido clausurada seis meses antes tras una inspección estructural desfavorable. Los trabajadores describieron el sonido de herramientas metálicas golpeando tuberías y maquinaria operando a baja velocidad. Una revisión de los registros de acceso confirmó que ninguna persona autorizada había ingresado al área.

Inicialmente el incidente fue clasificado como una anomalía auditiva menor. Sin embargo, a las 23:13 horas, el empleado N° [REDACTADO] reportó haber encontrado a un individuo utilizando su mismo uniforme y portando su misma identificación corporativa. Según el testimonio, la entidad se encontraba trabajando de espaldas en una sala de válvulas abandonada. Cuando fue confrontada, la figura respondió utilizando la voz exacta del empleado y afirmó encontrarse "cumpliendo horas pendientes".

El trabajador abandonó la zona inmediatamente.

A las 23:41 horas las cámaras de vigilancia comenzaron a registrar inconsistencias. Múltiples empleados aparecían simultáneamente en ubicaciones diferentes realizando tareas rutinarias. Las grabaciones mostraban movimientos normales, sin comportamientos agresivos o erráticos. Todos los individuos parecían convencidos de estar desempeñando sus labores habituales.

Durante las siguientes dos horas se recibieron diecisiete reportes similares.

A las 01:22 horas se produjo el primer fallecimiento confirmado. El cuerpo del empleado [REDACTADO] fue localizado dentro de una cámara de mantenimiento cerrada desde el exterior. El cadáver presentaba signos avanzados de desnutrición y envejecimiento incompatibles con el tiempo transcurrido desde el inicio del turno. El reloj biométrico del fallecido continuó registrando actividad laboral durante las cuatro horas posteriores al descubrimiento del cuerpo.

A las 02:08 horas el supervisor de turno intentó ordenar la evacuación parcial del sector. La solicitud fue rechazada automáticamente por el sistema de gestión operativa debido a que los indicadores de productividad del área excedían los objetivos establecidos en un 213%.

Durante la investigación posterior se descubrió que gran parte de dicha productividad estaba siendo generada por empleados que oficialmente ya no se encontraban presentes.

A las 03:17 horas, equipos de seguridad localizaron una sala no registrada en los planos de construcción de Steelcleaver. En su interior se encontraron doce escritorios organizados en filas perfectamente alineadas. Cada puesto contenía documentación administrativa escrita con letra idéntica. Los formularios correspondían a solicitudes de empleo, evaluaciones de desempeño y reportes médicos pertenecientes a trabajadores fallecidos durante los últimos quince años.

Los documentos más recientes todavía se encontraban húmedos.

Un miembro del equipo declaró que podía escuchar personas trabajando detrás de las paredes de la sala.

Las inspecciones estructurales posteriores determinaron que no existía espacio físico suficiente para albergar habitaciones adicionales detrás de dichas superficies.

A las 04:55 horas se confirmó un evento de Mitosis Forzada. Dos individuos físicamente idénticos al empleado [REDACTADO] fueron encontrados realizando tareas de mantenimiento en extremos opuestos del sector. Ambos poseían recuerdos coherentes, conocimiento de protocolos y registros biométricos válidos.

Cuando se les informó que uno de ellos era una copia, ambos acusaron al otro de ser el duplicado.

La discusión continuó durante treinta y siete minutos.

Posteriormente ambos solicitaron regresar a sus labores.

Observaciones Finales

Los cuatro cuerpos recuperados fueron trasladados para procesamiento. Dos entidades duplicadas demostraron estabilidad cognitiva suficiente para continuar desempeñando funciones operativas básicas y fueron incorporadas al Programa de Trabajadores No Remunerados.

La productividad del Sector 8-C aumentó un 38% durante el incidente.

Debido a los resultados obtenidos, la administración ha determinado que no se requieren modificaciones significativas a los protocolos actuales.

Se recomienda recordar al personal que, en caso de encontrarse a sí mismo dentro de las instalaciones, debe evitar el contacto visual prolongado, abstenerse de iniciar conversaciones y completar el Formulario F-23: Mitosis Forzada antes de finalizar el turno.

La GMC agradece la cooperación de todos los empleados involucrados.
El progreso continúa.
`;

function authorize(){

    document.getElementById("warning-screen").style.display="none";
    document.getElementById("terminal-screen").style.display="block";

    typeWriter(report);
}

function typeWriter(text){

    let i = 0;
    let speed = 15;

    function typing(){

        if(i < text.length){

            document.getElementById("terminal-output").textContent += text.charAt(i);

            i++;
            setTimeout(typing,speed);
        }
    }

    typing();
}
