module.exports.lotto = function Lotto(drawing) {
    this.counter = 0;
    this.drawing = drawing ;
    this.tipps = new Array();

    //Checkt ob ein wert in Tipps vorkommt
    this.isInTipps = function(aTipp) {
        let found=false;
        for(let j = 0; j < 6; j++) {
            if (this.tipps[j] == aTipp) {
                j = 5;
                found = true;
            }
        }
        return found;
    };

    //vergleicht Drawing und Tipps
    this.compareDrawingAndTipps = function() {

      let found = false;
      let i = 0;
      do{
          found=this.isInTipps(this.drawing[i]);
          i++;
      }while(i < 6 && found == true);
    return found;
    };

    //Belegt Tipps neu falls kein gleicher Wert gefunden wurde.
    this.simulate = function (){
        let currentNumber;
        do {
            for (let i = 0; i < 6; i++) {
                do {
                    currentNumber = Math.floor(Math.random() * (40)) + 1;
                } while (this.isInTipps(currentNumber)==true)
                this.tipps[i] = currentNumber;
            }
            this.counter++;
        }while(this.compareDrawingAndTipps()!= true);
        return this.counter;
    };
};

