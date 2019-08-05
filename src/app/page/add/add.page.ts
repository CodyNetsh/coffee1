import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
numEspresso:number = 0;
numCaffeAmericano:number = 0;
numLatteMacchiato:number = 0;
numFlatWhite:number = 0;
numCappuccino:number = 0;
numCaffeLatte:number = 0;

totEspresso:number = 0;
totCaffeAmericano:number = 0;
totLatteMacchiato:number = 0;
totFlatWhite:number = 0;
totCappuccino:number = 0;
totCaffeLatte:number = 0;

numCream:number = 0;
numChocolate:number = 0;
num6Cream: number = 0;
num6Chocolate: number = 0;
num5Chocolate: number = 0;
num5Cream: number = 0;
num4Chocolate: number = 0;
num4Cream: number = 0;
num3Chocolate: number = 0;
num3Cream: number = 0;
num2Chocolate: number = 0;
num2Cream: number = 0;

exEspresso:number = 0;
exCaffeAmericano:number = 0;
exLatteMacchiato:number = 0;
exFlatWhite:number = 0;
exCappuccino:number = 0;
exCaffeLatte:number = 0;

amtEspresso:number  = this.totEspresso + this.exEspresso;
amtCaffeAmericano:number  = this.totCaffeAmericano + this.exCaffeAmericano;
amtLatteMacchiato:number  = this.totLatteMacchiato + this.exLatteMacchiato;
amtFlatWhite:number  = this.totFlatWhite + this.exFlatWhite;
amtCappuccino:number  = this.totCappuccino + this.exCappuccino;
amtCaffeLatte:number  = this.totCaffeLatte + this.exCaffeLatte;


finalAmount:number = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
 + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;

 

  txt1;txt2;txt3;txt4;txt5;txt6;
  c1;c2;c3;c4;c5;c6;
  numEspresso1;
numCaffeAmericano1;
numLatteMacchiato1;
numFlatWhite1;
numCappuccino1;
numCaffeLatte1;
  constructor(private router:Router) { 
    }

  ngOnInit() {
  }

  minus1(){

  console.log(this.numEspresso -= 1)
  console.log(this.totEspresso -=15)

  if(this.numEspresso <= 0){
    this.numEspresso = 0;
}
if(this.totEspresso <= 0){
  this.totEspresso = 0;
}

this.amtEspresso = this.totEspresso + this.exEspresso;
this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
+ this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;
  }
  add1(){
console.log(this.numEspresso += 1)
console.log(this.totEspresso +=15)

this.amtEspresso = this.totEspresso + this.exEspresso;
this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
+ this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte; 
 } 

  minus1Cream(){
    console.log(this.numCream -= 1)
    console.log(this.exEspresso -=5)
  
    if(this.numCream <= 0){
      this.numCream = 0;
  }
  if(this.exEspresso <= 0){
    this.exEspresso = 0;
  }
  this.amtEspresso = this.totEspresso + this.exEspresso;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte; 
 }
  add1Cream(){
    console.log(this.numCream += 1)
    console.log(this.exEspresso +=5)
    this.amtEspresso = this.totEspresso + this.exEspresso;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  }
  minus1Chocolate(){
    console.log(this.numChocolate -= 1)
    console.log(this.exEspresso -=7)
  
    if(this.numChocolate <= 0){
      this.numChocolate = 0;
  }
  if(this.exEspresso <= 0){
    this.exEspresso = 0;
  }
   this.amtEspresso = this.totEspresso + this.exEspresso;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  
}
  add1Chocolate(){
    console.log(this.numChocolate += 1)
    console.log(this.exEspresso +=7)
    this.amtEspresso = this.totEspresso + this.exEspresso;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  
  }
  //=====================================================================
  minus2(){
    console.log(this.numCaffeAmericano -= 1)
    console.log(this.totCaffeAmericano -=25)
  
    if(this.numCaffeAmericano <= 0){
      this.numCaffeAmericano = 0;
  }
  if(this.totCaffeAmericano <= 0){
    this.totCaffeAmericano = 0;
  }
  this.amtCaffeAmericano  = this.totCaffeAmericano + this.exCaffeAmericano;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  
}
  add2(){
    console.log(this.numCaffeAmericano += 1)
    console.log(this.totCaffeAmericano +=25)
    this.amtCaffeAmericano = this.totCaffeAmericano + this.exCaffeAmericano;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  
  } 

  
  minus2Cream(){
    console.log(this.num2Cream -= 1)
    console.log(this.exCaffeAmericano -=5)
  
    if(this.num2Cream <= 0){
      this.num2Cream = 0;
  }
  if(this.exCaffeAmericano <= 0){
    this.exCaffeAmericano = 0;
  }
  this.amtCaffeAmericano = this.totCaffeAmericano + this.exCaffeAmericano;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  
}
  
  add2Cream(){
    console.log(this.num2Cream += 1)
    console.log(this.exCaffeAmericano +=5)

    this.amtCaffeAmericano = this.totCaffeAmericano + this.exCaffeAmericano;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  
  }
  minus2Chocolate(){
    console.log(this.num2Chocolate -= 1)
    console.log(this.exCaffeAmericano -=7)
  
    if(this.num2Chocolate <= 0){
      this.num2Chocolate = 0;
  }
  if(this.exCaffeAmericano <= 0){
    this.exCaffeAmericano = 0;
  } 
  this.amtCaffeAmericano = this.totCaffeAmericano + this.exCaffeAmericano;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  
}
  add2Chocolate(){
    console.log(this.num2Chocolate += 1)
    console.log(this.exCaffeAmericano +=7)
    this.amtCaffeAmericano = this.totCaffeAmericano + this.exCaffeAmericano;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte; 
   }
  //=====================================================================
  minus3(){
    console.log(this.numLatteMacchiato -= 1)
    console.log(this.totLatteMacchiato -=20)
  
    if(this.numLatteMacchiato <= 0){
      this.numLatteMacchiato = 0;
  }
  if(this.totLatteMacchiato <= 0){
    this.totLatteMacchiato = 0;
  }
  this.amtLatteMacchiato = this.totLatteMacchiato + this.exLatteMacchiato;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte; 
}
  add3(){
    console.log(this.numLatteMacchiato += 1)
    console.log(this.totLatteMacchiato +=20)
    this.amtLatteMacchiato = this.totLatteMacchiato + this.exLatteMacchiato;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte; 
  } 

  
  minus3Cream(){
    console.log(this.num3Cream -= 1)
    console.log(this.exLatteMacchiato -=5)
  
    if(this.num3Cream <= 0){
      this.num3Cream = 0;
  }
  if(this.exLatteMacchiato <= 0){
    this.exLatteMacchiato = 0;
  }
  this.amtLatteMacchiato = this.totLatteMacchiato+ this.exLatteMacchiato;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  }
  add3Cream(){
    console.log(this.num3Cream += 1)
    console.log(this.exLatteMacchiato +=5)
    this.amtLatteMacchiato = this.totLatteMacchiato + this.exLatteMacchiato;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  }
  minus3Chocolate(){
    console.log(this.num3Chocolate -= 1)
    console.log(this.exLatteMacchiato -=7)
  
    if(this.num3Chocolate <= 0){
      this.num3Chocolate = 0;
  }
  if(this.exLatteMacchiato <= 0){
    this.exLatteMacchiato = 0;
  } this.amtLatteMacchiato = this.totLatteMacchiato + this.exLatteMacchiato;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  }
  add3Chocolate(){
    console.log(this.num3Chocolate += 1)
    console.log(this.exLatteMacchiato +=7)
    this.amtLatteMacchiato = this.totLatteMacchiato + this.exLatteMacchiato;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte; 
   }
    //=====================================================================

  minus4(){
    console.log(this.numFlatWhite -= 1)
    console.log(this.totFlatWhite -=25)
  
    if(this.numFlatWhite <= 0){
      this.numFlatWhite = 0;
  }
  if(this.totFlatWhite <= 0){
    this.totFlatWhite = 0;
  }
  this.amtFlatWhite = this.totFlatWhite + this.exFlatWhite;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;
}
  add4(){
    console.log(this.numFlatWhite += 1)
    console.log(this.totFlatWhite +=25)
    this.amtFlatWhite = this.totFlatWhite + this.exFlatWhite;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;
  } 
  
  minus4Cream(){
    console.log(this.num4Cream -= 1)
    console.log(this.exFlatWhite -=5)
  
    if(this.num4Cream <= 0){
      this.num4Cream = 0;
  }
  if(this.exFlatWhite <= 0){
    this.exFlatWhite = 0;
  }
  this.amtFlatWhite = this.totFlatWhite + this.exFlatWhite;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  
}
  add4Cream(){
    console.log(this.num4Cream += 1)
    console.log(this.exFlatWhite +=5)
    this.amtFlatWhite = this.totFlatWhite + this.exFlatWhite;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  }
  minus4Chocolate(){
    console.log(this.num4Chocolate -= 1)
    console.log(this.exFlatWhite -=7)
  
    if(this.num4Chocolate <= 0){
      this.num4Chocolate = 0;
  }
  if(this.exFlatWhite <= 0){
    this.exFlatWhite = 0;
  } this.amtFlatWhite = this.totFlatWhite + this.exFlatWhite;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  }
  add4Chocolate(){
    console.log(this.num4Chocolate += 1)
    console.log(this.exFlatWhite +=7)
    this.amtFlatWhite = this.totFlatWhite + this.exFlatWhite;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;
    } 
   //=====================================================================

  minus5(){
    console.log(this.numCappuccino -= 1)
    console.log(this.totCappuccino -=17)
  
    if(this.numCappuccino <= 0){
      this.numCappuccino = 0;
  }
  if(this.totCappuccino <= 0){
    this.totCappuccino = 0;
  }
  this.amtCappuccino = this.totCappuccino + this.exCappuccino;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte; 
}
  add5(){
    console.log(this.numCappuccino += 1)
    console.log(this.totCappuccino +=17)
    this.amtCappuccino = this.totCappuccino + this.exCappuccino;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte; 
  } 
  
  minus5Cream(){
    console.log(this.num5Cream -= 1)
    console.log(this.exCappuccino -=5)
  
    if(this.num5Cream <= 0){
      this.num5Cream = 0;
  }
  if(this.exCappuccino <= 0){
    this.exCappuccino = 0;
  }
  this.amtCappuccino = this.totCappuccino + this.exCappuccino;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  }
  add5Cream(){
    console.log(this.num5Cream += 1)
    console.log(this.exCappuccino +=5)
    this.amtCappuccino = this.totCappuccino + this.exCappuccino;
    this.finalAmount = this.amtCappuccino;
  }
  minus5Chocolate(){
    console.log(this.num5Chocolate -= 1)
    console.log(this.exCappuccino -=7)
  
    if(this.num5Chocolate <= 0){
      this.num5Chocolate = 0;
  }
  if(this.exCappuccino <= 0){
    this.exCappuccino = 0;
  } this.amtCappuccino = this.totCappuccino + this.exCappuccino;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  }
  add5Chocolate(){
    console.log(this.num5Chocolate += 1)
    console.log(this.exCappuccino +=7)
    this.amtCappuccino = this.totCappuccino + this.exCappuccino;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  }
    //=====================================================================

  minus6(){
    console.log(this.numCaffeLatte -= 1)
    console.log(this.totCaffeLatte -=30)
  
    if(this.numCaffeLatte <= 0){
      this.numCaffeLatte = 0;
  }
  if(this.totCaffeLatte <= 0){
    this.totCaffeLatte = 0;
  }
  this.amtCaffeLatte = this.totCaffeLatte + this.exCaffeLatte;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;
}

  add6(){
    console.log(this.numCaffeLatte += 1)
    console.log(this.totCaffeLatte +=30)
    this.amtCaffeLatte = this.totCaffeLatte + this.exCaffeLatte;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;
  } 
  
  minus6Cream(){
    console.log(this.num6Cream -= 1)
    console.log(this.exCaffeLatte -=5)
  
    if(this.num6Cream <= 0){
      this.num6Cream = 0;
  }
  if(this.exCaffeLatte <= 0){
    this.exCaffeLatte = 0;
  }
  this.amtCaffeLatte = this.totCaffeLatte + this.exCaffeLatte;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  }
  add6Cream(){
    console.log(this.num6Cream += 1)
    console.log(this.exCaffeLatte +=5)
    this.amtCaffeLatte = this.totCaffeLatte + this.exCaffeLatte;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  }
  minus6Chocolate(){
    console.log(this.num6Chocolate -= 1)
    console.log(this.exCaffeLatte -=7)
  
    if(this.num6Chocolate <= 0){
      this.num6Chocolate = 0;
  }
  if(this.exCaffeLatte <= 0){
    this.exCaffeLatte = 0;
  } this.amtCaffeLatte = this.totCaffeLatte + this.exCaffeLatte;
  this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
  + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte;  }
  add6Chocolate(){
    console.log(this.num6Chocolate += 1)
    console.log(this.exCaffeAmericano +=7)
    this.amtCaffeLatte = this.totCaffeLatte + this.exCaffeLatte;
    this.finalAmount = this.amtEspresso + this.amtCaffeAmericano + this.amtLatteMacchiato
    + this.amtFlatWhite + this.amtCappuccino + this.amtCaffeLatte; 
   }
    done(){
     if(this.amtEspresso > 0){
       this.txt1 =  "Expresso..................... R" + this.amtEspresso +".00"
     }
     if(this.exEspresso > 0){
      this.c1 =  " + Extras......... R" + this.exEspresso +".00"
     }
     if(this.amtCaffeAmericano > 0){
      this.txt2 =  "Cafffe Americano......... R" + this.amtCaffeAmericano +".00"
    }
    if(this.exCaffeAmericano > 0){
      this.c2 =  " + Extras......... R" + this.exCaffeAmericano +".00"
     }
    if(this.amtLatteMacchiato > 0){
      this.txt3 =  "Latte Macchiato........... R" + this.amtLatteMacchiato +".00"
    }
    if(this.exLatteMacchiato > 0){
      this.c3 =  " + Extras........ R" + this.exLatteMacchiato +".00"
     }
    if(this.amtFlatWhite > 0){
      this.txt4 =  "Flat White.................... R" + this.amtFlatWhite +".00"
    }
    if(this.exFlatWhite > 0){
      this.c4 =  " + Extras....... R" + this.exFlatWhite +".00"
     }
    if(this.amtCappuccino > 0){
      this.txt5 =  "Cappiccino................... R" + this.amtCappuccino +".00"
    }
    if(this.exCappuccino > 0){
      this.c5 =  " + Extras........ R" + this.exCappuccino +".00"
     }
    if(this.amtCaffeLatte > 0){
      this.txt6 =  "Caffe Latte.................... R" + this.amtCaffeLatte +".00"
    }
    if(this.exCaffeLatte > 0){
      this.c6 =  " + Extras........ R" + this.exCaffeLatte +".00"
     }

     if(this.numEspresso > 1) {
      this.numEspresso1 = this.numEspresso
     }
    if(this.numCaffeAmericano > 1) {
      this.numCaffeAmericano1 = this.numCaffeAmericano
    }
    if(this.numLatteMacchiato > 1) {
      this.numLatteMacchiato1 = this.numLatteMacchiato
    }
    if(this.numFlatWhite > 1) {
      this.numFlatWhite1 =this.numFlatWhite 
    }
    if(this.numCappuccino > 1) {
      this.numCappuccino1 = this.numCappuccino
    }
    if(this.numCaffeLatte > 1) {
      this.numCaffeLatte1 = this.numCaffeLatte 
    }

      console.log(this.finalAmount,this.exCaffeLatte,this.totCaffeLatte,this.amtCaffeLatte,
        this.exCappuccino, this.totCappuccino,  this.amtCappuccino,this.exFlatWhite, this.totFlatWhite,
        this.amtFlatWhite, this.exLatteMacchiato, this.totLatteMacchiato, this.amtLatteMacchiato,
        this.exCaffeAmericano,this.totCaffeAmericano, this.amtCaffeAmericano, this.exEspresso,
        this.totEspresso ,this.amtEspresso,this.txt1,this.txt2,this.txt3,this.txt4,this.txt5,this.txt6,this.c1,
        this.c2,this.c3,this.c4 ,this.c5,this.c6,this.numCaffeLatte1,this.numCappuccino1,this.numFlatWhite1,
        this.numLatteMacchiato1,this.numCaffeAmericano1,this.numEspresso1);
  
      this.router.navigate(['/pdf'], { queryParams:{ finalAmount:this.finalAmount,exCaffeLatte:this.exCaffeLatte,totCaffeLatte:this.totCaffeLatte,amtCaffeLatte:this.amtCaffeLatte,
        exCappuccino:this.exCappuccino, totCappuccino:this.totCappuccino,  amtCappuccino:this.amtCappuccino,exFlatWhite:this.exFlatWhite, totFlatWhite:this.totFlatWhite,
        amtFlatWhite:this.amtFlatWhite, exLatteMacchiato:this.exLatteMacchiato, totLatteMacchiato:this.totLatteMacchiato, amtLatteMacchiato:this.amtLatteMacchiato,
        exCaffeAmericano:this.exCaffeAmericano,totCaffeAmericano:this.totCaffeAmericano, amtCaffeAmericano:this.amtCaffeAmericano, exEspresso:this.exEspresso,
        totEspresso:this.totEspresso ,amtEspresso:this.amtEspresso,txt1:this.txt1,txt2:this.txt2,txt3:this.txt3,txt4:this.txt4,txt5:this.txt5,txt6:this.txt6,c1:this.c1,
        c2:this.c2,c3:this.c3,c4:this.c4 ,c5:this.c5,c6:this.c6,
        numCaffeLatte1:this.numCaffeLatte1,numCappuccino1:this.numCappuccino1,numFlatWhite1:this.numFlatWhite1,
        numLatteMacchiato1:this.numLatteMacchiato1,numCaffeAmericano1:this.numCaffeAmericano1,numEspresso1:this.numEspresso1} });
       
    }
}
