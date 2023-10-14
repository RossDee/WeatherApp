const UpcomingWeather = ({ weather }) => {
    const { daily } = weather;
    const renderDailyItem = ({ item }) => {
        const { dt, temp, weather } = item;
        const { day } = temp;
        const { main, icon } = weather[0];
        const date = new Date(dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        return (React.createElement(View, { style: style.dailyItem },
            React.createElement(Text, { style: style.day }, dayName),
            React.createElement(Image, { source: {
                    uri: `https://openweathermap.org/img/w/${icon}.png`,
                }, style: style.icon }),
            React.createElement(Text, { style: style.dayTemp }, day.toFixed(1)),
            React.createElement(Text, { style: style.description }, main)));
    };
    return (React.createElement(View, { style: style.wrapper },
        React.createElement(Text, { style: style.title }, "7 Day Forecast"),
        React.createElement(FlatList, { data: daily, renderItem: renderDailyItem, keyExtractor: (item) => `${item.dt}` })));
}