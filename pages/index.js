import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'

const HomePage = (props) => {
  return (
        <MeetupList meetups={props.meetups}/>
  )
}

export async function getStaticProps(){

    const client = await MongoClient.connect('mongodb+srv://FlorF:FlorF@cluster0.1zaqa.mongodb.net/meetups?retryWrites=true&w=majority')

    const db = client.db()

    const meetupsCollection = db.collection('meetups')

     const meetups = await meetupsCollection.find().toArray()
     client.close()

    return{
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default HomePage