import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import {logger} from "./middleware/logger"


logger("Frontend Started");


createRoot(document.getElementById('root')).render(

<StrictMode>

<App />

</StrictMode>

)