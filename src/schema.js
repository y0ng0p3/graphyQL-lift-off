const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		"Get tracks array for homepage grid"
		tracksForHome: [Track!]!
		"Fetch a specific track, provided a track's ID"
		track(id: ID!): Track
	}
	
	type Mutation {
		incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
	}

	"Response for incrementTrackViews mutation"
	type IncrementTrackViewsResponse {
		"Similar to HTTP status code, represents the status of the mutation"
		code: Int!
		"Indicates whether the mutation was successful"
		success: Boolean!
		"Human-readable message for the UI"
		message: String!
		"Newly updated track after a successful mutation"
		track: Track
	}

	"A track is a group of Modules that teaches about a specific topic"
	type Track {
		"Track unique identifier"
		id: ID!
		"The track's title"
		title: String!
		"The track's main author"
		author: Author!
		"The track's main illustration to display in track card or track page detail"
		thumbnail: String
		"The track's approximate length to complete, in minutes"
		length: Int @deprecated(reason: "Use durationInSeconds")
		"The track's full duration, in seconds"
		durationInSeconds: Int
		"The number of modules this track contains"
		modulesCount: Int
		"The track's complete description, can be in Markdown format"
		description: String
		"The number of times a track has been viewed"
		numberOfViews: Int
		"The track's complete array of Modules"
		modules: [Module!]!
	}

	"Author of a complete Track or a Module"
	type Author {
		"Author unique identifier"
		id: ID!
		"Author's first and last name"
		name: String!
		"Author's profile picture url"
		photo: String
	}

	"A module is a topic contained in a track."
	type Module {
		"Module unique identifier"
		id: ID!
		"Module's title"
		title: String!
		"The module's length in minutes"
		length: Int @deprecated(reason: "Use durationInSeconds")
		"The module's video duration, in seconds"
		durationInSeconds: Int
	}
`;

module.exports = typeDefs;
