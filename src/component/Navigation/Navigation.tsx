import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RootTab } from '../App/AppNavigation/AppNavigation'
import LoginNavigation from '../Login/LoginNavigation/LoginNavigation'
import { UserContext } from '../Login/API/LoginProvider'


const AppNavigation = () => {
    const { isLoggedIn ,user} = useContext(UserContext);
    return (
        <NavigationContainer>
            {isLoggedIn ? <RootTab /> : <LoginNavigation  />}
        </NavigationContainer>
    )
}

export default AppNavigation