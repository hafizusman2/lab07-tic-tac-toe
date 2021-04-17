import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

export default function App() {
  // const [getturn, setturn] = useState('');

  const [getstate, setstate] = useState({
    gameState: [
      [-1, 1, -1],
      [-1, 1, 1],
      [-1, 1, -1],
    ],
    playerTurn: 0,
  });

  const initializaGame = () => {
    setstate({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    });
  };

  const renderIcon = (row, col) => {
    var value = getstate.gameState[row][col];
    console.log(value);
    switch (value) {
      case 1:
        return <Icon style={styles.tileX} name="close" />;
      case -1:
        return <Icon style={styles.tileX} name="close" />;
        break;

      default:
        return <View />;
        break;
    }
  };

  const onTilePress = (row, col) => {
    //TODO:
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, paddingBottom: 50 }}>TIC TAC TOE</Text>

      <View style={styles.player2}>
        <Text style={styles.player}> {getstate.playerTurn} </Text>
        <Text style={styles.player}>
          Player 2 : <Icon style={styles.iconSize} name="close" />{" "}
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.tile}>
          <Pressable onPress={() => alert(2)}>{renderIcon(0, 0)}</Pressable>
        </View>
        <View style={styles.tile}>
          <Pressable
            onPress={() => {
              onTilePress(0, 1);
            }}
          >
            {renderIcon(0, 1)}
          </Pressable>
        </View>
        <View style={styles.tile}>
          <Pressable
            onPress={() => {
              onTilePress(0, 2);
            }}
          >
            {renderIcon(0, 2)}
          </Pressable>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.tile}>
          <Pressable
            onPress={() => {
              onTilePress(1, 0);
            }}
          >
            {renderIcon(1, 0)}
          </Pressable>
        </View>
        <View style={styles.tile}>
          <Pressable
            onPress={() => {
              onTilePress(1, 1);
            }}
          >
            {renderIcon(1, 1)}
          </Pressable>
        </View>
        <View style={styles.tile}>
          <Pressable
            onPress={() => {
              onTilePress(1, 2);
            }}
          >
            {renderIcon(1, 2)}
          </Pressable>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.tile}>
          <Pressable
            onPress={() => {
              onTilePress(2, 0);
            }}
          >
            {renderIcon(2, 0)}
          </Pressable>
        </View>
        <View style={styles.tile}>
          <Pressable
            onPress={() => {
              onTilePress(2, 1);
            }}
          >
            {renderIcon(2, 1)}
          </Pressable>
        </View>
        <View style={styles.tile}>
          <Pressable
            onPress={() => {
              onTilePress(2, 2);
            }}
          >
            {renderIcon(2, 2)}
          </Pressable>
        </View>
      </View>
      <View style={styles.player1}>
        <Text style={styles.player}> {getstate.playerTurn} </Text>
        <Text style={styles.player}>
          Player 1 : <Icon style={styles.iconSize} name="circle-outline" />{" "}
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tile: {
    width: 100,
    height: 100,
    borderWidth: 3,
  },
  tileX: {
    color: "red",
    fontSize: 60,
    padding: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tileO: {
    color: "green",
    fontSize: 60,
    padding: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  player: {
    fontSize: 15,
  },
  player1: {
    flexDirection: "row",
    paddingTop: 30,
  },
  player2: {
    flexDirection: "row",
    paddingBottom: 30,
  },
  iconSize: {
    fontSize: 15,
  },
});
