# Doodledo

Doodledo is a project site that works as a platform to doodle asynchronously alone or with others.

Planned core functionality includes being able to create a profile, draw, and contribute to the drawings of others along with the necessary supporting features.
Possible additions are a friend system and thus, public and private doodles.

Based on [Figma design](https://www.figma.com/design/yfbQQpEJj9u7zcPfvJ29rI/Doodledo?node-id=38-221&t=tyLMjzgPYIqiJVRf-1).


## Current state of the project (Aug 8 2024)
![GIF to show](/public/doodledoGIF1.gif)
### (Sept 2 2024: Work on draw page)
![Progress picture](https://i.imgur.com/KKXmdYN.png)

## External libraries and services used:
* [Supabase](https://supabase.com/) -- used for its serverless relational database and JWT authentication
* [ReactSketchCanvas](https://vinoth.info/react-sketch-canvas/) -- for SVG-based drawing, saving, loading, and exporting functionality
* [SwiperJS](https://swiperjs.com/) -- for the image carousel used to display recent user doodles