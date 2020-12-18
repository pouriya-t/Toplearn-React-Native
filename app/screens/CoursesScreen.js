import React, { useContext } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Screen from "./../components/shared/Screen";
import Card from "../components/shared/Card";
import TopLearnContext from "../context/TopLearnContext";

const CoursesScreen = ({ navigation }) => {
  const context = useContext(TopLearnContext);

  return (
    <Screen style={styles.container}>
      {context.loading && (
        <ActivityIndicator
          size="large"
          color="tomato"
          animating={context.loading}
        />
      )}
      <FlatList
        data={context.courses}
        keyExtractor={(course) => course._id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CourseDetails", { course: item })
            }
          >
            <Card
              title={item.title}
              time="15:00"
              price={item.price}
              image={item.imageUrl}
              teacher="یونس قربانی"
              info={item.info}
            />
          </TouchableOpacity>
        )}
      />
    </Screen>
  );
};

export default CoursesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f4f4",
  },
});
