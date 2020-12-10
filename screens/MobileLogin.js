import * as React from "react"
import Constants from 'expo-constants'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native"
import * as FirebaseRecaptcha from "expo-firebase-recaptcha"
import {FIREBASE_CONFIG,Firebase} from '../config'
import * as firebase from 'firebase'


export default function PhoneAuthScreen({navigation}) {
  const recaptchaVerifier = React.useRef(null)
  const verificationCodeTextInput = React.useRef(null)
  const [phoneNumber, setPhoneNumber] = React.useState("")
  const [verificationId, setVerificationId] = React.useState("")
  const [verifyError, setVerifyError] = React.useState()
  const [verifyInProgress, setVerifyInProgress] = React.useState(false)
  const [verificationCode, setVerificationCode] = React.useState("")
  const [confirmError, setConfirmError] = React.useState()
  const [confirmInProgress, setConfirmInProgress] = React.useState(false)
  const isConfigValid = !!FIREBASE_CONFIG.apiKey


  return (
    <TouchableWithoutFeedback 
    onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <View style={styles.content}>
        <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={FIREBASE_CONFIG}
        />
        {/* <Text style={styles.subtitle}>Welcome to,</Text> */}
        
        {/* <Text style={styles.text}>Enter phone number</Text> */}
        <Text style={{fontSize:23,fontWeight:'500',marginBottom:30}}> ACCOUNT - SIGN IN</Text>

        <TextInput
          style={styles.textInput}
          // autoFocus={isConfigValid}
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          placeholder="Enter Phone Number"
          editable={!verificationId}
          onChangeText={(phoneNumber) => setPhoneNumber("+91"+phoneNumber)}
        />
        <TouchableOpacity
          style={styles.appButtonContainer}
          title={`${verificationId ? "Resend" : "Send"} Verification Code`}
          disabled={!phoneNumber}
          onPress={async () => {
            const phoneProvider = new firebase.auth.PhoneAuthProvider()
            try {
              setVerifyError(undefined)
              setVerifyInProgress(true)
              setVerificationId("")
              const verificationId = await phoneProvider.verifyPhoneNumber(
                phoneNumber,
                // @ts-ignore
                recaptchaVerifier.current
              )
              setVerifyInProgress(false)
              setVerificationId(verificationId)
              verificationCodeTextInput.current?.focus()
            } catch (err) {
              setVerifyError(err)
              setVerifyInProgress(false)
            }
          }}
        >
           <Text style={styles.appButtonText}> {verificationId ? "RESEND VERIFICATION CODE" : "SEND VERIFICATION CODE "} </Text>
          </TouchableOpacity>
        {verifyError && (
          <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>
        )}
        {verifyInProgress && <ActivityIndicator style={styles.loader} />}
        {verificationId ? (
          <Text style={styles.success}>
           A VERIFICATION CODE HAS BEEN SENT TO YOUR PHONE
          </Text>
        ) : undefined}
        {/* <Text style={styles.text}>Enter verification code</Text> */}
        
        <TextInput
        autoFocus={false}
          ref={verificationCodeTextInput}
          style={styles.textInput}
          editable={!!verificationId}
          placeholder="Enter Verification Code"
          onChangeText={(verificationCode) =>
            setVerificationCode(verificationCode)
          }
        />
        <TouchableOpacity
        style={styles.appButtonContainerConfirm}
          disabled={!verificationCode}
          onPress={async () => {
            try {
              setConfirmError(undefined)
              setConfirmInProgress(true)
              const credential = firebase.auth.PhoneAuthProvider.credential(
                verificationId,
                verificationCode
              )
              const authResult = await Firebase
                .auth()
                .signInWithCredential(credential)
              setConfirmInProgress(false)
              setVerificationId("")
              setVerificationCode("")
              verificationCodeTextInput.current?.clear()
            } catch (err) {
              setConfirmError(err)
              setConfirmInProgress(false)
            }
          }}
        >
          <Text style={styles.appButtonTextConfirm}> CONFIRM </Text>
          </TouchableOpacity>
          
        {confirmError && (
          <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>
        )}
        {confirmInProgress && <ActivityIndicator style={styles.loader} />}
      </View>
      {!isConfigValid && (
        <View style={styles.overlay} pointerEvents="none">
          <Text style={styles.overlayText}>
            To get started, set a valid FIREBASE_CONFIG in App.tsx.
          </Text>
        </View>
      )}

    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Constants.statusBarHeight,
    alignItems:'center',
    backgroundColor:'white'
  },
  appButtonContainer: {
    marginTop:10,
    borderColor:'black',
    borderWidth:0.5,
    alignItems:'center',
    paddingLeft:20,
    paddingBottom:14,
    paddingTop:14,
    paddingRight:20,
    backgroundColor:'transparent',
    marginBottom:20,
    width:320
  },
  
  appButtonContainerConfirm: {
    marginTop:10,
    borderColor:'black',
    borderWidth:0.5,
    alignItems:'center',
    paddingLeft:20,
    paddingBottom:14,
    paddingTop:14,
    paddingRight:20,
    backgroundColor:'#1f1f1f',
    marginBottom:20,
    width:320
  },
  appButtonText: {
    fontSize: 12,
    color: "black",
    justifyContent:'center'
  },
  appButtonTextConfirm: {
    fontSize: 12,
    color: "white",
    justifyContent:'center'
  },
  content: {
    marginTop: '50%', 
    alignItems:'center' 
  },

  logo:{
    width:150,
    height:150,
    borderRadius:20,

  },
  subtitle: {
    marginBottom: 10,
    opacity: 1.0,
    fontWeight: "bold",
  },
  text: {
    marginTop: 30,
    marginBottom: 4,
    textAlign:"center"
  },

  textInput: {
    fontSize:13,
    borderWidth:0.5,
    textAlign:'left',
    borderColor:'black',
    borderTopColor:'transparent',
    borderLeftColor:'transparent',
    borderRightColor:'transparent',
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:30,
    paddingRight:30,
    backgroundColor:'white',
    marginTop:10,
    width:320 
  },
  error: {
    marginTop: 10,
    fontWeight: "bold",
    color: "red",
  },
  success: {
    marginTop: 10,
    fontWeight: "bold",
    color: "black",
    fontSize:12
  },
  loader: {
    marginTop: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FFFFFFC0",
    justifyContent: 'center',
    alignItems: "center",
  },
  overlayText: {
    fontWeight: "bold",
  },
})
