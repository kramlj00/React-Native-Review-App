import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button";

// create yup object for validation
const reviewSchema = yup.object({
  // title must be a string, it mustn't be empty and it has to be at least 4 char long
  title: yup.string().required().min(4),
  body: yup.string().required().min(4),
  rating: yup
    .string()
    .required()
    // check if rating is in between 1 and 5
    // if it is return true, else this will return false
    .test("is-num-1-5", "Rating must be a number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")} //this will update title property in values
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>

            <TextInput
              multiline
              minHeight={60}
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange("body")} //this will update body property in values
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")} //this will update rating property in values
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            {/* onPress function will run onSubmit(values) function
                        it will grab all the values inside TextInput (all 3 properties) */}
            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
