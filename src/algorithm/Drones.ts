import {Allocator} from './Allocator';
import {PhotosCoordinate} from './PhotosCoordinate';
import {DeduplicateCoordinate} from './DeduplicateCoordinate';


export class Drones {
    insStr: string;
    droneCount: number;    

    constructor(insStr: string, droneCount: number){
        this.insStr = insStr;
        this.droneCount = droneCount;        
    }

    execute () {
        const allocator = new Allocator(this.insStr, this.droneCount);       
        const allocatedIns = allocator.allocate(); 
        let allCoordinate = [];

        for (let i =0; i < this.droneCount; i ++) {
            let insStr = allocatedIns[i];
            const photosCoordinate = new PhotosCoordinate(insStr);
            const coord = photosCoordinate.createCoordinate();
            allCoordinate.push(...coord);
        }

        return DeduplicateCoordinate.execute(allCoordinate);

    }


}