class Security {

    constructor(){

        this.access1 = createInput("").attribute("placeholder", "Resposta");
        this.access1.position(100,90);
        this.access1.style('background', 'white');  
        this.access1.style("border", "2px solid black");
        this.access1.style("border-radius", "10px");
        this.access1.style("color", "black");

        this.button1 = createButton('Verificar');
        this.button1.position(100,120);
        this.button1.class("button");   

        this.access2 = createInput("").attribute("placeholder", "Resposta");
        this.access2.position(700,190);
        this.access2.style('background', 'white');  
        this.access2.style("border", "2px solid black");
        this.access2.style("border-radius", "10px");
        this.access2.style("color", "black");

        this.button2 = createButton('Verificar');
        this.button2.position(700,220);
        this.button2.class("button");

        this.access3 = createInput("").attribute("placeholder", "Resposta");
        this.access3.position(100,290);
        this.access3.style('background', 'white');  
        this.access3.style("border", "2px solid black");
        this.access3.style("border-radius", "10px");
        this.access3.style("color", "black");

        this.button3 = createButton('Verificar');
        this.button3.position(100,320);
        this.button3.class("button");

        this.input1CorrectMessage = createP("Correto!");
        this.input1CorrectMessage.position(-200, 60);
        this.input1CorrectMessage.style("color", "lightgreen");

        this.input2CorrectMessage = createP("Correto!");
        this.input2CorrectMessage.position(-200, 160);
        this.input2CorrectMessage.style("color", "lightgreen");

        this.input3CorrectMessage = createP("Correto!");
        this.input3CorrectMessage.position(-200, 260);
        this.input3CorrectMessage.style("color", "lightgreen");

        this.input1WrongMessage = createP("Errado! Tente novamente.");
        this.input1WrongMessage.position(-200, 120);
        this.input1WrongMessage.style("color", "red");
        this.input1WrongMessage.style("opacity", "100%");

        this.input2WrongMessage = createP("Errado! Tente novamente.");
        this.input2WrongMessage.position(-200, 220);
        this.input2WrongMessage.style("color", "red");
        this.input2WrongMessage.style("opacity", "100%");

        this.input3WrongMessage = createP("Errado! Tente novamente.");
        this.input3WrongMessage.position(-200, 300);
        this.input3WrongMessage.style("color", "red");
        this.input3WrongMessage.style("opacity", "100%");
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();

                this.input1CorrectMessage.position(100,60)
                setTimeout(() => {
                    this.input1CorrectMessage.position(-200, 100);
                }, 1000)

                score++;

            } else {

                this.input1WrongMessage.position(100, 100);
                this.input1WrongMessage.style("opacity", "100%");
                this.button1.position(100, 140);

                setTimeout(() => {
                    this.input1WrongMessage.position(-200, 120);
                    this.button1.position(100, 120);
                }, 3000);
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();

                this.input2CorrectMessage.position(700,160);
                setTimeout(() => {
                    this.input2CorrectMessage.position(-200, 100);
                }, 1000)

                score++;

            } else {

                this.input2WrongMessage.position(700, 200);
                this.input2WrongMessage.style("opacity", "100%");
                this.button2.position(700, 240);

                setTimeout(() => {
                    this.input2WrongMessage.position(-200, 220);
                    this.button2.position(700, 220);
                }, 3000);
            }
        });

        this.button3.mousePressed(() => {
             if(system.authenticate(accessCode3,this.access3.value())) {
                 this.button3.hide();
                 this.access3.hide();

                 this.input3CorrectMessage.position(100,260)
                 setTimeout(() => {
                    this.input3CorrectMessage.position(-200, 100);
                }, 1000)

                 score++;

            } else {

                    this.input3WrongMessage.position(100, 300);
                    this.input3WrongMessage.style("opacity", "100%");
                    this.button3.position(100, 340);
    
                    setTimeout(() => {
                        this.input3WrongMessage.position(-200, 300);
                        this.button3.position(100, 320);
                    }, 3000);
                }
            });
        }
    }