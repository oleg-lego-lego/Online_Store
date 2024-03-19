import * as React from 'react';
import {ChangeEvent, useEffect, useRef} from 'react';
import Pagination from '@mui/material/Pagination';
import {Stack} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {setPagePaginationAC, setPaginationRowsAC} from "../store/settings-reducer";


export const PaginationOutlined = () => {
    const dispatch = useAppDispatch()

    const countPage = useAppSelector(state => state.settings.countPage)
    const paginationPage = useAppSelector(state => state.settings.pagePagination)
    const paginationRows = useAppSelector(state => state.settings.paginationRows)
    const themeValue = useAppSelector(state => state.settings.theme)

    const isMounted = useRef(false)

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('paginationRows', JSON.stringify(paginationRows));
        }

        isMounted.current = true
    }, [paginationRows])

    const onChangeSelectRows = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPaginationRowsAC(Number(e.currentTarget.value)))
        dispatch(setPagePaginationAC(1))
    }

    const onChangePagePagination = (event: ChangeEvent<unknown>, page: number) => {
        dispatch(setPagePaginationAC(page))
    }

    return (
        <div className={`pagination__container ${themeValue && 'dark'}`}>
            <Stack spacing={2} className={'pagination__page'}>
                <Pagination
                    count={Math.ceil(countPage / paginationRows)}
                    page={paginationPage}
                    onChange={onChangePagePagination}
                    color="primary"
                    siblingCount={0}
                    size={'large'}
                />
            </Stack>

            <select id={'rowSelect'} value={paginationRows} onChange={onChangeSelectRows} className="select-css">
                {[1, 5, 10, 20, 50].map(el => {
                    return (
                        <option key={el} value={el}>{el}</option>
                    )
                })}
            </select>
        </div>
    );
}
