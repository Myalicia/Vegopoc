import React from 'react'
import { Scene, Router, Actions} from 'react-native-router-flux'
import LoginForm from './components/loginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please log in" initial/>
                </Scene>

                <Scene key="main">
                    <Scene 
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList}
                    title="Recepies"
                    />
                        
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Recepie"  />
                    <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Recepie" />
                </Scene>
            </Scene>
        </Router>
        
       
    )
}

export default RouterComponent