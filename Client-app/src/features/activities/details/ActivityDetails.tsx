import React from 'react'
import { Activity } from '../../../Models/Activity'
import { Button, Card,Image } from 'semantic-ui-react';

interface Props{
    activity: Activity;
    cancelActivity: ()=>void;
    formOpen: (id?: string)=>void;
}

function ActivityDetails({activity,cancelActivity,formOpen}:Props) {
  return (
    <Card fluid raised>
    <Image src={`/assests/categoryImages/${activity.category}.jpg`} />
    <Card.Content>
      <Card.Header>{activity.title}</Card.Header>
      <Card.Meta>
        <span >{activity.date}</span>
      </Card.Meta>
      <Card.Description>
        {activity.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Button.Group widths='2'>
            <Button basic color='blue' content='Edit' onClick={()=>{formOpen(activity.id)}}/>
            <Button basic color='grey' content='Cancel' onClick={()=>{cancelActivity()}}/>
        </Button.Group>
    </Card.Content>
  </Card>
  )
}

export default ActivityDetails