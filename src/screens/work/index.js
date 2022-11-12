import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale} from '../../config';
import {RoutesName} from '../../navigation';

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomColor: 'gray',
    borderBottomWidth: moderateScale(2),
    paddingVertical: moderateScale(10),
    marginTop: moderateScale(35),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  plusButton: {
    position: 'absolute',
    left: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D3DEE8',
    fontSize: moderateScale(16),
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(14),
    color: '#4F4F4F',
    marginHorizontal: moderateScale(18),
    height: moderateScale(48),
    marginBottom: moderateScale(18),
    marginTop: moderateScale(20),
  },
  input1: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D3DEE8',
    fontSize: moderateScale(16),
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(14),
    color: '#4F4F4F',
    marginHorizontal: moderateScale(18),
    height: moderateScale(48),
  },
  touchableOpacity: {
    backgroundColor: '#025DD7',

    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(8),
    alignItems: 'center',
    height: moderateScale(48),
    justifyContent: 'center',
    marginHorizontal: moderateScale(18),
    marginTop: moderateScale(24),
  },
  text: {
    color: '#ffffff',
  },
});

const Work = () => {
  const navigation = useNavigation();
  const [title, setTitle] = React.useState('');
  const [describe, setDescride] = React.useState('');

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text>Work</Text>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => {
            navigation.navigate(RoutesName.Home1);
          }}>
          <AntDesign name="arrowleft" style={{color: 'red', fontSize: 24}} />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={value => {
            setTitle(value);
          }}
          placeholder="Title"
          value={title}
        />

        {/* input describe */}
        <TextInput
          style={styles.input1}
          onChangeText={value => {
            setDescride(value);
          }}
          placeholder="Describe"
          value={describe}
        />

        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Work;