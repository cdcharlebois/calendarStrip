import { Component, createElement } from "react";
import Cal from "react-native-calendar-strip";
import { shouldDateShowMark, defaultProps } from "./helpers/helpers";


export const CalendarStrip = ({ attribute, action, datasource, dateAttr }) => {
    const updateAttribute = (newDateTime) => {
        attribute.setValue(new Date(newDateTime));
        action.execute();
    }
    const markedDates = date => shouldDateShowMark(date, datasource, dateAttr);
    return <Cal
        {...defaultProps}
        selectedDate={attribute.value}
        onDateSelected={updateAttribute}
        markedDates={markedDates}
    />;
}