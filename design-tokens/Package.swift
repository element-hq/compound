import PackageDescription

let package = Package(
	name: "CompoundDesignTokens",
	products: [
		.library(
			name: "CompoundDesignTokens",
			targets:["CompoundDesignTokens"]
		),
	],
	targets: [
		.target(
			name: "CompoundDesignTokens",
			dependencies: []
		),
	]
)
