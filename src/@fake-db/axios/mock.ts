import axios from 'axios'
import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import getConfig from 'next/config'

const originalAdapter = axios.defaults.adapter;

const mock = new MockAdapter(axios as AxiosInstance);
const mockAdapter = axios.defaults.adapter;

const { publicRuntimeConfig } = getConfig();

if (publicRuntimeConfig.apiMode === 'MOCK') {
    console.log('HUY');
    axios.defaults.adapter = mockAdapter
} else {
    axios.defaults.adapter = originalAdapter
}

export const axiosMockInstance = axios
export default mock;