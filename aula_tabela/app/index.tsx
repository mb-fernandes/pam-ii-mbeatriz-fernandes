import React from 'react'; 
import { SafeAreaView, StyleSheet, Text } from 'react-native'; 
import Tabela from './components/Tabela'; 
    
   export default function App() { 
     const headers = ['Banda', 'Álbuns', 'Gênero']; 
     const data = [ 
      ['Twenty One Pilots', '7', 'Alternative Rock'], 
      ['Panic! At the Disco', '7', 'Pop Rock'], 
      ['My Chemical Romance', '4', 'Punk Rock'], 
      ['Pierce the Veil', '5', 'Post-hardcore'], 
   ]; 
  
   return ( 
     <SafeAreaView style={styles.container}> 
       <Text style={styles.title}>Tabela de Bandas</Text> 
       <Tabela headers={headers} data={data} /> 
     </SafeAreaView> 
   ); 
 } 
  
 const styles = StyleSheet.create({ 
   container: { 
     flex: 1, 
     marginTop: 50, 
     padding: 10, 
   
}, 
   
     
     
     
     
   
    title: { 
      fontSize: 24, 
      fontWeight: 'bold', 
      marginBottom: 20, 
      textAlign: 'center', 
    }, 
 }); 