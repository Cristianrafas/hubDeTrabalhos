

// 1. Consuma a API: Utilize o endpoint /bodies para obter uma lista de corpos celestes. Armazene esses dados em um array para futuras operações. 
// ● Detalhes: Use axios para fazer a requisição à API. Certifique-se de tratar possíveis erros que possam ocorrer durante a requisição. 

const sistemaSolar = [];
const planetas = [];


async function getBodies() {
    const result = await axios.get('https://api.le-systeme-solaire.net/rest/bodies')
    sistemaSolar.push(...result.data.bodies)
    exercicio2();
    exercicio3();
    exercicio4();
    exercicio5();
    exercicio6();
    exercicio7();
    exercicio8();
    exercicio9();
    exercicio10();
    exercicio11('Uranus');
    exercicio12();
    exercicio13();
    exercicio14();
    exercicio15();
    exercicio16();
    exercicio17();
    exercicio18();
    exercicio19();
}
// console.log(sistemaSolar)
getBodies()
console.log(planetas)


// 2. Filtre os Planetas: Use o método filter para criar um novo array contendo apenas planetas. 
// ● Detalhes: Cada objeto da API contém um campo que especifica o tipo do corpo celeste (por exemplo, planeta, estrela, lua, etc.). Use esse campo como critério para o filtro. 
function exercicio2() {
    const filtro = sistemaSolar.filter(planeta => planeta.isPlanet === true)
    planetas.push(...filtro)
};

// 3. Encontre a Terra: Use o método find para encontrar o objeto que representa a Terra no array filtrado. 
// ● Detalhes: Você deve procurar pelo objeto cujo campo de nome seja igual a "Earth".

function exercicio3() {
    const terra = planetas.find(planeta => planeta.englishName === 'Earth');
    console.log(terra)
}

// 4. Verifique Condições com some: Use o método some para verificar se algum planeta no array filtrado não tem luas. 
// ● Detalhes: Alguns planetas não possuem luas e isso é especificado em um dos campos do objeto. Use esse campo para realizar a verificação. 

function exercicio4() {
    const semLua = planetas.some(planeta => planeta.moons === null);
    console.log(semLua);
}

// 5. Transforme os Dados com map: Use o método map para criar um novo array contendo apenas os nomes dos planetas. 
// ● Detalhes: O novo array deve ser uma lista de strings, onde cada string é o nome de um planeta. 

function exercicio5() {
    const nomes = planetas.map(planeta => planeta.name)
    console.log(nomes)
}

// 6. Classificação por Tamanho: Use os métodos map e sort para criar um novo array que contenha os nomes dos planetas, ordenados pelo seu tamanho (raio). 
// ● Detalhes: Utilize map para extrair os raios e os nomes dos planetas em um novo array. Depois, use sort para ordenar esse array com base no raio. 

function exercicio6() {
    const raio = planetas.sort((a, b) => a.equaRadius - b.equaRadius);
    const tamanho = raio.map(planeta => planeta.name)
    console.log(tamanho)
}

// 7. Informações Concatenadas: Use o método join para criar uma string que contenha os nomes de todos os planetas do array, separados por vírgulas. 
// ● Detalhes: A string resultante deve ser algo como "Mercúrio, Vênus, Terra, Marte,...". 

function exercicio7() {
    const planeta = planetas.map(planeta => planeta.name)
    const stringConcatenada = planeta.join(', ');
    console.log(stringConcatenada);
}
// 8. Sistema Solar Compacto: Use os métodos para pegar os 5 menores planetas e calcular a massa total desses planetas. 

function exercicio8() {
    let massaTotal = 0;
    const selecionados = planetas.sort((a, b) => b.equaRadius - a.equaRadius).slice(0, 5);
    for (selecionado of selecionados) {
        const massa = selecionado.mass.massValue * Math.pow(10, selecionado.mass.massExponent);
        massaTotal += massa;
    }
    console.log(massaTotal.toFixed(4));
}
// 9. Luas e Desidade: verifique se algum planeta tem mais de 2 luas e, em caso afirmativo, listar todos os planetas entre eles que tem densidade maior que 3.34400. 

function exercicio9() {
    const planeta = planetas.filter(planeta => Array.isArray(planeta.moons) && planeta.moons.length > 2 && planeta.density > 1)
    console.log(planeta)
}

// Ordem de descobrimento: Encontre e imprima na tela todos nomes dos astrose suas respectivas datas de descoberta (os que tiverem), ordenando-os do mais recente ao mais antigo. 

function exercicio10() {
    const data = sistemaSolar.filter(planeta => planeta.discoveryDate !== "")
    const planeta = data.sort((a, b) => a.discoveryDate - b.discoveryDate)
    console.log(planeta)
}

// Encontrando Astro: Faça uma função que recebe um nome, e retorna a distancia, a massa, gravidade e densidade 

function exercicio11(name) {
    const busca = sistemaSolar.find(planet => planet.englishName === name);
    const distancia = (busca.perihelion + busca.aphelion) / 2
    console.log(`Distancia: ${distancia}, Massa: ${busca.mass.massValue * Math.pow(10, busca.mass.massExponent)}, gravidade: ${busca.gravity}, Densidade: ${busca.density
        }`)
}

// Filtro de Temperatura: econtre os planetas que tem uma temperatura de 8 a 30 graus celsius. Cuidado que o AvgTemp está na escala Kelvin. Ordene-os do mais frio ao mais quente.

function exercicio12() {
    const temp = planetas.map(planet => ({ ...planet, avgTemp: planet.avgTemp - 273.15 }));
    const filtro = temp.filter(planet => planet.avgTemp >= 8 && planet.avgTemp <= 30);
    const ordem = filtro.sort((a, b) => a.avgTemp - b.avgTemp);
    console.log(ordem);
}

//13. Separando Planetas. Faça uma função que retorna um objeto, separando todos os astros pelo seu tipo. bodyType 

function exercicio13() {
    const planetasSeparados = sistemaSolar.reduce((agrupado, planeta) => {
        const tipo = planeta.bodyType;

        if (!agrupado[tipo]) {
            agrupado[tipo] = [];
        }

        agrupado[tipo].push(planeta);

        return agrupado;
    }, {});

    console.log(planetasSeparados);
}

// 14. Ordenação Complexa: Use sort e slice para ordenar os planetas primeiro por tipo e depois por tamanho, pegando os 3 maiores de cada tipo. 

function exercicio14() {
    const planetasSeparados = sistemaSolar.reduce((agrupado, planeta) => {
        const tipo = planeta.bodyType;

        if (!agrupado[tipo]) {
            agrupado[tipo] = [];
        }

        agrupado[tipo].push(planeta);

        return agrupado;
    }, {});

    console.log(planetasSeparados);

    for (const tipo in planetasSeparados) {
        planetasSeparados[tipo].sort((a, b) => b.size - a.size);
        planetasSeparados[tipo] = planetasSeparados[tipo].slice(0, 3);
    }

    console.log(planetasSeparados);
}

// 15. Encontrando planetas orbitados. Encontre todos os planetas que são orbitados por pelo menos um corpo celeste. Imprima na tela o nome do planeta e seus orbitadores. 

function exercicio15() {
    const planetasComLuas = planetas.filter(planeta => Array.isArray(planeta.moons) && planeta.moons.length > 0);

    planetasComLuas.forEach(planeta => {
        const luas = planeta.moons.map(moon => moon.moon);
        console.log(`Planeta: ${planeta.englishName}, Luas: ${luas.join(', ')}`);
    });
}

// 16. Média da Massa dos Planetas: Use o método reduce para calcular a média da massa de todos os planetas e imprimir o resultado. 

function exercicio16() {
    const total = planetas.reduce((sum, planeta) => sum + planeta.mass.massValue, 0);
    const result = total / planetas.length;
    console.log(`Media: ${result.toFixed(2)}`);
}

// 17. Calcule a distância entre Saturno e Plutão. Utilize o perihelion e o aphelion para calcular a menor distância possível entre os planetas 

function exercicio17() {
    const saturno = sistemaSolar.find(planeta => planeta.englishName === 'Saturn');
    const plutao = sistemaSolar.find(planeta => planeta.englishName === 'Pluto');
    const distanciaMinima = plutao.perihelion - saturno.aphelion;
    console.log(`A menor distância possível entre Saturno e Plutão é aproximadamente ${distanciaMinima} unidades astronômicas.`);
}

// 18. Planetas com Luas: liste todos os planetas que têm uma ou mais luas. Imprima na tela o planeta, e quantas luas ele tem. 

function exercicio18() {
    const planetasComLuas = planetas.filter(planeta => Array.isArray(planeta.moons) && planeta.moons.length > 0);

    planetasComLuas.forEach(planeta => {
        const luas = planeta.moons.map(moon => moon.moon);
        console.log(`Planeta: ${planeta.englishName}, Luas: ${luas.length}`);
    });
}

function exercicio19() {
    const planets =  [...planetas];
    const massas = planets.map(planeta => planeta.mass.massValue * Math.pow(10, planeta.mass.massExponent));
    const ordenado = massas.sort((a, b) => a - b);
    console.log(ordenado);
    
    const media = massas.length / 2;
    let massaMaisProxima = 0;

    if (media % 2 === 0) {
        const a = Math.floor(media);
        const b = media + 1;

        if (a < massas.length && b < massas.length) {
            const massaTotalDosSelecionados = massas[a] + massas[b];
            const mediaDosSelecionados = massaTotalDosSelecionados / 2;
            console.log(`Mediana: ${mediaDosSelecionados}`);

            if (mediaDosSelecionados - massas[a] > massas[b] - mediaDosSelecionados) {
                massaMaisProxima = massas[b];
            } else {
                massaMaisProxima = massas[a];
            }
        }
    } else {
        const a = Math.round(media);
        if (a < massas.length) {
            const massaTotalDoSelecionado = massas[a];
            console.log(`Mediana: ${massaTotalDoSelecionado}`);
            massaMaisProxima = massaTotalDoSelecionado;
        }
    }

    console.log(`Massa mais próxima: ${massaMaisProxima}`);
}
