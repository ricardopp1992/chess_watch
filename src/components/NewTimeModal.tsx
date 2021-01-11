import React, { FunctionComponent, useState } from 'react';
import { Modal, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Player } from '../models/interfaces';
import Colors from '../constants/Color';

export interface INewTimeModal {
  isVisible: boolean;
  goNextPage: Function;
  closeModal: Function;
}

const NewTimeModal: FunctionComponent<INewTimeModal> = ({ isVisible, goNextPage, closeModal }) => {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [whitesName, setWhitesName] = useState('');
  const [blacksName, setBlacksName] = useState('');

  const handleWhiteName = (name: string, player: Player) => {
    if (player === Player.WHITES) setWhitesName(name);
    if (player === Player.BLACKS) setBlacksName(name);
  }

  const handleCloseModal = () => {
    goNextPage(whitesName, blacksName, [hours, minutes, seconds]);
  }

  const handleClose = () => {
    console.log('CLOSED')
  }

  return (
    <Modal
      visible={isVisible}
      transparent
      
      animationType="slide"
      onRequestClose={() => { console.log('closed') }}>
      <View style={styles.container} >
        <View style={styles.modalHeader}>
          <TouchableOpacity style={styles.closeModalIcon} onPress={() => closeModal()}>
            <Ionicons name="close-circle-outline" size={32} />
          </TouchableOpacity>
        </View>
        <View style={styles.modalBody}>
          <Text>Blancas se llama:</Text>
          <TextInput
            style={styles.nameInput}
            placeholder="Nombre"
            autoCapitalize="sentences"
            onChangeText={text => handleWhiteName(text, Player.WHITES)} />
          <Text>Blancas se llama:</Text>
          <TextInput
            style={styles.nameInput}
            placeholder="Nombre"
            autoCapitalize="sentences"
            onChangeText={text => handleWhiteName(text, Player.BLACKS)} />
          <View>
            <Text style={{ textAlign: 'center' }}>Tiempo:</Text>
            <View style={styles.timeContainer}>
              <TextInput
                style={styles.timeInput}
                value={hours}
                onChangeText={setHours} />
              <Text style={styles.timeSeparator}> : </Text>
              <TextInput
                style={styles.timeInput}
                value={minutes}
                onChangeText={setMinutes} />
              <Text style={styles.timeSeparator}> : </Text>
              <TextInput
                style={styles.timeInput}
                value={seconds}
                onChangeText={setSeconds} />
            </View>
          </View>
          <Button title="Comenzar" color={Colors.primary} onPress={handleCloseModal} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${Colors.background}`,
    flex: 4,
    marginHorizontal: 60,
    marginVertical: '40%',
    width: '70%',
    maxHeight: '60%',
    minHeight: '50%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeader: {
    paddingTop: 2,
    paddingHorizontal: 5,
  },
  closeModalIcon: {
    alignSelf: 'flex-end',
  },
  modalBody: {
    paddingHorizontal: '10%',
  },
  nameInput: {
    height: 50,
    borderBottomWidth: .8,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  timeInput: {
    backgroundColor: `${Colors.inputBackground}`,
    textAlign: 'center',
    padding: 5,
  },
  timeSeparator: {
    marginTop: 8,
  },
});

export default NewTimeModal;