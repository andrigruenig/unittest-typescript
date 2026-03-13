export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(minuend: number, subtrahend: number): number {
  return minuend * subtrahend;
}

export function divide(minuend: number, subtrahend: number): number {
  return minuend / subtrahend;
}

export function dividebyzero(minuend: number, subtrahend: number): number {
  if (subtrahend === 0) {
    throw new Error("Der Divisor darf nicht 0 sein.");
  }
  return minuend / subtrahend;
}