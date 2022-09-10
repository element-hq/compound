/**
 * This custom format creates an extension of the SwiftUI Color
 * class and adds all the color tokens as static variables so that
 * you can reference a color token like: `Color.backgroundPrimary`. 
 * It will handle dark mode by using the colorsets and references.
 * 
 * @example
 * ```swift
 * Text("Hello, World!")
 *   .backgroundColor(Color.backgroundPrimary)
 *   .foregroundColor(Color.fontPrimary)
 * ```
 */
module.exports = function({ dictionary, options }) {
  return `import SwiftUI

public enum CompoundColors {\n` +
  dictionary.allProperties.map(token => {
    let value = swiftUIColor(token, dictionary, options)
    return `    public static let ${token.name} = ${value}`
  }).join(`\n`) + `
    
    /// All of the colors from Compound in a dictionary that can be iterated through.
    public static var allColors: [String: Color] {
        [\n` +
  dictionary.allProperties.map(token => {
    return `            "${token.name}": ${token.name},`
  }).join(`\n`) + `
        ]
    }
}\n`
}

/** The token's value as a Color for SwiftUI */
function swiftUIColor(token, dictionary, options) {
  // if the token does not have a reference or has a darkValue
  // use the colorset of the same name
  // else use the reference name
  if (options.outputReferences) {
    // if it has a dark value -> use the colorset (all colors with darkValue have a colorset)
    if (token.darkValue) {
      return `Color("${token.name}", bundle: .module)`;
    // if it is a reference -> refer to the Color extension name
    } else if (dictionary.usesReference(token.original.value)) {
      const reference = dictionary.getReferences(token.original.value)[0];
      return `ElementColors.${reference.name}`
    // default to using the colorset
    } else {
      return `Color("${token.name}", bundle: .module)`
    }
  } else {
    return `Color("${token.name}", bundle: .module)`;
  }
}
