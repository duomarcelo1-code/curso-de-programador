 //1//
 
const nota1 = 7
const nota2 = 10
const nota3 = 5

 const promedio = function (nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
 }

console.log("El promedio de historia es de: " + promedio(nota1, nota2, nota3));

//2//

const textarea = document.querySelector("textarea");
 console.log(textarea);

const caracteres = document.getElementById("caracteres");
console.log(caracteres)

textarea.addEventListener("input" , function() {
  
   caracteres.textContent = textarea.value.length;
   
})

