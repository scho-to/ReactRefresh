import MeetupItem from './MeetupItem';

import classes from './MeetupList.module.css';

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map(item => {
        return (
          <MeetupItem 
            key={item.id} 
            id={item.id} 
            image={item.data.image} 
            title={item.data.title}
            address={item.data.address}
            description={item.data.description}
          />
        );
      })}
    </ul>
  )
};

export default MeetupList;