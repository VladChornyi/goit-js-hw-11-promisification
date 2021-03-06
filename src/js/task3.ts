// Перепиши функцию `makeTransaction()` так, чтобы она не использовала
// callback-функции `onSuccess` и `onError`, а принимала всего один параметр
// `transaction` и возвращала промис.
type Randomize = (a: number, b: number) => number
interface Transaction {
  id: number,
  amount?: number,
  delay?: number 
};

const randomIntegerFromInterval:Randomize = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction: Transaction) => {
  const delay = randomIntegerFromInterval(200, 500);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({ id: transaction.id, delay });
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};

const logSuccess = ({ id, delay }: Transaction) => {
  console.log(`Transaction ${id} processed in ${delay}ms`);
};

const logError = (id: number) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 * Работает так
//  */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
