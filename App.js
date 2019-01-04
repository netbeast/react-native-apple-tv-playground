/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {TouchableOpacity, Platform, StyleSheet, Text, View} from 'react-native'

import './js/notifications'
import PushNotification from 'react-native-push-notification'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu TouchableOpacity for dev menu',
})

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onFocus={() => console.log('focused PUSH')} onPress={() => testNotifications('Hey!')}>
          <Text>PUSH</Text>
        </TouchableOpacity>
        <TouchableOpacity onFocus={() => console.log('focused SCHEDULE')} onPress={() => testNotifications('Scheduleeeed')}>
          <Text>SCHEDULE</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

let note = {
  importance: 'high',
  title: "My Notification Title", // (optional)
  tag: 'what',
  playSound: true, // (optional) default: true
  soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
  number: '7',
  actions: '["Yes", "No"]',
  color: "red", // (optional) default: system default
  vibrate: true, // (optional) default: true
  vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
}

function testNotifications (message) {
  console.log('Sending local notification', message)
  PushNotification.localNotification({
    id: '132456',
    ...note,
    message,
  })
}

function testScheduleNotifications (message) {
  console.log('Scheduling local notification', message)
  PushNotification.localNotificationSchedule({
    id: '789012',
    ...note,
    message,
    number: '10',
    date: new Date(Date.now() + 10000), // in 60 secs
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
