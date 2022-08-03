import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "158790416964-llgt14750ssu88n17f2ec0tasph0tfpq.apps.googleusercontent.com",
    iosClientId: "158790416964-lshpjjouqotqb9htk4kql1atbkin2rdp.apps.googleusercontent.com",
    androidClientId: "158790416964-db73c3m50gqrhs4o1oua2v0ohco9pml2.apps.googleusercontent.com"
  });

  React.useEffect(() => {
    
      setAccessToken("ya29.A0AVA9y1vO5jHPN7aAm2d0Y7S5jPtciX-cMbN_jqT65y_BkEfFT-v2v8ek6AHJ3aM0rGhm5i4qN50urO8z9RXGHPzgIuzwaejFhpz4msZLzk4cqnzF50bP-UAvFrtPCirbCm6TlLLc4sxYSfZ0uCKuza7bwbYrYUNnWUtBVEFTQVRBU0ZRRTY1ZHI4UmlOS2hVTUlGYmFydVg4ejlldV9SZw0163");
      fetchUserInfo()
  }, [])

  async function fetchUserInfo() {
   // console.log(accessToken)
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const useInfo = await response.json();
    console.log(useInfo)
    setUser(useInfo);
  }

  const ShowUserInfo = () => {
    if(user) {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 20}} onPress={()=>fetchUserInfo()}>Welcome O</Text>
          <Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}} />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
        </View>
      )
    }
  }  

  return (
    <View style={styles.container}>
      {user && <ShowUserInfo />}
      {user === null &&
          <>
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>Welcome</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: 'gray'}}>Please login</Text>
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
            }} 
        >
          <Image source={require("./btn.png")} style={{width: 300, height: 40}} />
        </TouchableOpacity>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
