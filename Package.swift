// swift-tools-version: 5.6

import PackageDescription

/// A package that can be used to validate the generated tokens via CI.
/// ```
/// xcodebuild -scheme 'CompoundTokens' -sdk iphonesimulator -destination 'platform=iOS Simulator,name=iPhone 13'
/// ```
let package = Package(
    name: "CompoundTokens",
    platforms: [.iOS(.v14)],
    products: [
        .library(name: "CompoundTokens", targets: ["CompoundTokens"])
    ],
    targets: [
        .target(name: "CompoundTokens", path: "ios/dist")
    ]
)
