import React from 'react';
import { 
  View, 
  StyleSheet,
  Text   
  
} from 'react-native';
import { CustomButton } from '../CustomButton';



const PopUp = () => {
    const cancel = () => {
        console.log('annuler');
    }

    const valider = () => {
        console.log('valider');
    }
    return (
        <View style = {styles.container}>
            <Text style ={styles.title}>Valider le formulaire</Text>
            <Text style = {styles.desc}>Êtes-vous sûr de vouloir valider le formulaire et terminer l’intervention en cours ?</Text>
            <View style = {styles.buttonContainer}>
                <CustomButton onPress= {cancel} title='Annuler' style={[styles.cancel ,styles.button]}></CustomButton>
                <CustomButton onPress= {valider} title='Valider' style={[styles.validate,styles.button]}></CustomButton>
            </View>      
        </View>
    );
};


const styles = StyleSheet.create({
    container : {
      padding:'5%',
      backgroundColor: '#FFFFFF',
      width: '90%',
      height:'22%',
      borderRadius: 10, 
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    title:{
        fontWeight:'bold',
        paddingBottom: 10,
        fontSize: 16,
    },
    desc :{
        fontSize: 15,
        paddingBottom: '5%'
    },
    button:{
        width: '45%',
        height: '56%',
        fontSize:10,
        borderRadius: 50,
        justifyContent: 'center',
    },
    cancel:{
        backgroundColor: '#F69091',
        marginRight: '10%',
    },
    validate:{
        backgroundColor: '#7AD890',
    }
}); 

export default PopUp;