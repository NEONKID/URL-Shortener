const SERVER = process.env.REACT_APP_API_ENTRYPOINT;
const API_PREFIX = 'api';

interface Config {
    url: {
        request: {
            register: string;
        };
    };
}

const config: Config = {
    url: {
        request: {
            register: `${SERVER}/${API_PREFIX}/url/register`
        }
    }
};

export default config;
