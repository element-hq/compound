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
  return `import UIKit

@objcMembers public class CompoundUIColors: NSObject {\n` +
  dictionary.allProperties.map(token => {
    let value = uiKitColor(token, dictionary, options)
    return `    public static let ${token.name} = ${value}`
  }).join(`\n`) + `
}\n`
}

/** The token's value as a UIColor for UIKit */
function uiKitColor(token, dictionary, options) {
  // if the token does not have a reference or has a darkValue
  // use the colorset of the same name
  // else use the reference name
  if (options.outputReferences) {
    // if it has a dark value -> use the colorset (all colors with darkValue have a colorset)
    if (token.darkValue) {
      return `UIColor(named: "${token.name}", in: .module, compatibleWith: nil)!`;
    // if it is a reference -> refer to the Color extension name
    } else if (dictionary.usesReference(token.original.value)) {
      const reference = dictionary.getReferences(token.original.value)[0];
      return `ElementUIColors.${reference.name}`
    // default to using the colorset
    } else {
      return `UIColor(named: "${token.name}", in: .module, compatibleWith: nil)!`
    }
  } else {
    return `UIColor(named: "${token.name}", in: .module, compatibleWith: nil)!`;
  }
}
