import React from 'react';
import {LinearProgress} from "@mui/material";
import {useAppSelector} from "../../app/store";

export const LineLoading = () => {
    const status = useAppSelector(state => state.settings.loadingLine)

    return (
        <>
            {status === 'loading' && (
                <LinearProgress
                    color={'info'}
                    style={{position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999}}
                />
            )}
        </>
    );
};
