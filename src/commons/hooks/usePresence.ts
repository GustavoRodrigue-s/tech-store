import { usePresenceContext } from '../components/modules/Presence/hooks';

interface PresenceProps {
  isPresent: boolean | null;
  onExit: (() => void) | null;
}

export const usePresence = (): PresenceProps => {
  const context = usePresenceContext();

  if (context?.isPresent === undefined || !context?.onExit === undefined) {
    return {
      isPresent: null,
      onExit: null,
    };
  }

  return context;
};
