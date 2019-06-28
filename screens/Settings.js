import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Slider } from 'react-native';


import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as theme from '../theme';
import { Block, Text, PanSlider } from '../components';
import mocks from '../settings';

class Settings extends Component {

    static navigationOptions = {
        headerLeft: ({ onPress }) => (

            <TouchableWithoutFeedback onPress={() => onPress()}>
                <FontAwesome size={theme.sizes.font * 1.5} color={theme.colors.black} name="arrow-left" />
            </TouchableWithoutFeedback>

        ),
        headerLeftContainerStyle: {
            paddingLeft: theme.sizes.base + 2
        },
        headerStyle: {
            backgroundColor: 'transparent'
        },
    };

    state = {
        direction: 45,
        speed: 12,
    }

    render() {
        const { navigation, settings } = this.props;
        const name = navigation.getParam('name');
        const Icon = settings[name].icon;

        return (
            <Block flex={1} style={styles.settings}>
                <Block row flex={0.5}>
                    <Block column>
                        <Icon size={theme.sizes.font * 4} color={theme.colors.gray2} />
                        <Block flex={1.2} row style={{ alignItems: 'flex-end', paddingTop:135 }}>
                            <Text h1>34</Text>
                            <Text h1 size={40} height={80} weight={'600'} spacing={0.1}>°C</Text>
                        </Block>
                        <Text caption>temperature</Text>
                    </Block>
                    <Block flex={1} center>
                        <PanSlider />
                    </Block>
                </Block>
                <Block flex={0} style={{ paddingTop: theme.sizes.base * 10 }}>

                    <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
                        <Block row style={{ space: "between" }}>
                            <Text welcome color="black">Direction</Text>
                            <Text welcome color="black" style={{ paddingLeft: 245 }}>{this.state.direction}</Text>
                        </Block>
                        <Slider
                            value={45}
                            minimumValue={0}
                            maximumValue={90}
                            thumbTintColor={theme.colors.accent}
                            minimumTrackTintColor={theme.colors.accent}
                            maximumTrackTintColor={theme.colors.gray2}
                            onValueChange={value => this.setState({ direction: parseInt(value, 10) })}
                        />
                    </Block>

                    <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
                        <Block row style={{ space: "between" }}>
                            <Text welcome color="black">Speed</Text>
                            <Text welcome color="black" style={{ paddingLeft: 260 }}>{this.state.speed}</Text>
                        </Block>
                        <Slider
                            value={12}
                            //step={2}
                            minimumValue={0}
                            maximumValue={30}
                            thumbTintColor={theme.colors.accent}
                            minimumTrackTintColor={theme.colors.accent}
                            maximumTrackTintColor={theme.colors.gray2}
                            onValueChange={value => this.setState({ speed: parseInt(value, 10) })}
                        />
                    </Block>

                </Block>
            </Block>
        )
    }
}

Settings.defaultProps = {
    settings: mocks,
}

export default Settings;

const styles = StyleSheet.create({
    settings: {
        paddingHorizontal: theme.sizes.base + 2,
    },
    slider: {

    }
})