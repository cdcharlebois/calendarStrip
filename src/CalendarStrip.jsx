import { Component, createElement } from "react";
import Cal from 'react-native-calendar-strip';


export const CalendarStrip = ({ attribute, action, datasource, dateAttr }) => {
    const updateAttribute = (newDateTime) => {
        attribute.setValue(new Date(newDateTime));
        action.execute();
    }
    const markedDates = date => {
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
    return (
        <Cal
            scrollable
            style={{ height: 100, paddingTop: 10, paddingBottom: 10, flex: 1 }}
            selectedDate={attribute.value}
            onDateSelected={updateAttribute}
            daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
            calendarColor={'#36b9cc'}
            markedDates={markedDates}
            iconLeft={{uri: require("./assets/left-arrow.png")}}
            iconRight={{uri: require("./assets/right-arrow.png")}}
            iconContainer={{flex: 0.1}}
        />
    );
}
// CalendarStrip.displayName = "CalendarStripWidget"

