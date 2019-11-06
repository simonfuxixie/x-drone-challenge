// import module
import { Drones } from '../algorithm/Drones';

// controller
export default (req, res, next) => {
  console.log('req.body: ', req.body);
  const { instructions, drone_counts } = req.body;

  if(!instructions || !drone_counts || +drone_counts > 2){
    next(new Error('no valid instructions or drone number'));
  }

  const drones = new Drones(instructions, drone_counts);  
  
  // return res.send(uniqueArr.deduplication().length);
  res.json({uniqueShots: `${drones.execute().length}`});
}
