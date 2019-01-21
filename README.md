# Marine Biology Database and API

The following database is meant to help Marine Biology research teams to keep track of their field work.

Implemented Tables:

- **Researchers**: Rows represent each individual member of the research team.
- **Species**: Rows represent each different type of animal species (e.g. dolphin or sting ray).
- **Animals**: Rows represent each animal researchers have found and tagged.
- **Habitats**: Rows represent different types of habitats in the researchers' area (e.g. reef, beach, shallows, deeps).
- **Taggings**: Rows represents each individual time a researcher found and tagged a specific animal.
- **Sightings**: Rows represent each time a researcher saw a specific species in a particular habitat.

Based on these descriptions, we can conclude:

- Researchers have many Taggings (they tag animals), and Sightings (they see species).
- Species have many Animals (animals have species), and many Sightings (different species are seen in different environments).
- Animals have one Species (a dolphin is a dolphin) and many Taggings (different researchers might tag the same animal).
- Taggings have one Researcher and one Animal (a researcher tags an animal - this is a join table).
- Sightings have one Researcher, one Species, and one Habitat (a particular researcher sees a species in a habitat - this is a join table).
- Habitats have many sightings (many sightings happen in a specific habitat).

Take a look at `schema.md` in this repo for a detailed description of what the tables look like, as well as seed data describing what they should contain.

Also provided a robust RESTful API to make it easy for the research team to see and update information. Take a look at `routes.md` for a full list of the routes this API has, which is linked up to postgres.

All responses formated as JSON object with the following three keys:

- `status` - Either `success` or `error`
- `message` - Either `got all users` or an error message
- `body` - The response from SQL (if necessary - not necessary for POST or DELETE requests).
