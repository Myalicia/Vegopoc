import React, {Component} from 'react'
import { Text } from 'react-native'
import {Card, CardSection, Button, Title} from './common'



const RecepieItem = ()=> {
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
      } = styles;
        return(
            <Card>
                <CardSection>
                    <Title title={'Champinjonsoppa'} />
                </CardSection>
                <CardSection>
                    <Button/>
                </CardSection>
                
            </Card>
        )
    }
    const styles = {
        headerContentStyle: {
          flexDirection: 'column',
          justifyContent: 'space-around'
        },
        headerTextStyle: {
          fontSize: 18
        },
        thumbnailStyle: {
          height: 50,
          width: 50
        },
        thumbnailContainerStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          marginRight: 10
        },
        imageStyle: {
          height: 300,
          flex: 1,
          width: null
        }
      }


export default RecepieItem