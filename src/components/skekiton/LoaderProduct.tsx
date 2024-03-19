import React from 'react';
import ContentLoader from "react-content-loader";
import {useAppSelector} from "../../app/store";

export const LoaderProduct = () => {
    const themeValue = useAppSelector(state => state.settings.theme)

    return (
        <div className={`LoaderProduct__bloc ${themeValue && 'dark'}`}>
            <div className={'LoaderProduct__bloc-img'}>
                <div style={{marginBottom: '15px', marginRight: '50px'}}>
                    <div style={{marginBottom: '15px'}}>
                        <ContentLoader
                            speed={2}
                            width={450}
                            height={350}
                            viewBox="0 0 450 350"
                            backgroundColor="grey"
                            foregroundColor="#ecebeb">
                            <rect x="0" y="0" rx="10" ry="10" width="450" height="350"/>
                        </ContentLoader>
                    </div>


                    {[1, 2, 3].map(el => {
                        return (
                            <span key={el} style={{marginRight: '10px'}}>
                                <ContentLoader
                                    speed={2}
                                    width={80}
                                    height={80}
                                    viewBox="0 0 80 80"
                                    backgroundColor="grey"
                                    foregroundColor="#ecebeb">
                                    <rect x="0" y="0" rx="10" ry="10" width="80" height="80"/>
                                </ContentLoader>
                            </span>
                        )
                    })}
                </div>


                <ContentLoader
                    speed={2}
                    width={400}
                    height={200}
                    viewBox="0 0 400 200"
                    backgroundColor="grey"
                    foregroundColor="#ecebeb">
                    <rect x="0" y="0" rx="10" ry="10" width="400" height="200"/>
                </ContentLoader>
            </div>
        </div>


    );
};
