import useNavigation from '../hooks/use-navigation';

function Route({path, children}) {
  //useNavigation is a custom hook
  const {currentPath} = useNavigation(); 


  if(path === currentPath) {
    return children;
  }

  return null;
}

export default Route;