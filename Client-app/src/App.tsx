import Navbar from "./components/Navbar"
import React, { useEffect, useState } from "react";

import axios from "axios";
import { Activity } from "./Models/Activity";
import { Container } from "semantic-ui-react";
import ActivityDashboard from "./features/activities/dashboard/ActivityDashboard";
import {v4 as uuid} from 'uuid';

function App() {
  const [activities,setActivities]=useState<Activity[]>([]);
  const [selectedActivity,setSelectedActivity]=useState<Activity | undefined>(undefined);
  const [editMode, seteditMode] = useState(false);
  useEffect(() => {
    
    axios.get<Activity[]>('http://localhost:5000/api/activities').then((response)=>{
      setActivities(response.data);
    });

  }, [])

  function handleSelectActivity(id: string){
    setSelectedActivity(activities.find(x=>x.id===id));
  }

  function cancelSelectedActivity(){
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string){
    id ? handleSelectActivity(id): cancelSelectedActivity();
    seteditMode(true);
  }

  function handleFormClose(){
    seteditMode(false);
  }

  function handleEditorCreate(activity : Activity){
    activity.id ? setActivities([...activities.filter(x=>x.id !==activity.id),activity]) :setActivities([...activities,{... activity,id: uuid()}]);
    seteditMode(false);
    setSelectedActivity(undefined);
  }

  function handleDeleteActivity(id : string){
    setActivities([... activities.filter(x=>x.id!==id)]);
  }

  return (
    <>
      <Navbar formOpen={handleFormOpen}/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard 
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelActivity={cancelSelectedActivity}
          editMode={editMode}
          formOpen={handleFormOpen}
          formClose={handleFormClose}
          CreateOrEdit={handleEditorCreate}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </>
  )
}

export default App
