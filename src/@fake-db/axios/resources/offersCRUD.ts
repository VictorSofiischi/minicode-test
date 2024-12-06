import { getDataContext } from "@/@fake-db/data/DataContext";
import { waitFor } from "../utils/waitFor";
import mock from "../mock";

const dataContext = getDataContext();

mock.onGet('/offers').reply(async request => {
    const offers = dataContext.getOffers();

    return [200, offers];
})