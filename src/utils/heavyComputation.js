export const heavyComputation = (item) => {
  const start = Date.now(); 
  let sum = 0;

  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }

  const duration = Date.now() - start; 
  console.log(`Heavy Computation Time: ${duration} ms`); 
  return `${sum}`;
};
