import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  //to rerender whenever the user goes back and forth
  
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []); //only want to call it one time, hence the empty array

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  }//whenever someone clicks on a button it brings them to this which changes the search bar

  return(
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;