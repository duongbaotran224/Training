
import React from 'react';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from '../src/reducers';
import App from '../src/App.js';

const store = createStore(rootReducer);

const PORT = 8081;
const app = express();

app.use('/dist', express.static('dist'));
app.use('/img', express.static('img'));

app.get('*', (req, res) => {
 const content = renderToString(
   <Provider store={store}>
     <StaticRouter location={req.url} context={{}}>
       <App />
     </StaticRouter>
   </Provider>
 );

 const raw =`
   <!DOCTYPE html>
   <html>

   <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
     <title>React Starter</title>
   </head>

   <body>
     <div id="root">${content}</div>
     <noscript>
       You need to enable JavaScript to run this app.
     </noscript>
     <script>
       window.INITIAL_STATE = ${JSON.stringify(store.getState())}
     </script>
     <script src="./dist/bundle.js"></script>
   </body>

   </html>
 `;

res.send(raw);
});

app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));
