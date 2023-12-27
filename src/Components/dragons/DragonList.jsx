import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons, reserveDragon, cancelDragonReservation } from '../../redux/Dragons/dragonSlice';

const DragonList = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const handleReserveDragon = (dragonId) => {
    dispatch(reserveDragon({ dragonId }));
  };

  const handleCancelReservation = (dragonId) => {
    dispatch(cancelDragonReservation({ dragonId }));
  };

  return (
    <div className='text-center'>
      <h2 >Dragon List</h2>
      {dragons.map((dragon) => (
        <div key={dragon.id}>
          <p>{dragon.dragon_name}</p>
          <p>{dragon.reserved ? 'Reserved' : 'Available'}</p>
          <button className='bg-blue-100' onClick={() => handleReserveDragon(dragon.id)}>
            {dragon.reserved ? 'Cancel Reservation??' : 'Reserve Dragon'}
          </button>
          {dragon.reserved && (
            <button className='bg-red-900' onClick={() => handleCancelReservation(dragon.id)}>
              Cancel Reservation
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default DragonList;
