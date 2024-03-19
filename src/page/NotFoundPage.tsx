import React from 'react';
import {NotFound} from "../components/notFound/NotFound";
import {useAppSelector} from "../app/store";

export const NotFoundPage = () => {
    const themeValue = useAppSelector(state => state.settings.theme)

    return (
        <div className={`notFound__bloc ${themeValue && 'dark'}`}>
            <NotFound/>
        </div>
    );
};
