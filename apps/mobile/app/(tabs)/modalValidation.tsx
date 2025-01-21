import React from 'react';
import { 
  View, 
  StyleSheet, 
} from 'react-native';
import PopUp from '@/components/ui/HeatProComponents/popUp';

const ModalValidation = () => {
    return(
        <View style = {styles.container}>
          <PopUp></PopUp>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
      backgroundColor: '#F4F5F8',
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default ModalValidation;