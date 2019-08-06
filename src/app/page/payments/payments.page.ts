import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  amtEspresso:number; totEspresso :number; exEspresso:number; 
  amtCaffeAmericano:number;totCaffeAmericano :number; exCaffeAmericano:number; 
  amtLatteMacchiato:number; totLatteMacchiato :number; exLatteMacchiato:number; 
  amtFlatWhite:number; totFlatWhite :number; exFlatWhite:number; 
  amtCappuccino:number; totCappuccino :number; exCappuccino:number; 
  amtCaffeLatte:number; totCaffeLatte :number; exCaffeLatte:number; 
  
    finalAmount:number;
  
    txt1;txt2;txt3;txt4;txt5;txt6;
    c1;c2;c3;c4;c5;c6;
  
  numEspresso1;
  numCaffeAmericano1;
  numLatteMacchiato1;
  numFlatWhite1;
  numCappuccino1;
  numCaffeLatte1;
    
   
  
  LastName:string;
  cardNum:number;
  date = Date.now();
  Amt:number = this.finalAmount;
 
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params =>
 {
     console.log(params);
    
      this.LastName = params.LastName,
      this.cardNum = params.cardNum,
    
     this.date = params.date,
     this.Amt = params.Amt,
     
           
            this.finalAmount = params.finalAmount,
      
            this.amtEspresso = params.amtEspresso,
            this.totEspresso = params.totEspresso,
            this.exEspresso = params.exEspresso,
            this.amtCaffeAmericano = params.amtCaffeAmericano,
            this.totCaffeAmericano = params.totCaffeAmericano,
            this.exCaffeAmericano = params.exCaffeAmericano,
            this.amtLatteMacchiato = params.amtLatteMacchiato,
            this.totLatteMacchiato = params.totLatteMacchiato,
            this.exLatteMacchiato = params.exLatteMacchiato,
            this.amtFlatWhite = params.amtFlatWhite,
            this.totFlatWhite = params.totFlatWhite,
            this.exFlatWhite = params.exFlatWhite,
            this.amtCappuccino = params.amtCappuccino,
            this.totCappuccino = params.totCappuccino,
            this.exCappuccino = params.exCappuccino,
            this.amtCaffeLatte = params.amtCaffeLatte,
            this.totCaffeLatte = params.totCaffeLatte,
            this.exCaffeLatte = params.exCaffeLatte,
      
            this.txt1 = params.txt1,
            this.txt2 = params.txt2,
            this.txt3 = params.txt3,
            this.txt4 = params.txt4,
            this.txt5 = params.txt5,
            this.txt6 = params.txt6,
      
            this.c1 = params.c1,
            this.c2 = params.c2,
            this.c3 = params.c3,
            this.c4 = params.c4,
            this.c5 = params.c5,
            this.c6 = params.c6,
      
            this.numEspresso1= params.numEspresso1,
            this.numCaffeAmericano1= params.numCaffeAmericano1,
            this.numLatteMacchiato1= params.numLatteMacchiato1,
            this.numFlatWhite1= params.numFlatWhite1,
            this.numCappuccino1= params.numCappuccino1,
            this.numCaffeLatte1= params.numCaffeLatte1;
      
            console.log(this.finalAmount,this.exCaffeLatte,this.totCaffeLatte,this.amtCaffeLatte,
              this.exCappuccino, this.totCappuccino,  this.amtCappuccino,this.exFlatWhite, this.totFlatWhite,
              this.amtFlatWhite, this.exLatteMacchiato, this.totLatteMacchiato, this.amtLatteMacchiato,
              this.exCaffeAmericano,this.totCaffeAmericano, this.amtCaffeAmericano, this.exEspresso,
              this.totEspresso ,this.amtEspresso,this.txt1,this.txt2,this.txt3,this.txt4,this.txt5,this.txt6,this.c1,
              this.c2,this.c3,this.c4 ,this.c5,this.c6,this.numCaffeLatte1,this.numCappuccino1,this.numFlatWhite1,
              this.numLatteMacchiato1,this.numCaffeAmericano1,this.numEspresso1, this.LastName,
                this.cardNum,this.date ,
               this.Amt);  

               this.Amt = this.finalAmount;
});
}

pay() {
  this.Amt = this.finalAmount;

  console.log(this.finalAmount,this.exCaffeLatte,this.totCaffeLatte,this.amtCaffeLatte,
    this.exCappuccino, this.totCappuccino,  this.amtCappuccino,this.exFlatWhite, this.totFlatWhite,
    this.amtFlatWhite, this.exLatteMacchiato, this.totLatteMacchiato, this.amtLatteMacchiato,
    this.exCaffeAmericano,this.totCaffeAmericano, this.amtCaffeAmericano, this.exEspresso,
    this.totEspresso ,this.amtEspresso,this.txt1,this.txt2,this.txt3,this.txt4,this.txt5,this.txt6,this.c1,
    this.c2,this.c3,this.c4 ,this.c5,this.c6,this.numCaffeLatte1,this.numCappuccino1,this.numFlatWhite1,
    this.numLatteMacchiato1,this.numCaffeAmericano1,this.numEspresso1,  this.cardNum,this.date ,
    this.Amt,this.LastName)

  this.router.navigate(['/recipt'], { queryParams:{ finalAmount:this.finalAmount,exCaffeLatte:this.exCaffeLatte,totCaffeLatte:this.totCaffeLatte,amtCaffeLatte:this.amtCaffeLatte,
    exCappuccino:this.exCappuccino, totCappuccino:this.totCappuccino,  amtCappuccino:this.amtCappuccino,exFlatWhite:this.exFlatWhite, totFlatWhite:this.totFlatWhite,
    amtFlatWhite:this.amtFlatWhite, exLatteMacchiato:this.exLatteMacchiato, totLatteMacchiato:this.totLatteMacchiato, amtLatteMacchiato:this.amtLatteMacchiato,
    exCaffeAmericano:this.exCaffeAmericano,totCaffeAmericano:this.totCaffeAmericano, amtCaffeAmericano:this.amtCaffeAmericano, exEspresso:this.exEspresso,
    totEspresso:this.totEspresso ,amtEspresso:this.amtEspresso,txt1:this.txt1,txt2:this.txt2,txt3:this.txt3,txt4:this.txt4,txt5:this.txt5,txt6:this.txt6,c1:this.c1,
    c2:this.c2,c3:this.c3,c4:this.c4 ,c5:this.c5,c6:this.c6,
    numCaffeLatte1:this.numCaffeLatte1,numCappuccino1:this.numCappuccino1,numFlatWhite1:this.numFlatWhite1,
    numLatteMacchiato1:this.numLatteMacchiato1,numCaffeAmericano1:this.numCaffeAmericano1,numEspresso1:this.numEspresso1,
    cardNum:this.cardNum,date:this.date ,
    Amt:this.Amt,LastName:this.LastName} });
}
}

