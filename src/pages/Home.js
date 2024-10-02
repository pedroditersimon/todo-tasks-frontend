import ApiClientService from "../api/services/ApiClientService";
import PageLayout from "../layouts/PageLayout";

import { useEffect } from "react";
import { TodoTask } from "../api/models/models";

function Home() {
    useEffect(() => {
        fetchData()
            .then(data => console.log(data));
    }, []);

    return (
        <PageLayout>
            home page
        </PageLayout>
    );
}

async function fetchData() {
    try {
        const apiClientService = new ApiClientService();
        return await apiClientService.getGoalByIdWithTasks(1);
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export default Home;