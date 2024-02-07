import {useEffect, useState} from 'react'
//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
const Home = () => {
    const [workouts,setWorkouts] = useState(null)
    useEffect(() => {
        const fetchWorkouts = async() => {
            const response = await fetch('/api/workout')
            const json = await response.json()

                if (response.ok){
                    setWorkouts(json)
                }
              }
              fetchWorkouts()  // callback function
    }, [])


    return(
        <div className="home">
            < div className='workouts'>
            {workouts && workouts.map((x) =>(
                <WorkoutDetails key={x._id} workoutEach= {x}/>
            ))
            }
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home