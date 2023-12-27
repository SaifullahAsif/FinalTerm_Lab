import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromProfile } from '../../redux/profile/profileSlice';

const MyProfile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleRemoveFromProfile = (type, itemId) => {
    dispatch(removeFromProfile({ type, itemId }));
  };

  return (
    <div>
      <h2>My Profile</h2>
      <div>
        <h3>Dragons</h3>
        {profile.dragons.map((dragon) => (
          <div key={dragon.id}>
            <p>{dragon.dragon_name}</p>
            <button onClick={() => handleRemoveFromProfile('dragons', dragon.id)}>
              Remove dragon
            </button>
          </div>
        ))}
      </div>
      <div>
        <h3>Missions</h3>
        {profile.missions.map((mission) => (
          <div key={mission.mission_id}>
            <p>{mission.mission_name}</p>
            <button onClick={() => handleRemoveFromProfile('missions', mission.mission_id)}>
              Remove Mission
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
