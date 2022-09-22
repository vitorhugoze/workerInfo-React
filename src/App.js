import React, {useState, useEffect} from 'react';
import './App.css';
import Select from './Select';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    setLoading(true);
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if(loading){
    return <h2>Loading page...</h2>
  }

  try {
    const {company, title, dates, duties} = jobs[value];
    return (
      <div id="main">
        <div><Select jobs={jobs} setValue={setValue}/></div>
        <div className='infoContainer'>
          <h2 id='title'>{title}</h2>
          <h3 id='nameEl'>{company}</h3>
          <h4 id='datesEl'>{dates}</h4>
          <p>{duties[0]}</p>
          <p>{duties[1]}</p>
          <p>{duties[2]}</p>
          <button>Show more</button>
        </div>
      </div>
      
    );
  } catch (error) {
    console.log(error);
    console.log(jobs[value]);
  }

}

export default App;
