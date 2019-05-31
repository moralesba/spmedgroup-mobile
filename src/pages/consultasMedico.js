import React, { Component } from "React";
import api from "../services/api";
import { Text, AsyncStorage, FlatList } from "react-native";


class consultasMedico extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { dataSource: [] };
    }

    componentDidMount() {
        this._buscarConsultas();
    }

    _buscarConsultas = async () => {
        const token = await AsyncStorage.getItem("token-autenticacao");
        const resposta = await api.get("/consulta", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem("token-autenticacao")
            }
        });
        const dadosApi = resposta.data;
        this.setState({ dataSource: dadosApi });
    }

    render() {
        return (

            <View>
                <Text> Consultas </Text>
                <View>
                    <FlatList
                        data={this.state.dataSource}
                        keyExtractor={consulta => consulta.IdConsulta}
                        renderItem={this.renderizaItem}
                    />
                </View>
            </View>
        );
    }
    renderizaItem = ({ consulta }) => (
        <View>
            <View>
                <Text>{consulta.idConsulta}</Text>
                <Text>{consulta.idMedicoNavigation.nome}</Text>
                <Text>{consulta.dtConsulta}</Text>
                <Text>{consulta.situacao}</Text>
                <Text>{consulta.descricao}</Text>
            </View>
        </View>
    );
}

export default consultasMedico;