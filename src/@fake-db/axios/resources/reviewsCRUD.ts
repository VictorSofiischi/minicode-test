import { getDataContext } from "@/@fake-db/data/DataContext";
import { waitFor } from "../utils/waitFor";
import mock from "../mock";

const dataContext = getDataContext();

mock.onGet('/reviews').reply(async request => {
    const reviews = dataContext.getReviews();

    return [200, reviews];
})