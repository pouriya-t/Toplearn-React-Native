import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import Screen from "./../components/shared/Screen";
import Card from "./../components/shared/Card";

const CourseDetailsScreen = ({ navigation, route }) => {
  if (!route.params.course) return null;

  navigation.setOptions({
    headerShown: true,
    title: route.params.course.title,
    headerTitleStyle: {
      fontFamily: "yekan",
      fontSize: RFPercentage(2.5),
      color: "white",
    },
    headerStyle: {
      backgroundColor: "tomato",
    },
  });
  const { _id, title, price, imageUrl, info } = route.params.course;
  const courseInfo = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم 
  از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
   روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
   تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
   می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فرا
  وان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
   طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
   ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در
   ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
   نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
   اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`;
  return (
    <Screen style={styles.container}>
      <Card
        title={title}
        price={price}
        time="15:00:00"
        image={imageUrl}
        teacher="یونس قربانی"
        courseInfo={info}
      />
    </Screen>
  );
};

export default CourseDetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "#f8f4f4",
  },
});
