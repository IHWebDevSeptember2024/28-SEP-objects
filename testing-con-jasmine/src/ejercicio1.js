function sum(a, b) {
  if (typeof a === "string" || typeof b === "string") {
    return "No es posible sumar texto";
  }

  return a + b;
}
