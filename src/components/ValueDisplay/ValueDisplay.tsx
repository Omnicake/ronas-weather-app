import React from "react";
import "./ValueDisplay.scss";

interface AdditionalWeatherInfoProps {
    label: string,
    value?: string
}

const ValueDisplay: React.FC<AdditionalWeatherInfoProps> = ({label, value}) => <div className="value-display__container">
    <h3>{label}</h3>
    <span className="value-display__value">{value || "--"}</span>
</div>;

export default ValueDisplay;
