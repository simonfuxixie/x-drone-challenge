export class PhotosCoordinate {
    instructionStr: string
    photosCoordinate: Array<Array<number>>
    constructor(instructionStr: string) {
        this.instructionStr = instructionStr
        this.photosCoordinate = new Array()
    }

    // get index of each x in instruction string 
    getIndexOfEachx (insStr: string): Array<number> {
        // store index value of each x in an array
        const indexValueOfx = [];
        for(let i = 0; i < insStr.length; i ++){
            if(insStr[i] === 'x' ){
                indexValueOfx.push(i);
            }
        }
        // return the array which stored index value of each x
        return indexValueOfx;
    };

    createCoordinate () {
        const indexValueOfx = this.getIndexOfEachx(this.instructionStr);
    
        for(let i = 0; i < indexValueOfx.length; i++){
          let fragmentRoute = this.instructionStr.slice(0,indexValueOfx[i]);
          let singleCoordinate = new Array();
              
          // count ^ v > <
          let northCounts = (String(fragmentRoute).match(/\^/g) || []).length;
          let southCounts = (String(fragmentRoute).match(/v/g) || []).length;
          let eastCounts = (String(fragmentRoute).match(/>/g) || []).length;
          let westCounts = (String(fragmentRoute).match(/</g) || []).length;
    
          let xCoordinate = eastCounts - westCounts;
          let yCoordinate = northCounts - southCounts;
    
          singleCoordinate = [xCoordinate, yCoordinate];
          this.photosCoordinate.push(singleCoordinate);
    
        }    
        
        // return
        return this.photosCoordinate;
      }

}