import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";

const CandidateList = () => { 
    const [candidateList, setCandidateList] = useState([]);
    const db = getDatabase();
    useEffect(() => {
        const startCountRef = ref(db, "candidates/");
        onValue(startCountRef, (snapshot) => {
            const data = snapshot.val();
            const candidates = Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            }));
            console.log(candidates);
            setCandidateList(candidates);
        });
    }, [])

    return (
        <View style={{ width: 380 }}>
            <ImageBackground source={require("../../assets/candidaeListPage.jpg")}
                style={{ height: '100%' }}
            >
                <ScrollView>
                    {
                        candidateList.map((item, index) => {
                            return (
                                <View key={item.key}>
                                    <Text style={styles.item}>
                                        Contact no.:{item.contactNumber}  {"\n"}
                                        First Name: {item.firstName} {"\n"}
                                        Last Name: {item.lastName} {"\n"}
                                        First Name: {item.firstName} {"\n"}
                                    </Text>
                                </View>
                            )
                        }
                        )
                    }
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        fontSize: 22,
        backgroundColor: "yellow",
        marginTop: 20,
        padding: 10,
        borderRadius: 30,
        width: '95%',
        backgroundColor: 'rgb(220,220,220)',
        color: 'orange',
        fontWeight: 'bold'
    }

})
export default CandidateList;
