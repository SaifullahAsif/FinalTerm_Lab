import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../../redux/missions/missionsSlice';

const MissionList = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission({ missionId }));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission({ missionId }));
  };

  return (
    <div>
      <h2>Mission List</h2>
      {missions.map((mission) => (
        <div key={mission.mission_id}>
          <p>{mission.mission_name}</p>
          <p>{mission.reserved ? 'Reserved' : 'Available'}</p>
          <button onClick={() => handleJoinMission(mission.mission_id)}>
            {mission.reserved ? 'Leave Mission' : 'Join Mission'}
          </button>
          {mission.reserved && (
            <button onClick={() => handleLeaveMission(mission.mission_id)}>
              Leave Mission
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MissionList;
