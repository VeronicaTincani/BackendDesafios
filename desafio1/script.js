class Usuario{
   constructor(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
    this.libros = []
    this.mascotas = ["perro", "gato"]
   }


getFullName=()=>{
    console.log(`Hola mi nombre es ${this.nombre + this.apellido}`);
}


addMascota=() => {
return this.mascotas.push('gato');
}

countMascotas =() => {
console.log(`${this.nombre} tiene ${this.mascotas.lenght} mascotas`);
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

const Name = Usuario1.getFullName;

const mascota = console.log(Usuario1.countMascotas());
Usuario1.addMascota("Michu");
Usuario1.addBook("Lolita", "Vladimir Navokov");
Usuario1.addBook("Principito", "Antoine de Saint-Exupéry");

const TitleBooks =Usuario1.getBookNames();
console.log(TitleBooks())
