/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { height } from '../utils/Dimension'
import AlignedText from './AlignedTexts'
import { Button } from './Button'
import { Discount } from './Discount'
import { Image } from './Image'


const PRODUCT_HEIGHT = height * 0.22
const BUTTON_HEIGHT = PRODUCT_HEIGHT / 6
const FONT_SIZE = BUTTON_HEIGHT / 1.8

const ProductOffer = ({
    productImage,
    discountAmount,
    description,
    productName,
    onPress,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstChild}>
                <Image
                    imageSource={productImage}
                    resizeMode="contain"
                    containerStyle={{ height: '100%', width: '40%' }}
                />
                <Discount
                    discountAmount={discountAmount}
                    style={{ position: 'absolute', left: 10, top: 10 }}
                    containerHeight={PRODUCT_HEIGHT / 6}
                    containerWidth={44}
                    chooseColor="red"
                />
            </View>
            <View style={styles.secondChild}>
                <AlignedText title={productName} description={description} />
            </View>
            <View style={styles.thirdChild}>
                <Button
                    textStyle={styles.btnText}
                    text="Voir l'offre"
                    theTextColor="white"
                    size="small"
                    onPress={onPress}
                    style={styles.buttonStyle}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        width: '90%',
        height: PRODUCT_HEIGHT,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#EDEDED',
        borderRadius: 6,
    },
    firstChild: {
        height: '70%',
        width:'100%',
        alignItems: 'center',
        paddingVertical: 9,
    },
    secondChild: {
        height: '10%',
        paddingHorizontal: 10,
    },
    thirdChild: {
        height: '25%',
        alignItems: 'flex-end',
        paddingVertical:-1,
        paddingHorizontal:4,
    },
    buttonStyle: {
        height: BUTTON_HEIGHT,
    },
    btnText: {
        fontSize: FONT_SIZE,
    },
});
export default ProductOffer;
