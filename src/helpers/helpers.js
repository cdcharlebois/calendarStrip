const shouldDateShowMark = (date, datasource, dateAttr) => {
    try {
        const match = datasource.items.find((item) => {
            const endDateTime = new Date(date);
            endDateTime.setDate(endDateTime.getDate()+1)
            return dateAttr.get(item).value >= date && dateAttr.get(item).value < endDateTime
        });
        if (!match)
            return null;
        else {
            return {
                dots: [{
                    color: "white"
                }]
            }
        }
    }
    catch (e){
        console.error(e);
        return null;
    }
}
const calStyle = { height: 100, paddingTop: 10, paddingBottom: 10, flex: 1 }

const daySelectionAnimation = { type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }

const defaultProps = {
    scrollable: true,
    style: calStyle,
    daySelectionAnimation: daySelectionAnimation,
    calendarColor: '#36b9cc',
    iconLeft: {uri: require("../assets/left-arrow.png")},
    iconRight: {uri: require("../assets/right-arrow.png")},
    iconContainer: {flex: 0.1}
}

module.exports = {
    shouldDateShowMark,
    calStyle,
    daySelectionAnimation,
    defaultProps
}