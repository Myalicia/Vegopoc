import React, {Component} from 'react'
import { Text, Image } from 'react-native'
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
                    <Title title={'VEGOBURGARE'} />
                </CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: 'https://www.vegourmet.se/wp-content/uploads/2018/02/javligt-gott-burgare-web-1024x630.jpg)' }}
                />
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
          width: 363
        
    
        }
      }


export default RecepieItem