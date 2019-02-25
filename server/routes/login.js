const express = require('express');
const app = express();
const router = express.Router();
import { renderToString } from "react-dom/server";
import AuthPage from '../../src/copmonents/Main/AuthPage'

const user = require('../models/user');


