import { useContext } from 'react';

import { PresenceChildContext } from '../components/modules/PresenceChild';

export const usePresenceContext = () => useContext(PresenceChildContext);
