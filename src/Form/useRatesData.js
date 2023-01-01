import axios from "axios";
import { useState, useEffect } from "react";


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading"
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const exchangeRatesURL = "https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,GBP,";
                const response = await axios.get(exchangeRatesURL)

                console.log(response)
                setRatesData({
                    date: response.data.date,
                    rates: response.data.rates,
                    status: "success"
                });
            } catch (error) {
                console.error(error)
                setRatesData({
                    status: "error"
                });
            }
        };
        setTimeout(fetchData, 1500);
    }, []);

    return ratesData;
};
