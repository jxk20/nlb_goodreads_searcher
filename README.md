# nlb_goodreads_searcher-heroku
Web app to search for books on NLB




## Setup locally
1. Run `npm install` in parent directory and `client` directory
1. Create `.env` file with `NLB_KEY` value (NLB API key) in `server` folder. You may take reference to `.env.example`. The NLB API key can be requested from [here](https://www.nlb.gov.sg/GetInvolved/ContributeCreate/NLBlabs.aspx).

## To run

Open 2 terminals. In the 1st one, run

```bash
cd server
nodemon
```

In the 2nd one, run

```bash
cd client
npm start
```
