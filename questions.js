const questionsData = [
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
        explanation: "El cambio en el precio de un bien sustitutivo desplaza la curva de demanda del otro bien."
    },
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
        explanation: "La demanda es la relación completa entre precio y cantidad deseada."
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
        explanation: "El excedente es la diferencia entre la disposición máxima a pagar y el precio realmente pagado."
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
        explanation: "Un precio por debajo del equilibrio genera escasez porque la cantidad demandada supera a la ofrecida."
    },
    {
        module: "Microeconomía",
        topic: "Rol de los precios",
        question: "¿Cuál es una función central del precio de mercado?",
        options: {
            A: "Garantizar igualdad de renta entre compradores y vendedores.",
            B: "Seleccionar a quienes más valoran el bien y a quienes lo producen con menor coste de oportunidad.",
            C: "Fijar un valor estático a los bienes de lujo.",
            D: "Eliminar la competencia entre empresas."
        },
        answer: "B",
        explanation: "El precio coordina planes y asigna el bien a quienes lo valoran más, atrayendo a oferentes con menores costes."
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
        explanation: "La condición de óptimo es la igualdad entre la relación marginal de sustitución y la relación de precios."
    },
    {
        module: "Microeconomía",
        topic: "Factores de producción",
        question: "El precio de un factor productivo se explica principalmente por:",
        options: {
            A: "El coste de vida en el país.",
            B: "La productividad marginal esperada de ese factor.",
            C: "El coste histórico de producir ese factor.",
            D: "La voluntad de los sindicatos."
        },
        answer: "B",
        explanation: "Los precios de los factores derivan de su productividad marginal esperada."
    },
    {
        module: "Microeconomía",
        topic: "Salarios",
        question: "¿Cuál de estas afirmaciones sobre salarios es correcta?",
        options: {
            A: "Los salarios están fijos por el nivel de subsistencia.",
            B: "El capital no influye en la remuneración del trabajo.",
            C: "Las mejoras salariales sostenibles dependen sobre todo de aumentos de productividad.",
            D: "Los salarios solo suben si bajan los precios."
        },
        answer: "C",
        explanation: "Las mejoras salariales sostenibles a largo plazo requieren necesariamente una productividad más alta."
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
        explanation: "Con demanda elástica, la caída en la cantidad es proporcionalmente mayor a la subida de precio, bajando el ingreso."
    },
    {
        module: "Microeconomía",
        topic: "Elasticidad cruzada",
        question: "Si la elasticidad cruzada entre dos bienes es positiva, los bienes son:",
        options: {
            A: "Complementarios.",
            B: "Sustitutivos.",
            C: "De lujo.",
            D: "Independientes."
        },
        answer: "B",
        explanation: "Una elasticidad cruzada positiva indica que al subir el precio de uno, aumenta la demanda del otro."
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
        explanation: "El precio techo impide que el mercado se vacíe, provocando desabastecimiento."
    },
    {
        module: "Microeconomía",
        topic: "Precios mínimos",
        question: "Un precio mínimo fijado por encima del precio de mercado suele provocar:",
        options: {
            A: "Escasez para los consumidores.",
            B: "Excedentes no vendidos o desempleo.",
            C: "Un equilibrio perfecto.",
            D: "Que la demanda aumente repentinamente."
        },
        answer: "B",
        explanation: "El precio suelo genera un exceso de oferta que no encuentra demanda al precio legal."
    },
    {
        module: "Microeconomía",
        topic: "Externalidades",
        question: "Si una actividad genera una externalidad negativa, el mercado tenderá a:",
        options: {
            A: "Producir menos de lo socialmente eficiente.",
            B: "Producir más de lo socialmente eficiente.",
            C: "Eliminar automáticamente la externalidad.",
            D: "Mantener la producción en el óptimo social."
        },
        answer: "B",
        explanation: "Al no asumir todos los costes, el productor ofrece más cantidad de la que sería óptima para la sociedad."
    },
    {
        module: "Microeconomía",
        topic: "Teorema de Coase",
        question: "El teorema de Coase funciona mejor cuando:",
        options: {
            A: "Los derechos de propiedad están bien definidos y los costes de transacción son bajos.",
            B: "El Estado impone multas elevadas.",
            C: "Los costes de transacción son muy altos.",
            D: "Nadie tiene derechos de propiedad definidos."
        },
        answer: "A",
        explanation: "Bajo estas condiciones, las partes pueden negociar una solución eficiente sin intervención externa."
    },
    {
        module: "Microeconomía",
        topic: "Empresa competitiva",
        question: "Una empresa competitiva maximiza beneficios cuando produce donde:",
        options: {
            A: "Precio = Coste Fijo.",
            B: "Precio = Coste Marginal.",
            C: "Ingreso Total = Coste Total.",
            D: "Coste Marginal = 0."
        },
        answer: "B",
        explanation: "En competencia perfecta, el precio es el ingreso marginal; igualarlo al coste marginal maximiza el beneficio."
    },
    {
        module: "Microeconomía",
        topic: "Largo plazo competitivo",
        question: "En equilibrio competitivo de largo plazo, el precio tiende a ser igual al:",
        options: {
            A: "Coste medio mínimo.",
            B: "Ingreso marginal fijo.",
            C: "Beneficio extraordinario.",
            D: "Coste fijo total."
        },
        answer: "A",
        explanation: "La entrada de empresas elimina beneficios extraordinarios hasta que el precio toca el mínimo del coste medio."
    },
    {
        module: "Microeconomía",
        topic: "Competencia dinámica",
        question: "¿Qué define a la competencia dinámica?",
        options: {
            A: "Muchos compradores y un solo vendedor.",
            B: "Libre entrada, rivalidad y descubrimiento empresarial.",
            C: "Ausencia total de cambios en los productos.",
            D: "Precios fijados por el gobierno."
        },
        answer: "B",
        explanation: "Se enfoca en el proceso de mercado y la capacidad de las empresas para innovar y entrar en sectores."
    },
    {
        module: "Microeconomía",
        topic: "Carteles",
        question: "¿Por qué los carteles suelen ser inestables?",
        options: {
            A: "Porque los consumidores prefieren los monopolios.",
            B: "Porque todos los miembros tienen los mismos costes.",
            C: "Por los incentivos de los miembros a engañar y la posible entrada de nuevos competidores.",
            D: "Porque el gobierno siempre los apoya."
        },
        answer: "C",
        explanation: "Cada miembro gana más si vende un poco más del cupo pactado, lo que acaba rompiendo el acuerdo."
    },
    {
        module: "Microeconomía",
        topic: "Tipos de bienes",
        question: "Un recurso común (como un banco de pesca) es:",
        options: {
            A: "No rival y no excluible.",
            B: "Rival y no excluible.",
            C: "Rival y excluible.",
            D: "No rival y excluible."
        },
        answer: "B",
        explanation: "Lo que uno consume no está disponible para otros (rival), pero es difícil impedir que la gente lo use (no excluible)."
    },
    {
        module: "Microeconomía",
        topic: "Comercio internacional",
        question: "Un arancel sobre las importaciones provoca:",
        options: {
            A: "Una caída del precio interno.",
            B: "Un aumento del bienestar social total.",
            C: "Una subida del precio interno y una pérdida irrecuperable de eficiencia.",
            D: "Un aumento de las importaciones."
        },
        answer: "C",
        explanation: "El arancel protege a la industria local pero perjudica a los consumidores y reduce la eficiencia global."
    },
    {
        module: "Macroeconomía",
        topic: "PIB por gasto",
        question: "Según el enfoque del gasto, el PIB se calcula como:",
        options: {
            A: "C + I + G + (X - M).",
            B: "Salarios + Alquileres + Intereses + Beneficios.",
            C: "Valor de las ventas finales - Compras intermedias.",
            D: "Exportaciones + Importaciones."
        },
        answer: "A",
        explanation: "Suma Consumo, Inversión, Gasto Público y Exportaciones Netas."
    },
    {
        module: "Macroeconomía",
        topic: "Importaciones y PIB",
        question: "¿Por qué se restan las importaciones al calcular el PIB por gasto?",
        options: {
            A: "Porque reducen la riqueza del país.",
            B: "Porque ese gasto ya está incluido en C, I o G y no es producción interna.",
            C: "Porque el gobierno quiere desincentivar las compras externas.",
            D: "Para que el resultado siempre sea positivo."
        },
        answer: "B",
        explanation: "El PIB mide lo producido 'dentro', por lo que hay que descontar lo que se gastó en bienes extranjeros."
    },
    {
        module: "Macroeconomía",
        topic: "Valor agregado",
        question: "El método del valor agregado evita:",
        options: {
            A: "La inflación.",
            B: "La doble contabilización de bienes intermedios.",
            C: "El desempleo.",
            D: "El déficit fiscal."
        },
        answer: "B",
        explanation: "Solo cuenta lo que cada etapa añade de valor, no el precio total en cada paso de la cadena."
    },
    {
        module: "Macroeconomía",
        topic: "PIB nominal y real",
        question: "El PIB real se diferencia del nominal en que:",
        options: {
            A: "Usa precios corrientes de cada año.",
            B: "Utiliza precios constantes de un año base para eliminar el efecto de la inflación.",
            C: "Incluye la producción de ciudadanos en el extranjero.",
            D: "No tiene en cuenta el gasto público."
        },
        answer: "B",
        explanation: "Al fijar los precios, cualquier variación en el PIB real se debe solo a cambios en la cantidad producida."
    },
    {
        module: "Macroeconomía",
        topic: "Deflactor del PIB",
        question: "El deflactor del PIB es un indicador de:",
        options: {
            A: "Crecimiento económico real.",
            B: "Evolución de los precios de todos los bienes y servicios producidos internamente.",
            C: "Nivel de desempleo estructural.",
            D: "La balanza comercial."
        },
        answer: "B",
        explanation: "Es el cociente entre PIB nominal y real, reflejando la subida media de precios de la producción nacional."
    },
    {
        module: "Macroeconomía",
        topic: "IPC y deflactor",
        question: "A diferencia del deflactor del PIB, el IPC:",
        options: {
            A: "Mide solo bienes de capital.",
            B: "Incluye bienes importados que forman parte de la cesta de consumo.",
            C: "No tiene en cuenta la inflación.",
            D: "Se calcula cada diez años."
        },
        answer: "B",
        explanation: "El IPC mira lo que compran los hogares, aunque venga de fuera; el deflactor solo mira lo que se produce en el país."
    },
    {
        module: "Macroeconomía",
        topic: "Flujo y stock",
        question: "El PIB es una variable de:",
        options: {
            A: "Stock.",
            B: "Flujo.",
            C: "Riqueza acumulada.",
            D: "Patrimonio."
        },
        answer: "B",
        explanation: "Se mide durante un intervalo de tiempo (un año o trimestre), no en un momento puntual."
    },
    {
        module: "Macroeconomía",
        topic: "Producción y productividad",
        question: "La ley de rendimientos decrecientes implica que:",
        options: {
            A: "Al añadir más de un factor variable a uno fijo, el producto marginal acaba cayendo.",
            B: "La producción siempre baja.",
            C: "Las empresas nunca ganan dinero.",
            D: "La tecnología no importa."
        },
        answer: "A",
        explanation: "Es la base de por qué no podemos producir infinitamente en un espacio limitado."
    },
    {
        module: "Macroeconomía",
        topic: "Tipo de interés",
        question: "El tipo de interés nominal incluye habitualmente:",
        options: {
            A: "Solo el beneficio del banco.",
            B: "Prima temporal, prima de riesgo y expectativa de inflación.",
            C: "El salario del trabajador.",
            D: "El precio de las acciones."
        },
        answer: "B",
        explanation: "Compensa por el tiempo, el riesgo de impago y la pérdida de poder adquisitivo futura."
    },
    {
        module: "Macroeconomía",
        topic: "VPN y TIR",
        question: "Un proyecto de inversión es rentable si:",
        options: {
            A: "Su VPN es negativo.",
            B: "Su TIR es mayor que el coste de oportunidad del capital.",
            C: "La inversión inicial es cero.",
            D: "No genera intereses."
        },
        answer: "B",
        explanation: "Si el rendimiento interno (TIR) supera lo que ganarías en otra alternativa, el proyecto añade valor."
    },
    {
        module: "Macroeconomía",
        topic: "Funciones del dinero",
        question: "¿Cuál NO es una función clásica del dinero?",
        options: {
            A: "Medio de cambio.",
            B: "Depósito de valor.",
            C: "Unidad de cuenta.",
            D: "Factor de producción físico."
        },
        answer: "D",
        explanation: "El dinero facilita el intercambio y la valoración, pero no es una herramienta física como una máquina."
    },
    {
        module: "Macroeconomía",
        topic: "Teorías de la inflación",
        question: "La visión cuantitativa de la inflación sostiene que esta es causada por:",
        options: {
            A: "Un crecimiento excesivo de la oferta monetaria.",
            B: "La falta de demanda.",
            C: "Un exceso de ahorro.",
            D: "La caída de los precios del petróleo."
        },
        answer: "A",
        explanation: "Demasiado dinero persiguiendo los mismos bienes acaba subiendo los precios."
    },
    {
        module: "Macroeconomía",
        topic: "Política monetaria",
        question: "Una operación de mercado abierto donde el Banco Central compra bonos busca:",
        options: {
            A: "Reducir la cantidad de dinero.",
            B: "Inyectar liquidez y presionar los tipos de interés a la baja.",
            C: "Aumentar los impuestos.",
            D: "Frenar el crecimiento económico."
        },
        answer: "B",
        explanation: "Al dar dinero a cambio de bonos, hay más efectivo en el sistema, lo que abarata el crédito."
    },
    {
        module: "Macroeconomía",
        topic: "Creación bancaria de dinero",
        question: "El multiplicador monetario depende principalmente de:",
        options: {
            A: "El número de cajeros automáticos.",
            B: "El coeficiente de caja (reservas) y el efectivo que mantiene el público.",
            C: "La velocidad del viento.",
            D: "El precio del oro."
        },
        answer: "B",
        explanation: "Cuanto menos dinero guarden los bancos y el público, más se puede prestar y recrear el dinero."
    },
    {
        module: "Macroeconomía",
        topic: "Política fiscal",
        question: "Una política fiscal expansiva consiste en:",
        options: {
            A: "Bajar el gasto público y subir impuestos.",
            B: "Aumentar el gasto público o bajar los impuestos.",
            C: "Cerrar el Banco Central.",
            D: "Prohibir las importaciones."
        },
        answer: "B",
        explanation: "Busca estimular la demanda agregada inyectando recursos en la economía."
    },
    {
        module: "Macroeconomía",
        topic: "Estabilizadores automáticos",
        question: "Un ejemplo de estabilizador automático es:",
        options: {
            A: "La construcción de una nueva autopista.",
            B: "Los impuestos progresivos sobre la renta.",
            C: "Una ley aprobada de urgencia.",
            D: "El cambio de moneda."
        },
        answer: "B",
        explanation: "Actúan sin intervención del gobierno: si la economía cae, la gente paga menos impuestos automáticamente, suavizando la crisis."
    },
    {
        module: "Macroeconomía",
        topic: "Déficit y deuda",
        question: "El déficit público ocurre cuando:",
        options: {
            A: "El gasto público supera a los ingresos fiscales en un año.",
            B: "Las exportaciones son menores que las importaciones.",
            C: "El Banco Central imprime billetes.",
            D: "La deuda total es cero."
        },
        answer: "A",
        explanation: "Es una variable flujo que indica que el Estado ha gastado más de lo que ha recaudado en el ejercicio."
    },
    {
        module: "Macroeconomía",
        topic: "Modelo de Solow",
        question: "En el modelo de Solow, el crecimiento de largo plazo per cápita se debe a:",
        options: {
            A: "La acumulación infinita de capital físico.",
            B: "El progreso tecnológico.",
            C: "El aumento de la población.",
            D: "La reducción del ahorro."
        },
        answer: "B",
        explanation: "Sin tecnología, el rendimiento decreciente del capital acabaría deteniendo el crecimiento por trabajador."
    },
    {
        module: "Macroeconomía",
        topic: "Regla de oro de Solow",
        question: "El nivel de capital de la 'regla de oro' es aquel que:",
        options: {
            A: "Maximiza el consumo por trabajador en el estado estacionario.",
            B: "Minimiza la inversión.",
            C: "Iguala el PIB nominal al real.",
            D: "Elimina el desempleo."
        },
        answer: "A",
        explanation: "Busca el equilibrio perfecto donde no se ahorra ni demasiado ni muy poco para vivir lo mejor posible de forma sostenible."
    },
    {
        module: "Macroeconomía",
        topic: "Mercado de trabajo",
        question: "La tasa de desempleo se calcula como:",
        options: {
            A: "Parados / Población Total.",
            B: "Parados / Población Activa.",
            C: "Activos / Población en edad de trabajar.",
            D: "Ocupados / Parados."
        },
        answer: "B",
        explanation: "Solo se tienen en cuenta a quienes están en disposición y búsqueda de trabajar."
    }
];
