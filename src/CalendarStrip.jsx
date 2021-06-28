import { Component, createElement } from "react";

import { shouldDateShowMark, calStyle, daySelectionAnimation } from "./helpers/helpers";


export const CalendarStrip = ({ attribute, action, datasource, dateAttr }) => {
    const updateAttribute = (newDateTime) => {
        attribute.setValue(new Date(newDateTime));
        action.execute();
    }
    const markedDates = date => shouldDateShowMark(date, datasource, dateAttr);
    return null;
}