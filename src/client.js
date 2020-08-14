import * as sapper from '@sapper/app';

// import { config } from "dotenv";

import "./styles/core.scss"

// config();


sapper.start({
	target: document.querySelector('#sapper')
});