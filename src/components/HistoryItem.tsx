import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IHistoryItem {
  item: { title: string; };
}

const HistoryItem: FunctionComponent<IHistoryItem> = (data) => {
  return (
    <View style={styles.recordItem}>
      <Text>{data.item.title}</Text>
    </View>
  );
}

export default HistoryItem;

const styles = StyleSheet.create({
  recordItem: {
    flex: 1,
    marginTop: 40,
  }
});