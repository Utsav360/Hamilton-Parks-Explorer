// File Name : park.js

// Usage : This park.js file is a javascript file made from parks.JSON file which contains data of different park locations and 
//         Info (Objectid, name, owner name, classification, type, area, zoning code, longitude, and lattitude)



// Statement of Authorships : 
//   "StAuth10244 : I Utsavkumar Patel, Student number 000820474, certify that this material is my original work. No
//                 other person's work has been used without due acknowledgement.
//                 I have not made my work available to anyone else."


// park array
const park = [
    {
       "OBJECTID": 1, 
       "NAME": "Joshua Ave Open Space", 
       "OWNER_NAME": "City of Hamilton", 
       "CLASSIFICATION": "Natural Open Space",
       "TYPE": "Waterfront", 
       "AREA_HA": 27.9367,
       "ZONING_CODE": "P5",
       "LATITUDE": 43.2254, 
       "LONGITUDE": -79.9449
    },
    {
        "OBJECTID": 2,
        "NAME": "A.M. Cunningham Parkette",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "Parkette",
        "TYPE": "Waterfront",
        "AREA_HA": 0.0939,
        "ZONING_CODE": "P1",
        "LATITUDE": 43.2442,
        "LONGITUDE": -79.8109
    },
    {
        "OBJECTID": 3,
        "NAME": "Albion Estates Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "Neighbourhood",
        "TYPE": "Walkway",
        "AREA_HA": 3.2961,
        "ZONING_CODE": "P1",
        "LATITUDE": 43.2009,
        "LONGITUDE": -79.7969
    },
    {
        "OBJECTID": 4,
        "NAME": "Albion Falls Neighbourhood Open Space",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "Natural Open Space",
        "TYPE": "Waterfront",
        "AREA_HA": 21.4805,
        "ZONING_CODE": "P5",
        "LATITUDE": 43.2004,
        "LONGITUDE": -79.8196      
    },
    {
        "OBJECTID": 5,
        "NAME": "Beasley Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "Community",
        "TYPE": "Walkway",
        "AREA_HA": 1.4108,
        "ZONING_CODE": "P2",
        "LATITUDE": 43.2580,
        "LONGITUDE": -79.8626
    },
    {
        "OBJECTID": 6,
        "NAME": "Eastmount Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "Neighbourhood",
        "TYPE": "Walkway",
        "AREA_HA": 2.8376,
        "ZONING_CODE": "P1",
        "LATITUDE": 43.2367,
        "LONGITUDE": -79.8488
    },
    {
        "OBJECTID": 7,
        "NAME": "Gage Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "City Wide",
        "TYPE": "Walkway",
        "AREA_HA": 28.8259,
        "ZONING_CODE": "P3",
        "LATITUDE": 43.2422,
        "LONGITUDE": -79.8287
    },
    {
        "OBJECTID": 8,
        "NAME": "Sam Lawrence Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "City Wide",
        "TYPE": "Walkway",
        "AREA_HA": 7.621,
        "ZONING_CODE": "P3",
        "LATITUDE": 43.2449,
        "LONGITUDE": -79.8657
    },
    {
        "OBJECTID": 9,
        "NAME": "Bayfront Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "City Wide",
        "TYPE": "Waterfront",
        "AREA_HA": 20.1061,
        "ZONING_CODE": "P3",
        "LATITUDE": 43.2716,
        "LONGITUDE": -79.8724
    },
    {
        "OBJECTID": 10,
        "NAME": "Gore Park",
        "OWNER_NAME": "Hamilton-Wentworth District",
        "CLASSIFICATION": "City Wide",
        "TYPE": "Walkway",
        "AREA_HA": 0.4361,
        "ZONING_CODE": "P3",
        "LATITUDE": 43.2562,
        "LONGITUDE": -79.8681
    },
    {
        "OBJECTID": 11,
        "NAME": "Victoria Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "Community",
        "TYPE": "Walkway",
        "AREA_HA": 5.241,
        "ZONING_CODE": "P2",
        "LATITUDE": 43.2626,
        "LONGITUDE": -79.8846
    },
    {
        "OBJECTID": 12,
        "NAME": "Pier 4 Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "City Wide",
        "TYPE": "Waterfront",
        "AREA_HA": 3.1462,
        "ZONING_CODE": "P3",
        "LATITUDE": 43.2740,
        "LONGITUDE": -79.8676
    },
    {
        "OBJECTID": 13,
        "NAME": "Bruce Park",
        "OWNER_NAME": "Hamilton-Wentworth District",
        "CLASSIFICATION": "Neighbourhood",
        "TYPE": "Sports",
        "AREA_HA": 3.434,
        "ZONING_CODE": "P1",
        "LATITUDE": 43.2391,
        "LONGITUDE": -79.8707
    },
    {
        "OBJECTID": 14,
        "NAME": "Jackson Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "Parkette",
        "TYPE": "Sports",
        "AREA_HA": 0.4517,
        "ZONING_CODE": "P1",
        "LATITUDE": 43.2586,
        "LONGITUDE": -79.8887
    },
    {
        "OBJECTID": 15,
        "NAME": "Janet Lee Elementary Park",
        "OWNER_NAME": "Hamilton-Wentworth District",
        "CLASSIFICATION": "School Site",
        "TYPE": "Undeveloped",
        "AREA_HA": 2.0234,
        "ZONING_CODE": "P4",
        "LATITUDE": 43.1917,
        "LONGITUDE": -79.8070
    },
    {
        "OBJECTID": 16,
        "NAME": "Jerome Neighbourhood Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "Neighbourhood",
        "TYPE": "Walkway",
        "AREA_HA": 2.3552,
        "ZONING_CODE": "P1",
        "LATITUDE": 43.2142,
        "LONGITUDE": -79.8790
    },
    {
        "OBJECTID": 17,
        "NAME": "Olympic Sports Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "City Wide",
        "TYPE": "Walkway",
        "AREA_HA": 4.992,
        "ZONING_CODE": "P3",
        "LATITUDE": 43.2362,
        "LONGITUDE": -79.9293
    },
    {
        "OBJECTID": 18,
        "NAME": "Central Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "Neighbourhood",
        "TYPE": "Walkway",
        "AREA_HA": 3.2489,
        "ZONING_CODE": "P1",
        "LATITUDE": 43.2633,
        "LONGITUDE": -79.8723
    },
    {
        "OBJECTID": 19,
        "NAME": "Harvey Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "General Open Space",
        "TYPE": "Walkway",
        "AREA_HA": 2.4193,
        "ZONING_CODE": "P4",
        "LATITUDE": 43.2721,
        "LONGITUDE": -79.8865
    },
    {
        "OBJECTID": 20,
        "NAME": "Kay Drage Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "Community",
        "TYPE": "Sports",
        "AREA_HA": 10.6273,
        "ZONING_CODE": "P2",
        "LATITUDE": 43.2686,
        "LONGITUDE": -79.8915
    },
    {
        "OBJECTID": 21,
        "NAME": "Eastwood Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "Community",
        "TYPE": "Walkway",
        "AREA_HA": 5.9502,
        "ZONING_CODE": "P2",
        "LATITUDE": 43.2725,
        "LONGITUDE": -79.8556
    },
    {
        "OBJECTID": 22,
        "NAME": "Dundurn Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "Museum",
        "TYPE": "Undeveloped",
        "AREA_HA": 11.5172,
        "ZONING_CODE": "P1",
        "LATITUDE": 43.2695,
        "LONGITUDE": -79.8843
    },
    {
        "OBJECTID": 23,
        "NAME": "Courtcliffe Community Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "City Wide",
        "TYPE": "Walkway",
        "AREA_HA": 16.6656,
        "ZONING_CODE": "P3",
        "LATITUDE": 43.2445,
        "LONGITUDE": -79.9069
    },
    {
        "OBJECTID": 24,
        "NAME": "Jackson Playground Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "Parkette",
        "TYPE": "Walkway",
        "AREA_HA": 0.4517,
        "ZONING_CODE": "P1",
        "LATITUDE": 43.258894,
        "LONGITUDE": -79.888356
    },
    {
        "OBJECTID": 25,
        "NAME": "Balfour Park",
        "OWNER_NAME": "City of Hamilton",
        "CLASSIFICATION": "Parkette",
        "TYPE": "Walkway",
        "AREA_HA": 0.1731,
        "ZONING_CODE": "P2",
        "LATITUDE": 43.2427,
        "LONGITUDE": -79.8995
    }


]