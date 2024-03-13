import React from 'react';
import {SelectionSwitch} from "./SelectionSwitch";
import {Language} from "./Language";
import {useAppSelector} from "../../app/store";


export const Settings = () => {
    const themeValue = useAppSelector(state => state.settings.theme)

    return (
        <section className={`settings__bloc ${themeValue && 'dark'}`}>
            <SelectionSwitch/>
            <Language/>
        </section>
    );
};



