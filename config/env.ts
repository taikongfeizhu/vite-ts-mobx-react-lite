interface Path {
  cdn: string;
  apiBaseUrl: string;
}

export interface Env {
  development: Path;
  preview: Path;
  release: Path;
}

const config: Env = {
  development: {
    cdn: './',
    apiBaseUrl: '/api',
  },
  preview: {
    cdn: '/',
    apiBaseUrl: '//www.beta.xxx.com/v1',
  },
  release: {
    cdn: '/',
    apiBaseUrl: '//www.xxx.com/v1',
  },
};

export default config;
