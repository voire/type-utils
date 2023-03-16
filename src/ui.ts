/**
 * Horizontal position
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type PositionX = 'left' | 'right'

/**
 * Vertical position
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type PositionY = 'top' | 'bottom'

/**
 * Position
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type Position = PositionX | PositionY

/**
 * X-Axis alignment
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type AlignX = PositionX | 'center'

/**
 * Y-Axis alignment
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type AlignY = PositionY | 'center'

/**
 * Alignment
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type Align = Position | 'center'

/**
 * Direction
 * Useful for defining some UI components' and animations' props
 * @since 1.2.0
 */
export type Direction = 'x' | 'y'

/**
 * Range of sizes
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type Size = 'sm' | 'md' | 'lg'

/**
 * Extended range of sizes
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type SizeExtra = 'xs' | Size | 'xl'
