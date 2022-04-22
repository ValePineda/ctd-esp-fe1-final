interface Filtro {
  paginaActual: number;
  setPagina: React.Dispatch<React.SetStateAction<number>>;
  nombre: string;
  setNombre: React.Dispatch<React.SetStateAction<string>> ;
}

export default Filtro;
