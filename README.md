# nlb_goodreads_searcher
Web app to search for books on NLB


![CI/CD](https://github.com/jxk20/nlb_goodreads_searcher/actions/workflows/node.js.yml/badge.svg)
[![Codecov](https://img.shields.io/codecov/c/github/jxk20/nlb_goodreads_searcher)](https://codecov.io/gh/jxk20/nlb_goodreads_searcher)
![License](https://img.shields.io/github/license/jxk20/nlb_goodreads_searcher)


## Setup locally
1. Run `npm install` in parent directory and `client` directory
1. Create `.env` file with `NLB_KEY` value (NLB API key) in `server` folder. You may take reference to `.env.example`. The NLB API key can be requested from [here](https://www.nlb.gov.sg/GetInvolved/ContributeCreate/NLBlabs.aspx).

## To run locally

Open 2 terminals. Make sure you have `nodemon` installed.


In the 1st one, run

```bash
cd server
nodemon
```

In the 2nd one, run

```bash
cd client
npm run build
npm start
```

## To deploy
...to be continued