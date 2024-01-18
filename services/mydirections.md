# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJCWhtfJgrXDkRkQM-h6cGb_g&destination=place_id:ChIJcdSOFk3PXzkRmVCXOQLjW8k&avoid=tolls|highways|ferries&waypoints=optimize:true|place_id:ChIJRWr63-jIXzkRv-bDMQc8TUc|via:place_id:ChIJRWr63-jIXzkRv-bDMQc8TUc&waypoint_order=[2,1,3]&region=in&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

Copy/paste the JSON results and save them into the empty file ```mydirections.json``` in this repository

## Optional URLs

Read the Rubric to find out about what options exist to earn more marks. Here is where you can provide these additional links to place ids or other items telling a story about your chosen directions API

### Simple option:

(returns map-preferred) Maps PlaceID search:
https://www.google.com/maps/place/Maharaja+Sayajirao+University,+Sayajiganj,+Vadodara,+Gujarat+390020,+India/@22.3124685,73.1838455,17z/data=!3m1!4b1!4m6!3m5!1s0x395fcf4d168ed471:0xc95be30239975099!8m2!3d22.3120277!4d73.1836372!16s%2Fg%2F1jky820_9?entry=ttu
### Efficient option

(returns JSON) API PlaceID link https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJcdSOFk3PXzkRmVCXOQLjW8k&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE

  which the JSON will have a CID that can be directly used as a URL like https://maps.google.com/?cid=4569584641105657000


____
## Rubric

Note: MarkDown (.md) documents are not HTML and therefore are best viewed in the github.com website, not on the pages github.io page. Marking will occur using the github.com source. 

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown and results in the JSON file with a unique origin and destination in directions earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%. Explore the API documentation for parameters we have not used.
4. Tell the story of your route. Include more than 2 "stops", and/or including additional links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
