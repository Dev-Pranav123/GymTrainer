import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";

const CandidateList = props => {
    const [candidateList, setCandidateList] = useState([]);
    const db = getDatabase();
    useEffect(() => {
        const startCountRef = ref(db, "candidates/");
        onValue(startCountRef, (snapshot) => {
            if(snapshot.val())
            {

            
            const data = snapshot.val();
            const filteredDataByUserId = data ? Object.fromEntries(Object.entries(data)?.filter(([key]) => key?.includes(props?.route?.params?.userCredentials))) : null;
       
                if (filteredDataByUserId != null) {
                    const candidates = Object.keys(filteredDataByUserId)?.map(key => ({
                        id: key,
                        ...data[key]
                    }));
                    setCandidateList(candidates);
                }
            }
        });
    }, [])

    return (
        <View style={{ width: 380 }}>
            <ImageBackground source={require("../../assets/candidaeListPage.jpg")}
                style={{ height: '100%' }}
            >
                <Text style={styles.infoBar}> Number of candidates present {candidateList?.length}</Text>
                <ScrollView>
                    {
                        candidateList?.map((item, index) => {
                            return (
                                <View key={index}>
                                    <Text style={styles.item}>
                                        <Text style={{ color: "blue", fontWeight: "bold", marginTop: 20 }}>   Contact no. </Text>:{item?.contactNumber}  {"\n"}
                                        <Text style={{ color: "blue", fontWeight: "bold", marginTop: 20 }}>   Name </Text>: {item?.candidateName} {"\n"}
                                        <Text style={{ color: "blue", fontWeight: "bold", marginTop: 20 }}>   Fees Paid </Text> :  Rs. {item?.feesPaid} {"\n"}
                                        <Text style={{ color: "blue", fontWeight: "bold", marginTop: 20 }}>   Date Of Joining </Text>: {item?.dateOfJoining} {"\n"}
                                        <Text style={{ color: "blue", fontWeight: "bold", marginTop: 20 }}>   Time Slot </Text> :  {item?.timeSlot}
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
        borderRadius: 25,
        width: '95%',
        backgroundColor: 'rgb(220,220,220)',
        color: 'black',
        fontWeight: 'bold'
    }

})
export default CandidateList;
