
import MeetupList from '../components/meetups/MeetupList'

const HomePage = () => {
    const DUMMY_MEETUP =[
    {
        id: 'm1',
        image: 'https://www.theagilityeffect.com/app/uploads/2019/03/00_VINCI-ICONOGRAPHIE-GettyImages-890132412_1280x680.jpg',
        title: 'First Meetup',
        address: 'Calle falsa, 123',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        image: 'https://www.theagilityeffect.com/app/uploads/2019/03/00_VINCI-ICONOGRAPHIE-GettyImages-890132412_1280x680.jpg',
        title: 'Second Meetup',
        address: 'P Sherman Wallabe 42, Sidney',
        description: 'This is a second meetup!'
    }
    ]
  return (
   
        <MeetupList meetups={DUMMY_MEETUP}/>
   
  )
}

export default HomePage