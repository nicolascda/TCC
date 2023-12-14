import React from "react";
import { Text, View, StyleSheet, Image, Linking } from "react-native";

export function Profile() {

    function emailPress(){
        Linking.openURL('mailto:nicolasclaudinodeaguiar@gmail.com')
    }

    function phonePress() {
        Linking.openURL('tel:+55 11 95832-3941')
    }

    function gitHubPress() {
        Linking.openURL('https://github.com/nicolascda')
    }

    return <View style={styles.container}>
        <View style={styles.body}>
            <Image
                source={require('../../assets/foto.webp')}
                style={styles.imageProfile}
            />

            <View style={styles.textFieldTop}>
                <Text style={[styles.textColor, {fontWeight: 600}]}>
                    Nicolas Claudino de Aguiar
                </Text>
            </View>

            <View style={styles.textFieldTop}>
                <Text style={styles.textColor}>
                    15 anos  | Desenvolvedor Web 
                </Text>
            </View>

            <View style={styles.textFieldMid}>
                <Text style={[styles.textColor, {fontWeight:600}]}>
                    Perfil :
                </Text>

                <Text style={[styles.textColor, { textAlign: "justify"}]}>
                    Olá eu sou o Nicolas e sou Desenvolvedor de Web. Eu gosto de progamar utilizando-se de React e em diversas outras formas de linguagem e tecnologias novas
                </Text>
            </View>

            <View style={styles.textFieldMid}>
                <Text style={[styles.textColor, {fontWeight:600}]}>
                    Experiências : 
                </Text>

                <Text style={[styles.textColor, { textAlign: "justify"}]}>
                    Ja trabalhei React Native, desenvolvendo projetos com Aplicativos de celular e passei  05 anos fazendo o curso e estudando na SuperGeeks
                </Text>
            </View>

            <View style={styles.textFieldMid}>
                <Text style={[styles.textColor, {fontWeight:600}]}>
                    Competências : 
                </Text>

                <Text style={[styles.textColor, { textAlign: "justify"}]}>
                    Lógica de programação, Raciocínio computacional, Unity, Python, C#, HTML, CSS, JavaScript e React.
                </Text>
            </View>

            <View style={styles.textFieldBotton}>
                <Text style={[styles.textColor, styles.textSize]} onPress={emailPress}>Email</Text>
                <Text style={[styles.textColor, styles.textSize]} onPress={phonePress}>Telefone</Text>
                <Text style={[styles.textColor, styles.textSize]} onPress={gitHubPress}>GitHub</Text>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#24292e",
        justifyContent: "center",
        margin: 0,
    },
    body: {
        backgroundColor: "#2f363d",
        letterSpacing: "1px",
        width: 300,
        padding: 12,
    },
    imageProfile: {
        width: '100%',
        height: 225,
    },
    textColor: {
        color: "#fff",
    },
    textFieldTop: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 10,
        justifyContent: "center"
    },
    textFieldMid: {
        marginBottom: 10,
    },
    textFieldBotton: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    textSize: {
        fontSize: 20,
        color: "yellow",
    }
})