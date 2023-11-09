import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useReducer, useMemo } from "react";

import Estrelas from "../../../componentes/estrelas";

const distanciaEmMetros = (distancia) => {
    console.log('distancia')
    return `${distancia}m`;
}

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    //const [selecionado, setSelecionado] = useState(false);
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false
    );

    const distanciaTexto = useMemo(
        () => distanciaEmMetros(distancia), [distancia]);

    return <TouchableOpacity
        //onPress={() => setSelecionado(!selecionado)}
        onPress={inverterSelecionado}
        style={estilos.card}>
        <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Estrelas
                    quantidade={estrelas}
                    editavel={selecionado}
                    grande={selecionado}
                />
            </View>
            <Text style={estilos.distancia}>{distanciaTexto}</Text>
        </View>
    </TouchableOpacity>
}


const estilos = StyleSheet.create({

    card: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        //android
        elevation: 4,
        //android
        //iOS
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.65,
        //iOS
    },

    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },

    informacoes: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },

    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },

    distancia: {
        fontSize: 12,
        lineHeight: 19,
    }

})