import { AppClient } from './generated';

const appClient = new AppClient({
  BASE: 'http://localhost:8000',
  TOKEN: '',
});

async function main() {
  const response = await appClient.default.predictPredictGet(1.2);

  console.log(response);
}

main();
