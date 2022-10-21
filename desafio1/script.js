class Usuario{
   constructor(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
    this.libros = []
    this.mascotas = []
   }


getFullName=()=>{
    console.log(`Hola mi nombre es ${this.nombre + this.apellido}`);
}


addMascota=(name) => {
return this.mascotas.push(name);
}

countMascotas =() => {
return this.mascotas;
}

addBook(nombre, autor) {
this.libros.push({
    nombre: nombre,
    autor: autor
})
}

getBookNames=() => {
return this.libros.map(libro=>libro.nombre);
}

}

const Usuario1 = new Usuario("Lola", "Moran");

const Name = Usuario1.getFullName();

const Mascotas = Usuario1.countMascotas();
Usuario1.addMascota("Michu");
Usuario1.addMascota("Koda");
console.log(`Lola tiene ${Mascotas.length} gatos`)
Usuario1.addBook("Lolita", "Vladimir Navokov");
Usuario1.addBook("Principito", "Antoine de Saint-Exupéry");
const TitleBooks = Usuario1.getBookNames();
console.log(`Los titulos de los libros son ` + (TitleBooks));

