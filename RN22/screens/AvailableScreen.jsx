import React, {Fragment, useEffect, useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';

import ShiftScreen from '../screens/ShiftScreen';
import {Colors} from '../constants/Colors';
import TabBar from '../components/TabBar';
import Heading from '../components/Heading';
import axios from 'axios';
import Shift from '../components/Shift';

const HelsinkiArea = 'Helsinki';
const TurkuArea = 'Turku';
const TampereArea = 'Tampere';

export default function AvailableScreen() {
  const [isActionTriggered, setIsActionTriggered] = useState(false);
  const [Availabledata, setAvailabledata] = useState([]);
  const [Helsinki, setHelsinki] = useState([]);
  const [Tampere, setTampere] = useState([]);
  const [Area, setArea] = useState(HelsinkiArea);
  const [Turku, setTurku] = useState([]);

  const [shiftInteraction, setShiftInteraction] = useState('');

  const [CurrentData, setCurrentData] = useState([]);

  const url =
    Platform.OS === 'ios'
      ? 'http://127.0.0.1:8080/shifts'
      : 'http://10.0.2.2:8080/shifts';

  // console.log('--------', Platform.OS);

  useEffect(() => {
    const getboookingFromApi = async () => {
      const res = await axios.get(url);
      setAvailabledata(res.data);
      const Data = res.data;
      Data.forEach(e => {
        try {
          if (e.area === HelsinkiArea) {
            setHelsinki(prev => [...prev, e]);
          } else if (e.area === TampereArea) {
            setTampere(prev => [...prev, e]);
          } else if (e.area === TurkuArea) {
            setTurku(prev => [...prev, e]);
          }
        } catch (err) {
          console.log(err);
        }
      });
    };
    getboookingFromApi();
  }, []);

  useEffect(() => {
    if (Area === HelsinkiArea) {
      setCurrentData(Helsinki);
    }
    if (Area === TampereArea) {
      setCurrentData(Tampere);
    }
    if (Area === TurkuArea) {
      setCurrentData(Turku);
    }
  }, [Area]);

  useEffect(() => {
    setCurrentData(Helsinki);
  }, [Helsinki]);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <TabBar
            activeTab={Area}
            setTab={setArea}
            tabAttributes={[
              {
                name: HelsinkiArea,
                count: Helsinki.length,
              },
              {
                name: TurkuArea,
                count: Turku.length,
              },
              {
                name: TampereArea,
                count: Tampere.length,
              },
            ]}
          />
        </View>
        <View>
          <Heading title={'Today'} />
          {CurrentData?.map((e, i) => (
            <Fragment key={i}>
              <Shift
                setIsActionTriggered={() => setIsActionTriggered(prev => !prev)}
                from={e.startTime}
                to={e.endTime}
                desc={e.area}
                status={e.booked}
                id={e.id}
                allShifts={Availabledata}
              />
            </Fragment>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footerContainer}></View>
    </SafeAreaView>
  );
}

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
