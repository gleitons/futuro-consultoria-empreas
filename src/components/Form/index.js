import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import ResultImc from "../ResultImc";
import styles from "./style";

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Infome: Altura e Peso")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")


    function imccalculator() {
        return setImc((weight / (height * height)).toFixed(2))
    }

    function validationImc() {
        if (weight != null && height != null) {
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu IMC é igual: ')
            imccalculator()
            setTextButton('Novamente')
            return
        }

        setTextButton('Calcular')
        setMessageImc('Infome: ALTURA e PESO')
        setImc(null)

    }


    return (
        <>
            <View style={styles.formContext}>
                <View style={styles.form}>
                    <Text style={styles.formLabel} >Altura</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex: 1.85"
                        keyboardType="numeric"
                    />
                    <Text style={styles.formLabel}>Peso</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex: 75.300"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationImc()}}>
                    <Text style={styles.TextButtonCalculator} >{textButton}</Text>
                    </TouchableOpacity>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} />
                </View>


            </View>
            {/* <Text>OneBitHealth</Text>
        <Text>mais informações</Text>
        <Text>Hello Word, meu primeiro App</Text>
        <StatusBar style="auto" /> */}
        </>
    )
}