import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="sofia"
                    />
                </CardSection>

                <CardSection>
                    <Input
                    label="Phone"
                    placeholder="070 777 77 77"

                    />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>
                        create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}
export default EmployeeCreate