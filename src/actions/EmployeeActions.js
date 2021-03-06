import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'
import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCESS
} from "./types";

export const employeeUpdate = ({ prop, value })=> {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }

}


export const employeeCreate = ({name, phone, ingredients, instructions})=> {
    const {currentUser} = firebase.auth()
    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name, phone, ingredients, instructions})
        .then( () => {
        dispatch({ type: EMPLOYEE_CREATE})
        Actions.pop() 
        })
     
    }
    
}

export const employeesFetch  = () => {
    const {currentUser} = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()})
        })
    }

}

export const employeeSave = ({name, phone,ingredients, instructions, uid}) => {
    const {currentUser} = firebase.auth()
    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({name, phone, ingredients, instructions})
        .then (() => {
        dispatch({ type: EMPLOYEE_CREATE})
        Actions.pop({type: 'replace'})
        
        
        
        })
    }
}

export const employeeDelete = ({uid}) => {
    const {currentUser} = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then( () => {
        dispatch({ type: EMPLOYEE_CREATE})
        Actions.pop({type: 'replace'})
        })
    }
}