import { mean, standardDeviation } from 'simple-statistics';

const data = [2, 4, 4, 4, 5, 5, 7, 9];
document.getElementById('app').innerHTML = `
  <h1>StatsApp</h1>
  <p>Mean: ${mean(data).toFixed(2)}</p>
  <p>Std Dev: ${standardDeviation(data).toFixed(2)}</p>
`;
