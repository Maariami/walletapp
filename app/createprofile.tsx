import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import * as MediaLibrary from "expo-media-library";
import { useNavigation } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Yup from "yup";

const styled = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: 24,
    paddingInline: 30,
  },
  inputs: {
    marginTop: 40,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 23,
  },
  input: {
    width: "100%",
    paddingInline: 5,
  },
  title: {
    color: "rgba(128, 224, 255, 1)",
    paddingLeft: 5,
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 14,
    textTransform: "capitalize",
  },
  inputbox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 5,
    marginTop: 12,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 1,
  },
  button: {
    marginBottom: 75,
  },
  signup: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    height: 72,
    borderColor: "rgba(96, 117, 255, 1)",
    borderWidth: 1,
    shadowColor: "rgba(27, 57, 255, 1)",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  signupText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    textTransform: "capitalize",
  },
});

const schema = Yup.object({
  username: Yup.string().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  dob: Yup.string()
    .required("Date of birth is required")
    .matches(/^\d{2}-\d{2}-\d{4}$/, "Use format dd-mm-yyyy"),
});

export default function CreateProfile() {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const handleImageUpload = async () => {
    const { status, granted } = await MediaLibrary.requestPermissionsAsync();
    if (!granted) {
      alert("Permission not granted. Please allow media access from settings.");
      return;
    }
    if (status !== "granted") {
      alert("Media access denied");
      return;
    }

    const assets = await MediaLibrary.getAssetsAsync({
      first: 1,
      mediaType: "photo",
      sortBy: ["creationTime"],
    });

    if (assets.assets.length > 0) {
      setImageUri(assets.assets[0].uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ width: "100%", height: "100%" }}>
        <LinearGradient
          colors={["#4950F9", "#1937FE"]}
          start={{ x: -0.1, y: 0 }}
          end={{ x: 1.15, y: 1 }}
          style={styled.main}
        >
          <Image
            source={require("../assets/images/backarrow.png")}
            style={{ width: 26, height: 21 }}
          />

          <TouchableOpacity onPress={handleImageUpload}>
            <Image
              source={
                imageUri
                  ? { uri: imageUri }
                  : require("../assets/images/profpic.png")
              }
              style={{
                width: 143,
                height: 143,
                alignSelf: "center",
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>

          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              dob: "",
            }}
            validationSchema={schema}
            validateOnMount
            onSubmit={() => navigation.navigate("main/wallet")}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
              setFieldValue,
            }) => (
              <>
                <View style={styled.inputs}>
                  {[
                    {
                      label: "Username",
                      name: "username",
                      placeholder: "Your username",
                    },
                    {
                      label: "First name",
                      name: "firstName",
                      placeholder: "Your name",
                    },
                    {
                      label: "Last name",
                      name: "lastName",
                      placeholder: "Your last name",
                    },
                  ].map((field) => (
                    <View style={styled.input} key={field.name}>
                      <Text style={styled.title}>{field.label}</Text>
                      <View style={styled.inputbox}>
                        <TextInput
                          style={{
                            outline: "none",
                            width: "100%",
                            color: "rgba(128, 224, 255, 1)",
                          }}
                          placeholder={field.placeholder}
                          placeholderTextColor="rgba(180, 220, 255, 0.5)"
                          onChangeText={handleChange(field.name)}
                          onBlur={handleBlur(field.name)}
                          value={(values as any)[field.name]}
                        />
                        {!errors[field.name] && touched[field.name] && (
                          <Image
                            source={require("../assets/images/checkmark.png")}
                            style={{ width: 18, height: 13 }}
                          />
                        )}
                      </View>
                    </View>
                  ))}

                  {/* Date of Birth */}
                  <View style={styled.input}>
                    <Text style={styled.title}>Date of birth</Text>
                    <TouchableOpacity
                      onPress={() => setDatePickerVisible(true)}
                      activeOpacity={0.8}
                    >
                      <View style={styled.inputbox}>
                        <Text
                          style={{
                            color: values.dob
                              ? "rgba(128, 224, 255, 1)"
                              : "rgba(180, 220, 255, 0.5)",
                          }}
                        >
                          {values.dob || "Your date of birth"}
                        </Text>
                        {!errors.dob && touched.dob && (
                          <Image
                            source={require("../assets/images/checkmark.png")}
                            style={{ width: 18, height: 13 }}
                          />
                        )}
                      </View>
                    </TouchableOpacity>

                    {datePickerVisible && (
                      <DateTimePicker
                        mode="date"
                        display={Platform.OS === "ios" ? "spinner" : "default"}
                        value={new Date()}
                        onChange={(event, selectedDate) => {
                          if (event.type !== "dismissed") {
                            const formatted = selectedDate
                              ?.toLocaleDateString("en-GB")
                              .split("/")
                              .join("-");
                            if (formatted) {
                              setFieldValue("dob", formatted);
                            }
                          }
                          if (Platform.OS !== "ios") {
                            setDatePickerVisible(false);
                          }
                        }}
                      />
                    )}
                  </View>
                </View>

                <View style={{ flex: 1 }} />

                <View style={styled.button}>
                  <TouchableOpacity
                    style={styled.signup}
                    onPress={handleSubmit}
                    disabled={!isValid || !imageUri}
                    activeOpacity={isValid && imageUri ? 0.8 : 1}
                  >
                    <Text
                      style={[
                        styled.signupText,
                        {
                          color:
                            isValid && imageUri
                              ? "rgba(39, 67, 253, 1)"
                              : "rgba(200, 200, 200, 1)",
                        },
                      ]}
                    >
                      Complete
                    </Text>
                    <Image
                      style={{ width: 18, height: 13 }}
                      source={
                        isValid && imageUri
                          ? require("../assets/images/checkblue.png")
                          : require("../assets/images/checkwhite.png")
                      }
                    />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
}
