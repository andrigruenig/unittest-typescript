export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Die Liste darf nicht leer sein.");
  }

  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Der Median ist fuer eine leere Liste nicht definiert.");
  }

  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedNumbers.length / 2);

  if (sortedNumbers.length % 2 !== 0) {
    return sortedNumbers[middleIndex];
  }

  return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
}
