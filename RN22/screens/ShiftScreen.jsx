import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';
import Heading from '../components/Heading';
import Shift from '../components/Shift';
import axios from 'axios';
import {Colors} from '../constants/Colors';
import {useRoute} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';
// import { ScrollView } from "react-native-gesture-handler";
const url =
  Platform.OS === 'ios'
    ? 'http://127.0.0.1:8080/shifts'
    : 'http://10.0.2.2:8080/shifts';

// const url = "https://reactnative.dev/boooking.json"
import {totalShiftHrsCalculator} from '../utils/helper';
import MyShiftItem from '../components/myshiftitem';

const ShiftScreen = ({navigation}) => {
  const [shifts, setShifts] = useState([]);
  const [isActionTriggered, setIsActionTriggered] = useState(false);
  const [todayCount, setTodayCount] = useState(0);
  const [todayTotalHrs, setTodayTotalHrs] = useState(0);

  useEffect(() => {
    const getboookingFromApi = async () => {
      const res = await axios.get(url);
      const bookedShift = res.data.filter(e => e.booked);
      setTodayCount(bookedShift.length);
      setTodayTotalHrs(bookedShift.length);
      const reversedShift = bookedShift.reverse();
      setShifts([...reversedShift]);
    };
    getboookingFromApi();

    navigation.addListener('focus', () => {
      getboookingFromApi();
    });

    // console.log(navigation.getId());
  }, []);

  const handleIsActionTriggered = id => {
    let myBookedShift = shifts.filter(e => e.id !== id);
    setShifts(myBookedShift);
    console.log('shiftId: ', id);
    setTodayCount(myBookedShift.length);
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar />
      <ScrollView>
        <View>
          <Heading
            title={'Today'}
            noOfShift={todayCount}
            hrs={totalShiftHrsCalculator(shifts)}
            withTime={true}
          />

          {shifts?.map((e, i) => (
            <Fragment key={i}>
              <MyShiftItem
                handleIsActionTriggered={handleIsActionTriggered}
                desc={e.area}
                from={e.startTime}
                to={e.endTime}
                status={e.booked}
                id={e.id}
              />
            </Fragment>
          ))}
          <Heading title={'Tomorrow'} noOfShift={'2 shifts'} hrs={'4 h'} />
          <Heading title={'Tomorrow'} noOfShift={'2 shifts'} hrs={'4 h'} />
        </View>
        <View style={styles.footerContainer}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShiftScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
  },
  footer: {
    backgroundColor: Colors.grayeshBlue,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  backgroundStyle: {
    flex: 1,
  },
});
