import { Component, OnInit } from '@angular/core';
// import { File } from '@ionic-native';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ActivatedRoute, Router } from '@angular/router';
// import { NavController,ToastController} from '@ionic-angular';


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.page.html',
  styleUrls: ['./pdf.page.scss'],
})
export class PdfPage implements OnInit {

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

  constructor(private route:ActivatedRoute,private router:Router){}
    // public navCtrl: NavController, public file: File ,public toastCtrl: ToastController) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params =>
 {
     console.log(params);
     
      this.finalAmount = params.finalAmount;

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

      this.numEspresso1= params.numEspresso1;
      this.numCaffeAmericano1= params.numCaffeAmericano1;
      this.numLatteMacchiato1= params.numLatteMacchiato1;
      this.numFlatWhite1= params.numFlatWhite1;
      this.numCappuccino1= params.numCappuccino1;
      this.numCaffeLatte1= params.numCaffeLatte1;

      console.log(this.finalAmount,this.exCaffeLatte,this.totCaffeLatte,this.amtCaffeLatte,
        this.exCappuccino, this.totCappuccino,  this.amtCappuccino,this.exFlatWhite, this.totFlatWhite,
        this.amtFlatWhite, this.exLatteMacchiato, this.totLatteMacchiato, this.amtLatteMacchiato,
        this.exCaffeAmericano,this.totCaffeAmericano, this.amtCaffeAmericano, this.exEspresso,
        this.totEspresso ,this.amtEspresso,this.txt1,this.txt2,this.txt3,this.txt4,this.txt5,this.txt6,this.c1,
        this.c2,this.c3,this.c4 ,this.c5,this.c6,this.numCaffeLatte1,this.numCappuccino1,this.numFlatWhite1,
        this.numLatteMacchiato1,this.numCaffeAmericano1,this.numEspresso1);      
});
  }
change(){
  console.log(this.finalAmount);
  
  this.router.navigate(['/add'], { queryParams:{ finalAmount:this.finalAmount,exCaffeLatte:this.exCaffeLatte,totCaffeLatte:this.totCaffeLatte,amtCaffeLatte:this.amtCaffeLatte,
    exCappuccino:this.exCappuccino, totCappuccino:this.totCappuccino,  amtCappuccino:this.amtCappuccino,exFlatWhite:this.exFlatWhite, totFlatWhite:this.totFlatWhite,
    amtFlatWhite:this.amtFlatWhite, exLatteMacchiato:this.exLatteMacchiato, totLatteMacchiato:this.totLatteMacchiato, amtLatteMacchiato:this.amtLatteMacchiato,
    exCaffeAmericano:this.exCaffeAmericano,totCaffeAmericano:this.totCaffeAmericano, amtCaffeAmericano:this.amtCaffeAmericano, exEspresso:this.exEspresso,
    totEspresso:this.totEspresso ,amtEspresso:this.amtEspresso,c1:this.c1,
    c2:this.c2,c3:this.c3,c4:this.c4 ,c5:this.c5,c6:this.c6, numCaffeLatte1:this.numCaffeLatte1,numCappuccino1:this.numCappuccino1,numFlatWhite1:this.numFlatWhite1,
    numLatteMacchiato1:this.numLatteMacchiato1,numCaffeAmericano1:this.numCaffeAmericano1,numEspresso1:this.numEspresso1} });
   
}
payments(){
  console.log(this.finalAmount,this.exCaffeLatte,this.totCaffeLatte,this.amtCaffeLatte,
    this.exCappuccino, this.totCappuccino,  this.amtCappuccino,this.exFlatWhite, this.totFlatWhite,
    this.amtFlatWhite, this.exLatteMacchiato, this.totLatteMacchiato, this.amtLatteMacchiato,
    this.exCaffeAmericano,this.totCaffeAmericano, this.amtCaffeAmericano, this.exEspresso,
    this.totEspresso ,this.amtEspresso,this.txt1,this.txt2,this.txt3,this.txt4,this.txt5,this.txt6,this.c1,
    this.c2,this.c3,this.c4 ,this.c5,this.c6,this.numCaffeLatte1,this.numCappuccino1,this.numFlatWhite1,
    this.numLatteMacchiato1,this.numCaffeAmericano1,this.numEspresso1);

  this.router.navigate(['/payments'], { queryParams:{ finalAmount:this.finalAmount,exCaffeLatte:this.exCaffeLatte,totCaffeLatte:this.totCaffeLatte,amtCaffeLatte:this.amtCaffeLatte,
    exCappuccino:this.exCappuccino, totCappuccino:this.totCappuccino,  amtCappuccino:this.amtCappuccino,exFlatWhite:this.exFlatWhite, totFlatWhite:this.totFlatWhite,
    amtFlatWhite:this.amtFlatWhite, exLatteMacchiato:this.exLatteMacchiato, totLatteMacchiato:this.totLatteMacchiato, amtLatteMacchiato:this.amtLatteMacchiato,
    exCaffeAmericano:this.exCaffeAmericano,totCaffeAmericano:this.totCaffeAmericano, amtCaffeAmericano:this.amtCaffeAmericano, exEspresso:this.exEspresso,
    totEspresso:this.totEspresso ,amtEspresso:this.amtEspresso,txt1:this.txt1,txt2:this.txt2,txt3:this.txt3,txt4:this.txt4,txt5:this.txt5,txt6:this.txt6,c1:this.c1,
    c2:this.c2,c3:this.c3,c4:this.c4 ,c5:this.c5,c6:this.c6,
    numCaffeLatte1:this.numCaffeLatte1,numCappuccino1:this.numCappuccino1,numFlatWhite1:this.numFlatWhite1,
    numLatteMacchiato1:this.numLatteMacchiato1,numCaffeAmericano1:this.numCaffeAmericano1,numEspresso1:this.numEspresso1} });

}
  makePdf(){
    pdfmake.vfs = pdfFonts.pdfMake.vfs;
    var docDefinition = {
    content: [
    {
      
    columns: [
    {
    image: 'data:image/jpeg;base64,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',
    fit: [100, 100],
    
    },

  {text: 'LaCafe Coffee', style: 'heading' },
    [
     
    { text: 'LaCafe Coffee', style: 'header' },
    { text: 'Cryptocurrency Payment System', style: 'sub_header' },
    { text: 'WEBSITE: https://lacafecoffee.org/', style: 'url' },
    ]
    ]
  },
//====end of column =======
[
  {text: 'Expresso', style: 'body' },
  {text: 'Cafffe Americano', style: 'body' },
  {text: 'Latte Macchiato', style: 'body' },
  {text: 'Flat White', style: 'body' },
  {text: 'Cappiccino', style: 'body' },
  {text: 'Caffe Latte', style: 'body' },
  {text: 'Total Amount', style: 'h1' },
  
],
[
  {text: 'Expresso', style: 'body' },
  {text: 'Cafffe Americano', style: 'body' },
  {text: 'Latte Macchiato', style: 'body' },
  {text: 'Flat White', style: 'body' },
  {text: 'Cappiccino', style: 'body' },
  {text: 'Caffe Latte', style: 'body' },
  {text: 'Total Amount', style: 'h1' },
  
],
[
  {text: 'Expresso', style: 'h2' },
  {text: 'Cafffe Americano', style: 'h2' },
  {text: 'Latte Macchiato', style: 'h2' },
  {text: 'Flat White', style: 'h2' },
 
  
]

    ],
    styles: {
      heading: {
      bold: true,
      fontSize: 25,
      alignment: 'center',
      color: '#3b3302'
      },
      body: {
        
        fontSize: 15,
        alignment: 'left'
      },
      h1: {
        bold: true,
        fontSize: 15,
        alignment: 'left'
      },
    header: {
    bold: true,
    fontSize: 10,
    alignment: 'right'
    },
    sub_header: {
    fontSize: 9,
    alignment: 'right'
    },
    url: {
    fontSize: 8,
    alignment: 'right'
    }
    },
    pageSize: 'A4',
    pageOrientation: 'portrait'
    };
    pdfmake.createPdf(docDefinition).open();
    }

    print(){
window.print();
    }
}
