import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

  const TextInputExample = () => {
  const [name, onChangeName] = React.useState('Name: ');
  const [age, onChangeAge] = React.useState('Age: ');
  const [address, onChangeAddress] = React.useState('Address: ');
  const [school, onChangeSchool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course:');
  const [email, onChangeEmail] = React.useState('Email:');
  const [contact, onChangeContact] = React.useState('Contact:');
  const [aboutMe, onChangeAboutMe] = React.useState('About Me: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.content}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://tse1.explicit.bing.net/th/id/OIP.nVYKDECeIENsDGIwbyFfawAAAA?rs=1&pid=ImgDetMain')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Name:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://i.pinimg.com/originals/3d/9a/39/3d9a393d342b84c7f93fc0fabff97591.jpg')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={age}
            placeholder="Age:"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://i1.sndcdn.com/artworks-000210254628-zvbx5z-t500x500.jpg')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
            placeholder="Address:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://pbs.twimg.com/media/EaDPeQ5XYAIVM41.jpg:large')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSchool}
            value={school}
            placeholder="School:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://media.tenor.com/5wkSiyIPaBEAAAAC/ed-caluag-memes.gif')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={course}
            placeholder="Course:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://i.pinimg.com/736x/6f/c0/46/6fc046a0a4b1e646122d13781cfadf73.jpg')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://th.bing.com/th/id/R.e1cf08f19b3e1d74abd28f1a86f5c13c?rik=ZGgfED4LPBQAUA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-_8OkjiEOhkY%2fTVQ83uOkUtI%2fAAAAAAAAAAs%2f218At2geswg%2fs1600%2fpinoy-funny-face.jpg&ehk=HMbOPDZ7nvKHVwz9l6l5ptmRU8AAOnOR94zFte1CYgM%3d&risl=&pid=ImgRaw&r=0')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeContact}
            value={contact}
            placeholder="Contact:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://i.pinimg.com/originals/5c/6a/9d/5c6a9de7e4579db9fc28f84a81f76a79.jpg')}
          />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => onChangeAboutMe(text)}
            placeholder="About Me: "
            value={aboutMe}
            style={styles.textInput}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    width: "100%",
  },
  row: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});

export default TextInputExample;