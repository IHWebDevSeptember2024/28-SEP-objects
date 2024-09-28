describe("Iteration 1", () => {
  it("función sum definida", () => {
    expect(typeof sum).toBe("function");
  });
  it("Devuelve la suma de dos números", () => {
    expect(sum(2, 2)).toBe(4);
    expect(sum(2, 3)).toBe(5);
    expect(sum(2000, 1550)).toBe(3550);
  });
  it("Que devuelva 'No es posible sumar texto' si pasamos una string", () => {
    expect(sum("2", 3)).toBe("No es posible sumar texto");
    expect(sum(2, "3")).toBe("No es posible sumar texto");

  });
});
