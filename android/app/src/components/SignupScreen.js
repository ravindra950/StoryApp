
// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Modal, Alert } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import axios from 'axios';
// import Icon from 'react-native-vector-icons/MaterialIcons'; 


// const Signup = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalTitle, setModalTitle] = useState('');
//   const [modalSubtitle, setModalSubtitle] = useState('');

//   function handleName(text) {
//     setName(text);
//     validateName(text);
//   }

//   function handleEmail(text) {
//     setEmail(text);
//     validateEmail(text);
//   }

//   function handlePassword(text) {
//     setPassword(text);
//     validatePassword(text);
//   }

//   function validateName(text) {
//     if (text.length === 0) {
//       setErrors((prevErrors) => ({ ...prevErrors, name: "Please enter name" }));
//     } else if (text.length <= 4) {
//       setErrors((prevErrors) => ({ ...prevErrors, name: "Name must be more than 4 characters" }));
//     } else {
//       setErrors((prevErrors) => {
//         const { name, ...rest } = prevErrors;
//         return rest;
//       });
//     }
//   }

//   function validateEmail(text) {
//     if (text.length === 0) {
//       setErrors((prevErrors) => ({ ...prevErrors, email: "Please enter email address" }));
//     } else if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{1,}$/.test(text)) {
//       setErrors((prevErrors) => ({ ...prevErrors, email: "Please enter a valid email address" }));
//     } else {
//       setErrors((prevErrors) => {
//         const { email, ...rest } = prevErrors;
//         return rest;
//       });
//     }
//   }

//   function validatePassword(text) {
//     if (text.length === 0) {
//       setErrors((prevErrors) => ({ ...prevErrors, password: "Please enter password" }));
//     } else if (text.length <= 4) {
//       setErrors((prevErrors) => ({ ...prevErrors, password: "Password must be more than 4 characters" }));
//     } else {
//       setErrors((prevErrors) => {
//         const { password, ...rest } = prevErrors;
//         return rest;
//       });
//     }
//   }

//   function handleSubmit() {
//     validateName(name);
//     validateEmail(email);
//     validatePassword(password);

//     if (Object.keys(errors).length === 0) {
//       const userData = {
//         name,
//         email,
//         password,
//       };

//     //   axios.post("http://192.168.115.135:5001/register", userData)
//     axios.post("http://192.168.172.135:5001/register", userData)
    
//         .then(res => {
//           if (res.data.status === "ok") {
//             setModalTitle("You've successfully signed up.");
//             setModalSubtitle("Welcome to StoryHub.");
//             setModalVisible(true);
//             setTimeout(() => {
//               setModalVisible(false);
//               navigation.navigate("Login");
//             }, 2000);
//             setName('');
//             setEmail('');
//             setPassword('');
//             setErrors({});
//           } else {
//             // setModalTitle("Registration Failed");
//             // setModalSubtitle(res.data.message || "Something went wrong.");
//             Alert.alert('Please Enter Correct Details!');
//                         setModalVisible(false);
//             setTimeout(() => {
//               setModalVisible(false);
//             }, 2000);
//           }
//         })
//         .catch(e => {
//           // setModalTitle("Error");
//           // setModalSubtitle("An error occurred. Please try again.");
//           Alert.alert('Please Enter Correct Details!');

//           setModalVisible(false);
//           setTimeout(() => {
//             setModalVisible(false);
//           }, 2000);
//         });
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.topContainer}>
//         <Image
//           // source={require('../images/logor.png')}
//           source={require('../images/main.png')}

//           style={styles.logo}
//         />
//       </View>

//       <View style={styles.bottomContainer}>
//         <View style={styles.box}>
//           <Text style={styles.subtitle}>Signup with StoryHub!</Text>

//           <View style={styles.inputContainer}>
//           <Icon name="person" size={30} color="#000" style={styles.icon} />

//             <TextInput
//               style={styles.input}
//               placeholder="Full Name"
//               value={name}
//               onChangeText={handleName}
//               onBlur={() => validateName(name)}
//               placeholderTextColor={'gray'}
//             />
//             {name.length > 0 && (
//               name.length > 4 ? (
//                 <Feather name="check-circle" color="green" size={20} />
//               ) : (
//                 <Feather name="x-circle" color="red" size={20} />
//               )
//             )}
//           </View>
//           {errors.name && (
//             <Text style={styles.error}>{errors.name}</Text>
//           )}

//           <View style={styles.inputContainer}>
//           <Icon name="email" size={25} color="#000" style={styles.icon} />

//             <TextInput
//               style={styles.input}
//               placeholder="Email Address"
//               value={email}
//               onChangeText={handleEmail}
//               onBlur={() => validateEmail(email)}
//               placeholderTextColor={'gray'}
//             />
//             {email.length > 0 && (
//               /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{1,}$/.test(email) ? (
//                 <Feather name="check-circle" color="green" size={20} />
//               ) : (
//                 <Feather name="x-circle" color="red" size={20} />
//               )
//             )}
//           </View>
//           {errors.email && (
//             <Text style={styles.error}>{errors.email}</Text>
//           )}

//           <View style={styles.inputContainer}>
//           <Icon name="lock" size={25} color="#000" style={styles.icon}/>                 

//             <TextInput
//               style={styles.input}
//               placeholder="Choose Password"
//               value={password}
//               onChangeText={handlePassword}
//               secureTextEntry={!passwordVisible}
//               onBlur={() => validatePassword(password)}
//               placeholderTextColor={'gray'}
//             />
//             <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
//               <Feather 
//                 name={passwordVisible ? "eye" : "eye-off"} 
//                 color={password.length > 4 ? "green" : "red"} 
//                 size={20}
//               />
//             </TouchableOpacity>
//           </View>
//           {errors.password && (
//             <Text style={styles.error}>{errors.password}</Text>
//           )}

//           <View style={styles.buttonContainer}>
//             <TouchableOpacity style={styles.customButton} onPress={handleSubmit}>
//               <Text style={styles.customButtonText}>SignUp</Text>
//             </TouchableOpacity>
//             <View style={styles.loginContainer}>
            
//                    <Text style={styles.footer1}>Already have an account?<Text style={styles.footer1text} onPress={() => navigation.navigate('Login')}> Login Here</Text> </Text>

//             </View>
//           </View>
//         </View>
//       </View>

//       {/* Custom Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(false);
//         }}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Image
//               source={require('../images/cong.png')} 
//               style={styles.modalImage}
//             />
//             <Text style={styles.modalTitle}>{modalTitle}</Text>
//             <Text style={styles.modalSubtitle}>{modalSubtitle}</Text>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#d4e10e',
    
//       },
//       topContainer: {
//         flex: 1,
//         //  backgroundColor: '#FFFFFF',
//         // backgroundColor: 'rgb(102, 153, 255)',
//         backgroundColor:'#d4e10e',
//         // RGB(255, 255, 255),
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       bottomContainer: {
//         flex: 2,
//         paddingHorizontal: 12,
//         paddingTop: 12,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius:20,
//         height:'100%',
//         // width:'100%'

//       },
//       box: {
//         width: '110%',
//         // height:'100%',
//         backgroundColor: 'white',
//         // borderRadius: 40,
//         paddingVertical: 25,
//         paddingHorizontal: 20,
//         // shadowColor: '#000',
//         // shadowOffset: { width: 0, height: 2 },
//         // shadowOpacity: 0.2,
//         // shadowRadius: 4,
//         // elevation: 5,
//         padding:8,
//       borderTopLeftRadius:50,
//       borderTopRightRadius:50,
//       border:1,
//       height:'110%',
//        marginTop: -17,  
//       },
//       logo: {
//         // width: 100,
//         // height: 100,
//         width: 150,
//         height: 150,
//         resizeMode: 'contain',
//       },
//       subtitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         // textAlign: 'center',
//         color: 'black',
//         marginBottom: 15,
//       },
//       inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: 'gray',
//         borderRadius: 8,
//         marginVertical: 10,
//         paddingHorizontal: 10,
//       },
//       icon: {
//         marginRight: 10,
//       },
//       input: {
//         flex: 1,
//         height: 40,
//         fontSize: 15,
//       },
//       error: {
//         color: 'red',
//         fontSize: 14,
//         marginBottom: 12,
//       },
//       buttonContainer: {
//         width: '100%',
//         marginTop: 10,
//         marginBottom:50,
//       },
//       screenContainer: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 10,
//       },
//       button1: {
//         backgroundColor: '#FFFFFF',
//         borderRadius: 4,
//         paddingVertical: 7,
//         paddingHorizontal: 5,
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#4285F4',
//         width: '100%',
//         justifyContent: 'center',
//       },
//       container1: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100%',
//       },
//       googleLogo: {
//         width: 20,
//         height: 20,
//         textAlign: 'center',
//       },
//       text1: {
//         fontSize: 16,
//         color: '#4285F4',
//         marginLeft: 4,
//         textAlign: 'center',
//       },
//       loginContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 10,
//       },
//       loginText: {
//         fontSize: 12,
//         color: 'black',
//       },
    
//       customButton: {
//         // backgroundColor: '#4285F4',
//         borderRadius: 8,
//         paddingVertical: 12,
//         alignItems: 'center',
//         // backgroundColor: 'rgb(102, 153, 255)',
//         backgroundColor:'#d4e10e'
    
//       },
//       customButtonText: {
//         color: 'black',
//         fontSize: 16,
//         fontWeight: 'bold',
        
//       },
    
//       footer1:{
//         fontSize:14,
//         fontWeight:"500",
//         textAlign:"center",
//         marginTop:5,
//         color:'black'
//       },
//       footer1text:{
//         fontSize:14,
//         fontWeight:"800",
//         color:'rgb(102, 153, 255)',
//         // height:20,
//         marginBottom:15,
//         height:'30%',

//       },
    
    
//       modalContainer: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "rgba(0,0,0,0.5)",
//       },
//       modalContent: {
//         backgroundColor: "white",
//         borderRadius: 20,
//         padding: 35,
//         alignItems: "center",
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//         width: '90%',
//       },
//       modalTitle: {
//         fontSize: 20,
//         fontWeight: "bold",
//         marginVertical: 10,
//       },
//       modalSubtitle: {
//         fontSize: 16,
//         marginBottom: 15,
//       },
//       button: {
//         borderRadius: 20,
//         padding: 10,
//         elevation: 2,
//       },
//       buttonClose: {
//         backgroundColor: "#2196F3",
//       },
//       textStyle: {
//         color: "white",
//         fontWeight: "bold",
//         textAlign: "center",
//       },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalImage: {
//     width: 80,
//     height: 80,
//     marginBottom: 20,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: 'black',
//   },
//   modalSubtitle: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: 'black',
//   },
// });

// export default Signup;
