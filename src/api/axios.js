import axios from "axios";

const getAllData = async () => {
    try {
        const response = await axios.get(
            "http://localhost:5001/personel_finance/finance_data"
        );

        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log("Something Error", error.message);
    }
};

getAllData();