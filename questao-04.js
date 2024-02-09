// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado, escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentual(faturamentoEstados) {
    const totalFaturamento = Object.values(faturamentoEstados).reduce((acc, curr) => acc + curr, 0);
    const percentuais = {};

    for (let estado in faturamentoEstados) {
        percentuais[estado] = (faturamentoEstados[estado] / totalFaturamento) * 100;
    }
    return percentuais;
}

const percentuais = calcularPercentual(faturamentoEstados);
console.log("Percentual de representação por estado:");
for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}
