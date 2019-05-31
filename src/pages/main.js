
import React, { Component } from "react";
import { Text, Image, StyleSheet, View, FlatList } from "react-native";
import api from "../services/api";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaConsultas: []
    };
  }

  componentDidMount() {
    this.carregarConsultas();
  }

  carregarConsultas = async () => {
    const resposta = await api.get("/consultas");
    const dadosDaApi = resposta.data;
    this.setState({ listaConsultas: dadosDaApi });
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderRow}>
            <Text style={styles.mainHeaderText}>{"Consultas".toUpperCase()}</Text>
          </View>
          <View style={styles.mainHeaderLine} />
        </View>

        {/* conteudo - body - section */}
        <View style={styles.mainBody}>
          <FlatList
            contentContainerStyle={styles.mainBodyConteudo}
            data={this.state.listaConsultas}
            keyExtractor={item => item.id}
            renderItem={this.renderizaItem}
          />
        </View>
      </View>
    );
  }
  renderizaItem = ({ item }) => (
    // <Text style={{ fontSize: 20, color: 'red' }}>{item.titulo}</Text>
    <View style={styles.flatItemLinha}>
      <View style={styles.flatItemContainer}>
        <Text style={styles.flatItemTitulo}>{item.titulo}</Text>
        <Text style={styles.flatItemData}>{item.dataEvento}</Text>
      </View>
    </View>
  );
}
export default Main;