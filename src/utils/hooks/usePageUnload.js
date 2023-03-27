import {useEffect} from 'react';

const usePageUnload = (wasAnyFormChanged, message, dependants) => {
  useEffect(() => {
    const onUnload = (e) => {
      if (wasAnyFormChanged) {
        e.preventDefault();
        e.returnValue = message;
        return message;
      }
    };
    const unblock = () => {
      return message;
    };

    window.addEventListener('beforeunload', onUnload);

    return () => {
      window.removeEventListener('beforeunload', onUnload);
      if (window.addEventListener('beforeunload', onUnload) && wasAnyFormChanged) {
        confirm(unblock());
      }
    };
  }, dependants);
};

export default usePageUnload;
