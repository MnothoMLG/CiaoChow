import React, {} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import { Text } from '../../components';
import { Lady, Ellipse, Gent, BackArrow } from '../../assets';
import strings from '../../constants/strings';
import { useNavigation } from '@react-navigation/native';


const AuthHeader = ({register}: {register?: boolean}) => {
  const {goBack, canGoBack} = useNavigation();
  return (
      <View style={styles.container}> 
        <Ellipse height="489px" width={Dimensions.get('window').width} style={styles.ellipse} />

          <TouchableOpacity onPress={()=> canGoBack() && goBack()} style={styles.back}>
            <BackArrow />
          </TouchableOpacity>

        <Text size={34} mb={110} color={"#fff"}> 
          {register? strings.auth.register : strings.auth.login}
        </Text>
        {register ? <Lady /> : <Gent />}
      </View>
  );
};

export default AuthHeader;


const styles = StyleSheet.create({
    container: {width: '100%' , height: 390, paddingRight: 45, paddingLeft: 20, flexDirection: 'row', justifyContent: "space-between", alignItems: "flex-end"},
    ellipse: {position: "absolute", width: '100%' },
    back: {position : 'absolute' , top: 38, left: 32}
})