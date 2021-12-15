const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
        return integer * fare;
    };
};

function fareDoubler(fare) {
    const doubled = createFareMultiplier(2)(fare);
    return doubled;
};

function fareTripler(fare) {
    const tripled = createFareMultiplier(3)(fare);
    return tripled;
};

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
};