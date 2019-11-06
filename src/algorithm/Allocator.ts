export class Allocator {
    insStr: string;
    droneCount: number;
    allocatedIns: Array<any>;    
    constructor(insStr: string, droneCount: number){
        this.insStr = insStr; 
        this.droneCount = droneCount; 
        this.allocatedIns = new Array();
        // create n empty arrays corresponding to n drones 
        for(let i = 0; i < this.droneCount; i ++){
            eval("this.drone_" + i + " = new Array()");    
        } 
    }

    allocate () {        
        this.execute(this.insStr, this.droneCount);
        return this.allocatedIns.map((item, index) => {
            return item.toString().replace(/,/g, '');
        });
    }



    execute (str: string, n: number): Allocator {  
        // divide string 
        let str_first = str.slice(0,n).split(''); // turn string to array
        let str_rest = str.slice(n); // get the rest of string 

        // quit condition 
        if(str.length < n){
            for (let i = 0; i < str.length; i ++) {
                eval(`this.drone_${i}`).push(str_first[i]);

            }
            // put all arrays in array allocatedIns, and then return 
            for (let i = 0; i < n; i ++) {
                this.allocatedIns.push(eval(`this.drone_${i}`));
            }      
            return this;
        }
        // allocate str to corresponding drone 
        for (let i = 0; i < n; i ++) {
            eval(`this.drone_${i}`).push(str_first[i]);
        }
        // recursive, until meet quit condition  
        this.execute(str_rest, n);         
         
    }  
      
}


