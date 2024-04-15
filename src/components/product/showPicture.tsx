import React, {FC} from 'react';
import 'photoswipe/dist/photoswipe.css'
import {Gallery, Item} from "react-photoswipe-gallery";

type ShowPictureType = {
    item: string[]
}

export const ShowPicture: FC<ShowPictureType> = ({item}) => {
    return (
        <Gallery>
            {item && item.length > 0 &&
                <div>
                    <Item
                        original={item[0]}
                        thumbnail={item[0]}
                        width="500"
                        height="280"
                    >

                        {({ref, open}) => (
                            <img
                                width={'100%'}
                                height={'54%'}
                                ref={ref}
                                onClick={open}
                                src={item[0]}
                                alt={'product'}
                                className={'galleryBig__img'}
                            />
                        )}
                    </Item>
                </div>}

            {item && Array.isArray(item) && item.length > 0 && item.map(el => {
                return (
                    <Item
                        key={el}
                        original={el}
                        thumbnail={el}
                        width="500"
                        height="300"
                    >
                        {({ref, open}) => (
                            <img
                                width={80}
                                height={80}
                                ref={ref}
                                onClick={open}
                                src={el}
                                className={'gallerySmall__img'}
                                alt={'sneakers'}
                            />
                        )}
                    </Item>
                )
            })}
        </Gallery>
    );
};


