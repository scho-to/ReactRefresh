import { useContext } from 'react';

import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

import classes from './MeetupItem.module.css';

const MeeupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  
  const itemIsFavorite = favoritesCtx.isFavorite(props.id);
  
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite){
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        data: {
          title: props.tite,
          description: props.description,
          address: props.address,
          image: props.image
        }
      })
    }
  };
  
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
        </div>
      </Card>
    </li>
  )
};

export default MeeupItem;