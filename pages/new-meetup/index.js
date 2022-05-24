
import NewMeetUpForm from '../../components/meetups/NewMeetupForm';


const NewMeetUp = () => {

  const newMeetHandler = (enteredInfo) =>{
    console.log(enteredInfo)
  }
  return (
      <NewMeetUpForm onAddMeetup={newMeetHandler}/>
  )
}

export default NewMeetUp