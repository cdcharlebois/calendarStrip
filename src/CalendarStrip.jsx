import { Component, createElement } from "react";
import Cal from 'react-native-calendar-strip';
import { shouldDateShowMark, calStyle, daySelectionAnimation } from "./helpers/helpers";


export const CalendarStrip = ({ attribute, action, datasource, dateAttr }) => {
    const updateAttribute = (newDateTime) => {
        attribute.setValue(new Date(newDateTime));
        action.execute();
    }
    const markedDates = date => shouldDateShowMark(date, datasource, dateAttr);
    return (
        <Cal
            scrollable
            style={calStyle}
            selectedDate={attribute.value}
            onDateSelected={updateAttribute}
            daySelectionAnimation={daySelectionAnimation}
            calendarColor={'#36b9cc'}
            markedDates={markedDates}
            iconLeft={{uri: require("./assets/left-arrow.png")}}
            iconRight={{uri: require("./assets/right-arrow.png")}}
            iconContainer={{flex: 0.1}}
        />
    );
}