import React, {FC, useEffect, useState} from 'react';
import {IconButton,} from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

type ScrollProps = {
    showBelow: number;
}

export const Scroll: FC<ScrollProps> = ({showBelow}) => {
    const [show, setShow] = useState(!showBelow)
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        window[`scrollTo`]({top: 0, behavior: `smooth`})
    }

    const onPageScroll = () => {
        document.documentElement.scrollTop > showBelow ? setShow(true) : setShow(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", onPageScroll)

        return () => {
            window.removeEventListener("scroll", onPageScroll)
        }
    }, [onPageScroll, setShow]);

    const styles: StylesType = {
        iconButton: {
            zIndex: 2,
            position: 'fixed',
            bottom: '20vh',
            backgroundColor: isHovered ? '#aeb9c0' : '#DCDCDC',
            color: 'black',
            right: '7%',
            transition: 'background-color 0.3s',
        },
    };

    return (
        <>
            {show &&
                <IconButton
                    onClick={handleClick}
                    aria-label="to top"
                    component="span"
                    style={styles.iconButton}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <ExpandLessIcon/>
                </IconButton>
            }
        </>
    )
};

interface StylesType {
    iconButton: {
        zIndex: number;
        position: 'fixed';
        bottom: string;
        backgroundColor: string;
        color: string;
        right: string;
        transition: string;
    };
}
