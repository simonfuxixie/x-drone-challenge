import {DeduplicateCoordinate} from '../DeduplicateCoordinate';

describe('test class DeduplicateCoordinate', () => {

    it('should deduplicate coordinate 01', () => {
        const dcoord = [ [ 4, 2 ], [ 6, 2 ], [ 6, 4 ], [ 4, 4 ], [ 4, 2 ], [ 4, 0 ] ];
        const coord = DeduplicateCoordinate.execute(dcoord);
        expect(coord.length).toEqual(5);
    })

    it('should deduplicate coordinate 02', () => {
        const dcoord = [ [ 4, 5 ], [ 6, 2 ], [ 6, 4 ], [ 4, 5 ], [ 4, 2 ], [ 6, 2 ] ];
        const coord = DeduplicateCoordinate.execute(dcoord);
        expect(coord.length).toEqual(4);
    })

})
