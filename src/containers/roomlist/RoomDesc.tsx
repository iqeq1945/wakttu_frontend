import { RoomDesc as CRoomDesc } from '@/components';
import { useEffect, useState } from 'react';

const RoomDesc = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) setLoading(true);
  }, [isLoading]);

  return isLoading && <CRoomDesc />;
};

export default RoomDesc;
