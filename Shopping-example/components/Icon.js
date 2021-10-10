import React from 'react';
import { Image, StyleSheet} from 'react-native';
const staticImage = require("../assets/icon.png");

const Icon = () => (
  <Image source = {staticImage} style={styles.iconImg} />
)

const styles = StyleSheet.create({
iconImg:{
    width:'100px',
    height:'100px'
}

});
export default Icon;