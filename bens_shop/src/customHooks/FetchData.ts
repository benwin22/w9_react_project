import * as _React from 'react';
import { useState, useEffect } from 'react';

// internal
import { serverCalls } from '../api';

// We are creating a custom hook to make API calls every time we to the Shop page

// creaating our interfaces for our shop data & return of our hook

export interface ShopProps {
    id: string,
    name: string,
    image: string,
    description: string,
    make: string,
    model: string,
    milage: number,
    price: string,
    prod_id: string,
    quantity: number,
    year: number,
    order_id?: string
}

interface GetShopDataProps {
    shopData: ShopProps[]
    getData: () => void
}

// create our custom hook that get's called automatically when we go to our Shop page
export const useGetShop = (): GetShopDataProps => {
    // set up some hooks
    const [ shopData, setShopData ] = useState<ShopProps[]>([])

    const handleDataFetch = async () => {
        const result = await serverCalls.getShop()//api call from serverCall dict/object

        setShopData(result)
    }

    // useEffect is essentially an event listener listening for changes to variables
    // takes 2 args, 1st function to run, 2nd variable we watch in []
    useEffect(()=>{
        handleDataFetch()
    },[])//[] inside list:variable to watch/listen for changes

    return { shopData, getData: handleDataFetch }
}

interface GetOrderDataProps {
   orderData: ShopProps[]
    getData: () => void
}

// create our custom hook that get's called automatically when we go to our Shop page
export const useGetOrder = (): GetOrderDataProps => {
    // set up some hooks
    const [ orderData, setShopData ] = useState<ShopProps[]>([])

    const handleDataFetch = async () => {
        const result = await serverCalls.getOrder()//api call from serverCall dict/object

        setShopData(result)
    }

    // useEffect is essentially an event listener listening for changes to variables
    // takes 2 args, 1st function to run, 2nd variable we watch in []
    useEffect(()=>{
        handleDataFetch()
    },[])//[] inside list:variable to watch/listen for changes

    return { orderData, getData: handleDataFetch }
}