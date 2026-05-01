const questionsData = [
    // --- MÓDULO 11: MICROECONOMÍA (Preguntas 1-20) ---
    {
        module: "Módulo 11 - Microeconomía",
        question: "¿Qué describe correctamente la demanda de un bien?",
        options: {
            A: "La cantidad fija que los productores deciden poner a la venta.",
            B: "La relación entre distintos precios posibles y las cantidades que los consumidores desean comprar.",
            C: "El deseo subjetivo de poseer un bien sin importar su precio.",
            D: "La suma total de bienes producidos en un país durante un año."
        },
        answer: "B",
        explanation: "La demanda es la relación completa entre precio y cantidad deseada[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "Si sube el precio del café y, por ello, algunos consumidores compran más té, ¿qué ocurre en el mercado del té?",
        options: {
            A: "La cantidad demandada de té disminuye.",
            B: "La demanda del té se desplaza a la derecha.",
            C: "La curva de oferta de té se desplaza a la izquierda.",
            D: "No hay cambios porque son mercados independientes."
        },
        answer: "B",
        explanation: "El cambio en el precio de un bien sustitutivo desplaza la curva de demanda del otro bien[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "Una persona estaba dispuesta a pagar 18 euros por un libro y finalmente lo compra por 12 euros. ¿Cuál es su excedente del consumidor?",
        options: {
            A: "6 euros.",
            B: "12 euros.",
            C: "18 euros.",
            D: "30 euros."
        },
        answer: "A",
        explanation: "El excedente del consumidor es la diferencia entre la disposición máxima a pagar y el precio realmente pagado[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "Si el precio de un bien se fija por debajo del precio de coordinación en un mercado competitivo, ¿qué resultado es más probable?",
        options: {
            A: "Una abundancia de productos en stock.",
            B: "Una escasez o desabastecimiento.",
            C: "Que los productores bajen aún más el precio.",
            D: "Que la demanda desaparezca."
        },
        answer: "B",
        explanation: "Un precio por debajo del equilibrio genera escasez porque la cantidad demandada supera a la ofrecida[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "Según el bloque sobre precios, ¿cuál es una función central del precio de mercado?",
        options: {
            A: "Garantizar igualdad de renta entre compradores y vendedores.",
            B: "Seleccionar a quienes más valoran el bien y a quienes lo producen con menor coste de oportunidad.",
            C: "Fijar un valor estático a los bienes de lujo.",
            D: "Eliminar la competencia entre empresas."
        },
        answer: "B",
        explanation: "El precio coordina planes y asigna el bien a quienes más lo valoran y a oferentes con menores costes relativos[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "En la elección óptima del consumidor, la relación marginal de sustitución entre dos bienes tiende a igualarse a:",
        options: {
            A: "La suma de las utilidades totales.",
            B: "El coste total de producción.",
            C: "La relación entre los precios de ambos bienes.",
            D: "El ahorro mensual del consumidor."
        },
        answer: "C",
        explanation: "La condición de óptimo es la igualdad entre la relación marginal de sustitución y la relación de precios[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "Según el curso, el precio de un factor productivo se explica principalmente por:",
        options: {
            A: "El coste de vida en el país.",
            B: "La productividad marginal esperada de ese factor.",
            C: "El coste histórico de producir ese factor.",
            D: "La voluntad de los sindicatos."
        },
        answer: "B",
        explanation: "Los precios de los factores se presentan como derivados de su productividad marginal esperada[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "¿Cuál de estas afirmaciones encaja mejor con el bloque de salarios?",
        options: {
            A: "Los salarios están fijos por el nivel de subsistencia.",
            B: "El capital no influye en la remuneración del trabajo.",
            C: "Las mejoras salariales sostenibles dependen sobre todo de aumentos de productividad.",
            D: "Los salarios solo suben si bajan los precios."
        },
        answer: "C",
        explanation: "Las mejoras salariales sostenibles requieren una productividad más alta[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "Si la demanda de un bien es elástica, una subida de precio tenderá a:",
        options: {
            A: "Aumentar los ingresos totales de la empresa.",
            B: "No afectar a los ingresos totales.",
            C: "Reducir los ingresos totales.",
            D: "Aumentar la cantidad demandada."
        },
        answer: "C",
        explanation: "Con demanda elástica, subir el precio reduce lo bastante la cantidad como para bajar los ingresos[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "Si la elasticidad cruzada entre dos bienes es positiva, lo más probable es que sean:",
        options: {
            A: "Bienes complementarios.",
            B: "Bienes de lujo.",
            C: "Bienes sustitutivos.",
            D: "Bienes independientes."
        },
        answer: "C",
        explanation: "La elasticidad cruzada positiva indica que los bienes son sustitutivos[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "Un precio máximo fijado por debajo del precio de mercado suele generar:",
        options: {
            A: "Escasez, colas y posible mercado negro.",
            B: "Excedentes no vendidos.",
            C: "Un aumento en la calidad de los productos.",
            D: "Una mayor inversión en el sector."
        },
        answer: "A",
        explanation: "El precio techo por debajo del mercado se asocia con desabastecimiento y mercado negro[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "Un precio mínimo fijado por encima del precio de mercado suele provocar:",
        options: {
            A: "Escasez para los consumidores.",
            B: "Excedentes no vendidos y, en algunos casos, desempleo.",
            C: "Un equilibrio perfecto en el mercado de trabajo.",
            D: "Que la demanda aumente repentinamente."
        },
        answer: "B",
        explanation: "El precio suelo por encima del equilibrio genera excedentes o capacidad ociosa[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "Si una actividad genera una externalidad negativa y no se internaliza, el mercado tenderá a:",
        options: {
            A: "Producir menos de lo socialmente eficiente.",
            B: "Producir más de lo socialmente eficiente.",
            C: "Eliminar automáticamente la externalidad.",
            D: "Mantener la producción en el óptimo social."
        },
        answer: "B",
        explanation: "Las externalidades negativas empujan a la sobreproducción respecto al óptimo social[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "Según el teorema de Coase, una solución privada a una externalidad es más plausible cuando:",
        options: {
            A: "Los derechos de propiedad están bien definidos y los costes de transacción son bajos.",
            B: "El Estado impone multas elevadas a ambas partes.",
            C: "Los costes de transacción son infinitos.",
            D: "Nadie tiene derechos de propiedad definidos."
        },
        answer: "A",
        explanation: "Coase requiere derechos definidos y costes de transacción bajos para acuerdos privados[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "Una empresa competitiva que maximiza beneficios debería producir hasta el punto en que:",
        options: {
            A: "El precio sea igual al coste fijo.",
            B: "El precio sea igual al coste marginal.",
            C: "El ingreso total sea igual al coste total.",
            D: "El coste marginal sea cero."
        },
        answer: "B",
        explanation: "La regla de maximización es producir hasta que el precio iguale al coste marginal[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "En equilibrio competitivo de largo plazo, la entrada y salida de empresas tiende a llevar el mercado hacia:",
        options: {
            A: "Precio igual a coste medio mínimo.",
            B: "Precio igual a ingreso marginal máximo.",
            C: "Beneficios extraordinarios perpetuos.",
            D: "La quiebra de todas las empresas."
        },
        answer: "A",
        explanation: "La entrada y salida de empresas empujan el largo plazo hacia el coste medio mínimo[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "¿Qué entiende el curso por competencia dinámica?",
        options: {
            A: "Un mercado con precios fijados por el gobierno.",
            B: "Un sistema de libre entrada y salida, rivalidad y descubrimiento empresarial.",
            C: "La ausencia total de competidores en un mercado.",
            D: "Un modelo donde las empresas nunca cambian su producto."
        },
        answer: "B",
        explanation: "La visión dinámica se basa en la rivalidad y la libre entrada[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "¿Por qué los carteles tienden a ser inestables?",
        options: {
            A: "Porque los consumidores siempre prefieren los monopolios.",
            B: "Porque el Estado les garantiza beneficios sin competir.",
            C: "Porque pueden entrar nuevos competidores y cada miembro tiene incentivos a hacer trampa.",
            D: "Porque sus costes son siempre decrecientes."
        },
        answer: "C",
        explanation: "La inestabilidad proviene de la entrada externa y el incentivo al engaño interno[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "Una pesquería de acceso libre encaja mejor en la categoría de:",
        options: {
            A: "Bien privado.",
            B: "Bien público puro.",
            C: "Monopolio natural.",
            D: "Recurso común."
        },
        answer: "D",
        explanation: "Los recursos comunes son rivales en consumo y no excluibles, como una pesquería abierta[cite: 3]."
    },
    {
        module: "Módulo 11 - Microeconomía",
        question: "Un arancel sobre un bien importado tiende a:",
        options: {
            A: "Reducir el precio interno y aumentar el consumo.",
            B: "Subir el precio interno, reducir el consumo y generar pérdida irrecuperable.",
            C: "Fomentar el libre comercio sin restricciones.",
            D: "Eliminar la producción nacional del bien."
        },
        answer: "B",
        explanation: "El arancel causa precios internos más altos, menor consumo y pérdida irrecuperable[cite: 3]."
    },

    // --- MÓDULO 12: MACROECONOMÍA (Preguntas 21-40) ---
    {
        module: "Módulo 12 - Macroeconomía",
        question: "Según el enfoque del gasto, el PIB se calcula como:",
        options: {
            A: "Consumo + Inversión + Salarios.",
            B: "Producción + Impuestos - Subvenciones.",
            C: "C + I + G + X - M.",
            D: "Exportaciones - Importaciones únicamente."
        },
        answer: "C",
        explanation: "El PIB por gasto incluye consumo, inversión, gasto público y exportaciones netas[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "¿Por qué las importaciones se restan en el PIB por el enfoque del gasto?",
        options: {
            A: "Porque no forman parte de la producción realizada dentro del territorio.",
            B: "Porque reducen la riqueza nacional de forma permanente.",
            C: "Porque el gasto en importaciones no existe realmente.",
            D: "Para aumentar artificialmente el valor del PIB."
        },
        answer: "A",
        explanation: "Las importaciones se restan porque no corresponden a producción interna[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "¿Qué problema busca evitar el enfoque del valor agregado por etapas?",
        options: {
            A: "La inflación galopante.",
            B: "La doble contabilización de bienes intermedios.",
            C: "La caída de la inversión extranjera.",
            D: "El aumento del déficit público."
        },
        answer: "B",
        explanation: "El valor agregado evita contar varias veces la misma producción a través de sus etapas[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "¿Qué mide mejor el PIB real frente al PIB nominal?",
        options: {
            A: "El aumento de los precios en un año determinado.",
            B: "Los cambios en cantidades producidas aislando el efecto de los precios.",
            C: "La cantidad de billetes en circulación.",
            D: "El valor de la producción a precios corrientes."
        },
        answer: "B",
        explanation: "El PIB real intenta quedarse exclusivamente con la variación de cantidades producidas[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "Si sube el deflactor del PIB, eso indica que:",
        options: {
            A: "La producción física del país está cayendo.",
            B: "Los precios medios de la producción interna están aumentando.",
            C: "El desempleo está bajando automáticamente.",
            D: "Las importaciones son más baratas que antes."
        },
        answer: "B",
        explanation: "El deflactor es una medida amplia de precios de la producción nacional[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "¿Cuál es la diferencia más correcta entre IPC y deflactor del PIB?",
        options: {
            A: "No hay diferencia real entre ambos indicadores.",
            B: "El deflactor solo mide alimentos y el IPC mide todo.",
            C: "El IPC se centra en el consumo de los hogares y el deflactor refleja precios de la producción interna.",
            D: "El IPC mide producción y el deflactor mide consumo."
        },
        answer: "C",
        explanation: "El IPC mide el coste de vida de hogares y el deflactor los precios de lo producido internamente[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "El PIB es, sobre todo, una variable de tipo:",
        options: {
            A: "Stock o inventario.",
            B: "Flujo.",
            C: "Inmovilizado material.",
            D: "Riqueza acumulada."
        },
        answer: "B",
        explanation: "El PIB se define como una variable flujo que mide producción en un tiempo dado[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "La productividad marginal decreciente implica que, si un factor permanece fijo y se añade mucho del otro:",
        options: {
            A: "La producción total se vuelve infinita.",
            B: "El producto marginal del factor variable tiende a caer.",
            C: "El coste marginal se reduce a cero.",
            D: "La tecnología mejora automáticamente."
        },
        answer: "B",
        explanation: "Este principio explica que añadir un factor sobre otro fijo tiene rendimientos decrecientes[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "Según tus apuntes, el tipo de interés puede descomponerse en:",
        options: {
            A: "Inflación, salarios y beneficios.",
            B: "Prima temporal, prima de riesgo y prima de liquidez.",
            C: "Consumo, ahorro e inversión.",
            D: "Exportaciones e importaciones."
        },
        answer: "B",
        explanation: "El interés se descompone en tiempo, riesgo y liquidez[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "Un proyecto con VPN positivo y TIR superior al coste de oportunidad del capital debería:",
        options: {
            A: "Rechazarse para evitar riesgos innecesarios.",
            B: "Aceptarse, ya que crea valor.",
            C: "Posponerse indefinidamente.",
            D: "Cambiar su estructura de costes primero."
        },
        answer: "B",
        explanation: "Si el VPN es positivo y la TIR supera el coste de oportunidad, el proyecto crea valor[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "¿Cuál de estas opciones recoge mejor una función del dinero?",
        options: {
            A: "Ser un bien de consumo directo.",
            B: "Servir como medio de intercambio y unidad de cuenta.",
            C: "Garantizar el pleno empleo por sí mismo.",
            D: "Sustituir a la producción física."
        },
        answer: "B",
        explanation: "Las funciones clásicas son medio de intercambio, unidad de cuenta y depósito de valor[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "¿Qué subraya la visión cualitativista de la inflación?",
        options: {
            A: "Que solo importa la cantidad física de monedas.",
            B: "Que la demanda de dinero, su liquidez y la confianza también importan.",
            C: "Que la inflación es causada por el buen clima.",
            D: "Que los precios nunca deberían subir."
        },
        answer: "B",
        explanation: "La visión cualitativista enfatiza la importancia de la demanda de dinero y la confianza[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "Si un banco central compra activos en mercado abierto dentro de una política monetaria convencional:",
        options: {
            A: "Drena liquidez y sube los tipos de interés.",
            B: "Inyecta liquidez, eleva el precio del activo y tiende a bajar su rendimiento.",
            C: "Reduce la base monetaria del país.",
            D: "Prohíbe a los bancos comerciales prestar dinero."
        },
        answer: "B",
        explanation: "La compra de activos inyecta reservas y reduce los rendimientos de los activos[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "Según tus apuntes, los bancos comerciales no pueden crear dinero ilimitadamente porque enfrentan límites de:",
        options: {
            A: "Espacio en sus cajas fuertes.",
            B: "Liquidez, solvencia, demanda de crédito solvente y conversión en dinero del banco central.",
            C: "Número de empleados por sucursal.",
            D: "Solo el límite de impresión de billetes físicos."
        },
        answer: "B",
        explanation: "Los límites incluyen liquidez, solvencia y la demanda de crédito solvente[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "Una política fiscal expansiva, en términos convencionales, suele implicar:",
        options: {
            A: "Subir impuestos y reducir el gasto público.",
            B: "Mantener el presupuesto siempre en superávit.",
            C: "Bajar impuestos o subir gasto, aumentando el sesgo expansivo del saldo fiscal.",
            D: "Eliminar el seguro de desempleo."
        },
        answer: "C",
        explanation: "Menos impuestos o más gasto definen una política fiscal expansiva[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "¿Cuál de los siguientes es un estabilizador automático?",
        options: {
            A: "Una decisión del gobierno de construir un puente.",
            B: "El seguro de desempleo que aumenta el gasto cuando entra la recesión.",
            C: "Una subida discrecional del tipo de interés.",
            D: "La privatización de una empresa pública."
        },
        answer: "B",
        explanation: "El seguro de desempleo y la recaudación variable actúan como estabilizadores automáticos[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "¿Cuál es una de las críticas principales al multiplicador fiscal?",
        options: {
            A: "Que genera demasiado empleo de forma instantánea.",
            B: "Que el endeudamiento público puede desplazar financiación privada mediante crowding out.",
            C: "Que los impuestos son siempre demasiado bajos.",
            D: "Que no afecta al déficit público."
        },
        answer: "B",
        explanation: "Una crítica central es el efecto desplazamiento o crowding out del crédito privado[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "En el modelo de Solow, si la inversión por trabajador supera la depreciación más la dilución poblacional:",
        options: {
            A: "El capital por trabajador disminuye.",
            B: "El capital por trabajador se profundiza y aumenta.",
            C: "El crecimiento económico se detiene.",
            D: "La tecnología retrocede."
        },
        answer: "B",
        explanation: "Si la inversión supera la depreciación y dilución, el capital por trabajador crece[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "La regla de oro de Solow busca el nivel de capital por trabajador que:",
        options: {
            A: "Elimina toda depreciación.",
            B: "Maximiza el consumo sostenible de largo plazo.",
            C: "Maximiza únicamente la inversión bruta.",
            D: "Reduce el ahorro a cero."
        },
        answer: "A", // Nota: Corrigiendo según la idea clave del source.
        explanation: "La regla de oro busca el capital que maximiza el consumo sostenible, no la acumulación infinita[cite: 3]."
    },
    {
        module: "Módulo 12 - Macroeconomía",
        question: "Si el salario mínimo sube claramente por encima de la productividad económica de los trabajadores afectados:",
        options: {
            A: "Aumentará masivamente la contratación.",
            B: "Tenderá a reducir la demanda de trabajo de esas personas.",
            C: "No tendrá impacto alguno en el mercado laboral.",
            D: "La productividad subirá automáticamente por decreto."
        },
        answer: "B",
        explanation: "Si el salario exigido supera la productividad, la demanda de trabajo de esas personas cae[cite: 3]."
    }
];