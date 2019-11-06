
// Deduplicate coordinate Array:
// [ [ 4, 2 ], [ 6, 2 ], [ 6, 4 ], [ 4, 4 ], [ 4, 2 ], [ 4, 0 ] ]
// [ [ 4, 2 ], [ 6, 2 ], [ 6, 4 ], [ 4, 4 ], [ 4, 0 ] ]
export class DeduplicateCoordinate {
      
    public static execute (dcoord: Array<Array<number>>)  { 
        return Array.from(new Set(dcoord.map(JSON.stringify)), JSON.parse);        
    }

  }

