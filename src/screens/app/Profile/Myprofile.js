/* eslint-disable react/prop-types */
import React,{ Component } from 'react';
import {ScrollView, View,AsyncStorage, Image,StyleSheet,StatusBarIOS, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-datepicker'

import {
  Container,
  Centered,
  TextInput,
  DarkButton,
  Text,
  LongText,
  Shadow,
  messages,
  colors,
  placeholders,
  routes,
  buttons,
} from '../../../shared';
import { fontsize } from '../../../shared/constants';


export default class Myprofile extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname:'', emil:'',checked: 'm',birthday:'1990-01-01',weight:'',allergies:'',blood:'',
    };
  }

msg=()=>{
  alert(this.state.birthday);
}
  render() {
    const { navigate } = this.props.navigation;  
    const { checked } = this.state;
        return (
       <Container>
            <View style={{marginTop:30}}></View>
              <Image source={require('../../../../assete/image/photo.png')}
                      style={{width:100,height:100,borderRadius:50,marginTop:20}} ></Image>
              
              <Text color={colors.black}> Edit </Text>
               <ScrollView style={{flex:1}}>
          <Centered>
         
          {/*first name  */}
              <View style={styles.frm}>
                <View style={{flex:0.4,alignItems:'flex-start'}}>
                  <Text color={colors.black}> First Name </Text>
                </View>
                <View style={{flex:0.6}}>
                  <Shadow>
                    <TextInput placeholder={""}
                      value={this.state.firstname}
                      onChangeText={(str)=>this.setState({firstname:str})}
                    />    
                  </Shadow>   
                </View>         
              </View>
          {/*last name  */}
          <View style={styles.frm}>
                <View style={{flex:0.4,alignItems:'flex-start'}}>
                  <Text color={colors.black}> Last Name </Text>
                </View>
                <View style={{flex:0.6}}>
                  <Shadow>
                    <TextInput placeholder={""}
                      value={this.state.lastname}
                      onChangeText={(str)=>this.setState({lastname:str})}
                    />    
                  </Shadow>   
                </View>         
              </View>
          {/*Email ID  */}
          <View style={styles.frm}>
                <View style={{flex:0.4,alignItems:'flex-start'}}>
                  <Text color={colors.black}> E-mail ID </Text>
                </View>
                <View style={{flex:0.6}}>
                  <Shadow>
                    <TextInput placeholder={"abc@xyz.com"} email
                      value={this.state.lastname}
                      onChangeText={(str)=>this.setState({lastname:str})}
                    />    
                  </Shadow>   
                </View>         
              </View>
          {/*birthday  */}
          <View style={styles.frm}>
                <View style={{flex:0.4,alignItems:'flex-start'}}>
                  <Text color={colors.black}> Date of Birth </Text>
                </View>
                <View style={{flex:0.6}}>
                  <Shadow>
                    {/* <TextInput placeholder={"01/01/1990"} date/> */}
                    <DatePicker
                      // style={{width: 200}}
                      date={this.state.birthday}
                      mode="date"
                      placeholder=""
                      format="YYYY-MM-DD"
                      minDate="1960-01-01"
                      maxDate="2050-12-31"
                      showIcon={false}
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: 0
                          
                        },
                        dateInput: {
                          fontsize:20,
                          borderWidth:0,
                          
                        }
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(date) => {this.setState({birthday: date})}}
                    />
                  </Shadow>   
                </View>         
              </View>
          {/*sex  */}
          <View style={styles.frm}>
                <View style={{flex:0.4,alignItems:'flex-start'}}>
                  <Text color={colors.black}>Sex</Text>
                </View>
                <View style={{flex:0.3,flexDirection:'row',alignItems:'center'}}>
                  <RadioButton
                      value="m"
                      color={colors.dark}
                      status={checked === 'm' ? 'checked' : 'unchecked'}
                      onPress={() => { this.setState({ checked: 'm' }); }}
                    />
                    <Text color={colors.black}>M</Text>
                </View> 
                <View style={{flex:0.3,flexDirection:'row',alignItems:'center'}}>
                    <RadioButton
                      value="f"
                      color={colors.dark}
                      status={checked === 'f' ? 'checked' : 'unchecked'}
                      onPress={() => { this.setState({ checked: 'f' }); }}
                    />  
                    <Text color={colors.black}>F</Text>
                </View>         
              </View>

          {/*allergies  */}
          <View style={styles.frm}>
                <View style={{flex:0.4,alignItems:'flex-start'}}>
                  <Text color={colors.black}> Weight </Text>
                </View>
                <View style={{flex:0.6}}>
                  <Shadow>
                    <TextInput placeholder={'..Kg'} number/>    
                  </Shadow>   
                </View>         
              </View>
          {/*weight  */}
          <View style={styles.frm}>
                <View style={{flex:0.4,alignItems:'flex-start'}}>
                  <Text color={colors.black}> Allergies </Text>
                </View>
                <View style={{flex:0.6}}>
                  <Shadow>
                    <TextInput placeholder={''} />    
                  </Shadow>   
                </View>         
              </View>
          {/*Blood group  */}
          <View style={styles.frm}>
                <View style={{flex:0.4,alignItems:'flex-start'}}>
                  <Text color={colors.black}> Blood Group </Text>
                </View>
                <View style={{flex:0.6}}>
                  <Shadow>
                    <TextInput placeholder={''} />    
                  </Shadow>   
                </View>         
              </View>
 
          {/*Emergency Number  */}
          <View style={styles.frm}>
                <View style={{flex:0.4,alignItems:'flex-start'}}>
                  <Text color={colors.black} > {'Emergency\nNumber'}  </Text>
                </View>
                <View style={{flex:0.6}}>
                  <Shadow>
                    <TextInput placeholder={""}
                      value={this.state.firstname}
                      keyboardType = 'numeric'
                      onChangeText={(str)=>this.setState({firstname:str})}
                    />    
                  </Shadow>   
                </View>         
              </View>
          {/*Insurance Company  */}
          <View style={styles.frm}>
                <View style={{flex:0.4,alignItems:'flex-start'}}>
                  <Text color={colors.black}>{'Insurance\nCompany'}</Text>
                </View>
                <View style={{flex:0.6}}>
                  <Shadow>
                    <TextInput placeholder={""}
                      value={this.state.lastname}
                      onChangeText={(str)=>this.setState({lastname:str})}
                    />    
                  </Shadow>   
                </View>         
              </View>
          {/*Policy Number*/}
          <View style={styles.frm}>
                <View style={{flex:0.4,alignItems:'flex-start'}}>
                  <Text color={colors.black}>{'Policy\nNumber'}</Text>
                </View>
                <View style={{flex:0.6}}>
                  <Shadow>
                    <TextInput  
                      value={this.state.lastname}
                      onChangeText={(str)=>this.setState({lastname:str})}
                    />    
                  </Shadow>   
                </View>         
              </View>
         
            </Centered>
            
            <DarkButton onPress={()=>navigate(routes.pro)}>
                <Text color={colors.white}>{buttons.save}</Text>
            </DarkButton>  
            <DarkButton >
                <Text color={colors.white}>{buttons.create}</Text>
            </DarkButton>  
            <View style={{marginTop:50}}></View>
            </ScrollView>
          </Container>
        );
    }       
}

const styles = StyleSheet.create({
  frm:{
    flexDirection:'row',paddingHorizontal:30, paddingVertical:10,justifyContent:'space-around', alignItems:'center'
  }
   })
