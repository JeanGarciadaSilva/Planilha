function fizzbuzz(max) {

for(let i=1; i<=20; i++) {
    let mensagem = ""   
    if (i%3 === 0) {
      mensagem = mensagem + "Fizz"   
    }
    if (i%5 === 0) {
      mensagem += "Buzz"
   } 
    if (mensagem.length === 0) {
    mensagem = String(i)   
   }
  console.log (mensagem)
}
}