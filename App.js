import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Button, Modal } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

export default function App() {
  const [getturn, setturn] = useState({ turn1: "*", turn2: "" });
  const [getmodal, setmodal] = useState("false");
  const [gettext, settext] = useState("");

  const [getstate, setstate] = useState({
    gameState: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    playerTurn: 1,
  });

  const initializaGame = () => {
    setstate({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      playerTurn: 1,
    });
    setturn({ turn1: "*", turn2: "" });
    setmodal(false);
    settext("");
  };

  const renderIcon = (row, col) => {
    var value = getstate.gameState[row][col];
    switch (value) {
      case 1:
        return <Icon style={styles.tileO} name="circle-outline" />;
      case -1:
        return <Icon style={styles.tileX} name="close" />;
        break;

      default:
        return <View />;
        break;
    }
  };

  const getWinner = () => {
    const NUM_TILES = 3;
    var arr = getstate.gameState;
    var sum;

    //check rows
    for (let i = 0; i < NUM_TILES; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }

    //check columns
    for (let i = 0; i < NUM_TILES; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }

    //check diagonal
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum == 3) {
      return 1;
    } else if (sum == -3) {
      return -1;
    }

    sum = arr[0][2] + arr[1][1] + arr[2][0];
    if (sum == 3) {
      return 1;
    } else if (sum == -3) {
      return -1;
    }

    //no winner

    return 0;
  };

  const playAgain = () => {
    initializaGame();
  };

  const onTilePress = (row, col) => {
    var value = getstate.gameState[row][col];
    if (value !== 0) {
      return;
    }

    var currentPlayer = getstate.playerTurn;

    var arr = getstate.gameState.slice();
    arr[row][col] = currentPlayer;
    setstate({ gameState: arr, playerTurn: 1 });
    var nextPlayer = currentPlayer == 1 ? -1 : 1;
    setstate({ gameState: arr, playerTurn: nextPlayer });

    if (nextPlayer == 1) {
      setturn({ turn1: "*", turn2: "" });
    } else if (nextPlayer == -1) {
      setturn({ turn1: "", turn2: "*" });
    }

    var winner = getWinner();
    if (winner == 1) {
      settext("Player 1 Wins");
      setmodal(true);
      
    } else if (winner == -1) {
      settext("Player 2 wins");
      setmodal(true);
      
    } else {
      var arr = getstate.gameState;
      if (
        arr[0][0] !== 0 &&
        arr[0][1] !== 0 &&
        arr[0][2] !== 0 &&
        arr[1][0] !== 0 &&
        arr[1][1] !== 0 &&
        arr[1][2] !== 0 &&
        arr[2][0] !== 0 &&
        arr[2][1] !== 0 &&
        arr[2][2] !== 0
      ) {
        settext("DRAW");
        setmodal(true);
        
      }
    }
  };

  return (
    <View style={styles.container}>
      <Modal visible={getmodal}>
        <View style={styles.container}>
          <Text style={styles.textTitle}> {gettext}</Text>
          <View style={styles.play}>

            <Button
              color="green"
              style={styles.playagain}
              onPress={playAgain}
              title="Play Again"
            />
            
          </View>
        </View>
      </Modal>

      <Text style={{ fontSize: 50, paddingBottom: 50 }}>TIC TAC TOE</Text>

      <View style={styles.player2}>
        <Text style={styles.player}> {getturn.turn2} </Text>
        <Text style={styles.player}>
          Player 2 : <Icon style={styles.iconSize} name="close" />{" "}
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={styles.tile}
          onPress={() => {
            onTilePress(0, 0);
          }}
        >
          {renderIcon(0, 0)}
        </Pressable>

        <Pressable
          style={styles.tile}
          onPress={() => {
            onTilePress(0, 1);
          }}
        >
          {renderIcon(0, 1)}
        </Pressable>

        <Pressable
          style={styles.tile}
          onPress={() => {
            onTilePress(0, 2);
          }}
        >
          {renderIcon(0, 2)}
        </Pressable>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={styles.tile}
          onPress={() => {
            onTilePress(1, 0);
          }}
        >
          {renderIcon(1, 0)}
        </Pressable>

        <Pressable
          style={styles.tile}
          onPress={() => {
            onTilePress(1, 1);
          }}
        >
          {renderIcon(1, 1)}
        </Pressable>

        <Pressable
          style={styles.tile}
          onPress={() => {
            onTilePress(1, 2);
          }}
        >
          {renderIcon(1, 2)}
        </Pressable>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={styles.tile}
          onPress={() => {
            onTilePress(2, 0);
          }}
        >
          {renderIcon(2, 0)}
        </Pressable>

        <Pressable
          style={styles.tile}
          onPress={() => {
            onTilePress(2, 1);
          }}
        >
          {renderIcon(2, 1)}
        </Pressable>

        <Pressable
          style={styles.tile}
          onPress={() => {
            onTilePress(2, 2);
          }}
        >
          {renderIcon(2, 2)}
        </Pressable>
      </View>
      <View style={styles.player1}>
        <Text style={styles.player}> {getturn.turn1} </Text>
        <Text style={styles.player}>
          Player 1 : <Icon style={styles.iconSize} name="circle-outline" />{" "}
        </Text>
      </View>

      <View style={{ paddingTop: 20 }}>
        <Button title="NEW GAME" onPress={() => initializaGame()} />
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
  textTitle: {
    fontSize: 40,
  },
  playagain: {
    borderRadius: 50,
  },
  play: {
    paddingTop: 50,
    // borderRadius: 50
    width: '40%',
  },
});
