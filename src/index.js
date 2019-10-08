module.exports = function zeros(expression) {
  
  let massiv = expression.split('*');

  let cTwos = 0;
  let cFives = 0;

  for(let i = 0; i < massiv.length; i++){    
    let num;
    let step;

    if (massiv[i].endsWith('!!')) {
      num = massiv[i].slice(0, -2);
      step = 2;
    }else {
      step = 1;
      num = massiv[i].slice(0, -1);
    } 

    while(num >= 1){

      let five = num;
      let two = num;

      while(five % 5 === 0){
        cFives++;
        five /= 5;
      }

      while(two % 2 === 0){
        cTwos++;
        two /= 2; 
      }
      num -= step;
    }
  }

  return Math.min(cTwos, cFives); 
}