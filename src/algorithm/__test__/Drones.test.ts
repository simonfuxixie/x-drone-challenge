import {Drones} from '../Drones';

describe('test class Drones', () => {

    it('should deduplicate photos with one drone', () => {
        const insStr = 'x^^^x';
        const drone_count = 1;
        const drones = new Drones(insStr, drone_count);
        expect(drones.execute().length).toEqual(2);
    })

    it('should deduplicate photos with one drone', () => {
        const insStr = 'x^^^x>>>xvvvx<<<x<<<x';
        const drone_count = 1;
        const drones = new Drones(insStr, drone_count);
        expect(drones.execute().length).toEqual(5);
    })

    it('should deduplicate photos with two drones', () => {
        const insStr = 'x^x^x^x^';
        const drone_count = 2;
        const drones = new Drones(insStr, drone_count);
        expect(drones.execute().length).toEqual(1);
    })

    it('should deduplicate photos with three drones', () => {
        const insStr = 'x^vx^vx^vx^v';
        const drone_count = 3;
        const drones = new Drones(insStr, drone_count);
        expect(drones.execute().length).toEqual(1);
    })

})