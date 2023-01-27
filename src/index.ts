// create a utility type that will check that a number is between 1 and 100

type Between1And100 = number & { __brand: "between1And100" };

function between1And100(n: number): Between1And100 {
  if (n < 1 || n > 100) {
    throw new Error("Number is not between 1 and 100");
  }
  return n as Between1And100;
}
