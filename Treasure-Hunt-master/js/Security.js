class Security {

    constructor(){
 this.input1 = createInput("code1");
 this.input1.position(100,100);
 this.input1.style("background","green");

 this.button1 = createButton("submit");
 this.button1.position(100,130);
 
 this.input2 = createInput("code1");
 this.input2.position(700,190);
 this.input2.style("background","green");

 this.button2 = createButton("submit");
 this.button2.position(700,220);

 this.input3 = createInput("code1");
 this.input3.position(100,300);
 this.input3.style("background","green");

 this.button3 = createButton("submit");
 this.button3.position(100,330);
    }

    display(){

 this.button1.mousePressed(()=>{
     if(system.authenticate(accessCode1,this.input1.value())){
    this.input1.hide();
    this.button1.hide();
    score++;
     }
 }) 

 this.button2.mousePressed(()=>{
    if(system.authenticate(accessCode2,this.input2.value())){
   this.input2.hide();
   this.button2.hide();
   score++;
    }
}) 

this.button3.mousePressed(()=>{
    if(system.authenticate(accessCode3,this.input3.value())){
   this.input3.hide();
   this.button3.hide();
   score++;
    }
}) 

    }
}