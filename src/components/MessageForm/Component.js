import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { Container, Header,Body, Title,Left, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

import PropTypes from 'prop-types'

import translations from '../../i18n'

import styles from './Styles'

const OPACITY_ENABLED = 1.0
const OPACITY_DISABLED = 0.2

class MessageFormComponent extends Component {

    constructor(){
        super()

        this.handleMessageChange = (message) => {
            this.props.updateMessage(message)
        }

        this.handleButtonPress = () => {
            this.props.sendMessage (this.props.message)
        }
    }

    componentDidUpdate(prevProps) {
        if(!prevProps.sendingError && this.props.sendingError) {
            Alert.alert(translations.translations('error'), this.props.sendingError)
        }
    }

    render(){
        const sending = this.props.sending
        const isButtonDisabled = sending || this.props.message.trim().length == 0
        const opacity = isButtonDisabled ? OPACITY_DISABLED : OPACITY_ENABLED

        return (
            <Container style={styles.container}>
                <Button disabled rounded style={styles.buttonRounded}>
                    <Icon nae='add'/>
                </Button>

                <Input
                   style={styles.item}
                   placeholder={translations.translations.t('message')}
                   returnKeyType='send'
                   onChangeText={this.handleMessageChange}
                   value={this.props.message}
                   underlinecolorAndroid=('transparent')
                   editable={!sending}/>

                   <Button
                     style={styles.send}
                     onPress={this.handleButtonPress}
                     disabled={isButtonDisabled}>

                     </Button>
            </Container>


        )
    }
}