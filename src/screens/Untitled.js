import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import CupertinoButtonGrey3 from "../components/CupertinoButtonGrey3";
import CupertinoButtonGrey2 from "../components/CupertinoButtonGrey2";
import CupertinoButtonGrey1 from "../components/CupertinoButtonGrey1";
import CupertinoButtonGrey from "../components/CupertinoButtonGrey";
import CupertinoButtonWhiteTextColor from "../components/CupertinoButtonWhiteTextColor";
import CupertinoButtonWhiteTextColor1 from "../components/CupertinoButtonWhiteTextColor1";
import CupertinoButtonWhiteTextColor2 from "../components/CupertinoButtonWhiteTextColor2";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/Group_1a.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Image
            source={require("../assets/images/Startw_(1).png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <CupertinoButtonGrey3
            style={styles.cupertinoButtonGrey3}
          ></CupertinoButtonGrey3>
          <CupertinoButtonGrey2
            style={styles.cupertinoButtonGrey2}
          ></CupertinoButtonGrey2>
          <CupertinoButtonGrey1
            style={styles.cupertinoButtonGrey1}
          ></CupertinoButtonGrey1>
          <CupertinoButtonGrey
            style={styles.cupertinoButtonGrey}
          ></CupertinoButtonGrey>
        </View>
        <View style={styles.welcomeColumnRow}>
          <View style={styles.welcomeColumn}>
            <Text style={styles.welcome}>WELCOME</Text>
            <Text style={styles.loremIpsum}>
              Lorem ipsum, dolor sit amet consectetur
            </Text>
            <View style={styles.loremIpsum2Stack}>
              <Text style={styles.loremIpsum2}></Text>
              <Text style={styles.loremIpsum3}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                error ipsum, voluptate culpa nesciunt delectus iste?
              </Text>
            </View>
          </View>
          <Image
            source={require("../assets/images/Group1.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </View>
      </View>
      <View style={styles.partnersStack}>
        <Text style={styles.partners}>PARTNERS</Text>
        <Text style={styles.loremIpsumDolor}>Lorem ipsum dolor</Text>
        <Text style={styles.loremIpsumDolor2}>Lorem Ipsum Dolor</Text>
      </View>
      <Text style={styles.loremIpsum5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Text>
      <View style={styles.rect2}>
        <View style={styles.image4Row}>
          <Image
            source={require("../assets/images/XMLID_24_1.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          <Image
            source={require("../assets/images/XMLID_1_2.png")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
          <Image
            source={require("../assets/images/XMLID_30_3.png")}
            resizeMode="contain"
            style={styles.image6}
          ></Image>
          <Image
            source={require("../assets/images/Vector4.png")}
            resizeMode="contain"
            style={styles.image7}
          ></Image>
          <Image
            source={require("../assets/images/XMLID_2_5.png")}
            resizeMode="contain"
            style={styles.image8}
          ></Image>
        </View>
      </View>
      <CupertinoButtonWhiteTextColor
        caption="Learn More"
        style={styles.cupertinoButtonWhiteTextColor}
      ></CupertinoButtonWhiteTextColor>
      <View style={styles.image9Row}>
        <Image
          source={require("../assets/images/Group1_(1).png")}
          resizeMode="contain"
          style={styles.image9}
        ></Image>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}></View>
          <Text style={styles.loremIpsum7}>
            Lorem ipsum dolor sit amet consectetur
          </Text>
          <Text style={styles.loremIpsum9}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </Text>
        </View>
      </View>
      <View style={styles.loremIpsum11ColumnRow}>
        <View style={styles.loremIpsum11Column}>
          <Text style={styles.loremIpsum11}>
            Lorem ipsum dolor sit amet consectetur
          </Text>
          <Text style={styles.loremIpsum13}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </Text>
          <CupertinoButtonWhiteTextColor1
            caption="Learn More"
            style={styles.cupertinoButtonWhiteTextColor1}
          ></CupertinoButtonWhiteTextColor1>
        </View>
        <Image
          source={require("../assets/images/Group3.png")}
          resizeMode="contain"
          style={styles.image10}
        ></Image>
      </View>
      <Text style={styles.team}>TEAM</Text>
      <Text style={styles.ourTalents}>Our talents</Text>
      <View style={styles.loremIpsum14Row}>
        <Text style={styles.loremIpsum14}></Text>
        <Text style={styles.loremIpsum15}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo
          hic quos, ab,
        </Text>
      </View>
      <View style={styles.rect4Stack}>
        <View style={styles.rect4}>
          <View style={styles.image11Row}>
            <Image
              source={require("../assets/images/Group_321.png")}
              resizeMode="contain"
              style={styles.image11}
            ></Image>
            <Image
              source={require("../assets/images/Group_291.png")}
              resizeMode="contain"
              style={styles.image14}
            ></Image>
            <Image
              source={require("../assets/images/Group_301.png")}
              resizeMode="contain"
              style={styles.image13}
            ></Image>
            <Image
              source={require("../assets/images/Group_311.png")}
              resizeMode="contain"
              style={styles.image12}
            ></Image>
          </View>
        </View>
        <CupertinoButtonWhiteTextColor2
          caption="View Team"
          style={styles.cupertinoButtonWhiteTextColor2}
        ></CupertinoButtonWhiteTextColor2>
      </View>
      <View style={styles.rect5}>
        <Image
          source={require("../assets/images/Frame_311.png")}
          resizeMode="contain"
          style={styles.image15}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect: {
    width: 1440,
    height: 586,
    backgroundColor: "rgba(116,198,157,1)"
  },
  image: {
    width: 70,
    height: 50
  },
  image2: {
    width: 102,
    height: 50,
    marginLeft: 15
  },
  cupertinoButtonGrey3: {
    height: 25,
    width: 52,
    backgroundColor: "rgba(15,15, 15,0)",
    marginLeft: 643,
    marginTop: 13
  },
  cupertinoButtonGrey2: {
    height: 25,
    width: 83,
    backgroundColor: "rgba(15,15, 15,0)",
    marginLeft: 7,
    marginTop: 13
  },
  cupertinoButtonGrey1: {
    height: 25,
    width: 82,
    backgroundColor: "rgba(15,15, 15,0)",
    marginLeft: 17,
    marginTop: 13
  },
  cupertinoButtonGrey: {
    height: 25,
    width: 78,
    backgroundColor: "rgba(15,15, 15,0)",
    marginLeft: 18,
    marginTop: 13
  },
  imageRow: {
    height: 50,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 135,
    marginRight: 138
  },
  welcome: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    width: 113,
    height: 20,
    fontSize: 17,
    letterSpacing: 4,
    marginTop: -1,
    marginLeft: 3
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    width: 416,
    height: 100,
    fontSize: 40,
    marginTop: 43
  },
  loremIpsum2: {
    top: 6,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum3: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    width: 466,
    height: 75
  },
  loremIpsum2Stack: {
    width: 466,
    height: 75,
    marginTop: 16
  },
  welcomeColumn: {
    width: 466,
    marginTop: 39,
    marginBottom: 86
  },
  image3: {
    width: 644,
    height: 378,
    marginLeft: 86
  },
  welcomeColumnRow: {
    height: 378,
    flexDirection: "row",
    marginTop: 65,
    marginLeft: 132,
    marginRight: 112
  },
  partners: {
    top: 10,
    left: 93,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(116,198,157,1)",
    letterSpacing: 7,
    width: 121,
    height: 37,
    fontSize: 13,
    textAlign: "center"
  },
  loremIpsumDolor: {
    top: 0,
    left: -1,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(116,198,157,1)",
    lineHeight: 0,
    fontSize: 0,
    letterSpacing: 7,
    width: 121,
    height: 37
  },
  loremIpsumDolor2: {
    top: 37,
    left: 41,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25
  },
  partnersStack: {
    width: 255,
    height: 67,
    marginTop: 43,
    marginLeft: 567
  },
  loremIpsum5: {
    fontFamily: "roboto-100",
    color: "#121212",
    fontSize: 15,
    textAlign: "center",
    width: 266,
    height: 60,
    opacity: 0.68,
    marginTop: 6,
    marginLeft: 572
  },
  rect2: {
    width: 1150,
    height: 50,
    backgroundColor: "rgba(116,198,157,0)",
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 132
  },
  image4: {
    width: 152,
    height: 50
  },
  image5: {
    width: 210,
    height: 50,
    marginLeft: 69
  },
  image6: {
    width: 160,
    height: 50,
    marginLeft: 94
  },
  image7: {
    width: 196,
    height: 50,
    marginLeft: 47
  },
  image8: {
    width: 166,
    height: 50,
    marginLeft: 53
  },
  image4Row: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginLeft: 3
  },
  cupertinoButtonWhiteTextColor: {
    height: 48,
    width: 170,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 53,
    marginLeft: 634
  },
  image9: {
    width: 600,
    height: 431
  },
  rect3: {
    top: 0,
    left: 0,
    width: 600,
    height: 431,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  loremIpsum7: {
    top: 39,
    left: 139,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 462,
    height: 100,
    fontSize: 30
  },
  loremIpsum9: {
    top: 147,
    left: 139,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 462,
    height: 17,
    opacity: 0.57
  },
  rect3Stack: {
    width: 601,
    height: 431
  },
  image9Row: {
    height: 431,
    flexDirection: "row",
    marginTop: 54,
    marginLeft: 115,
    marginRight: 50
  },
  loremIpsum11: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 97,
    width: 341,
    fontSize: 30
  },
  loremIpsum13: {
    fontFamily: "roboto-regular",
    color: "#121212",
    opacity: 0.6,
    marginTop: 17
  },
  cupertinoButtonWhiteTextColor1: {
    height: 48,
    width: 170,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 27
  },
  loremIpsum11Column: {
    width: 358,
    marginTop: 137,
    marginBottom: 188
  },
  image10: {
    width: 600,
    height: 565,
    marginLeft: 247
  },
  loremIpsum11ColumnRow: {
    height: 565,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 115,
    marginRight: 46
  },
  team: {
    fontFamily: "roboto-regular",
    color: "rgba(116,198,157,1)",
    width: 99,
    height: 20,
    letterSpacing: 5,
    marginTop: 53,
    marginLeft: 660
  },
  ourTalents: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 40,
    marginLeft: 583
  },
  loremIpsum14: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 1
  },
  loremIpsum15: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 395,
    height: 60,
    textAlign: "center",
    opacity: 0.53,
    marginLeft: 31
  },
  loremIpsum14Row: {
    height: 60,
    flexDirection: "row",
    marginLeft: 453,
    marginRight: 487
  },
  rect4: {
    top: 0,
    left: 0,
    width: 1176,
    height: 299,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)",
    flexDirection: "row"
  },
  image11: {
    width: 202,
    height: 260,
    backgroundColor: "rgba(15,15, 15,0)"
  },
  image14: {
    width: 202,
    height: 260,
    marginLeft: 106
  },
  image13: {
    width: 202,
    height: 260,
    marginLeft: 90
  },
  image12: {
    width: 202,
    height: 260,
    marginLeft: 86
  },
  image11Row: {
    height: 260,
    flexDirection: "row",
    flex: 1,
    marginRight: 82,
    marginLeft: 4,
    marginTop: 19
  },
  cupertinoButtonWhiteTextColor2: {
    height: 48,
    width: 170,
    position: "absolute",
    left: 509,
    top: 290,
    backgroundColor: "rgba(15,15, 15,1)"
  },
  rect4Stack: {
    width: 1176,
    height: 338,
    marginTop: 45,
    marginLeft: 115
  },
  rect5: {
    width: 1440,
    height: 125,
    backgroundColor: "rgba(116,198,157,1)",
    marginTop: 25
  },
  image15: {
    width: 1178,
    height: 125,
    marginLeft: 98
  }
});

export default Untitled;
