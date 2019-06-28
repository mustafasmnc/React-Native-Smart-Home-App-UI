import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { LineChart, Path } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import * as theme from '../theme';
import { Block, Text } from '../components';
import mocks from '../settings';

class Dashboard extends Component {

    static navigationOptions = {
        header: null
    }

    render() {

        const { navigation, settings } = this.props;
        const LightIcon = settings['light'].icon;
        const ACIcon = settings['ac'].icon;
        const TempratureIcon = settings['temprature'].icon;
        const FanIcon = settings['fan'].icon;
        const WifiIcon = settings['wi-fi'].icon;
        const ElecricityIcon = settings['elecricity'].icon;

        return (

            <Block style={styles.dashboard} >

                <Block column style={{ marginVertical: theme.sizes.base + 2 }}>
                    <Text welcome>Welcome</Text>
                    <Text name>Mustafa SMNC</Text>
                </Block>

                <Block row style={{ paddingVertical: 10 }} >
                    <Block flex={1.5} row style={{ alignItems: 'flex-end', }}>
                        <Text h1>34</Text>
                        <Text h1 size={40} height={80} weight='600' spacing={0.1}>°C</Text>
                    </Block>

                    <Block column flex={1}  >
                        <Text caption>Humidity</Text>
                        <LineChart
                            yMax={100}
                            yMin={0}
                            data={[0, 20, 25, 15, 20, 55, 60]}
                            style={{ flex: 0.8 }}
                            curve={shape.curveNatural}
                            svg={{ stroke: theme.colors.accent, strokeWidth: 3 }}
                        />
                    </Block>
                </Block>

                <ScrollView style={styles.buttons} showsHorizontalScrollIndicator={false}>

                    <Block column style={{ space: "between" }} >

                        <Block row style={{ space: "around", marginVertical: theme.sizes.base }}>

                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', { name: 'light' })}>

                                <Block center middle style={styles.button} >
                                    <LightIcon size={40} />
                                    <Text
                                        button
                                        style={{ marginTop: theme.sizes.base * 0.5 }}
                                    >
                                        {settings['light'].name}
                                    </Text>
                                </Block>

                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', { name: 'ac' })}>

                                <Block center middle style={styles.button} >
                                    <ACIcon size={40} />
                                    <Text
                                        button
                                        style={{ marginTop: theme.sizes.base * 0.5 }}
                                    >
                                        {settings['ac'].name}
                                    </Text>
                                </Block>

                            </TouchableOpacity>

                        </Block>

                        <Block row style={{ space: "around", marginVertical: theme.sizes.base }}>

                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', { name: 'temprature' })}>

                                <Block center middle style={styles.button} >
                                    <TempratureIcon size={40} />
                                    <Text
                                        button
                                        style={{ marginTop: theme.sizes.base * 0.5 }}
                                    >
                                        {settings['temprature'].name}
                                    </Text>
                                </Block>

                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', { name: 'fan' })}>

                                <Block center middle style={styles.button} >
                                    <FanIcon size={40} />
                                    <Text
                                        button
                                        style={{ marginTop: theme.sizes.base * 0.5 }}
                                    >
                                        {settings['fan'].name}
                                    </Text>
                                </Block>

                            </TouchableOpacity>

                        </Block>

                        <Block row style={{ space: "around", marginVertical: theme.sizes.base }}>

                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', { name: 'wi-fi' })}>

                                <Block center middle style={styles.button} >
                                    <WifiIcon size={40} />
                                    <Text
                                        button
                                        style={{ marginTop: theme.sizes.base * 0.5 }}
                                    >
                                        {settings['wi-fi'].name}
                                    </Text>
                                </Block>

                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', { name: 'elecricity' })}>

                                <Block center middle style={styles.button} >
                                    <ElecricityIcon size={40} />
                                    <Text
                                        button
                                        style={{ marginTop: theme.sizes.base * 0.5 }}
                                    >
                                        {settings['elecricity'].name}
                                    </Text>
                                </Block>

                            </TouchableOpacity>

                        </Block>

                    </Block>

                </ScrollView>

            </Block>

        )
    }
}

Dashboard.defaultProps = {
    settings: mocks,
}

export default Dashboard;

const styles = StyleSheet.create({
    dashboard: {
        flex: 1,
        padding: theme.sizes.base + 2,
        marginBottom: theme.sizes.base + 6,
        //paddingTop: Platform.OS === 'ios' ? 50 : 50,
    },
    buttons: {
        flex: 1,
        marginBottom: theme.sizes.base + 6,
    },
    button: {
        backgroundColor: theme.colors.button,
        width: 151,
        height: 151,
        borderRadius: 151 / 2,
    },
})