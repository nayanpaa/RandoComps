import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({to, children, className, activeClassName}) {
  //to is the path where we're going
  //children is the text we want to show in the anker element

  const { navigate, currentPath} = useNavigation(); //custom hook

  const classes = classNames(
    'text-blue-500', 
    className, 
    currentPath === to && activeClassName
  );//if current path is equal to to, then we have an active classname

  const handleClick = (event) => {
    if (event.metaKey) {
      return;
    }
    event.preventDefault(); //prevents total refresh

    navigate(to);
  };

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>


}//this should not trigger a total refresh

export default Link;