// --- Concepto puro ---

interface Usuario {
  readonly id: number;
  nombre: string;
  email: string;
  avatar?: string;
}

const u1: Usuario = { id: 1, nombre: "Ana", email: "ana@mail.com" };
const u2: Usuario = { id: 2, nombre: "Luis", email: "luis@mail.com", avatar: "avatar.png" };

// u1.id = 99; // Error: readonly

// --- Ejemplo aplicado — perfil de producto en e-commerce ---

interface Producto {
  readonly sku: string;
  nombre: string;
  precio: number;
  descripcion?: string;
  enStock: boolean;
}

function mostrarProducto(p: Producto): void {
  const desc = p.descripcion ? ` — ${p.descripcion}` : "";
  const stock = p.enStock ? "Disponible" : "Agotado";
  console.log(`[${p.sku}] ${p.nombre} $${p.precio}${desc} (${stock})`);
}

const laptop: Producto = {
  sku: "LAP-001",
  nombre: "Laptop Pro 15",
  precio: 1299,
  descripcion: "Pantalla 4K, 16 GB RAM",
  enStock: true,
};

const mouse: Producto = {
  sku: "MOU-042",
  nombre: "Mouse Inalámbrico",
  precio: 25,
  enStock: false,
};

mostrarProducto(laptop);
mostrarProducto(mouse);

// --- Mini-ejercicio: interface Libro ---

interface Libro {
  readonly isbn: string;
  titulo: string;
  autor: string;
  paginas: number;
  prestado?: boolean;
}

function resumen(l: Libro): string {
  const estado = l.prestado ? "Prestado" : "Disponible";
  return `${l.titulo} (ISBN: ${l.isbn}) — ${estado}`;
}

const libro1: Libro = {
  isbn: "978-3-16-148410-0",
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  paginas: 863,
  prestado: true,
};

const libro2: Libro = {
  isbn: "978-0-14-044913-6",
  titulo: "Cien Años de Soledad",
  autor: "Gabriel García Márquez",
  paginas: 417,
};

console.log(resumen(libro1));
console.log(resumen(libro2));

// --- Ejemplo: interface Empleado ---

interface Empleado {
  nombre: string;
  apellido: string;
  cargo: string;
  ubicacion: string;
}

function mostrarEmpleado(e: Empleado): void {
  console.log(`${e.nombre} ${e.apellido} — ${e.cargo} (${e.ubicacion})`);
}

const emp1: Empleado = {
  nombre: "Carlos",
  apellido: "López",
  cargo: "Desarrollador",
  ubicacion: "Remoto",
};

const emp2: Empleado = {
  nombre: "María",
  apellido: "García",
  cargo: "Diseñadora UX",
  ubicacion: "Oficina",
};

mostrarEmpleado(emp1);
mostrarEmpleado(emp2);
