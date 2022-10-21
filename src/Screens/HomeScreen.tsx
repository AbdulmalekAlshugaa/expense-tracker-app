import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";

import React, { useRef, useEffect, useState } from "react";
import { COLORS, FONTS, icons, SIZES } from "../../assets/constants";
import * as Svg from "react-native-svg";
import { VictoryPie } from "victory-native";
import Header from "../components/Header";
import CategoryItem from "../components/CategoryItem";
import CustomTitle from "../components/CustomTitle";
import LottieView from "lottie-react-native";
import {
  fetchPosts,
  successFetchPostData,
  failedFetchPostData,
  cleanPostData,
} from "../feature/expenses/expensesSlice";
import animationsFile from "../../assets/constants/animations";
import { AppDispatch } from "../store";
export interface HomeProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: any) => state.expenses.status);
  const posts = useSelector((state: any) => state.expenses.postsList);
  // load the page if the page is infocus and the status is idle
  // load data if the sxreen is in focus

  const [viewMode, setViewMode] = useState<"chart" | "list">("chart");
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const [showMoreToggle, setShowMoreToggle] = useState<boolean>(false);
  const categoryListHeightAnimationValue = useRef(
    new Animated.Value(115)
  ).current;
  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      dispatch(fetchPosts());
    });
    return unsubscribe;
  }, [props.navigation, status, dispatch]);
  const [orderStatus, setOrderStatus] = React.useState("INCOME");

  const itemIconById = (id: number) => {
    switch (id) {
      case 1:
        return icons.education;
      case 2:
        return icons.food;
      case 3:
        return icons.baby_car;
      case 4:
        return icons.healthcare;
      case 5:
        return icons.sports_icon;
      case 6:
        return icons.cloth_icon;

      default:
        return icons.more;
    }
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  function renderSubHeader2() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
          backgroundColor: COLORS.white,
        }}
      >
        <View>
          <Text style={{ color: COLORS.primary, ...FONTS.h2, marginBottom: 5 }}>
            Hi, Abdulmalik Alshugaa
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ ...FONTS.h3, color: COLORS.black }}>123,4 MYR</Text>
            <Text style={{ ...FONTS.h4, color: COLORS.darkgray }}>
              Cash flow
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderCategoryHeaderSection() {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: SIZES.padding,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Title */}
        <View>
          <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>CATEGORIES</Text>
          <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>
            {posts?.result?.length} Total
          </Text>
        </View>

        {/* Button */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: viewMode == "chart" ? COLORS.secondary : null,
              height: 50,
              width: 50,
              borderRadius: 25,
            }}
            onPress={() => setViewMode("chart")}
          >
            <Image
              source={icons.chart}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: viewMode == "list" ? COLORS.secondary : null,
              height: 50,
              width: 50,
              borderRadius: 25,
              marginLeft: SIZES.base,
            }}
            onPress={() => setViewMode("list")}
          >
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderCategoryList() {
    const renderItem = ({ item }) => (
      <CategoryItem
        item={item}
        onPressAction={() => setSelectedCategory(item)}
      />
    );

    return (
      <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
        <Animated.View style={{ height: categoryListHeightAnimationValue }}>
          <FlatList
            data={posts.result}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            numColumns={2}
          />
        </Animated.View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginVertical: SIZES.base,
            justifyContent: "center",
          }}
          onPress={() => {
            if (showMoreToggle) {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 115,
                duration: 500,
                useNativeDriver: false,
              }).start();
            } else {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 172.5,
                duration: 500,
                useNativeDriver: false,
              }).start();
            }

            setShowMoreToggle(!showMoreToggle);
          }}
        >
          <Text style={{ ...FONTS.body4 }}>
            {showMoreToggle ? "LESS" : "MORE"}
          </Text>
          <Image
            source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
            style={{
              marginLeft: 5,
              width: 15,
              height: 15,
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderIncomingExpensesTitle() {
    return (
      <View
        style={{
          height: 80,
          backgroundColor: COLORS.lightGray2,
          padding: SIZES.padding,
        }}
      >
        {/* Title */}
        <Text style={{ ...FONTS.h3, color: COLORS.primary }}>EXPENSES</Text>
        <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>12 Total</Text>
      </View>
    );
  }
  function renderIncomingExpenses() {
    let allExpenses = selectedCategory ? selectedCategory.expenses : [];
    let incomingExpenses = allExpenses.filter((a) => a.status == orderStatus);
    function renderItem({ item, index }: { item: any; index: number }) {
      return (
        <View
          style={{
            width: 300,
            marginRight: SIZES.padding,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginVertical: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            shadowColor: "#000",
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 3,
          }}
        >
          <View
            style={{
              position: "absolute",
              top: -2,
              right: -4,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
              borderTopRightRadius: 25,
              borderBottomLeftRadius: 25,
              backgroundColor:
                item.status == "INCOME" ? COLORS.primary : COLORS.red,
              height: 30,
            }}
          >
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white,
                marginStart: 1,
                marginTop: 1,
                textAlign: "left",
              }}
            >
              {item.status}
            </Text>
          </View>
          {/* Title */}
          <View
            style={{
              flexDirection: "row",
              padding: SIZES.padding,
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: COLORS.lightGray,
                alignItems: "center",
                justifyContent: "center",
                marginRight: SIZES.base,
              }}
            >
              <Image
                source={itemIconById(selectedCategory.id)}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: selectedCategory.color,
                }}
              />
            </View>

            <Text style={{ ...FONTS.h3, color: selectedCategory.color }}>
              {selectedCategory.name}
            </Text>
          </View>

          {/* Expense Description */}
          <View style={{ paddingHorizontal: SIZES.padding }}>
            {/* Title and description */}
            <Text style={{ ...FONTS.h3 }}>{item.title}</Text>
            <Text
              style={{
                ...FONTS.body3,
                flexWrap: "wrap",
                color: COLORS.darkgray,
              }}
            >
              {item.description}
            </Text>

            {/* Location */}
            <Text style={{ marginTop: SIZES.padding, ...FONTS.h4 }}>
              Location
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.pin}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray,
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  marginBottom: SIZES.base,
                  color: COLORS.darkgray,
                  ...FONTS.body4,
                }}
              >
                {item.location}
              </Text>
            </View>
          </View>

          {/* Price */}
          <View
            style={{
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderBottomStartRadius: SIZES.radius,
              borderBottomEndRadius: SIZES.radius,
              backgroundColor: selectedCategory.color,
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
              CONFIRM {item.total.toFixed(2)} USD
            </Text>
          </View>
        </View>
      );
    }

    return (
      <View>
        {renderIncomingExpensesTitle()}

        {incomingExpenses.length > 0 && (
          <FlatList
            data={incomingExpenses}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          ></FlatList>
        )}

        {incomingExpenses.length == 0 && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 300,
            }}
          >
            <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>
              No Record
            </Text>
          </View>
        )}
      </View>
    );
  }
  function processCategoryDataToDisplay() {
    // Filter expenses with "Confirmed" status
    let chartData = posts.result.map((item) => {
      let confirmExpenses = item.expenses.filter(
        (a) => a.status == orderStatus
      );
      var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0);

      return {
        name: item.name,
        y: total,
        expenseCount: confirmExpenses.length,
        color: item.color,
        id: item.id,
      };
    });

    // filter out categories with no data/expenses
    let filterChartData = chartData.filter((a) => a.y > 0);

    // Calculate the total expenses
    let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

    // Calculate percentage and repopulate chart data
    let finalChartData = filterChartData.map((item) => {
      let percentage = ((item.y / totalExpense) * 100).toFixed(0);
      return {
        label: `${percentage}%`,
        y: Number(item.y),
        expenseCount: item.expenseCount,
        color: item.color,
        name: item.name,
        id: item.id,
      };
    });

    return finalChartData;
  }
  function setSelectCategoryByName(name: string) {
    let category = posts.result.filter((a: any) => a.name == name);
    setSelectedCategory(category[0]);
  }
  function renderChart() {
    let chartData = processCategoryDataToDisplay();
    let colorScales = chartData.map((item: any) => item.color);
    let totalExpenseCount = chartData.reduce(
      (a: Object, b: Object) => a + (b.expenseCount || 0),
      0
    );

    console.log("Check Chart");
    console.log(chartData);

    if (Platform.OS == "ios") {
      return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <VictoryPie
            data={chartData}
            labels={(datum) => `${datum.y}`}
            radius={({ datum }) =>
              selectedCategory && selectedCategory.name == datum.name
                ? SIZES.width * 0.4
                : SIZES.width * 0.4 - 10
            }
            innerRadius={70}
            labelRadius={({ innerRadius }) =>
              (SIZES.width * 0.4 + innerRadius) / 2.5
            }
            style={{
              labels: { fill: "white" },
              parent: {
                // ...styles.shadow
              },
            }}
            width={SIZES.width * 0.8}
            height={SIZES.width * 0.8}
            colorScale={colorScales}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onPress: () => {
                    return [
                      {
                        target: "labels",
                        mutation: (props) => {
                          let categoryName = chartData[props.index].name;
                          setSelectCategoryByName(categoryName);
                        },
                      },
                    ];
                  },
                },
              },
            ]}
          />

          <View style={{ position: "absolute", top: "42%", left: "42%" }}>
            <Text style={{ ...FONTS.h1, textAlign: "center" }}>
              {totalExpenseCount}
            </Text>
            <Text style={{ ...FONTS.body3, textAlign: "center" }}>
              {orderStatus}
            </Text>
          </View>
        </View>
      );
    } else {
      // Android workaround by wrapping VictoryPie with SVG
      return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Svg
            width={SIZES.width}
            height={SIZES.width}
            style={{ width: "100%", height: "auto" }}
          >
            <VictoryPie
              standalone={false} // Android workaround
              data={chartData}
              labels={(datum) => `${datum.y}`}
              radius={({ datum }) =>
                selectedCategory && selectedCategory.name == datum.name
                  ? SIZES.width * 0.4
                  : SIZES.width * 0.4 - 10
              }
              innerRadius={70}
              labelRadius={({ innerRadius }) =>
                (SIZES.width * 0.4 + innerRadius) / 2.5
              }
              style={{
                labels: { fill: "white" },
                parent: {
                  // ...styles.shadow
                },
              }}
              width={SIZES.width}
              height={SIZES.width}
              colorScale={colorScales}
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onPress: () => {
                      return [
                        {
                          target: "labels",
                          mutation: (props) => {
                            let categoryName = chartData[props.index].name;
                            setSelectCategoryByName(categoryName);
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
            />
          </Svg>
          <View style={{ position: "absolute", top: "42%", left: "42%" }}>
            <Text style={{ ...FONTS.h1, textAlign: "center" }}>
              {totalExpenseCount}
            </Text>
            <Text style={{ ...FONTS.body3, textAlign: "center" }}>
              Expenses
            </Text>
          </View>
        </View>
      );
    }
  }
  function renderExpenseSummary() {
    let data = processCategoryDataToDisplay();

    function renderItem({ item, index }: { item: any; index: number }) {
      return (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 40,
            paddingHorizontal: SIZES.radius,
            borderRadius: 10,
            backgroundColor:
              selectedCategory && selectedCategory.name == item.name
                ? item.color
                : COLORS.white,
          }}
          onPress={() => {
            let categoryName = item.name;
            setSelectCategoryByName(categoryName);
          }}
        >
          {/* Name/Category */}
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor:
                  selectedCategory && selectedCategory.name == item.name
                    ? COLORS.white
                    : item.color,
                borderRadius: 5,
              }}
            />

            <Text
              style={{
                marginLeft: SIZES.base,
                color:
                  selectedCategory && selectedCategory.name == item.name
                    ? COLORS.white
                    : COLORS.primary,
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
          </View>

          {/* Expenses */}
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                color:
                  selectedCategory && selectedCategory.name == item.name
                    ? COLORS.white
                    : COLORS.primary,
                ...FONTS.h3,
              }}
            >
              {item.y} USD - {item.label}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <View style={{ padding: SIZES.padding }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  }

  function renderStatusSelection() {
    return (
      <View
        style={{
          backgroundColor: COLORS.lightGray2,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => setOrderStatus("EXPENSES")}
          style={{
            backgroundColor: COLORS.red,
            marginStart: 10,
            marginEnd: 10,
            borderRadius: 5,
            width: Dimensions.get("screen").width / 3,
            height: Dimensions.get("screen").height / 25,

            padding: 10,
          }}
        >
          <Text
            style={{
              ...FONTS.body5,
              color: COLORS.white,

              alignSelf: "center",
            }}
          >
            Expenses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setOrderStatus("INCOME")}
          style={{
            backgroundColor: COLORS.darkgreen,
            marginStart: 10,
            marginEnd: 10,
            borderRadius: 5,
            width: Dimensions.get("screen").width / 3,
            height: Dimensions.get("screen").height / 25,

            padding: 10,
          }}
        >
          <Text
            style={{
              ...FONTS.body5,
              color: COLORS.white,

              alignSelf: "center",
            }}
          >
            Income
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderFooter = () => {
    return (
      <View
        style={{
          width: "100%",
          height: "40%",
        }}
      >
        <LottieView source={animationsFile.loading} autoPlay loop />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        leftAction={() => console.log("Left Action")}
        rightAction={() => console.log("Right Action")}
        leftIcon={icons.back_arrow}
        rightIcon={icons.menu}
      />

      {status == "success" ? (
        <>
          {renderSubHeader2()}

          {renderStatusSelection()}

          {renderCategoryHeaderSection()}

          <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
            {viewMode == "list" && (
              <View>
                {renderCategoryList()}
                {renderIncomingExpenses()}
              </View>
            )}
            {viewMode == "chart" && (
              <View>
                {renderChart()}
                {renderExpenseSummary()}
              </View>
            )}
          </ScrollView>
        </>
      ) : (
        renderFooter()
      )}
    </View>
  );
};

// create styles

// export default Home;
export default HomeScreen;

//
