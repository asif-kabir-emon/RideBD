import CustomButton from "@/components/CustomButton";
import DriverCard from "@/components/DriverCard";
import RideLayout from "@/components/RideLayout";
import { useDriverStore } from "@/store";
import { router } from "expo-router";
import { FlatList, View } from "react-native";

const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();

  return (
    <RideLayout title="Choose a driver">
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <DriverCard
            key={Number(item.id)}
            item={item}
            selected={selectedDriver!}
            setSelected={() => setSelectedDriver(Number(item.id)!)}
          />
        )}
        ListFooterComponent={() => (
          <View className="mx-5 mt-5">
            <CustomButton
              title="Select Ride"
              onPress={() => router.push("/(root)/book-ride")}
            />
          </View>
        )}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
