function solve(firstArg, secondArg, thirdArg, educationType) {
    const prices = {
        jsFundamentals: 170,
        jsAdvanced: 180,
        jsApplications: 190
    };

    let fundamentalsCoursePrice = 0;
    let advancedCoursePrice = 0;
    let applicationsCoursePrice = 0;

    let jsAdvancedDiscount = !!(firstArg && secondArg);
    let moduleDiscount = !!(firstArg && secondArg && thirdArg);
    let onlineDiscount = !!(educationType === 'online');

    if (firstArg) {
        fundamentalsCoursePrice = prices.jsFundamentals;
    }

    if (secondArg) {
        if (jsAdvancedDiscount) {
            advancedCoursePrice = prices.jsAdvanced - prices.jsAdvanced * 0.1;
        } else {
            advancedCoursePrice = prices.jsAdvanced;
        }
    }

    if (thirdArg) {
        applicationsCoursePrice = prices.jsApplications;
    }

    let totalPrice = fundamentalsCoursePrice + advancedCoursePrice + applicationsCoursePrice;

    if (moduleDiscount){
        totalPrice -= totalPrice * 0.06;
    }

    if (onlineDiscount){
        totalPrice -= totalPrice * 0.06;
    }

    console.log(Math.round(totalPrice));
}

solve(true, false, false, "onsite");
solve(true, true, false, "onsite");
solve(true, false, false, "online");