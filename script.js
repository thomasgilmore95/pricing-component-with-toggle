var annualMonthlySwitch = document.getElementById('annualMonthlySwitch');

var counter = 0;

var annualMonthlySwitchFunction = () => {
    counter++;
    if (counter % 2 == 0) {
        $('#monthlyPriceBasic').addClass('hideMonthlyOrAnnualPrice');
        $('#annualPriceBasic').removeClass('hideMonthlyOrAnnualPrice');
        $('#monthlyPriceProfessional').addClass('hideMonthlyOrAnnualPrice');
        $('#annualPriceProfessional').removeClass('hideMonthlyOrAnnualPrice');
    } else {
        $('#monthlyPriceBasic').removeClass('hideMonthlyOrAnnualPrice');
        $('#annualPriceBasic').addClass('hideMonthlyOrAnnualPrice');
        $('#monthlyPriceProfessional').removeClass('hideMonthlyOrAnnualPrice');
        $('#annualPriceProfessional').addClass('hideMonthlyOrAnnualPrice');
    }
};

annualMonthlySwitch.addEventListener('click', annualMonthlySwitchFunction);