import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {Modal, Portal, Provider, Searchbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {initialQueryState, QueryContext} from '../../../contexts/QueryContext';
import {colors} from '../../../utilities/colors';

import {AddRetailerFAB} from './AddRetailerFAB';
import {Header} from './Header';
import {TopNavigator} from './TopNavigator';

export const Party = () => {
  const [modal, setModal] = useState(false);
  const [filters, setFilters] = useState(initialQueryState);
  const [query, setQuery] = useState('');

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const setAreaAndClose = (area) => {
    setFilters((p) => ({...p, area}));
    closeModal();
  };

  console.log(filters);

  return (
    <QueryContext.Provider value={{query: filters, setQuery: setFilters}}>
      <Header openModal={openModal} filters={filters} setFilters={setFilters} />
      <TopNavigator />
      <AddRetailerFAB />
      {/* <Provider>
        <Portal>
          <Modal
            onDismiss={closeModal}
            contentContainerStyle={styles.modal}
            visible={modal}>
            <MaterialCommunityIcons
              onPress={closeModal}
              style={styles.close}
              name="close-circle"
              size={38}
              color={colors.blue}
            />
            <Searchbar
              style={styles.search}
              value={query}
              onChangeText={(text) => setQuery(text)}
              placeholder="Search"
            />
            <Text onPress={() => setAreaAndClose('All')} style={styles.text1}>
              All
            </Text>
            <Text
              onPress={() => setAreaAndClose('DaryaGanj')}
              style={styles.text1}>
              Daryaganj
            </Text>
            <Text
              onPress={() => setAreaAndClose('Rajouri Garden')}
              style={styles.text1}>
              Rajouri Garden
            </Text>
            <Text
              onPress={() => setAreaAndClose('Vasant Vihar')}
              style={styles.text1}>
              Vasant Vihar
            </Text>
          </Modal>
        </Portal>
      </Provider> */}
    </QueryContext.Provider>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 280,
    width: '94%',
    backgroundColor: 'white',
    borderRadius: 12,
  },
  close: {position: 'absolute', top: 5, right: 5},
  search: {
    width: '90%',
    elevation: 0,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 24,
    marginTop: 10,
  },
  text1: {
    paddingHorizontal: '10%',
    width: '90%',
    color: colors.blue,
    fontSize: 16,
    marginVertical: 4,
    alignSelf: 'flex-start',
  },
});
