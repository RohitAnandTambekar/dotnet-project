
import { Activity } from "../../../Models/Activity";
import { Grid, List } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity |undefined;
  selectActivity: (id: string)=>void;
  cancelActivity: ()=>void;
  editMode: boolean;
  formOpen: (id?: string)=>void;
  formClose: ()=>void;
  CreateOrEdit: (activity: Activity)=>void
  deleteActivity: (id: string)=>void;
}

function ActivityDashboard({ activities,selectedActivity,selectActivity,cancelActivity,editMode, formOpen,formClose,CreateOrEdit, deleteActivity }: Props) {
 
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={10}>
          <List>
            <ActivityList
                activities={activities}
                selectActivity={selectActivity}
                deleteActivity={deleteActivity}
            />
          </List>
        </Grid.Column>
        <Grid.Column width={6}>
          {selectedActivity && !editMode && <ActivityDetails activity={selectedActivity} cancelActivity={cancelActivity} formOpen={formOpen}/>}
          {editMode && <ActivityForm activity={selectedActivity} formClose={formClose} CreateOrEdit={CreateOrEdit} />}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default ActivityDashboard;
