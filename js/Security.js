class Security 
{
   constructor()
   {    
       //creating place to write answer
        this.access1 = createInput("Your answer")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        //creating a button to check the answer
        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Your answer")
        this.access2.position(400,220);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(400,250);
        this.button2.style('background', 'lightgrey');
      
        //add code for creating and positioning the third input box and button
        this.access3 = createInput("Your answer");
        this.access3.position(700,350);
        this.access3.style('background','white');

        this.button3 = createButton("Check")
        this.button3.position(700,380)
        this.button3.style('background','lightgrey')
    }

    display(){

        //if button1 is pressed...
        this.button1.mousePressed(() =>
         {
             //if answer is correct
            if(system.authenticate(accessCode1,this.access1.value()))
            {
                //button and access hide and score increases
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        })

        this.button2.mousePressed(() => 
        {
            if(system.authenticate(accessCode2,this.access2.value()))
            {
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        })

       //add code for what happens when the third button is pressed
        this.button3.mousePressed(() => 
        {
            if(system.authenticate(accessCode3,this.access3.value()))
            {
                this.button3.hide();
                this.access3.hide();
                score ++;
            }
        })

    }
}