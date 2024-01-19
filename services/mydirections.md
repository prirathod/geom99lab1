# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place:Laxmi+Vilas+Palace+Vadodara+Gujarat&destination=place_id:ChIJ91Mmr_DFXzkRCwswfBectiE&avoid=tolls%7Chighways%7Cferries&destination=Adalaj+Stepwell+Gandhinagar+Gujarat&transit_mode=train?origin=Laxmi+Vilas+Palace+Vadodara&waypoints=optimize:true%7Cplace_id:ChIJib_FsNopXDkRjzm9vcTdHds%7Cvia:place:Poicha%7Cvia:place:Nadiad&waypoint_order=[3,1,2]&unit=metric&region=in&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

Copy/paste the JSON results and save them into the empty file ```mydirections.json``` in this repository

## Optional URLs

Read the Rubric to find out about what options exist to earn more marks. Here is where you can provide these additional links to place ids or other items telling a story about your chosen directions API

### Simple option:

(returns map-preferred) Maps PlaceID search:
https://www.google.com/maps/place/Laxmi+Vilas+Palace/@22.2935993,73.1919074,17z/data=!3m1!4b1!4m6!3m5!1s0x395fc5f0af2653f7:0x21b69c177c300b0b!8m2!3d22.2935993!4d73.1919074!16zL20vMDh5X3Mz?entry=ttu
### Efficient option

(returns JSON) API PlaceID link https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ91Mmr_DFXzkRCwswfBectiE&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE

  which the JSON will have a CID that can be directly used as a URL like https://maps.google.com/?cid=ChIJ91Mmr_DFXzkRCwswfBectiE


____
## Rubric

Note: MarkDown (.md) documents are not HTML and therefore are best viewed in the github.com website, not on the pages github.io page. Marking will occur using the github.com source. 

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown and results in the JSON file with a unique origin and destination in directions earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%. Explore the API documentation for parameters we have not used.
4. Tell the story of your route. Include more than 2 "stops", and/or including additional links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
