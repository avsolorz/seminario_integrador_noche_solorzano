// Concepto puro
class CuentaEvento {
  readonly id: string;           // no cambia tras la creación
  public organizador: string;    // visible desde fuera
  private fondos: number;        // solo accesible dentro de la clase
  protected moneda: string;      // accesible también en subclases

  constructor(id: string, organizador: string, fondosIniciales: number) {
    this.id = id;
    this.organizador = organizador;
    this.fondos = fondosIniciales;
    this.moneda = "USD";
  }

  // Método público que expone los fondos de forma controlada
  obtenerFondos(): number {
    return this.fondos;
  }

  depositar(monto: number): void {
    if (monto <= 0) throw new Error("Monto inválido");
    this.fondos += monto;
  }
}

const cuenta = new CuentaEvento("EVT-001", "Ana García", 1000);
console.log(cuenta.organizador);     // Ana García
console.log(cuenta.id);              // EVT-001
console.log(cuenta.obtenerFondos()); // 1000
cuenta.depositar(500);
console.log(cuenta.obtenerFondos()); // 1500

// cuenta.fondos = 9999;  // Error: 'fondos' is private
// cuenta.id = "otro";    // Error: 'id' is readonly
