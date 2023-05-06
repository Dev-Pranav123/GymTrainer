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
            if (data != null) {
                const candidates = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                setCandidateList(candidates);
            }
        });
    }, [])

    return (
        <View style={{ width: 380 }}>
            <ImageBackground source={require("../../assets/candidaeListPage.jpg")}
                style={{ height: '100%' }}
            >
                <Text style={styles.infoBar}> Number of candidates present {candidateList.length}</Text>
                <ScrollView>
                    {
                        candidateList.map((item, index) => {
                            return (
                                <View key={index}>
                                    <Text style={styles.item}>
                                        Contact no. :{item?.contactNumber}  {"\n"}
                                        First Name: {item?.firstName} {item?.lastName}{"\n"}
                                        Fees Paid:  Rs. {item?.feesPaid} {"\n"}
                                        Date Of Joining: {item?.dateOfJoining}
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
    infoBar: {
        fontSize: 22,
        backgroundColor: "#FDBD01",
        marginTop: 20,
        borderRadius: 50,
        width: '90%',
        fontWeight: 'bold',
        marginLeft: 10

    },
    item: {
        fontSize: 22,
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
