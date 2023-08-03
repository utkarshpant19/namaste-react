
# `How to design your App`
Header Component
 - App Logo
 - Nav Items
 - Home
 - About
 - Contact     
 - Add to Cart

Body Component
- Search Food/Restaurants
- Restaurant Container
    - Restaurant Card
        - Name of the Restaurant
        - Star Rating
        - Cuisine
        - ETA
        - Area

Footer Component

## `Export and Import Files`

`Default Export` (Can be used when we want to export single Component/varible)

- export default API_URL

import API_URL from './path'; `(No need of {})`

`Named Export` (When we want to export multiple Component/variables from a moudle)

- export const API_URL = 'https://wwwe.reactjs.com';
- import {API_URL} from './file_path';



