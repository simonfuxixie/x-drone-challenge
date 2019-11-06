import { PhotosCoordinate } from '../PhotosCoordinate';

describe('test class PhotosCoordinate', () => {
    it('should extract photos coordinates from instruction string', () => {
        const instructionStr = 'x^^^x>>>xvvvx<<<x<<<x';
        const photosCoordinate = new PhotosCoordinate(instructionStr);
        const coord = photosCoordinate.createCoordinate();
        expect(coord[0]).toEqual([0,0]);
        expect(coord[1]).toEqual([0,3]);
        expect(coord[2]).toEqual([3,3]);
        expect(coord[3]).toEqual([3,0]);
        expect(coord[4]).toEqual([0,0]);
        expect(coord[5]).toEqual([-3,0]);
    })
})