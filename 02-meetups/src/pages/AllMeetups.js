import {useState, useEffect} from 'react';

import MeetupList from '../components/meetups/MeetupList';
import urls from '../api/urls';

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    fetch(urls.FAKEDB_URL).then(response => {
      return response.json();
    }).then(jsonResponse => {
      setIsLoading(false);
      setMeetups(jsonResponse);
    });
  }, []);
  
  
  if (isLoading) {
    return(
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
    
  )
};

export default AllMeetupsPage;