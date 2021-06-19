const bd = [
    {
        id: 1,
        marca: "Fiat",
    },
    {
        id: 2,
        marca: "Ford",
    },
    {
        id: 3,
        marca: "chevrolet",
    }
]

function buscarPorId(idauto: number): Promise<any>{

    return new Promise (function(resolver, rechazar): void{

        setTimeout(function(){
            const res = bd.find(ele => ele.id === idauto);
            if(res){
                resolver(res);
            } else {
                rechazar(`El auto con el id=${idauto} no existe en la bd`);
            }
        }, 100)
    });
    
    
}
 /* buscarPorId(2).then(function(res){
     console.info(`-- Su auto es ${res.marca}`);
     return buscarPorId(3)
 }).then(function(res) {
    console.info(`-- Su auto es ${res.marca}`);
    console.info("fin");
 })
 
 .catch(function(error){
     console.error(error);
     console.info("fin");
 }); */

 const  app= async () => {
     console.info("Inicio de la aplicación");
     try {
         let res = await buscarPorId(2);
         console.info(`-- Su auto es ${res.marca}`);
         res = await buscarPorId(2);
         console.info(`-- Su auto es ${res.marca}`);
         console.info("Fin de la app");
     } catch (error) {
         console.error(error);
     }
 }
 
app();
