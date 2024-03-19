import React from 'react';
import ContentLoader from "react-content-loader";
import {useAppSelector} from "../../app/store";

export const LoaderCard = () => {
    const themeValue = useAppSelector(state => state.settings.theme)

    return (
        <div className={`items__bloc`}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(el => {
                return (
                    <div key={el} className={`items__card ${themeValue && 'dark'}`}>
                        <ContentLoader
                            speed={2}
                            width={220}
                            height={250}
                            viewBox="0 0 220 265"
                            backgroundColor="grey"
                            foregroundColor="#ecebeb">
                            <rect x="0" y="0" rx="10" ry="10" width="220" height="170"/>
                            <rect x="0" y="175" rx="5" ry="5" width="150" height="15"/>
                            <rect x="0" y="195" rx="5" ry="5" width="220" height="15"/>
                            <rect x="0" y="234" rx="5" ry="5" width="80" height="25"/>
                            <rect x="180" y="230" rx="10" ry="10" width="32" height="32"/>
                        </ContentLoader>
                    </div>
                )
            })}
        </div>
    );
};
