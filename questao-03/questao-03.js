// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const fs = require('fs');

// Função para calcular estatísticas
function calcularEstatisticas(faturamento) {
    const valores = faturamento.map(item => item.valor);
    const diasNoMes = valores.length;
    const mediaMensal = valores.reduce((acc, curr) => acc + curr, 0) / diasNoMes;
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

// Lendo o arquivo faturamento.json
fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return;
    }

    try {
        const faturamento = JSON.parse(data);
        const estatisticas = calcularEstatisticas(faturamento);
        console.log("Menor valor:", estatisticas.menorValor);
        console.log("Maior valor:", estatisticas.maiorValor);
        console.log("Número de dias acima da média:", estatisticas.diasAcimaDaMedia);
    } catch (error) {
        console.error("Erro ao processar o JSON:", error);
    }
});

