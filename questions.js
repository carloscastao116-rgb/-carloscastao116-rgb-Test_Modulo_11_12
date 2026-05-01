const questionsData = [
    // --- MICROECONOMÍA ---
    {
        module: "Microeconomía",
        topic: "Oferta y demanda",
        question: "¿Qué describe correctamente la demanda de un bien?",
        options: {
            A: "La cantidad fija que los productores deciden poner a la venta.",
            B: "La relación entre distintos precios posibles y las cantidades que los consumidores desean comprar.",
            C: "El deseo subjetivo de poseer un bien sin importar su precio.",
            D: "La suma total de bienes producidos en un país durante un año."
        },
        answer: "B",
        explanation: "En tus apuntes se distingue entre demanda y cantidad demandada: la demanda es la relación completa entre precio y cantidad deseada."
    },
    {
        module: "Microeconomía",
        topic: "Cambios en curvas",
        question: "Si sube el precio del café y, por ello, algunos consumidores compran más té, ¿qué ocurre en el mercado del té?",
        options: {
            A: "La cantidad demandada de té disminuye.",
            B: "La demanda del té se desplaza a la derecha.",
            C: "La curva de oferta de té se desplaza a la izquierda.",
            D: "No hay cambios porque son mercados independientes."
        },
        answer: "B",
        explanation: "Tus resúmenes remarcan que el cambio en el precio de un bien sustitutivo desplaza la curva de demanda del otro bien."
    },
    {
        module: "Microeconomía",
        topic: "Excedente del consumidor",
        question: "Una persona estaba dispuesta a pagar 18 euros por un libro y finalmente lo compra por 12 euros. ¿Cuál es su excedente del consumidor?",
        options: {
            A: "6 euros.",
            B: "12 euros.",
            C: "18 euros.",
            D: "30 euros."
        },
        answer: "A",
        explanation: "El excedente del consumidor es la diferencia entre la disposición máxima a pagar y el precio realmente pagado."
    },
    {
        module: "Microeconomía",
        topic: "Coordinación del mercado",
        question: "Si el precio de un bien se fija por debajo del precio de coordinación en un mercado competitivo, ¿qué resultado es más probable?",
        options: {
            A: "Una abundancia de productos en stock.",
            B: "Una escasez o desabastecimiento.",
            C: "Que los productores bajen aún más el precio.",
            D: "Que la demanda desaparezca."
        },
        answer: "B",
        explanation: "Los apuntes insisten en que un precio por debajo del equilibrio genera escasez porque la cantidad demandada supera a la ofrecida."
    },
    {
        module: "Microeconomía",
        topic: "Rol de los precios",
        question: "Según el bloque sobre precios, ¿cuál es una función central del precio de mercado?",
        options: {
            A: "Garantizar igualdad de renta entre compradores y vendedores.",
            B: "Seleccionar a quienes más valoran el bien y a quienes lo producen con menor coste de oportunidad.",
            C: "Fijar un valor estático a los bienes de lujo.",
            D: "Eliminar la competencia entre empresas."
        },
        answer: "B",
        explanation: "En el resumen de micro se explica que el precio coordina planes y asigna el bien a quienes lo valoran más, mientras atrae a oferentes con menores costes relativos."
    },
    {
        module: "Microeconomía",
        topic: "Elección del consumidor",
        question: "En la elección óptima del consumidor, la relación marginal de sustitución entre dos bienes tiende a igualarse a:",
        options: {
            A: "La suma de las utilidades totales.",
            B: "El coste total de producción.",
            C: "La relación entre los precios de ambos bienes.",
            D: "El ahorro mensual del consumidor."
        },
        answer: "C",
        explanation: "Tus apuntes de micro resumen la condición de óptimo como igualdad entre la relación marginal de sustitución y la relación de precios."
    },
    {
        module: "Microeconomía",
        topic: "Factores de producción",
        question: "Según el curso, el precio de un factor productivo se explica principalmente por:",
        options: {
            A: "El coste de vida en el país.",
            B: "La productividad marginal esperada de ese factor.",
            C: "El coste histórico de producir ese factor.",
            D: "La voluntad de los sindicatos."
        },
        answer: "B",
        explanation: "El bloque de salarios y tipos de interés presenta los precios de los factores como derivados de su productividad marginal esperada."
    },
    {
        module: "Microeconomía",
        topic: "Salarios",
        question: "¿Cuál de estas afirmaciones encaja mejor con el bloque de salarios de tus apuntes?",
        options: {
            A: "Los salarios están fijos por el nivel de subsistencia.",
            B: "El capital no influye en la remuneración del trabajo.",
            C: "Las mejoras salariales sostenibles dependen sobre todo de aumentos de productividad.",
            D: "Los salarios solo suben si bajan los precios."
        },
        answer: "C",
        explanation: "El resumen rechaza la ley de hierro de los salarios y repite que las mejoras salariales sostenibles requieren productividad más alta."
    },
    {
        module: "Microeconomía",
        topic: "Elasticidad",
        question: "Si la demanda de un bien es elástica, una subida de precio tenderá a:",
        options: {
            A: "Aumentar los ingresos totales de la empresa.",
            B: "No afectar a los ingresos totales.",
            C: "Reducir los ingresos totales.",
            D: "Aumentar la cantidad demandada."
        },
        answer: "C",
        explanation: "Tus apuntes de elasticidad indican que con demanda elástica, subir el precio reduce lo bastante la cantidad como para bajar los ingresos."
    },
    {
        module: "Microeconomía",
        topic: "Elasticidad cruzada",
        question: "Si la elasticidad cruzada entre dos bienes es positiva, lo más probable es que sean:",
        options: {
            A: "Bienes complementarios.",
            B: "Bienes sustitutivos.",
            C: "Bienes de lujo.",
            D: "Bienes independientes."
        },
        answer: "B",
        explanation: "En el resumen de micro, la elasticidad cruzada sirve precisamente para distinguir sustitutivos de complementarios."
    },
    {
        module: "Microeconomía",
        topic: "Controles de precios",
        question: "Un precio máximo fijado por debajo del precio de mercado suele generar:",
        options: {
            A: "Escasez, colas y posible mercado negro.",
            B: "Excedentes no vendidos.",
            C: "Un aumento en la calidad de los productos.",
            D: "Una mayor inversión en el sector."
        },
        answer: "A",
        explanation: "Los apuntes y el PDF sobre controles de precios asocian el precio techo por debajo del mercado con desabastecimiento, racionamiento y mercado negro."
    },
    {
        module: "Microeconomía",
        topic: "Precios mínimos",
        question: "Un precio mínimo fijado por encima del precio de mercado suele provocar:",
        options: {
            A: "Escasez para los consumidores.",
            B: "Excedentes no vendidos y, en algunos casos, desempleo o capacidad ociosa.",
            C: "Un equilibrio perfecto en el mercado de trabajo.",
            D: "Que la demanda aumente repentinamente."
        },
        answer: "B",
        explanation: "Tus apuntes destacan que el precio suelo por encima del equilibrio genera excedentes, desempleo o capacidad ociosa y peor asignación."
    },
    {
        module: "Microeconomía",
        topic: "Externalidades",
        question: "Si una actividad genera una externalidad negativa y no se internaliza, el mercado tenderá a:",
        options: {
            A: "Producir menos de lo socialmente eficiente.",
            B: "Producir más de lo socialmente eficiente.",
            C: "Eliminar automáticamente la externalidad.",
            D: "Mantener la producción en el óptimo social."
        },
        answer: "B",
        explanation: "En el bloque de externalidades se explica que las negativas empujan a sobreproducción o sobreconsumo respecto al óptimo social."
    },
    {
        module: "Microeconomía",
        topic: "Teorema de Coase",
        question: "Según el teorema de Coase, una solución privada a una externalidad es más plausible cuando:",
        options: {
            A: "Los derechos de propiedad están bien definidos y los costes de transacción son bajos.",
            B: "El Estado impone multas elevadas a ambas partes.",
            C: "Los costes de transacción son infinitos.",
            D: "Nadie tiene derechos de propiedad definidos."
        },
        answer: "A",
        explanation: "Tus resúmenes de micro recogen exactamente esas dos condiciones: derechos definidos y costes de transacción bajos."
    },
    {
        module: "Microeconomía",
        topic: "Empresa competitiva",
        question: "Una empresa competitiva que maximiza beneficios debería producir hasta el punto en que:",
        options: {
            A: "El precio sea igual al coste fijo.",
            B: "El precio sea igual al coste marginal.",
            C: "El ingreso total sea igual al coste total.",
            D: "El coste marginal sea cero."
        },
        answer: "B",
        explanation: "El bloque de empresa y beneficios resume la regla de maximización de forma clara: producir hasta que precio iguale al coste marginal."
    },
    {
        module: "Microeconomía",
        topic: "Largo plazo competitivo",
        question: "En equilibrio competitivo de largo plazo, la entrada y salida de empresas tiende a llevar el mercado hacia:",
        options: {
            A: "Precio igual a coste medio mínimo.",
            B: "Ingreso marginal igual a coste fijo.",
            C: "Beneficios extraordinarios perpetuos.",
            D: "La quiebra de todas las empresas."
        },
        answer: "A",
        explanation: "Tus apuntes indican que la entrada y salida empujan al largo plazo hacia una situación de precio igual al coste medio mínimo."
    },
    {
        module: "Microeconomía",
        topic: "Competencia dinámica",
        question: "¿Qué entiende el curso por competencia dinámica?",
        options: {
            A: "Un mercado con precios administrados por el Estado.",
            B: "Un sistema de libre entrada y salida, rivalidad y descubrimiento empresarial.",
            C: "La ausencia total de competidores en un mercado.",
            D: "Un modelo donde las empresas nunca cambian su producto."
        },
        answer: "B",
        explanation: "En la parte de competencia se diferencia entre la foto estática de muchas empresas y la visión dinámica basada en rivalidad y libre entrada."
    },
    {
        module: "Microeconomía",
        topic: "Carteles",
        question: "¿Por qué los carteles tienden a ser inestables según tus apuntes?",
        options: {
            A: "Porque los consumidores siempre prefieren los monopolios.",
            B: "Porque todos sus miembros tienen idénticos costes.",
            C: "Porque pueden entrar nuevos competidores y cada miembro tiene incentivos a hacer trampa.",
            D: "Porque sus costes son siempre decrecientes."
        },
        answer: "C",
        explanation: "Tanto el resumen como el PDF sobre oligopolios y carteles recalcan las dos fuentes de inestabilidad: entrada externa y engaño interno."
    },
    {
        module: "Microeconomía",
        topic: "Tipos de bienes",
        question: "Una pesquería de acceso libre encaja mejor en la categoría de:",
        options: {
            A: "Bien privado.",
            B: "Bien público puro.",
            C: "Monopolio natural.",
            D: "Recurso común."
        },
        answer: "D",
        explanation: "En tu esquema de bienes, los recursos comunes son rivales en consumo y no excluibles, justo la lógica de una pesquería abierta."
    },
    {
        module: "Microeconomía",
        topic: "Comercio internacional",
        question: "Un arancel sobre un bien importado tiende a:",
        options: {
            A: "Reducir el precio interno y aumentar el consumo.",
            B: "Subir el precio interno, reducir el consumo y generar pérdida irrecuperable.",
            C: "Fomentar el libre comercio sin restricciones.",
            D: "Eliminar la producción nacional del bien."
        },
        answer: "B",
        explanation: "Tus apuntes de libre comercio resumen el efecto del arancel como precio interno más alto, menor consumo, menos importaciones y pérdida irrecuperable."
    },

    // --- MACROECONOMÍA ---
    {
        module: "Macroeconomía",
        topic: "PIB por gasto",
        question: "Según el enfoque del gasto, el PIB se calcula como:",
        options: {
            A: "Consumo + Inversión + Salarios.",
            B: "Producción + Impuestos - Subvenciones.",
            C: "C + I + G + X - M.",
            D: "Exportaciones - Importaciones únicamente."
        },
        answer: "C",
        explanation: "El resumen de macro recoge la identidad básica del PIB por gasto: consumo, inversión, gasto público y exportaciones netas."
    },
    {
        module: "Macroeconomía",
        topic: "Importaciones y PIB",
        question: "¿Por qué las importaciones se restan en el PIB por el enfoque del gasto?",
        options: {
            A: "Porque no forman parte de la producción realizada dentro del territorio.",
            B: "Porque reducen la riqueza nacional de forma permanente.",
            C: "Porque el gasto en importaciones no existe realmente.",
            D: "Para aumentar artificialmente el valor del PIB."
        },
        answer: "A",
        explanation: "Tus apuntes recalcan que las importaciones se restan porque ese gasto no corresponde a producción interna."
    },
    {
        module: "Macroeconomía",
        topic: "Valor agregado",
        question: "¿Qué problema busca evitar el enfoque del valor agregado por etapas?",
        options: {
            A: "La estacionalidad del PIB trimestral.",
            B: "La doble contabilización de bienes intermedios.",
            C: "La caída de la inversión extranjera.",
            D: "El aumento del déficit público."
        },
        answer: "B",
        explanation: "Tanto el resumen como el PDF de PIB explican el valor agregado como herramienta para evitar contar varias veces la misma producción."
    },
    {
        module: "Macroeconomía",
        topic: "PIB nominal y real",
        question: "¿Qué mide mejor el PIB real frente al PIB nominal?",
        options: {
            A: "El aumento de los precios en un año determinado.",
            B: "Los cambios en cantidades producidas aislando el efecto de los precios.",
            C: "La cantidad de billetes en circulación.",
            D: "El valor de la producción a precios corrientes."
        },
        answer: "B",
        explanation: "Tus apuntes subrayan que el PIB nominal mezcla precio y cantidad, mientras el real intenta quedarse con la variación de cantidades."
    },
    {
        module: "Macroeconomía",
        topic: "Deflactor del PIB",
        question: "Si sube el deflactor del PIB, eso indica que:",
        options: {
            A: "La producción física del país está cayendo.",
            B: "Los precios medios de la producción interna están aumentando.",
            C: "El desempleo está bajando automáticamente.",
            D: "Las exportaciones superan automáticamente a las importaciones."
        },
        answer: "B",
        explanation: "El resumen de macro presenta el deflactor como una medida amplia de precios de la producción interna."
    },
    {
        module: "Macroeconomía",
        topic: "IPC y deflactor",
        question: "¿Cuál es la diferencia más correcta entre IPC y deflactor del PIB?",
        options: {
            A: "No hay diferencia real entre ambos indicadores.",
            B: "El deflactor solo mide alimentos y el IPC mide todo.",
            C: "El IPC se centra en el consumo de los hogares y el deflactor refleja precios de la producción interna.",
            D: "El IPC mide producción y el deflactor mide consumo."
        },
        answer: "C",
        explanation: "En tus apuntes se repite que el IPC sirve mejor para coste de vida y el deflactor para precios de lo producido dentro del país."
    },
    {
        module: "Macroeconomía",
        topic: "Flujo y stock",
        question: "El PIB es, sobre todo, una variable de tipo:",
        options: {
            A: "Stock o inventario.",
            B: "Flujo.",
            C: "Inmovilizado material.",
            D: "Riqueza acumulada."
        },
        answer: "B",
        explanation: "El PDF sobre definición de PIB lo trata expresamente como variable flujo, no como stock."
    },
    {
        module: "Macroeconomía",
        topic: "Producción y productividad",
        question: "La productividad marginal decreciente implica que, si un factor permanece fijo y se añade mucho del otro:",
        options: {
            A: "La producción total se vuelve infinita.",
            B: "El producto marginal del factor variable tiende a caer.",
            C: "El coste marginal se reduce a cero.",
            D: "La tecnología mejora automáticamente."
        },
        answer: "B",
        explanation: "El bloque de función de producción usa este principio para explicar por qué la acumulación de un solo factor tiene límites."
    },
    {
        module: "Macroeconomía",
        topic: "Tipo de interés",
        question: "Según tus apuntes, el tipo de interés puede descomponerse en:",
        options: {
            A: "Productividad, inflación y salario real.",
            B: "Prima temporal, prima de riesgo y prima de liquidez.",
            C: "Consumo, ahorro e inversión.",
            D: "Exportaciones e importaciones."
        },
        answer: "B",
        explanation: "El resumen de macro descompone el interés en tiempo, riesgo y liquidez, que es una de las ideas centrales del tema."
    },
    {
        module: "Macroeconomía",
        topic: "VPN y TIR",
        question: "Un proyecto con VPN positivo y TIR superior al coste de oportunidad del capital debería:",
        options: {
            A: "Rechazarse para evitar riesgos innecesarios.",
            B: "Aceptarse, ya que crea valor.",
            C: "Posponerse indefinidamente.",
            D: "Cambiar su estructura de costes primero."
        },
        answer: "B",
        explanation: "Tus apuntes son directos: si el VPN es positivo y la TIR supera el coste de oportunidad, el proyecto crea valor."
    },
    {
        module: "Macroeconomía",
        topic: "Funciones del dinero",
        question: "¿Cuál de estas opciones recoge mejor una función del dinero?",
        options: {
            A: "Ser un bien de consumo directo.",
            B: "Servir como medio de intercambio y unidad de cuenta.",
            C: "Garantizar que toda economía crezca permanentemente.",
            D: "Sustituir a la producción física."
        },
        answer: "B",
        explanation: "En el bloque sobre dinero, los apuntes explican funciones clásicas como medio de intercambio, unidad de cuenta y depósito de valor."
    },
    {
        module: "Macroeconomía",
        topic: "Teorías de la inflación",
        question: "¿Qué subraya la visión cualitativista de la inflación?",
        options: {
            A: "Que solo importa la cantidad física de monedas.",
            B: "Que la demanda de dinero, su liquidez y la confianza también importan.",
            C: "Que la inflación es causada por el buen clima.",
            D: "Que los precios nunca deberían subir."
        },
        answer: "B",
        explanation: "El resumen de macro insiste en que no basta mirar la oferta monetaria: también importa la demanda de dinero y su calidad."
    },
    {
        module: "Macroeconomía",
        topic: "Política monetaria",
        question: "Si un banco central compra activos en mercado abierto dentro de una política monetaria convencional:",
        options: {
            A: "Drena liquidez y sube los tipos de interés.",
            B: "Inyecta liquidez, eleva el precio del activo y tiende a bajar su rendimiento.",
            C: "Reduce la base monetaria del país.",
            D: "Prohíbe a los bancos comerciales prestar dinero."
        },
        answer: "B",
        explanation: "Tus apuntes explican que la compra de activos inyecta reservas, sube el precio del activo y reduce su rendimiento."
    },
    {
        module: "Macroeconomía",
        topic: "Creación bancaria de dinero",
        question: "Según tus apuntes, los bancos comerciales no pueden crear dinero ilimitadamente porque enfrentan límites de:",
        options: {
            A: "Espacio en sus cajas fuertes.",
            B: "Liquidez, solvencia, demanda de crédito solvente y conversión en dinero del banco central.",
            C: "Número de empleados por sucursal.",
            D: "Solo el límite de impresión de billetes físicos."
        },
        answer: "B",
        explanation: "El bloque de dinero bancario insiste en esos límites: liquidez, solvencia, crédito solvente y conversión final en dinero del banco central."
    },
    {
        module: "Macroeconomía",
        topic: "Política fiscal",
        question: "Una política fiscal expansiva, en términos convencionales, suele implicar:",
        options: {
            A: "Subir impuestos y reducir el gasto público.",
            B: "Mantener el presupuesto siempre en superávit.",
            C: "Bajar impuestos o subir gasto, aumentando el sesgo expansivo del saldo fiscal.",
            D: "Eliminar el seguro de desempleo."
        },
        answer: "C",
        explanation: "Tus apuntes de política fiscal resumen el enfoque convencional así: menos impuestos o más gasto equivalen a un sesgo expansivo."
    },
    {
        module: "Macroeconomía",
        topic: "Estabilizadores automáticos",
        question: "¿Cuál de los siguientes es un estabilizador automático?",
        options: {
            A: "Una decisión del gobierno de construir un puente.",
            B: "El seguro de desempleo que aumenta el gasto cuando entra la recesión.",
            C: "Una subida discrecional del tipo de interés.",
            D: "La privatización de una empresa pública."
        },
        answer: "B",
        explanation: "El resumen de macro cita de forma expresa el seguro de desempleo y la caída automática de recaudación en recesión."
    },
    {
        module: "Macroeconomía",
        topic: "Críticas al multiplicador",
        question: "¿Cuál es una de las críticas principales al multiplicador fiscal?",
        options: {
            A: "Que genera demasiado empleo de forma instantánea.",
            B: "Que el endeudamiento público puede desplazar financiación privada mediante crowding out.",
            C: "Que los impuestos son siempre demasiado bajos.",
            D: "Que no afecta al déficit público."
        },
        answer: "B",
        explanation: "Tus apuntes recogen varias críticas, y una de las más claras es el crowding out: deuda pública que desplaza crédito privado."
    },
    {
        module: "Macroeconomía",
        topic: "Modelo de Solow",
        question: "En el modelo de Solow, si la inversión por trabajador supera la depreciación más la dilución poblacional:",
        options: {
            A: "El capital por trabajador disminuye.",
            B: "El capital por trabajador se profundiza y aumenta.",
            C: "El crecimiento económico se detiene.",
            D: "La tecnología retrocede."
        },
        answer: "B",
        explanation: "El resumen de Solow distingue entre ampliación y profundización del capital: si la inversión supera depreciación y dilución, k por trabajador aumenta."
    },
    {
        module: "Macroeconomía",
        topic: "Regla de oro de Solow",
        question: "La regla de oro de Solow busca el nivel de capital por trabajador que:",
        options: {
            A: "Maximiza el consumo sostenible de largo plazo.",
            B: "Elimina toda depreciación.",
            C: "Maximiza únicamente la inversión bruta.",
            D: "Reduce el ahorro a cero."
        },
        answer: "A",
        explanation: "Tus apuntes aclaran que la regla de oro no busca acumular sin límite, sino el capital que maximiza el consumo sostenible."
    },
    {
        module: "Macroeconomía",
        topic: "Mercado de trabajo",
        question: "Si el salario mínimo sube claramente por encima de la productividad económica de los trabajadores afectados:",
        options: {
            A: "Aumentará masivamente la contratación.",
            B: "Tenderá a reducir la demanda de trabajo de esas personas.",
            C: "No tendrá impacto alguno en el mercado laboral.",
            D: "La productividad subirá automáticamente por decreto."
        },
        answer: "B",
        explanation: "El resumen de macro relaciona salario máximo sostenible y productividad económica; si el salario exigido supera esa productividad, cae la demanda de trabajo."
    }
];
