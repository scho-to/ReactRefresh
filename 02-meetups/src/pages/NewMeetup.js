import { useHistory } from 'react-router-dom';
import urls from '../api/urls';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const history = useHistory();
  
  function addMeetupHandler(meetupData) {
    fetch(urls.FAKEDB_URL, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      history.replace('/');
    });
  }
  
  return(
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm  onAddMeetup={addMeetupHandler}/>
    </section>
  )
};

export default NewMeetupPage;