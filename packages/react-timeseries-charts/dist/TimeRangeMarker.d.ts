import * as React from "react";
import { TimeRange } from "pondjs";
import { ChartProps } from "./Charts";
export declare type TimeRangeMarkerProps = ChartProps & {
    timerange: TimeRange;
    style?: React.CSSProperties;
    visible?: boolean;
};
export declare class TimeRangeMarker extends React.Component<TimeRangeMarkerProps> {
    static defaultProps: Partial<TimeRangeMarkerProps>;
    renderBand(): JSX.Element;
    render(): JSX.Element;
}