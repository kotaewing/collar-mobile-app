import * as AuthSession from 'expo-auth-session';
import jwtDecode from 'jwt-decode';
import * as React from 'react';
import { Alert, Button, Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import MyDay from './components/MyDay';
import NavBar from './components/NavBar';
var backgroundImage = require('./assets/images/collar-background.png')

// You need to swap out the Auth0 client id and domain with the one from your Auth0 client.
// In your Auth0 client, you need to also add a url to your authorized redirect urls.
//
// For this application, I added https://auth.expo.io/@arielweinberger/with-auth0 because I am
// signed in as the 'arielweinberger' account on Expo and the name/slug for this app is 'with-auth0'.
//
// You can open this app in the Expo client and check your logs to find out your redirect URL.

const auth0ClientId = "";
const authorizationEndpoint = "https://arielweinberger.eu.auth0.com/authorize";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

export default function App() {
  const [name, setName] = React.useState(null);

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      // id_token will return a JWT token
      responseType: 'id_token',
      // retrieve the user's profile
      scopes: ['openid', 'profile'],
      extraParams: {
        // ideally, this will be a random value
        nonce: 'nonce',
      },
    },
    { authorizationEndpoint }
  );

  // Retrieve the redirect URL, add this to the callback URL list
  // of your Auth0 application.
  console.log(`Redirect URL: ${redirectUri}`);

  React.useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          'Authentication error',
          result.params.error_description || 'something went wrong'
        );
        return;
      }
      if (result.type === 'success') {
        // Retrieve the JWT token and decode it
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);

        const { name } = decoded;
        setName(name);
      }
    }
  }, [result]);

  return (
    // <View style={styles.container}>
    //   {name ? (
    //     <>
    //       <Text style={styles.title}>You are logged in, {name}!</Text>
    //       <Button title="Log out" onPress={() => setName(null)} />
    //     </>
    //   ) : (
    //     <Button
    //       disabled={!request}
    //       title="Log in with Auth0"
    //       onPress={() => promptAsync({ useProxy })}
    //     />
    //   )}
    // </View>
    <View>
      <ImageBackground style={styles.backgroundImage} source={backgroundImage} resizeMode="cover">
        <MyDay />
        <View style={styles.navBarContainer}>
          <NavBar style={styles.navBar} />
        </View>
      </ ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  navBarContainer: {
    alignItems: 'center',
    position: 'relative',
    marginTop: 50
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
