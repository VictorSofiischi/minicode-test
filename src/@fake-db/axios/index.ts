import mock from "./mock";

import '../axios/resources/offersCRUD'
import '../axios/resources/reviewsCRUD'

mock.onAny().passThrough();