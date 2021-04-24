export default function Translate(inputNumber) {
  this.inputNumber = inputNumber;
}
  
Translate.prototype.translateRoman = function(inputNumber) {
  let totalNumber = 0
  let y = this.inputNumber.split("");
  for (let i=0; i<y.length; i++){
    if(y[i]==="I") {totalNumber = totalNumber+1}
  }
  return totalNumber
};

Translate.prototype.translateArabic = function() {
  let romanArray = ["I","V","X","L","C","D","M","V̅","X̅","L̅","C̅","D̅","M̅" ]
  let totalNumeral = ""
  let endNumeral = ""
  let numeral = ""
  let y = this.inputNumber
  let z
  for(let k=6;k>0;k=k-1) {  
    for(let m=0;m<4;m++){
      if(y>=10**k)  {
        if (Math.trunc(y/((10**k)*5))>=2) {
          numeral = numeral+ romanArray[((k*2)+2)];
          y=y-10*(10**k)
        }
        else if (Math.trunc((y+(10**k))/((10**k)*5))===2) {
          numeral = numeral +romanArray[((k*2))] + romanArray[((k*2)+2)];
          y=y-9*(10**k)
        }
        else if (Math.trunc(y/((10**k)*5))===1) {
          numeral = numeral+ romanArray[((k*2)+1)];
          y=y-5*(10**k)
        }
        else if (Math.trunc((y+(10**k))/((10**k)*5))===1) {
          numeral = numeral +romanArray[((k*2)+0)] + romanArray[((k*2)+1)];
          y=y-4*(10**k)
        }
      }
    }  
  }    
  for(let h=0;h<y;h++){ 
    if(y >=1 ) {
      if (Math.trunc(y/(1*5))>=2) {
        numeral = numeral+ romanArray[2];
        y=y-10
      }
      else if(Math.trunc((y+1)/(1*5))===2) {
        numeral = numeral + romanArray[0]+romanArray[2];
        y=y-9
      }
      else if(Math.trunc(y/5)===1) {
        numeral = numeral + romanArray[1];
        y=y-5
      }
      else if(Math.trunc((y+1)/5)===1) {
        numeral = numeral + romanArray[0]+romanArray[1];
        y=y-4
      }
    }  
  }  
  let digitRemainder = this.inputNumber % 5;  // makes endNumeral I, II or III
  for(let i=0; i<4; i++){
    if(digitRemainder === i){
      for(let j=0; j<i; j++){
        endNumeral=endNumeral+"I"
      }
    }
  totalNumeral = numeral + endNumeral   
  }  
  return totalNumeral  
};