let arrowFunction = (a = 10, b= 5) =>{
 let total = a + b
 console.log(total)
}
arrowFunction() //1.1 Ejecuto sin pasar parametros
arrowFunction(a = 10) //1.2 Paso solo un parametro
arrowFunction (a = 10, b = 5)// 1.3 Le paso ambos parametros