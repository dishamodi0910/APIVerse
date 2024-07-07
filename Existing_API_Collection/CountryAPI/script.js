const body = document.querySelector("body");
const searchBtn = body.querySelector(".search");
const searchInput = body.querySelector(".search-country");
const result = body.querySelector(".result");

const BASE_URL = "https://restcountries.com/v3.1/name";
let countryInfo = {};

searchBtn.addEventListener("click", () => {
    let country = searchInput.value;
    result.innerHTML = "";
    getCountry(country);
});

const getCountry = async (countryName) => {
    const response = await fetch(`${BASE_URL}/${countryName}?fullText=true`)
        .then((response) => response.json())
        .then((data) => {
            countryInfo = data[0];
            updateData();
        })
        .catch(() => {
            let errorText = document.createElement('h3')
            errorText.className = "box"
            if (countryName.length == 0) {
                errorText.textContent = "The input field cannot be empty"
                
            } else {
                errorText.textContent = "Please enter a valid country name."
            }
            result.append(errorText);
        });
};

const updateData = () => {

    const countryMap = [
        { name: "common-name", value: countryInfo?.name?.common },
        {
            name: "currency",
            value: [
                countryInfo?.currencies[Object?.keys(countryInfo?.currencies)]?.symbol,
                countryInfo?.currencies[Object?.keys(countryInfo?.currencies)]?.name,
            ].join(" "),
        },
        {
            name: "native-name",
            value: countryInfo?.name?.nativeName[
                Object?.keys(countryInfo?.name?.nativeName)[1] ||
                Object?.keys(countryInfo?.name?.nativeName)[0]
            ]?.common,
        },
        { name: "continent", value: countryInfo?.continents[0] },
        { name: "region", value: countryInfo?.subregion },
        {
            name: "languages",
            value: Object?.values(countryInfo?.languages)
                .toString()
                .split(",")
                .join(", "),
        },
        { name: "population", value: formatNumber(countryInfo?.population) },
        { name: "area", value: countryInfo?.area + " km sq." },
        {
            name: "timezone (UTC)",
            value: countryInfo?.timezones?.toString().split("UTC").join("  "),
        },
        {
            name: "longitude-&-latitude",
            value: [
                '(' + countryInfo?.latlng[0],
                countryInfo?.latlng[1] + ')'
            ].join(" , "),
        },
        { name: "start-Of-Week", value: countryInfo?.startOfWeek },
    ];

    let image = document.createElement("img")
    image.src = countryInfo?.flags?.png;
    image.alt = "country-flag"
    // image.className = "country-flag"

    result.append(image)

    countryMap.forEach((item) => {
        let box = document.createElement("div");
        let info = document.createElement("h2");
        let label = document.createElement("label");

        { item.name === "common-name" || item.name === "currency" ? box.className = "highlight" : box.className = "box" };
        label.textContent = (item.name).split('-').join(' ');
        // info.className = "country-" + item.name;
        info.textContent = item.value;

        box.appendChild(label);
        box.appendChild(info);
        result.append(box)
    });
};


function formatNumber(number) {
    if (Math.abs(number) >= 1.0e9) {
        return (number / 1.0e9).toFixed(1) + ' B'; // Convert to billions
    } else if (Math.abs(number) >= 1.0e6) {
        return (number / 1.0e6).toFixed(1) + ' M'; // Convert to millions
    } else if (Math.abs(number) >= 1.0e3) {
        return (number / 1.0e3).toFixed(1) + ' K'; // Convert to thousands
    } else {
        return number.toString(); // No conversion needed
    }
}