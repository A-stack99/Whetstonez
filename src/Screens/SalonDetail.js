// import React from "react";

// import { View, Text, Image, TouchableOpacity, FlatList, StatusBar } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

// const SalonDetails = () => {
//   const services = [
//     { id: "1", name: "Hair Cut", price: "$10.00", duration: "30 Mins" },
//     { id: "2", name: "Hair Wash", price: "$5.00", duration: "30 Mins" },
//   ];

//   return (
//     <View style={{ flex: 1, backgroundColor: "#fff" }}>
//       <StatusBar barStyle="dark-content" />

//       <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 15, alignItems: "center" }}>
//         <TouchableOpacity>
//           {/* <Ionicons name="arrow-back" size={24} color="black" /> */}
//         </TouchableOpacity>
//         <TouchableOpacity>
//           {/* <FontAwesome name="heart-o" size={24} color="black" /> */}
//         </TouchableOpacity>
//       </View>

//       <Image
//         source={{ uri: "https://source.unsplash.com/600x300/?salon" }}
//         style={{ width: "90%", height: 180, alignSelf: "center", borderRadius: 10 }}
//       />
  
//       <View style={{ padding: 15 }}>
//         <Text style={{ fontSize: 22, fontWeight: "bold" }}>Hair Avenue</Text>
//         <Text style={{ color: "gray" }}>📍 No 03, Kadalana Road, Kadolana, Moratuwa</Text>
//         <Text style={{ color: "gray" }}>🕒 9AM - 10PM, Mon - Sun</Text>
//         <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
//           {/* <FontAwesome name="star" size={16} color="gold" /> */}
//           <Text style={{ marginLeft: 5, fontSize: 16 }}>4.7 (312)</Text>
//         </View>
//         <Text style={{ marginTop: 10, color: "gray" }}>
//           Hair Avenue provides expert haircuts, styling, along with services like facials, cleanups, skincare and makeup to keep you looking your best.
//         </Text>
//       </View>
      
 
//       <ScrollView horizontal style={{ paddingLeft: 15 }}>
//         {['Hair Cut', 'Hair Styling', 'Hair Treatments', 'Combo'].map((tab, index) => (
//           <TouchableOpacity key={index} style={{ marginRight: 15 }}>
//             <Text style={{ fontSize: 16, fontWeight: "bold", color: index === 0 ? "blue" : "gray" }}>{tab}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
      

//       <FlatList
//         data={services}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 15, borderBottomWidth: 0.5, borderColor: "#ddd" }}>
//             <View>
//               <Text style={{ fontSize: 18 }}>{item.name}</Text>
//               <Text style={{ color: "gray" }}>{item.price}  •  {item.duration}</Text>
//             </View>
//             <TouchableOpacity>
//               {/* <Ionicons name="add-circle-outline" size={24} color="black" /> */}
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default SalonDetails;

import { View, Text } from 'react-native'
import React from 'react'

const SalonDetail = ({ navigation }) => {
  return (
    <View>
      <Text>SalonDetail</Text>
    </View>
  )
}

export default SalonDetail