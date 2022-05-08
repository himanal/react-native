import { StyleSheet, Text, View ,TextInput,KeyboardAvoidingView,TouchableOpacity} from 'react-native'
import React from 'react'


const Login = () => {
  return (

    <KeyboardAvoidingView style={styles.container} behavior='padding'>

    <View  style={styles.inputContainer}>
     <TextInput 
     placeholder='email'
    //  value=''
    //  onChange={}
    style={styles.input}
     />
     <TextInput 
     placeholder='password'
    //  value=''
    //  onChange={}
    style={styles.input}
    secureTextEntry
     />
    </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={()=>{}}
        style={styles.button}
        >
            <Text style={styles.buttonText }>
                Login
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{}}
        style={styles.button ,styles.buttonOutline}
        >
            <Text style={  styles.buttonOutlineText  }>
                register  
            </Text>
        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffc0d2'
    },
    inputContainer:{
        width:'80%'
    },
    input:{
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:3
    



    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    },
    button:{

    },
    buttonOutline:{},
    buttonOutlineText:{} ,
    buttonText:{}
         
})