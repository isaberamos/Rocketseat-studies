var unusualPropertyNames = {
    "": "Uma string vazia",
    "!": "Bang!"
  }
  //console.log(unusualPropertyNames."");   // SyntaxError: string inesperada
  console.log(unusualPropertyNames[""]);  // Um string vazia
 // console.log(unusualPropertyNames.!);    // SyntaxError: símbolo ! inesperado
  console.log(unusualPropertyNames["!"]); // Bang!