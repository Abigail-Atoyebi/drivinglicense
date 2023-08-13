// =================TEST DATA FOR QUESTION 1===========
// Case1:
const mainCourseCount1 = 2;
const appetizerCount1 = 1;
const dessertCount1 = 3;
const restaurantLocation1 = "Domestic";
function customerBill(
  mainCourseCount,
  appetizerCount,
  dessertCount,
  restaurantLocation
) {
  let totalBill =
    mainCourseCount * 4000 + appetizerCount * 1000 + dessertCount * 500;
  let foodItems = mainCourseCount + appetizerCount + dessertCount;
  if (foodItems >= 3) {
    totalBill = totalBill - 0.1 * totalBill;
  }
  if (restaurantLocation === "International") {
    totalBill = totalBill + 0.15 * totalBill;
  }
  console.log(totalBill);
}

customerBill(
  mainCourseCount1,
  appetizerCount1,
  dessertCount1,
  restaurantLocation1
);

//Case 2:
const mainCourseCount2 = 3;
const appetizerCount2 = 2;
const dessertCount2 = 2;
const restaurantLocation2 = "International";
customerBill(
  mainCourseCount2,
  appetizerCount2,
  dessertCount2,
  restaurantLocation2
);
// =================TEST DATA FOR QUESTION 2===========
const age1 = 20;
const vehicleType1 = "C";
// Output: "Eligible"
function drivingLicense(age, vehicleType) {
  if (age >= 18) {
    console.log("Eligible");
  } else if (age >= 16 && age <= 17) {
    if (vehicleType === "M" || vehicleType === "S") {
      console.log("Eligible");
    } else {
      console.log("Not Eligible");
    }
  } else {
    console.log("Not Eligible");
  }
}
drivingLicense(age1, vehicleType1);

const age2 = 16;
const vehicleType2 = "M";
// Output: "Eligible"
drivingLicense(age2, vehicleType2);

const age3 = 14;
const vehicleType3 = "S";
// Output: "Not Eligible"
drivingLicense(age3, vehicleType3);

// =================TEST DATA FOR QUESTION 3===========

const customerAge1 = 50;
const purchaseAmount1 = 80;
// Output: 80
function price(customerAge, purchaseAmount) {
  if (customerAge >= 60) {
    purchaseAmount = purchaseAmount - 0.2 * purchaseAmount;
  }
  if (purchaseAmount >= 100) {
    purchaseAmount = purchaseAmount - 0.1 * purchaseAmount;
  }
  console.log(purchaseAmount);
}
price(customerAge1, purchaseAmount1);

const customerAge2 = 65;
const purchaseAmount2 = 120;
// Output: 96
price(customerAge2, purchaseAmount2);

const customerAge3 = 30;
const purchaseAmount3 = 150;
// Output: 135
price(customerAge3, purchaseAmount3);
