
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';
import NewMeetUpForm from '../../components/meetups/NewMeetupForm';


const NewMeetUp = () => {

  const router = useRouter()

 async function newMeetHandler(enteredInfo){
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredInfo),
      header: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    console.log(data)
    router.push('/')

  }
  return (
      <NewMeetUpForm onAddMeetup={newMeetHandler}/>
  )
}

export default NewMeetUp