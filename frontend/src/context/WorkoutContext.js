import {createContext} from 'react'

export const WorkoutContext = createContext()

export const WorkoutContextProvider = ({children}) => {

    return ( 
        <WorkoutContext.Provider value>
        {children}
            
        </WorkoutContext.Provider>
     );
}
 
