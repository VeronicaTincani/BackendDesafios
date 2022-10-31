
const fs = require('fs');

class Contenedor {
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo
    }

   

    saveObjet = async (object) => {

        let newId;

        let archivoExtraido = this.getAll();

        if (archivoExtraido.length == 0){
            newId = 1
        }else{
            newId = archivoExtraido[archivoExtraido.length-1].id + 1
        }

        object.id = newId;

        archivoExtraido.push(object)
        JSON.stringify(archivoExtraido, null, '\t')
        await fs.promises.writeFile(`./${this.nombreArchivo}.json`,archivoExtraido)

        return newId;
    }

    getById = async (objectId) => {
        let indice
        let array = await this.getAll()
        for(let i=0; i<array.length; i++ ){
            if(array[i].id == objectId){
                 indice = i
            }
        }
         array.splice(indice,1)
         array = JSON.stringify(array, null, '\t')
         await fs.promises.writeFile(`${this.nombreArchivo}.json`, array)
    }
       
    getAll = async () => {
        let archivoExtraido = []

        if(fs.existsSync(`./${this.nombreArchivo}.json`)){
            archivoExtraido = await fs.promises.readFile(`./${this.nombreArchivo}.json`,'utf-8')
            archivoExtraido = JSON.parse(archivoExtraido)
        }

        return archivoExtraido;
    }

    deleteById = () => {}

    deleteAll = async () => {
        if(fs.existsSync(`./${this.nombreArchivo}.json`)){
            await fs.promises.unlink(`${this.nombreArchivo}.json`)
        }
    }
}

//Llamada de los metodos con un objeto creado

const objeto = new Contenedor('archivodeprueba')

 objeto.saveObjet({
    nombre: 'Heladera',
    precio: 25000,
    marca: 'samsung'
}) .then(response => console.log(response))

objeto.getById(1) .then(response => console.log(response))

objeto.getAll().then(response => console.log(response))