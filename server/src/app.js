 //import path from 'path';
 import express from 'express';
 import React from 'react';
 import {renderToString} from 'react-dom/server';
 import App from './index.js';
 import template from './template.js';
 //import cors from 'cors';
 //import router from './router';
 
 //const express = require('express');
 const server= express();
 server.get('/',(req, res)=>{
	 const appString = renderToString(<App/>);
	 
	 res.send(template({
		 body:appString, 
		 title: "Welcome from server"
	 }));
	});
 server.listen(3000, ()=>console.log('app listening at port 3000'));
 
 