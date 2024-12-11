declare module "gdxts" {
  export * from "gdxts/dist/lib/3d";
  export * from "gdxts/dist/lib/Affine2";
  export * from "gdxts/dist/lib/Animation";
  export * from "gdxts/dist/lib/AssetManager";
  export * from "gdxts/dist/lib/BitmapFont";
  export * from "gdxts/dist/lib/BitmapFontCache";
  export * from "gdxts/dist/lib/BitmapFontData";
  export * from "gdxts/dist/lib/BoundingBox";
  export * from "gdxts/dist/lib/Camera";
  export * from "gdxts/dist/lib/Game";
  export * from "gdxts/dist/lib/Glyph";
  export * from "gdxts/dist/lib/GlyphLayout";
  export * from "gdxts/dist/lib/GlyphRun";
  export * from "gdxts/dist/lib/InputHandler";
  export * from "gdxts/dist/lib/Matrix4";
  export * from "gdxts/dist/lib/Mesh";
  export * from "gdxts/dist/lib/MultiTextureBatch";
  export * from "gdxts/dist/lib/NumberUtils";
  export * from "gdxts/dist/lib/PolygonBatcher";
  export * from "gdxts/dist/lib/Quaternion";
  export * from "gdxts/dist/lib/Shader";
  export * from "gdxts/dist/lib/ShapeRenderer";
  export * from "gdxts/dist/lib/Sprite";
  export * from "gdxts/dist/lib/Texture";
  export * from "gdxts/dist/lib/TextureAtlas";
  export * from "gdxts/dist/lib/TextureRegion";
  export * from "gdxts/dist/lib/Utils";
  export * from "gdxts/dist/lib/Vector2";
  export * from "gdxts/dist/lib/Vector3";
  export * from "gdxts/dist/lib/Viewport";
  export * from "gdxts/dist/lib/ViewportInputHandler";
}

declare module "gdxts/dist/lib/Affine2" {
  export const __esModule: boolean;
  export class Affine2 {
    m00: number;
    m01: number;
    m02: number;
    m10: number;
    m11: number;
    m12: number;
    idt(): this;
    set(other: any): this;
    setMatrix3(matrix: any): this;
    setMatrix4(matrix: any): this;
    setToTranslation(x: any, y: any): this;
    setToScaling(scaleX: any, scaleY: any): this;
    setToRotation(degrees: any): this;
    setToRotationRad(radians: any): this;
    setToShearing(shearX: any, shearY: any): this;
    setToTrnRotScl(
      x: any,
      y: any,
      degrees: any,
      scaleX: any,
      scaleY: any
    ): this;
    setToTrnRotRadScl(
      x: any,
      y: any,
      radians: any,
      scaleX: any,
      scaleY: any
    ): this;
    setToTrnScl(x: any, y: any, scaleX: any, scaleY: any): this;
    setToProduct(l: any, r: any): this;
    inv(): this;
    mul(other: any): this;
    preMul(other: any): this;
    translate(x: any, y: any): this;
    preTranslate(x: any, y: any): this;
    scale(scaleX: any, scaleY: any): this;
    preScale(scaleX: any, scaleY: any): this;
    rotate(degrees: any): this;
    rotateRad(radians: any): this;
    preRotate(degrees: any): this;
    preRotateRad(radians: any): this;
    shear(shearX: any, shearY: any): this;
    preShear(shearX: any, shearY: any): this;
    det(): number;
    getTranslation(position: any): any;
    isTranslation(): boolean;
    isIdt(): boolean;
    applyTo(point: any): void;
  }
}
declare module "gdxts/dist/lib/Animation" {
  export const __esModule: boolean;
  export const PlayMode: {};
  export class Animation {
    constructor(keyFrames: any, frameDurations: any);
    totalDuration: number;
    keyFrames: any;
    frameDurations: any;
    getFrameNumber(stateTimeRemainder: any, reverse?: boolean): number;
    getKeyFrame(stateTime: any, mode?: any): any;
  }
  export function createAnimation(
    frameDuration: any,
    keyFrames: any
  ): Animation;
}
declare module "gdxts/dist/lib/AssetManager" {
  export const __esModule: boolean;
  export const AssetType: {};
  export default AssetManager;
  export class AssetManager {
    constructor(gl: any);
    addListener(handler: any): void;
    promises: Map<any, any>;
    atlases: Map<any, any>;
    textures: Map<any, any>;
    jsonData: Map<any, any>;
    binaryData: Map<any, any>;
    done: number;
    listeners: any[];
    fonts: Map<any, any>;
    gl: any;
    reportDone(): void;
    loadAtlas(
      path: any,
      name: any,
      options: any
    ): Promise<TextureAtlas_1.TextureAtlas>;
    getAtlas(name: any): any;
    loadJsonData(path: any, name: any): Promise<any>;
    getJsonData(name: any): any;
    loadBinaryData(path: any, name: any): Promise<ArrayBuffer>;
    getBinaryData(name: any): any;
    loadFont(
      path: any,
      name: any,
      flip?: boolean
    ): Promise<BitmapFont_1.BitmapFont>;
    getFont(name: any): any;
    loadTexture(path: any, name: any, options: any): Promise<Texture_1.Texture>;
    getTexture(name: any): any;
    finishLoading(): any;
    getDone(): number;
    getTotal(): number;
    getAsset(name: any, type: any): any;
    waitForAsset(name: any, type: any): any;
    disposeAll(): void;
  }
  import TextureAtlas_1 = require("gdxts/dist/lib/TextureAtlas");
  import BitmapFont_1 = require("gdxts/dist/lib/BitmapFont");
  import Texture_1 = require("gdxts/dist/lib/Texture");
}
declare module "gdxts/dist/lib/BitmapFont" {
  export const __esModule: boolean;
  export class BitmapFont {
    static loadFromPacker(
      gl_1: any,
      fileContent_1: any,
      textureData_1: any,
      ...args: any[]
    ): any;
    /** Constructs a new BitmapFont from the given {@link BitmapFontData} and array of {@link TextureRegion}. If the TextureRegion
     * is null or empty, the image path(s) will be read from the BitmapFontData. The dispose() method will not dispose the texture
     * of the region(s) if the regions array is != null and not empty.
     * @param integer If true, rendering positions will be at integer values to avoid filtering artifacts. */
    constructor(data: any, regions: any, integer: any);
    load: (data: any) => void;
    /** Draws text at the specified position.
     * @see BitmapFontCache#addText(CharSequence, float, float, int, int, float, int, boolean, String) */
    draw: (
      batch: any,
      str: any,
      x: any,
      y: any,
      targetWidth: any,
      halign: number,
      wrap: boolean,
      start: number,
      end: any,
      truncate: any
    ) => void;
    /** Returns the color of text drawn with this font. */
    getColor: () => Utils_1.Color;
    /** A convenience method for setting the font color. The color can also be set by modifying {@link #getColor()}. */
    getScaleX: () => any;
    getScaleY: () => any;
    /** Returns the array of TextureRegions that represents each texture page of glyphs.
     * @return the array of texture regions; modifying it may produce undesirable results */
    getRegions: () => any;
    /** Returns the texture page at the given index.
     * @return the texture page at the given index */
    getRegion: (index: any) => any;
    /** Returns the line height, which is the distance from one line of text to the next. */
    getLineHeight: () => any;
    /** Returns the x-advance of the space character. */
    getSpaceXadvance: () => any;
    /** Returns the x-height, which is the distance from the top of most lowercase characters to the baseline. */
    getXHeight: () => any;
    /** Returns the cap height, which is the distance from the top of most uppercase characters to the baseline. Since the drawing
     * position is the cap height of the first line, the cap height can be used to get the location of the baseline. */
    getCapHeight: () => any;
    /** Returns the ascent, which is the distance from the cap height to the top of the tallest glyph. */
    getAscent: () => any;
    /** Returns the descent, which is the distance from the bottom of the glyph that extends the lowest to the baseline. This
     * number is negative. */
    getDescent: () => any;
    /** Returns true if this BitmapFont has been flipped for use with a y-down coordinate system. */
    isFlipped: () => any;
    /** Disposes the texture used by this BitmapFont's region IF this BitmapFont created the texture. */
    dispose: () => void;
    /** Makes the specified glyphs fixed width. This can be useful to make the numbers in a font fixed width. Eg, when horizontally
     * centering a score or loading percentage text, it will not jump around as different numbers are shown. */
    setFixedWidthGlyphs: (glyphs: any) => void;
    /** Specifies whether to use integer positions. Default is to use them so filtering doesn't kick in as badly. */
    setUseIntegerPositions: (integer: any) => void;
    integer: any;
    /** Checks whether this font uses integer positions for drawing. */
    usesIntegerPositions: () => any;
    /** For expert usage -- returns the BitmapFontCache used by this font, for rendering to a sprite batch. This can be used, for
     * example, to manipulate glyph colors within a specific index.
     * @return the bitmap font cache used by this font */
    getCache: () => BitmapFontCache_1.BitmapFontCache;
    /** Gets the underlying {@link BitmapFontData} for this BitmapFont. */
    getData: () => any;
    /** @return whether the texture is owned by the font, font disposes the texture itself if true */
    getOwnsTexture: () => boolean;
    /** Sets whether the font owns the texture. In case it does, the font will also dispose of the texture when {@link #dispose()}
     * is called. Use with care!
     * @param ownsTexture whether the font owns the texture */
    setOwnsTexture: (ownsTexture: any) => void;
    ownsTexture: boolean;
    /** Creates a new BitmapFontCache for this font. Using this method allows the font to provide the BitmapFontCache
     * implementation to customize rendering.
     * <p>
     * Note this method is called by the BitmapFont constructors. If a subclass overrides this method, it will be called before the
     * subclass constructors. */
    newFontCache: () => BitmapFontCache_1.BitmapFontCache;
    regions: any;
    flipped: any;
    data: any;
    cache: BitmapFontCache_1.BitmapFontCache;
    drawTransformed(
      batch: any,
      str: any,
      transform: any,
      targetWidth: any,
      halign: number,
      wrap: boolean,
      start: number,
      end: any,
      truncate: any
    ): void;
  }
  export namespace BitmapFont {
    function load(gl_1: any, fontFile_1: any, ...args_1: any[]): any;
  }
  import Utils_1 = require("gdxts/dist/lib/Utils");
  import BitmapFontCache_1 = require("gdxts/dist/lib/BitmapFontCache");
}
declare module "gdxts/dist/lib/BitmapFontCache" {
  export const __esModule: boolean;
  export class BitmapFontCache {
    /** @param integer If true, rendering positions will be at integer values to avoid filtering artifacts. */
    constructor(font: any, integer: any);
    tempColor: Utils_1.Color;
    drawingTexts: any[];
    layouts: any[];
    pooledLayouts: any[];
    color: Utils_1.Color;
    /** Sets the position of the text, relative to the position when the cached text was created.
     * @param x The x coordinate
     * @param y The y coordinate */
    setPosition: (x: any, y: any) => void;
    /** Sets the position of the text, relative to its current position.
     * @param xAmount The amount in x to move the text
     * @param yAmount The amount in y to move the text */
    translate: (xAmount: any, yAmount: any) => void;
    /** Tints all text currently in the cache. Does not affect subsequently added text. */
    /** Sets the alpha component of all text currently in the cache. Does not affect subsequently added text. */
    setColors: (r: any, g: any, b: any, a: any) => void;
    /** Returns the color used for subsequently added text. Modifying the color affects text subsequently added to the cache, but
     * does not affect existing text currently in the cache. */
    getColor: () => Utils_1.Color;
    /** A convenience method for setting the cache color. The color can also be set by modifying {@link #getColor()}. */
    setColor: (r: any, g: any, b: any, a: any) => void;
    glyphTransform: Affine2_1.Affine2;
    /** Removes all glyphs in the cache. */
    clear: () => void;
    x: number;
    y: number;
    requireGlyphs: (layout: any) => void;
    requirePageGlyphs: (page: any, glyphCount: any) => void;
    setPageCount: (pageCount: any) => void;
    pageVertices: any[];
    idx: any[];
    pageGlyphIndices: any[];
    tempGlyphCount: any[];
    addToCache: (layout: any, x: any, y: any) => void;
    currentTint: number;
    addGlyph: (glyph: any, x: any, y: any, color: any) => void;
    setText: (
      str: any,
      x: any,
      y: any,
      start: any,
      end: any,
      targetWidth: any,
      halign: any,
      wrap: any,
      truncate: any
    ) => any;
    setTextToCache: (layout: any, x: any, y: any) => void;
    addText: (
      str: any,
      x: any,
      y: any,
      start: any,
      end: any,
      targetWidth: any,
      halign: any,
      wrap: any,
      truncate: any
    ) => any;
    addTextToCache: (layout: any, x: any, y: any) => void;
    /** Returns the x position of the cached string, relative to the position when the string was cached. */
    getX: () => number;
    /** Returns the y position of the cached string, relative to the position when the string was cached. */
    getY: () => number;
    getFont: () => any;
    setUseIntegerPositions: (use: any) => void;
    integer: any;
    /** @return whether this font uses integer positions for drawing. */
    usesIntegerPositions: () => any;
    getVertices: (page: any) => any;
    getVertexCount: (page: any) => any;
    getLayouts: () => any[];
    font: any;
    findRegion(id: any): any;
    draw(batch: any): void;
    drawTransformed(batch: any, transform: any): void;
  }
  import Utils_1 = require("gdxts/dist/lib/Utils");
  import Affine2_1 = require("gdxts/dist/lib/Affine2");
}
declare module "gdxts/dist/lib/BitmapFontData" {
  export const __esModule: boolean;
  export class BitmapFontData {
    /** Creates an empty BitmapFontData for configuration before calling {@link #load(FileHandle, boolean)}, to subclass, or to
     * populate yourself, e.g. using stb-truetype or FreeType. */
    constructor(fontFile: any, flip: any, textureData: any);
    /** The distance from the top of most uppercase characters to the baseline. Since the drawing position is the cap height of
     * the first line, the cap height can be used to get the location of the baseline. */
    capHeight: number;
    /** Multiplier for the line height of blank lines. down * blankLineHeight is used as the distance to move down for a blank
     * line. */
    blankLineScale: number;
    scaleX: number;
    scaleY: number;
    glyphs: {};
    /** The x-height, which is the distance from the top of most lowercase characters to the baseline. */
    xHeight: number;
    xChars: string[];
    capChars: string[];
    fileContent: string;
    loadFont: (gl_1: any, ...args_1: any[]) => any;
    setGlyphRegion: (glyph: any, region: any) => void;
    /** Sets the line height, which is the distance from one line of text to the next. */
    setLineHeight: (height: any) => void;
    lineHeight: number;
    down: number;
    setGlyph: (ch: any, glyph: any) => void;
    getFirstGlyph: () => any;
    /** Returns true if the font has the glyph, or if the font has a {@link #missingGlyph}. */
    hasGlyph: (ch: any) => boolean;
    /** Returns the glyph for the specified character, or null if no such glyph exists. Note that
     * {@link #getGlyphs(GlyphRun, CharSequence, int, int, Glyph)} should be be used to shape a string of characters into a list
     * of glyphs. */
    getGlyph: (ch: any) => any;
    /** Using the specified string, populates the glyphs and positions of the specified glyph run.
     * @param str Characters to convert to glyphs. Will not contain newline or color tags. May contain "[[" for an escaped left
     *           square bracket.
     * @param lastGlyph The glyph immediately before this run, or null if this is run is the first on a line of text. Used tp
     *           apply kerning between the specified glyph and the first glyph in this run. */
    getGlyphs: (
      run: any,
      str: any,
      start: any,
      end: any,
      lastGlyph: any
    ) => void;
    /** Returns the first valid glyph index to use to wrap to the next line, starting at the specified start index and
     * (typically) moving toward the beginning of the glyphs array. */
    getWrapIndex: (glyphs: any, start: any) => number;
    isBreakChar: (c: any) => boolean;
    isWhitespace: (c: any) => boolean;
    /** Returns the image path for the texture page at the given index (the "id" in the BMFont file). */
    getImagePath: (index: any) => any;
    getImagePaths: () => any;
    /** Scales the font by the specified amounts on both axes
     * <p>
     * Note that smoother scaling can be achieved if the texture backing the BitmapFont is using {@link TextureFilter#Linear}.
     * The default is Nearest, so use a BitmapFont constructor that takes a {@link TextureRegion}.
     * @throws IllegalArgumentException if scaleX or scaleY is zero. */
    setScale: (scaleX: any, scaleY: any) => void;
    /** Sets the font's scale relative to the current scale.
     * @see #setScale(float, float)
     * @throws IllegalArgumentException if the resulting scale is zero. */
    scale: (amount: any) => void;
    fontFile: any;
    flipped: any;
    textureData: any;
    setFileContent(fileContent: any): void;
    /** Scales the font by the specified amount in both directions.
     * @see #setScale(float, float)
     * @throws IllegalArgumentException if scaleX or scaleY is zero. */
    setXYScale(scaleXY: any): void;
  }
}
declare module "gdxts/dist/lib/BoundingBox" {
  export const __esModule: boolean;
  export class BoundingBox {
    getCenter(out: any): any;
    getCenterX(): number;
    getCenterY(): number;
    getCenterZ(): number;
    getCorner000(out: any): any;
    getCorner001(out: any): any;
    getCorner010(out: any): any;
    getCorner011(out: any): any;
    getCorner100(out: any): any;
    getCorner101(out: any): any;
    getCorner110(out: any): any;
    getCorner111(out: any): any;
    /** @param out The {@link Vector3} to receive the dimensions of this bounding box on all three axis.
     * @return The vector specified with the out argument */
    getDimensions(out: any): any;
    getWidth(): number;
    getHeight(): number;
    getDepth(): number;
    /** @param out The {@link Vector3} to receive the minimum values.
     * @return The vector specified with the out argument */
    getMin(out: any): any;
    /** @param out The {@link Vector3} to receive the maximum values.
     * @return The vector specified with the out argument */
    getMax(out: any): any;
    min: Vector3_1.Vector3;
    max: Vector3_1.Vector3;
    cnt: Vector3_1.Vector3;
    dim: Vector3_1.Vector3;
    /** Sets the given bounding box.
     *
     * @param bounds The bounds.
     * @return This bounding box for chaining. */
    setFromBounds(bounds: any): this;
    /** Sets the given minimum and maximum vector.
     *
     * @param minimum The minimum vector
     * @param maximum The maximum vector
     * @return This bounding box for chaining. */
    set(minimum: any, maximum: any): this;
    update(): void;
    /** Sets the bounding box minimum and maximum vector from the given points.
     *
     * @param points The points.
     * @return This bounding box for chaining. */
    setFromPoints(points: any): this;
    /** Sets the minimum and maximum vector to positive and negative infinity.
     *
     * @return This bounding box for chaining. */
    inf(): this;
    /** Extends the bounding box to incorporate the given {@link Vector3}.
     * @param point The vector
     * @return This bounding box for chaining. */
    extPoint(point: any): this;
    /** Sets the minimum and maximum vector to zeros.
     * @return This bounding box for chaining. */
    clr(): this;
    /** Returns whether this bounding box is valid. This means that {@link #max} is greater than or equal to {@link #min}.
     * @return True in case the bounding box is valid, false otherwise */
    isValid(): boolean;
    /** Extends this bounding box by the given bounding box.
     *
     * @param a_bounds The bounding box
     * @return This bounding box for chaining. */
    extBounds(a_bounds: any): this;
    /** Extends this bounding box by the given sphere.
     *
     * @param center Sphere center
     * @param radius Sphere radius
     * @return This bounding box for chaining. */
    extSphere(center: any, radius: any): this;
    /** Extends this bounding box by the given transformed bounding box.
     *
     * @param bounds The bounding box
     * @param transform The transformation matrix to apply to bounds, before using it to extend this bounding box.
     * @return This bounding box for chaining. */
    extTransformedBox(bounds: any, transform: any): this;
    /** Multiplies the bounding box by the given matrix. This is achieved by multiplying the 8 corner points and then calculating
     * the minimum and maximum vectors from the transformed points.
     *
     * @param transform The matrix
     * @return This bounding box for chaining. */
    mul(transform: any): this;
    /** Returns whether the given bounding box is contained in this bounding box.
     * @param b The bounding box
     * @return Whether the given bounding box is contained */
    containsBounds(b: any): boolean;
    /** Returns whether the given bounding box is intersecting this bounding box (at least one point in).
     * @param b The bounding box
     * @return Whether the given bounding box is intersected */
    intersects(b: any): boolean;
    /** Returns whether the given vector is contained in this bounding box.
     * @param v The vector
     * @return Whether the vector is contained or not. */
    containsPoint(v: any): boolean;
    /** Extends the bounding box by the given vector.
     *
     * @param x The x-coordinate
     * @param y The y-coordinate
     * @param z The z-coordinate
     * @return This bounding box for chaining. */
    ext(x: any, y: any, z: any): this;
  }
  export namespace BoundingBox {
    let tmpVector: Vector3_1.Vector3;
  }
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
}
declare module "gdxts/dist/lib/Camera" {
  export const __esModule: boolean;
  export class OrthoCamera {
    constructor(
      viewportWidth: any,
      viewportHeight: any,
      screenWidth: any,
      screenHeight: any
    );
    position: Vector3_1.Vector3;
    direction: Vector3_1.Vector3;
    up: Vector3_1.Vector3;
    near: number;
    far: number;
    zoom: number;
    viewportWidth: number;
    viewportHeight: number;
    projectionView: Matrix4_1.Matrix4;
    inverseProjectionView: Matrix4_1.Matrix4;
    projection: Matrix4_1.Matrix4;
    view: Matrix4_1.Matrix4;
    yDown: boolean;
    tmp3: Vector3_1.Vector3;
    getYDown(): boolean;
    setYDown(yDown: any): void;
    resize(
      viewportWidth: any,
      viewportHeight: any,
      screenWidth: any,
      screenHeight: any
    ): void;
    screenWidth: any;
    screenHeight: any;
    setPosition(cameraX: any, cameraY: any): void;
    update(): void;
    combined: Float32Array<ArrayBufferLike>;
    screenToWorld(screenCoords: any, screenWidth: any, screenHeight: any): any;
    worldToScreen(worldCoords: any, screenWidth: any, screenHeight: any): any;
    unprojectVector2(worldCoord: any, screenCoord: any): void;
    setViewport(viewportWidth: any, viewportHeight: any): void;
  }
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
  import Matrix4_1 = require("gdxts/dist/lib/Matrix4");
}
declare module "gdxts/dist/lib/Game" {
  export const __esModule: boolean;
  export class Game {
    setScreen(screen: any): void;
    currentScreen: any;
    update(delta: any): void;
  }
  export namespace Game {
    let shared: Game;
  }
}
declare module "gdxts/dist/lib/Glyph" {
  export const __esModule: boolean;
  export const LOG2_PAGE_SIZE: 9;
  export const PAGE_SIZE: number;
  export const PAGES: number;
  export class Glyph {
    /** The index to the texture page that holds this glyph. */
    page: number;
    getKerning(ch: any): any;
    setKerning(ch: any, value: any): void;
    kerning: any[];
  }
}
declare module "gdxts/dist/lib/GlyphLayout" {
  export const __esModule: boolean;
  export class GlyphLayout {
    constructor(
      font: any,
      str: any,
      start: number,
      end: any,
      color: Utils_1.Color,
      targetWidth: number,
      hAlign: number,
      wrap: boolean,
      truncate: any
    );
    epsilon: number;
    glyphRunPool: Utils_1.Pool<GlyphRun_1.GlyphRun>;
    colorStack: any[];
    runs: any[];
    colors: any[];
    setText: (
      font: any,
      str: any,
      start: any,
      end: any,
      color: any,
      targetWidth: any,
      hAlign: any,
      wrap: any,
      truncate: any
    ) => void;
    height: any;
    calculateWidths: (fontData: any) => void;
    width: number;
    alignRuns: (targetWidth: any, halign: any) => void;
    /** @param truncate May be empty string. */
    truncate: (
      fontData: any,
      run: any,
      targetWidth: any,
      truncate: any
    ) => void;
    /** Sets the xadvance of the last glyph to use its width instead of xadvance. */
    setLastGlyphXAdvance: (fontData: any, run: any) => void;
    /** Returns the distance from the glyph's drawing position to the right edge of the glyph. */
    getGlyphWidth: (glyph: any, fontData: any) => number;
    /** Returns an X offset for the first glyph so when drawn, none of it is left of the line's drawing position. */
    getLineOffset: (glyphs: any, fontData: any) => number;
    reset: () => void;
    glyphCount: number;
    /** Breaks a run into two runs at the specified wrapIndex.
     * @return May be null if second run is all whitespace. */
    wrap(fontData: any, first: any, wrapIndex: any): GlyphRun_1.GlyphRun;
  }
  import GlyphRun_1 = require("gdxts/dist/lib/GlyphRun");
  import Utils_1 = require("gdxts/dist/lib/Utils");
}
declare module "gdxts/dist/lib/GlyphRun" {
  export const __esModule: boolean;
  export class GlyphRun {
    glyphs: any[];
    xAdvances: any[];
    appendRun: (run: any) => void;
    reset: () => void;
  }
}
declare module "gdxts/dist/lib/InputHandler" {
  export const __esModule: boolean;
  export const InputEvent: {};
  export class InputHandler {
    constructor(canvas: any);
    screenCoord: Vector2_1.Vector2;
    worldCoord: Vector2_1.Vector2;
    canvas: any;
    lastX: number;
    lastY: number;
    touched: boolean;
    touches: any[];
    emitter: events_1<[never]>;
    mouseDownHandler: (evt: any) => void;
    mouseUpHandler: (evt: any) => void;
    mouseMoveHandler: (evt: any) => void;
    touchStartHandler: (evt: any) => void;
    touchEndHandler: (evt: any) => void;
    touchMoveHandler: (evt: any) => void;
    cleanup(): void;
    addEventListener(event: any, listener: any): void;
    handleMove(evt: any): void;
    getX(index?: number): number;
    getY(index?: number): number;
    isTouched(): boolean;
    getTouchedWorldCoord(camera: any): Vector2_1.Vector2;
  }
  import Vector2_1 = require("gdxts/dist/lib/Vector2");
  import events_1 = require("events");
}
declare module "gdxts/dist/lib/Matrix3" {
  export const __esModule: boolean;
  export class Matrix3 {
    static mul(mata: any, matb: any): void;
    constructor(matrix?: any);
    val: any[];
    tmp: any[];
    idt(): this;
    mulWithMatrix3(m: any): this;
    mulLeft(m: any): this;
    setToRotation(degrees: any): this;
    setToRotationRad(radians: any): this;
    setToRotationWithAxis(axis: any, degrees: any): this;
    setToTranslation(x: any, y: any): this;
    setToScaling(scaleX: any, scaleY: any): this;
    toString(): string;
    det(): number;
    inv(): this;
    setByMatrix3(mat: any): this;
    setByMatrix4(mat: any): this;
    trnByVector2(vector: any): this;
    trnByMatrix3(x: any, y: any): this;
    trnByVector3(vector: any): this;
    translate(x: any, y: any): this;
    rotate(degrees: any): this;
    rotateRad(radians: any): this;
    scale(scaleX: any, scaleY: any): this;
    getValues(): any[];
    getTranslation(position: any): any;
    getScale(scale: any): any;
    getRotation(): number;
    getRotationRad(): number;
    sclByNumber(scale: any): this;
    sclByVector2(scale: any): this;
    scl(scale: any): this;
    transpose(): this;
  }
  export namespace Matrix3 {
    let M00: number;
    let M01: number;
    let M02: number;
    let M10: number;
    let M11: number;
    let M12: number;
    let M20: number;
    let M21: number;
    let M22: number;
  }
}
declare module "gdxts/dist/lib/Matrix4" {
  export const __esModule: boolean;
  export class Matrix4 {
    static initTemps(): void;
    static matrix4_proj(mat: any, vec: any): void;
    static prj(
      mat: any,
      vecs: any,
      offset: any,
      numVecs: any,
      stride: any
    ): void;
    temp: Float32Array<ArrayBuffer>;
    values: Float32Array<ArrayBuffer>;
    set(values: any): this;
    setFromQuaternion(quaternion: any): this;
    setFromTranslationRotation(
      position: any,
      orientation: any,
      scale: any
    ): this;
    transpose(): this;
    identity(): this;
    invert(): this;
    determinant(): number;
    translate(x: any, y: any, z: any): this;
    setTranslation(x: any, y: any, z: any): this;
    getTranslation(position: any): any;
    hasRotationOrScaling(): boolean;
    det3x3(): number;
    copy(): Matrix4;
    projection(near: any, far: any, fovy: any, aspectRatio: any): this;
    ortho2d(x: any, y: any, width: any, height: any): this;
    ortho(
      left: any,
      right: any,
      bottom: any,
      top: any,
      near: any,
      far: any
    ): this;
    multiply(matrix: any): this;
    multiplyLeft(matrix: any): this;
    idt(): this;
    lookAt(position: any, direction: any, up: any): this;
    setToLookAt(position: any, target: any, up: any): this;
    rotate(rotation: any): this;
    scale(scaleX: any, scaleY: any, scaleZ: any): this;
    setToRotation(axis: any, degrees: any): this;
  }
  export namespace Matrix4 {
    let M00: number;
    let M01: number;
    let M02: number;
    let M03: number;
    let M10: number;
    let M11: number;
    let M12: number;
    let M13: number;
    let M20: number;
    let M21: number;
    let M22: number;
    let M23: number;
    let M30: number;
    let M31: number;
    let M32: number;
    let M33: number;
    let xAxis: any;
    let yAxis: any;
    let zAxis: any;
    let tempVec: any;
    let tmpMatrix: Matrix4;
    let quat: Quaternion_1.Quaternion;
    let tmpArrayForVec: any[];
  }
  import Quaternion_1 = require("gdxts/dist/lib/Quaternion");
}
declare module "gdxts/dist/lib/Mesh" {
  export const __esModule: boolean;
  export const VertexAttributeType: {};
  export class Mesh {
    constructor(
      context: any,
      attributes: any,
      maxVertices: any,
      maxIndices: any
    );
    getAttributes(): any;
    maxVertices(): number;
    numVertices(): number;
    setVerticesLength(length: any): void;
    dirtyVertices: boolean;
    verticesLength: number;
    getVertices(): Float32Array<ArrayBuffer>;
    maxIndices(): number;
    numIndices(): number;
    setIndicesLength(length: any): void;
    dirtyIndices: boolean;
    indicesLength: number;
    getIndices(): Uint16Array<any>;
    getVertexSizeInFloats(): number;
    attributes: any;
    elementsPerVertex: number;
    context: any;
    vertices: Float32Array<ArrayBuffer>;
    indices: Uint16Array<any>;
    setVertices(vertices: any): void;
    setIndices(indices: any): void;
    draw(shader: any, primitiveType: any): void;
    drawWithOffset(
      shader: any,
      primitiveType: any,
      offset: any,
      count: any
    ): void;
    bind(shader: any): void;
    unbind(shader: any): void;
    update(): void;
    verticesBuffer: any;
    indicesBuffer: any;
    restore(): void;
    dispose(): void;
  }
  export class VertexAttribute {
    constructor(name: any, type: any, numElements: any);
    name: any;
    type: any;
    numElements: any;
  }
  export class Position2Attribute extends VertexAttribute {
    constructor();
  }
  export class Position3Attribute extends VertexAttribute {
    constructor();
  }
  export class TexCoordAttribute extends VertexAttribute {
    constructor(unit?: number);
  }
  export class ColorAttribute extends VertexAttribute {
    constructor();
  }
  export class Color2Attribute extends VertexAttribute {
    constructor();
  }
}
declare module "gdxts/dist/lib/MultiTextureBatch" {
  export const __esModule: boolean;
  export class TexIndexAttribute extends Mesh_1.VertexAttribute {
    constructor();
  }
  export class MultiTextureBatch extends PolygonBatcher_1.PolygonBatch {
    constructor(
      gl: any,
      maxTextures?: number,
      maxVertices?: number,
      pma?: boolean
    );
    maxTextures: number;
    textureIndices: number[];
    lastTextures: any[];
    context: any;
    srcColorBlend: any;
    srcAlphaBlend: any;
    dstColorBlend: any;
    dstAlphaBlend: any;
    drawVertices(texture: any, vertices: any, indices?: number[]): void;
    drawTransformed(
      texture: any,
      width: any,
      height: any,
      transform: any,
      ou1?: number,
      ov1?: number,
      ou2?: number,
      ov2?: number,
      rotate?: boolean
    ): void;
    draw(
      texture: any,
      x: any,
      y: any,
      width: any,
      height: any,
      originX?: number,
      originY?: number,
      rotation?: number,
      scaleX?: number,
      scaleY?: number,
      ou1?: number,
      ov1?: number,
      ou2?: number,
      ov2?: number,
      rotate?: boolean
    ): void;
  }
  import Mesh_1 = require("gdxts/dist/lib/Mesh");
  import PolygonBatcher_1 = require("gdxts/dist/lib/PolygonBatcher");
}
declare module "gdxts/dist/lib/NumberUtils" {
  export const __esModule: boolean;
  export class NumberUtil {
    static intBitsToFloat(i: any): number;
    static floatToIntBits(f: any): number;
    static intToFloatColor(value: any): number;
    static colorToFloat(r: any, g: any, b: any, a: any): number;
    static isPowerOfTwo(n: any): boolean;
    static nextPowerOfTwo(n: any): any;
  }
}
declare module "gdxts/dist/lib/ParticleEffect" {
  export const __esModule: boolean;
  export class ParticleEffect {
    constructor(effect: any);
    emitters: ParticleEmitter_1.ParticleEmitter[];
    xSizeScale: number;
    ySizeScale: number;
    motionScale: number;
    start(): void;
    /** Resets the effect so it can be started again like a new effect.
     * @param resetScaling Whether to restore the original size and motion parameters if they were scaled. Repeated scaling and
     *           resetting may introduce error. */
    reset(resetScaling?: boolean): void;
    update(delta: any): void;
    draw(batch: any, gl: any): void;
    allowCompletion(): void;
    isComplete(): boolean;
    setDuration(duration: any): void;
    setPosition(x: any, y: any): void;
    setFlip(flipX: any, flipY: any): void;
    flipY(): void;
    getEmitters(): ParticleEmitter_1.ParticleEmitter[];
    /** Returns the emitter with the specified name, or null. */
    findEmitter(name: any): ParticleEmitter_1.ParticleEmitter;
    /** Allocates all emitters particles. See {@link com.badlogic.gdx.graphics.g2d.ParticleEmitter#preAllocateParticles()} */
    preAllocateParticles(): void;
    load(url: any, atlas: any): any;
    loadEmitters(url: any): any;
    loadEmitterImages(atlas: any): void;
    newEmitter(reader: any): ParticleEmitter_1.ParticleEmitter;
    cloneEmitter(emitter: any): ParticleEmitter_1.ParticleEmitter;
    /** Disposes the texture for each sprite for each ParticleEmitter. */
    dispose(): void;
    /** Permanently scales all the size and motion parameters of all the emitters in this effect. If this effect originated from a
     * {@link ParticleEffectPool}, the scale will be reset when it is returned to the pool. */
    scaleEffect(_xSizeScale: any, _ySizeScale: any, _motionScale: any): void;
    /** Sets the {@link com.badlogic.gdx.graphics.g2d.ParticleEmitter#setCleansUpBlendFunction(boolean) cleansUpBlendFunction}
     * parameter on all {@link com.badlogic.gdx.graphics.g2d.ParticleEmitter ParticleEmitters} currently in this ParticleEffect.
     * <p>
     * IMPORTANT: If set to false and if the next object to use this Batch expects alpha blending, you are responsible for setting
     * the Batch's blend function to (GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA) before that next object is drawn.
     * @param cleanUpBlendFunction */
    setEmittersCleanUpBlendFunction(cleanUpBlendFunction: any): void;
  }
  export namespace ParticleEffect {
    let USE_MULTI_BATCH: boolean;
    let USE_TWO_COLOR: boolean;
  }
  import ParticleEmitter_1 = require("gdxts/dist/lib/ParticleEmitter");
}
declare module "gdxts/dist/lib/ParticleEffectPool" {
  export const __esModule: boolean;
  export class ParticleEffectPool extends Utils_1.Pool<any> {
    constructor(effect: any, _initialCapacity: any, _max: any);
    effect: any;
    newObject(): PooledEffect;
    free(effect: any): void;
  }
  export class PooledEffect extends ParticleEffect_1.ParticleEffect {
    constructor(pool: any, effect: any);
    pool: any;
    free(): void;
  }
  import Utils_1 = require("gdxts/dist/lib/Utils");
  import ParticleEffect_1 = require("gdxts/dist/lib/ParticleEffect");
}
declare module "gdxts/dist/lib/ParticleEmitter" {
  export const __esModule: boolean;
  export const SpawnShape: {};
  export const SpawnEllipseSide: {};
  export const SpriteMode: {};
  export class ParticleEmitter {
    static load(reader: any): ParticleEmitter;
    static clone(otherEmitter: any): ParticleEmitter;
    delayValue: RangedNumericValue;
    lifeOffsetValue: IndependentScaledNumericValue;
    durationValue: RangedNumericValue;
    lifeValue: IndependentScaledNumericValue;
    emissionValue: ScaledNumericValue;
    xScaleValue: ScaledNumericValue;
    yScaleValue: ScaledNumericValue;
    rotationValue: ScaledNumericValue;
    velocityValue: ScaledNumericValue;
    angleValue: ScaledNumericValue;
    windValue: ScaledNumericValue;
    gravityValue: ScaledNumericValue;
    transparencyValue: ScaledNumericValue;
    tintValue: GradientColorValue;
    xOffsetValue: ScaledNumericValue;
    yOffsetValue: ScaledNumericValue;
    spawnWidthValue: ScaledNumericValue;
    spawnHeightValue: ScaledNumericValue;
    spawnShapeValue: SpawnShapeValue;
    xSizeValues: any[];
    ySizeValues: any[];
    motionValues: any[];
    accumulator: number;
    sprites: any[];
    spriteMode: any;
    particles: any[];
    maxParticleCount: number;
    x: number;
    y: number;
    imagePaths: any[];
    active: any[];
    emissionDelta: number;
    duration: number;
    additive: boolean;
    premultipliedAlpha: boolean;
    cleaningUpBlendFunction: boolean;
    set(emitter: any): void;
    name: any;
    minParticleCount: any;
    attached: any;
    continuous: any;
    aligned: any;
    behind: any;
    initialize(): void;
    setMaxParticleCount(maxParticleCount: any): void;
    activeCount: any;
    addParticle(): void;
    addParticles(count: any): void;
    update(delta: any): void;
    firstUpdate: boolean;
    draw(batch: any, gl: any): void;
    /** Updates and draws the particles. This is slightly more efficient than calling {@link #update} and
     * {@link #draw(Batch)} separately. */
    updateAndDraw(batch: any, gl: any, delta: any): void;
    start(): void;
    allowingCompletion: boolean;
    reset(): void;
    durationTimer: number;
    restart(): void;
    delay: any;
    delayTimer: number;
    emission: any;
    emissionDiff: any;
    spawnWidth: any;
    spawnWidthDiff: any;
    spawnHeight: any;
    spawnHeightDiff: any;
    updateFlags: number;
    newParticle(sprite: any): Particle;
    getParticles(): any[];
    activateParticle(index: any): void;
    updateParticle(particle: any, delta: any, deltaMillis: any): boolean;
    generateLifeValues(): void;
    life: any;
    lifeDiff: any;
    generateLifeOffsetValues(): void;
    lifeOffset: any;
    lifeOffsetDiff: any;
    setPosition(x: any, y: any): void;
    setSprites(sprites: any): void;
    setSpriteMode(spriteMode: any): void;
    /** Allocates max particles emitter can hold. Usually called early on to a allocation on updates.
     * {@link #setSprites(Array)} must have been set before calling this method */
    preAllocateParticles(): void;
    /** Ignores the {@link #setContinuous(boolean) continuous} setting until the emitter is started again. This allows the emitter
     * to stop smoothly. */
    allowCompletion(): void;
    getSprites(): any[];
    getSpriteMode(): any;
    getName(): any;
    setName(name: any): void;
    getLife(): IndependentScaledNumericValue;
    getXScale(): ScaledNumericValue;
    getYScale(): ScaledNumericValue;
    getRotation(): ScaledNumericValue;
    getTint(): GradientColorValue;
    getVelocity(): ScaledNumericValue;
    getWind(): ScaledNumericValue;
    getGravity(): ScaledNumericValue;
    getAngle(): ScaledNumericValue;
    getEmission(): ScaledNumericValue;
    getTransparency(): ScaledNumericValue;
    getDuration(): RangedNumericValue;
    getDelay(): RangedNumericValue;
    getLifeOffset(): IndependentScaledNumericValue;
    getXOffsetValue(): ScaledNumericValue;
    getYOffsetValue(): ScaledNumericValue;
    getSpawnWidth(): ScaledNumericValue;
    getSpawnHeight(): ScaledNumericValue;
    getSpawnShape(): SpawnShapeValue;
    isAttached(): any;
    setAttached(attached: any): void;
    isContinuous(): any;
    setContinuous(continuous: any): void;
    isAligned(): any;
    setAligned(aligned: any): void;
    isAdditive(): boolean;
    setAdditive(additive: any): void;
    /** @return Whether this ParticleEmitter automatically returns the {@link com.badlogic.gdx.graphics.g2d.Batch Batch}'s blend
     *         function to the alpha-blending default (GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA) when done drawing. */
    cleansUpBlendFunction(): boolean;
    /** Set whether to automatically return the {@link com.badlogic.gdx.graphics.g2d.Batch Batch}'s blend function to the
     * alpha-blending default (GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA) when done drawing. Is true by default. If set to false, the
     * Batch's blend function is left as it was for drawing this ParticleEmitter, which prevents the Batch from being flushed
     * repeatedly if consecutive ParticleEmitters with the same additive or pre-multiplied alpha state are drawn in a row.
     * <p>
     * IMPORTANT: If set to false and if the next object to use this Batch expects alpha blending, you are responsible for setting
     * the Batch's blend function to (GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA) before that next object is drawn.
     * @param cleansUpBlendFunction */
    setCleansUpBlendFunction(cleaningUpBlendFunction: any): void;
    isBehind(): any;
    setBehind(behind: any): void;
    isPremultipliedAlpha(): boolean;
    setPremultipliedAlpha(premultipliedAlpha: any): void;
    getMinParticleCount(): any;
    setMinParticleCount(minParticleCount: any): void;
    getMaxParticleCount(): number;
    isComplete(): boolean;
    getPercentComplete(): number;
    getX(): number;
    getY(): number;
    getActiveCount(): any;
    getImagePaths(): any[];
    setImagePaths(imagePaths: any): void;
    setFlip(flipX: any, flipY: any): void;
    flipX: any;
    flipY: any;
    flipYAxis(): void;
    /** Returns the bounding box for all active particles. z axis will always be zero. */
    getXSizeValues(): any[];
    getYSizeValues(): any[];
    getMotionValues(): any[];
    /** Permanently scales the size of the emitter by scaling all its ranged values related to size. */
    scaleSize(scale: any): void;
    /** Permanently scales the size of the emitter by scaling all its ranged values related to size. */
    scaleSizeXY(scaleX: any, scaleY: any): void;
    /** Permanently scales the speed of the emitter by scaling all its ranged values related to motion. */
    scaleMotion(scale: any): void;
    /** Sets all size-related ranged values to match those of the template emitter. */
    matchSize(template: any): void;
    /** Sets all horizontal size-related ranged values to match those of the template emitter. */
    matchXSize(template: any): void;
    /** Sets all vertical size-related ranged values to match those of the template emitter. */
    matchYSize(template: any): void;
    /** Sets all motion-related ranged values to match those of the template emitter. */
    matchMotion(template: any): void;
    load(reader: any): void;
  }
  export namespace ParticleEmitter {
    let UPDATE_SCALE: number;
    let UPDATE_ANGLE: number;
    let UPDATE_ROTATION: number;
    let UPDATE_VELOCITY: number;
    let UPDATE_WIND: number;
    let UPDATE_GRAVITY: number;
    let UPDATE_TINT: number;
    let UPDATE_SPRITE: number;
  }
  export class Particle extends Sprite_1.Sprite {
    static fromSprite(sprite: any): Particle;
    constructor(...args: any[]);
    tint: any[];
  }
  export class ParticleValue {
    setAlwaysActive(alwaysActive: any): void;
    alwaysActive: any;
    isAlwaysActive(): any;
    isActive(): any;
    setActive(active: any): void;
    active: any;
    load(reader: any): void;
    set(value: any): void;
  }
  export class NumericValue extends ParticleValue {
    getValue(): any;
    setValue(value: any): void;
    value: any;
  }
  class RangedNumericValue extends ParticleValue {
    newLowValue(): any;
    setLow(value: any): void;
    lowMin: any;
    lowMax: any;
    setLowRange(min: any, max: any): void;
    getLowMin(): any;
    setLowMin(lowMin: any): void;
    getLowMax(): any;
    setLowMax(lowMax: any): void;
    /** permanently scales the range by a scalar. */
    scale(scale: any): void;
  }
  class IndependentScaledNumericValue extends ScaledNumericValue {
    isIndependent(): any;
    setIndependent(independent: any): void;
    independent: any;
  }
  class ScaledNumericValue extends RangedNumericValue {
    constructor(...args: any[]);
    scaling: number[];
    timeline: number[];
    newHighValue(): any;
    setHigh(value: any): void;
    highMin: any;
    highMax: any;
    setHighRange(min: any, max: any): void;
    getHighMin(): any;
    setHighMin(highMin: any): void;
    getHighMax(): any;
    setHighMax(highMax: any): void;
    relative: any;
    getScaling(): number[];
    setScaling(values: any): void;
    getTimeline(): number[];
    setTimeline(timeline: any): void;
    isRelative(): any;
    setRelative(relative: any): void;
    getScale(percent: any): number;
  }
  class GradientColorValue extends ParticleValue {
    constructor(...args: any[]);
    colors: number[];
    timeline: number[];
    GradientColorValue(): void;
    getTimeline(): number[];
    setTimeline(timeline: any): void;
    /** @return the r, g and b values for every timeline position */
    getColors(): number[];
    /** @param colors the r, g and b values for every timeline position */
    setColors(colors: any): void;
    getColor(percent: any): any[];
  }
  namespace GradientColorValue {
    let temp: any[];
  }
  class SpawnShapeValue extends ParticleValue {
    constructor(...args: any[]);
    shape: any;
    side: any;
    getShape(): any;
    setShape(shape: any): void;
    isEdges(): any;
    setEdges(edges: any): void;
    edges: any;
    getSide(): any;
    setSide(side: any): void;
  }
  import Sprite_1 = require("gdxts/dist/lib/Sprite");
  export {};
}
declare module "gdxts/dist/lib/PolygonBatcher" {
  export const __esModule: boolean;
  export class PolygonBatch {
    static resetTotalDrawCalls(): void;
    constructor(
      context: any,
      twoColorTint?: boolean,
      maxVertices?: number,
      pma?: boolean
    );
    isDrawing: boolean;
    shader: Shader_1.Shader;
    lastTexture: any;
    verticesLength: number;
    indicesLength: number;
    projectionValues: Float32Array<ArrayBuffer>;
    color: Utils_1.Color;
    twoColorTint: boolean;
    yDown: boolean;
    context: any;
    mesh: Mesh_1.Mesh;
    srcColorBlend: any;
    srcAlphaBlend: any;
    dstColorBlend: any;
    dstAlphaBlend: any;
    setColor(r: any, g: any, b: any, a: any): void;
    setShader(shader: any): void;
    setProjection(projectionValues: any): void;
    begin(): void;
    drawCalls: number;
    setBlendMode(...args: any[]): void;
    drawVerticesWithOffset(
      texture: any,
      vertices: any,
      offset: any,
      count: any
    ): void;
    drawVertices(texture: any, vertices: any, indices?: number[]): void;
    drawTransformed(
      texture: any,
      width: any,
      height: any,
      transform: any,
      ou1?: number,
      ov1?: number,
      ou2?: number,
      ov2?: number,
      rotate?: boolean
    ): void;
    flush(): void;
    end(): void;
    getDrawCalls(): number;
    dispose(): void;
    setYDown(yDown: any): void;
    draw(
      texture: any,
      x: any,
      y: any,
      width: any,
      height: any,
      originX?: number,
      originY?: number,
      rotation?: number,
      scaleX?: number,
      scaleY?: number,
      ou1?: number,
      ov1?: number,
      ou2?: number,
      ov2?: number,
      rotate?: boolean
    ): void;
  }
  export namespace PolygonBatch {
    let PMA: boolean;
    let QUAD_TRIANGLES: number[];
    let totalDrawCalls: number;
  }
  import Shader_1 = require("gdxts/dist/lib/Shader");
  import Utils_1 = require("gdxts/dist/lib/Utils");
  import Mesh_1 = require("gdxts/dist/lib/Mesh");
}
declare module "gdxts/dist/lib/Quaternion" {
  export const __esModule: boolean;
  export class Quaternion {
    static len(x: any, y: any, z: any, w: any): number;
    static len2(x: any, y: any, z: any, w: any): number;
    static dot(
      x1: any,
      y1: any,
      z1: any,
      w1: any,
      x2: any,
      y2: any,
      z2: any,
      w2: any
    ): number;
    constructor(x?: number, y?: number, z?: number, w?: number);
    set(x: any, y: any, z: any, w: any): this;
    x: any;
    y: any;
    z: any;
    w: any;
    setFrom(quaternion: any): this;
    len(): number;
    toString(): string;
    setEulerAngles(yaw: any, pitch: any, roll: any): this;
    setEulerAnglesRad(yaw: any, pitch: any, roll: any): this;
    getGimbalPole(): 1 | 0 | -1;
    getRollRad(): number;
    getRoll(): number;
    getPitchRad(): number;
    getPitch(): number;
    getYawRad(): number;
    getYaw(): number;
    len2(): number;
    nor(): this;
    conjugate(): this;
    transform(v: any): any;
    mul(x: any, y: any, z: any, w: any): this;
    mulLeft(x: any, y: any, z: any, w: any): this;
    add(qx: any, qy: any, qz: any, qw: any): this;
    toMatrix(matrix: any): void;
    idt(): this;
    isIdentity(): boolean;
    setFromAxis(x: any, y: any, z: any, degrees: any): this;
    setFromAxisRad(x: any, y: any, z: any, radians: any): this;
    setFromMatrix4(matrix: any, normalizeAxes?: boolean): this;
    setFromMatrix3(matrix: any, normalizeAxes: any): this;
    setFromAxes(
      xx: any,
      xy: any,
      xz: any,
      yx: any,
      yy: any,
      yz: any,
      zx: any,
      zy: any,
      zz: any,
      normalizeAxes?: boolean
    ): this;
    setFromCross(v1: any, v2: any): this;
    slerp(end: any, alpha: any): this;
    slerpWithQuaternions(q: any): this;
    exp(alpha: any): this;
    dot(x: any, y: any, z: any, w: any): number;
    mulByScalar(scalar: any): this;
    getAxisAngle(axis: any): number;
    getAxisAngleRad(x: any, y: any, z: any): number;
    getAngleRad(): number;
    getAngle(): number;
  }
  export namespace Quaternion {
    let tmp1: Quaternion;
    let tmp2: Quaternion;
  }
}
declare module "gdxts/dist/lib/Shader" {
  export const __esModule: boolean;
  export class Shader {
    static newMultiTextured(
      context: any,
      maxTextures: any,
      pma?: boolean
    ): Shader;
    static newColoredTextured(context: any): Shader;
    static newTwoColoredTextured(context: any): Shader;
    static newColored(context: any): Shader;
    constructor(context: any, vertexShader: any, fragmentShader: any);
    getProgram(): any;
    getVertexShader(): any;
    getFragmentShader(): any;
    getVertexShaderSource(): any;
    getFragmentSource(): any;
    vertexShader: any;
    fragmentShader: any;
    vs: any;
    fs: any;
    program: any;
    tmp2x2: Float32Array<ArrayBuffer>;
    tmp3x3: Float32Array<ArrayBuffer>;
    tmp4x4: Float32Array<ArrayBuffer>;
    vsSource: any;
    fsSource: any;
    context: any;
    compile(): void;
    compileShader(type: any, source: any): any;
    compileProgram(vs: any, fs: any): any;
    restore(): void;
    bind(): void;
    unbind(): void;
    setUniformi(uniform: any, value: any): void;
    setUniform1iv(uniform: any, values: any): void;
    setUniformf(uniform: any, value: any): void;
    setUniform2f(uniform: any, value: any, value2: any): void;
    setUniform3f(uniform: any, value: any, value2: any, value3: any): void;
    setUniform1fWithLocation(location: any, value: any): void;
    setUniform3fWithLocation(
      location: any,
      value: any,
      value2: any,
      value3: any
    ): void;
    setUniform4f(
      uniform: any,
      value: any,
      value2: any,
      value3: any,
      value4: any
    ): void;
    setUniform2x2f(uniform: any, value: any): void;
    setUniform3x3f(uniform: any, value: any): void;
    setUniform4x4f(uniform: any, value: any): void;
    setUniform4x4fWithLocation(location: any, value: any): void;
    setUniform3fv(uniform: any, value: any): void;
    getUniformLocation(uniform: any, pedantic?: boolean): any;
    getAttributeLocation(attribute: any): any;
    dispose(): void;
  }
  export namespace Shader {
    let MVP_MATRIX: string;
    let POSITION: string;
    let COLOR: string;
    let COLOR2: string;
    let TEXCOORDS: string;
    let SAMPLER: string;
    let NORMAL: string;
    let TANGENT: string;
    let BINORMAL: string;
    let BONEWEIGHT: string;
  }
}
declare module "gdxts/dist/lib/ShapeRenderer" {
  export const __esModule: boolean;
  export const ShapeType: {};
  export class ShapeRenderer {
    static resetTotalDrawCalls(): void;
    constructor(context: any, maxVertices?: number);
    isDrawing: boolean;
    shapeType: any;
    color: Utils_1.Color;
    vertexIndex: number;
    tmp: Vector2_1.Vector2;
    projectionValues: Float32Array<ArrayBuffer>;
    context: any;
    mesh: Mesh_1.Mesh;
    srcColorBlend: any;
    srcAlphaBlend: any;
    dstBlend: any;
    shader: Shader_1.Shader;
    setProjection(projectionValues: any): void;
    begin(): void;
    drawCalls: number;
    setBlendMode(srcColorBlend: any, srcAlphaBlend: any, dstBlend: any): void;
    setColor(color: any): void;
    setColorWith(r: any, g: any, b: any, a: any): void;
    point(x: any, y: any, color?: any): void;
    line(x: any, y: any, x2: any, y2: any, color?: any): void;
    triangle(
      filled: any,
      x: any,
      y: any,
      x2: any,
      y2: any,
      x3: any,
      y3: any,
      color?: any,
      color2?: any,
      color3?: any
    ): void;
    quad(
      filled: any,
      x: any,
      y: any,
      x2: any,
      y2: any,
      x3: any,
      y3: any,
      x4: any,
      y4: any,
      color?: any,
      color2?: any,
      color3?: any,
      color4?: any
    ): void;
    rect(
      filled: any,
      x: any,
      y: any,
      width: any,
      height: any,
      color?: any
    ): void;
    rectLine(
      filled: any,
      x1: any,
      y1: any,
      x2: any,
      y2: any,
      width: any,
      color?: any
    ): void;
    x(x: any, y: any, size: any): void;
    polygon(polygonVertices: any, offset: any, count: any, color?: any): void;
    circle(
      filled: any,
      x: any,
      y: any,
      radius: any,
      color?: any,
      segments?: number
    ): void;
    curve(
      x1: any,
      y1: any,
      cx1: any,
      cy1: any,
      cx2: any,
      cy2: any,
      x2: any,
      y2: any,
      segments: any,
      color?: any
    ): void;
    vertex(x: any, y: any, color: any): void;
    end(): void;
    flush(): void;
    check(shapeType: any, numVertices: any): void;
    getDrawCalls(): number;
    dispose(): void;
  }
  export namespace ShapeRenderer {
    let totalDrawCalls: number;
  }
  import Utils_1 = require("gdxts/dist/lib/Utils");
  import Vector2_1 = require("gdxts/dist/lib/Vector2");
  import Mesh_1 = require("gdxts/dist/lib/Mesh");
  import Shader_1 = require("gdxts/dist/lib/Shader");
}
declare module "gdxts/dist/lib/Sprite" {
  export const __esModule: boolean;
  /**
   * An unoptimized version of Sprite. Always calculate all vertices, never update partially. Will improve later after refactoring the SpriteBatch.
   */
  export class Sprite {
    constructor(region: any, useMultiBatch?: boolean, twoColorTint?: boolean);
    region: any;
    useMultiBatch: boolean;
    twoColorTint: boolean;
    dirty: boolean;
    position: Vector2_1.Vector2;
    size: Vector2_1.Vector2;
    origin: Vector2_1.Vector2;
    scale: Vector2_1.Vector2;
    color: Utils_1.Color;
    rotation: number;
    bounds: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    flipX: boolean;
    flipY: boolean;
    vertices: Float32Array<ArrayBuffer>;
    set(sprite: any): void;
    setBounds(x: any, y: any, width: any, height: any): void;
    setSize(width: any, height: any): void;
    setPosition(x: any, y: any): void;
    setOriginBasedPosition(x: any, y: any): void;
    setX(x: any): void;
    setY(y: any): void;
    /** Sets the x position so that it is centered on the given x parameter */
    setCenterX(x: any): void;
    /** Sets the y position so that it is centered on the given y parameter */
    setCenterY(y: any): void;
    /** Sets the position so that the sprite is centered on (x, y) */
    setCenter(x: any, y: any): void;
    /** Sets the x position relative to the current position where the sprite will be drawn. If origin, rotation, or scale are
     * changed, it is slightly more efficient to translate after those operations. */
    translateX(xAmount: any): void;
    /** Sets the y position relative to the current position where the sprite will be drawn. If origin, rotation, or scale are
     * changed, it is slightly more efficient to translate after those operations. */
    translateY(yAmount: any): void;
    translate(xAmount: any, yAmount: any): void;
    /** Sets the color used to tint this sprite. Default is {@link Color#WHITE}. */
    setColor(tint: any): void;
    /** Sets the alpha portion of the color used to tint this sprite. */
    setAlpha(a: any): void;
    /** Sets the origin in relation to the sprite's position for scaling and rotation. */
    setOrigin(originX: any, originY: any): void;
    /** Place origin in the center of the sprite */
    setOriginCenter(): void;
    setRotation(rad: any): void;
    getRotation(): number;
    rotate(rad: any): void;
    /** Sets the sprite's scale for both X and Y. The sprite scales out from the origin. This will not affect the values returned
     * by {@link #getWidth()} and {@link #getHeight()} */
    setScale(scaleX: any, scaleY: any): void;
    setScaleXY(scale: any): void;
    /** Sets the sprite's scale relative to the current scale. for example: original scale 2 -> sprite.scale(4) -> final scale 6.
     * The sprite scales out from the origin. This will not affect the values returned by {@link #getWidth()} and
     * {@link #getHeight()} */
    applyScale(amount: any): void;
    /** Returns the packed vertices, colors, and texture coordinates for this sprite. */
    getVertices(yDown?: boolean): Float32Array<ArrayBuffer>;
    /** Returns the bounding axis aligned {@link Rectangle} that bounds this sprite. The rectangles x and y coordinates describe
     * its bottom left corner. If you change the position or size of the sprite, you have to fetch the triangle again for it to be
     * recomputed.
     *
     * @return the bounding Rectangle */
    getBoundingRectangle(): {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    draw(batch: any): void;
    drawWithAlpha(batch: any, alphaModulation: any): void;
    getX(): number;
    getY(): number;
    /** @return the width of the sprite, not accounting for scale. */
    getWidth(): number;
    /** @return the height of the sprite, not accounting for scale. */
    getHeight(): number;
    /** The origin influences {@link #setPosition(float, float)}, {@link #setRotation(float)} and the expansion direction of
     * scaling {@link #setScale(float, float)} */
    getOriginX(): number;
    /** The origin influences {@link #setPosition(float, float)}, {@link #setRotation(float)} and the expansion direction of
     * scaling {@link #setScale(float, float)} */
    getOriginY(): number;
    /** X scale of the sprite, independent of size set by {@link #setSize(float, float)} */
    getScaleX(): number;
    /** Y scale of the sprite, independent of size set by {@link #setSize(float, float)} */
    getScaleY(): number;
    /** Returns the color of this sprite. If the returned instance is manipulated, {@link #setColor(Color)} must be called
     * afterward. */
    getColor(): Utils_1.Color;
    isFlipX(): boolean;
    isFlipY(): boolean;
    /** Set the sprite's flip state regardless of current condition
     * @param x the desired horizontal flip state
     * @param y the desired vertical flip state */
    setFlip(x: any, y: any): void;
    /** boolean parameters x,y are not setting a state, but performing a flip
     * @param x perform horizontal flip
     * @param y perform vertical flip */
    flip(x: any, y: any): void;
  }
  export namespace Sprite {
    let USE_MULTI_BATCH: boolean;
  }
  import Vector2_1 = require("gdxts/dist/lib/Vector2");
  import Utils_1 = require("gdxts/dist/lib/Utils");
}
declare module "gdxts/dist/lib/StringBufferedReader" {
  export const __esModule: boolean;
  export class StringBufferedReader {
    constructor(content: any);
    lines: any;
    index: number;
    currentLine(): any;
    readLine(): any;
  }
}
declare module "gdxts/dist/lib/Texture" {
  export const __esModule: boolean;
  export const TextureFilter: {};
  export const TextureWrap: {};
  export namespace DEFAULT_TEXTURE_OPTIONS {
    let minFilter: any;
    let magFilter: any;
    let wrapS: any;
    let wrapT: any;
    let generateMipmaps: boolean;
    let crossOrigin: boolean;
  }
  export class ImageSource {
    constructor(width: any, height: any, data: any);
    width: any;
    height: any;
    data: any;
  }
  export class Texture {
    static createWhiteTexture(gl: any): Texture;
    static load(gl: any, url: any, options: any): Promise<any>;
    static validateMagFilter(magFilter: any): any;
    constructor(context: any, image: any, options: any);
    getImage(): any;
    texture: any;
    boundUnit: number;
    useMipMaps: any;
    width: any;
    height: any;
    minFilter: any;
    magFilter: any;
    _image: any;
    context: any;
    getWebGLTexture(): any;
    setFilters(minFilter: any, magFilter: any): void;
    setWraps(uWrap: any, vWrap: any): void;
    update(useMipMaps: any): void;
    restore(): void;
    bind(unit?: number): void;
    unbind(): void;
    dispose(): void;
  }
  export namespace Texture {
    let DISABLE_UNPACK_PREMULTIPLIED_ALPHA_WEBGL: boolean;
  }
}
declare module "gdxts/dist/lib/TextureAtlas" {
  export const __esModule: boolean;
  export class TextureAtlas {
    static load(gl: any, packFileUrl: any, options: any): any;
    constructor(pages: any, regions: any);
    pages: any;
    regions: any;
    dispose(): void;
    getPages(): any;
    getRegions(): any;
    findRegion(name: any, index: any): any;
    findRegions(name: any): any;
  }
}
declare module "gdxts/dist/lib/TextureRegion" {
  export const __esModule: boolean;
  export class TextureRegion {
    static splitTexture(
      texture: any,
      cols: any,
      rows: any,
      padding: any
    ): TextureRegion[];
    constructor(
      tex: any,
      x: any,
      y: any,
      width: any,
      height: any,
      extraData: any,
      invTexWidth: any,
      invTexHeight: any,
      rotate?: boolean
    );
    name: any;
    index: number;
    texture: any;
    regionX: any;
    regionY: any;
    width: any;
    height: any;
    invTexWidth: number;
    invTexHeight: number;
    originalWidth: any;
    originalHeight: any;
    offsetX: number;
    offsetY: number;
    u: number;
    v: number;
    u2: number;
    v2: number;
    rotated: boolean;
    tmpTransform: Affine2_1.Affine2;
    draw(
      batch: any,
      x: any,
      y: any,
      width: any,
      height: any,
      originX?: number,
      originY?: number,
      rotation?: number,
      scaleX?: number,
      scaleY?: number
    ): void;
    drawTransformed(batch: any, width: any, height: any, transform: any): void;
  }
  import Affine2_1 = require("gdxts/dist/lib/Affine2");
}
declare module "gdxts/dist/lib/Utils" {
  export const __esModule: boolean;
  export function getFilenameAndExtension(pathfilename: any): any[];
  export function concatAndResolveUrl(url: any, concat: any): string;
  export class Align {
    static isLeft(align: any): boolean;
    static isRight(align: any): boolean;
    static isTop(align: any): boolean;
    static isBottom(align: any): boolean;
    static isCenterVertical(align: any): boolean;
    static isCenterHorizontal(align: any): boolean;
  }
  export namespace Align {
    let center: number;
    let top: number;
    let bottom: number;
    let left: number;
    let right: number;
    let topLeft: number;
    let topRight: number;
    let bottomLeft: number;
    let bottomRight: number;
  }
  export class IntSet {
    array: any[];
    add(value: any): boolean;
    contains(value: any): boolean;
    remove(value: any): void;
    clear(): void;
  }
  export class StringSet {
    entries: {};
    size: number;
    add(value: any): boolean;
    addAll(values: any): boolean;
    contains(value: any): any;
    clear(): void;
  }
  export class Color {
    static rgba8888ToColor(color: any, value: any): void;
    static rgb888ToColor(color: any, value: any): void;
    static fromString(hex: any): Color;
    constructor(r?: number, g?: number, b?: number, a?: number);
    r: number;
    g: number;
    b: number;
    a: number;
    unsafeSet(r: any, g: any, b: any, a: any): void;
    set(r: any, g: any, b: any, a: any): this;
    setFromColor(c: any): this;
    setFromString(hex: any): this;
    add(r: any, g: any, b: any, a: any): this;
    clamp(): this;
    lerp(target: any, t: any): this;
    mul(r: any, g: any, b: any, a: any): this;
    toIntBits(): number;
    equals(other: any): boolean;
  }
  export namespace Color {
    let WHITE: Color;
    let RED: Color;
    let GREEN: Color;
    let BLUE: Color;
    let MAGENTA: Color;
  }
  export class MathUtils {
    static clamp(value: any, min: any, max: any): any;
    static cosDeg(degrees: any): number;
    static sinDeg(degrees: any): number;
    static signum(value: any): 1 | 0 | -1;
    static toInt(x: any): number;
    static cbrt(x: any): number;
    static randomTriangular(min: any, max: any): any;
    static randomTriangularWith(min: any, max: any, mode: any): any;
    static isPowerOfTwo(value: any): boolean;
    static isEqual(a: any, b: any): boolean;
    static isZero(value: any): boolean;
  }
  export namespace MathUtils {
    export let FLOAT_ROUNDING_ERROR: number;
    export let PI: number;
    export let PI2: number;
    export let radiansToDegrees: number;
    import radDeg = radiansToDegrees;
    export { radDeg };
    export let degreesToRadians: number;
    import degRad = degreesToRadians;
    export { degRad };
  }
  export class Interpolation {
    apply(start: any, end: any, a: any): any;
  }
  export class Pow extends Interpolation {
    constructor(power: any);
    power: any;
    applyInternal(a: any): number;
  }
  export class PowOut extends Pow {}
  export class Utils {
    static arrayCopy(
      source: any,
      sourceStart: any,
      dest: any,
      destStart: any,
      numElements: any
    ): void;
    static arrayFill(
      array: any,
      fromIndex: any,
      toIndex: any,
      value: any
    ): void;
    static setArraySize(array: any, size: any, value?: number): any;
    static ensureArrayCapacity(array: any, size: any, value?: number): any;
    static newArray(size: any, defaultValue: any): any[];
    static newFloatArray(size: any): any[] | Float32Array<any>;
    static newShortArray(size: any): any[] | Int16Array<any>;
    static toFloatArray(array: any): any;
    static toSinglePrecision(value: any): any;
    static contains(array: any, element: any, identity?: boolean): boolean;
    static enumValue(type: any, name: any): any;
    static getHashCodeOfString(s: any): number;
  }
  export namespace Utils {
    let SUPPORTS_TYPED_ARRAYS: boolean;
  }
  export class Pool {
    constructor(instantiator: any);
    items: any[];
    instantiator: any;
    obtain(): any;
    free(item: any): void;
    freeAll(items: any): void;
    clear(): void;
  }
  export class FlushablePool extends Pool {
    obtained: any[];
    flush(): void;
  }
  export class Pools {
    static free(name: any, object: any): void;
    static freeAll(name: any, objects: any): void;
    static get(name: any, instantiator: any): any;
    static set(name: any, pool: any): void;
    static obtain(name: any, instantiator: any): any;
  }
  export namespace Pools {
    let pools: {};
  }
  export class TimeKeeper {
    maxDelta: number;
    framesPerSecond: number;
    delta: number;
    totalTime: number;
    lastTime: number;
    frameCount: number;
    frameTime: number;
    update(): void;
  }
  export class WindowedMean {
    constructor(windowSize?: number);
    addedValues: number;
    lastValue: number;
    mean: number;
    dirty: boolean;
    values: any[];
    hasEnoughData(): boolean;
    addValue(value: any): void;
    getMean(): number;
  }
  export function createGameLoop(update: any): {
    isRunning: () => boolean;
    start: () => void;
    stop: () => void;
    getFps: () => number;
  };
  export function resizeCanvas(canvas: any, deviceRatio: any): number[];
  export function pointInRect(
    pX: any,
    pY: any,
    x: any,
    y: any,
    width: any,
    height: any
  ): boolean;
  export function createStage(options: any): {
    getCanvas: () => HTMLCanvasElement;
    getInfo: () => HTMLDivElement;
    show: () => string;
    hide: () => string;
    cleanup: () => HTMLDivElement;
  };
  export function copyArray(
    src: any,
    target: any,
    targetOffset?: number,
    srcOffset?: number,
    count?: any
  ): void;
  export class ArrayMap {
    keys: any[];
    values: any[];
    size: number;
    set(key: any, value: any): number;
    get(key: any, defaultValue?: any): any;
    indexOfKey(key: any): number;
    removeKey(key: any): void;
    removeIndex(index: any): void;
    clear(): void;
  }
}
declare module "gdxts/dist/lib/Vector2" {
  export const __esModule: boolean;
  export class Vector2 {
    constructor(x?: number, y?: number);
    x: number;
    y: number;
    getX(): number;
    getY(): number;
    set(x: any, y: any): this;
    setVector(v: any): this;
    add(x: any, y: any): this;
    addVector(v: any): this;
    sub(x: any, y: any): this;
    subVector(v: any): this;
    scale(scalar: any): this;
    dot(v: any): number;
    distanceSqr(v: any): number;
    distance(v: any): number;
    angle(): number;
    len2(): number;
    len(): number;
    nor(): this;
    rotateRad(rad: any): this;
    rotate(degrees: any): this;
    cpy(): Vector2;
    mul(mat: any): this;
    lerp(target: any, alpha: any): this;
  }
}
declare module "gdxts/dist/lib/Vector3" {
  export const __esModule: boolean;
  export class Vector3 {
    constructor(x?: number, y?: number, z?: number);
    x: number;
    y: number;
    z: number;
    isZero(): boolean;
    dst2(point: any): number;
    setFrom(v: any): this;
    set(x: any, y: any, z: any): this;
    add(v: any): this;
    sub(v: any): this;
    scale(s: any): this;
    normalize(): this;
    cross(v: any): this;
    multiply(matrix: any): this;
    multiplyMat3(matrix: any): this;
    project(matrix: any): this;
    unproject(
      output: any,
      invMatrix: any,
      viewX: any,
      viewY: any,
      viewWidth: any,
      viewHeight: any
    ): any;
    dot(v: any): number;
    dotWithValue(x: any, y: any, z: any): number;
    rotate(axis: any, degrees: any): this;
    length(): number;
    length2(): number;
    distance(v: any): number;
    lerp(target: any, alpha: any): this;
    equals(other: any): boolean;
  }
  export namespace Vector3 {
    let X: Vector3;
    let Y: Vector3;
    let Z: Vector3;
    let Zero: Vector3;
    let tmpMat: Matrix4_1.Matrix4;
  }
  import Matrix4_1 = require("gdxts/dist/lib/Matrix4");
}
declare module "gdxts/dist/lib/Viewport" {
  export const __esModule: boolean;
  export function createViewport(
    canvas: any,
    width: any,
    height: any,
    options: any
  ): {
    addUpdateListener(listener: any): void;
    getViewportInfo(): {
      pixelRatio: any;
      x: number;
      y: number;
      offsetX: number;
      offsetY: number;
      width: any;
      height: any;
      worldWidth: any;
      worldHeight: any;
    };
    getCamera(): Camera_1.OrthoCamera;
    addCamera(camera: any): void;
    getContext(): any;
    getCanvas(): any;
    update(): void;
    cleanUp(): void;
  };
  import Camera_1 = require("gdxts/dist/lib/Camera");
}
declare module "gdxts/dist/lib/ViewportInputHandler" {
  export const __esModule: boolean;
  export class ViewportInputHandler {
    constructor(viewport: any);
    screenCoord: Vector2_1.Vector2;
    worldCoord: Vector2_1.Vector2;
    viewport: any;
    canvas: any;
    inputHandler: InputHandler_1.InputHandler;
    isTouched(): boolean;
    cleanup(): void;
    addEventListener(event: any, listener: any): void;
    getX(index?: number): number;
    getY(index?: number): number;
    getTouchedWorldCoord(camera: any): Vector2_1.Vector2;
    getTotalTouched(): InputHandler_1.TouchData[];
  }
  import Vector2_1 = require("gdxts/dist/lib/Vector2");
  import InputHandler_1 = require("gdxts/dist/lib/InputHandler");
}
declare module "gdxts/dist/lib/index" {
  export const __esModule: boolean;
}
declare module "gdxts/dist/lib/3d/DefaultRenderableSorter" {
  export const __esModule: boolean;
  export class DefaultRenderableSorter {
    tmpV1: Vector3_1.Vector3;
    tmpV2: Vector3_1.Vector3;
    sort(camera: any, renderables: any): void;
    camera: any;
    getTranslation(worldTransform: any, center: any, output: any): any;
    compare(o1: any, o2: any): number;
  }
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
}
declare module "gdxts/dist/lib/3d/DefaultShaderProvider" {
  export const __esModule: boolean;
  export class DefaultShaderProvider {
    constructor(
      gl: any,
      config?: any,
      vertexShader?: string,
      fragmentShader?: string
    );
    gl: any;
    shaders: any[];
    config: any;
    dispose(): void;
    getShader(renderable: any): any;
    createShader(gl: any, renderable: any): DefaultShader_1.DefaultShader;
  }
  import DefaultShader_1 = require("gdxts/dist/lib/3d/shaders/DefaultShader");
}
declare module "gdxts/dist/lib/3d/DefaultTextureBinder" {
  export const __esModule: boolean;
  export class DefaultTextureBinder {
    static getMaxTextureUnits(): any;
    constructor(gl: any, method: any, offset?: number, count?: number);
    reuseCount: number;
    bindCount: number;
    currentTexture: number;
    method: any;
    offset: number;
    count: number;
    textures: any[];
    unitsLRU: any[];
    begin(): void;
    end(): void;
    bindTexture(texture: any, rebind?: boolean): any;
    reused: boolean;
    bindTextureRoundRobin(texture: any): number;
    bindTextureLRU(texture: any): any;
    getBindCount(): number;
    getReuseCount(): number;
    resetCounts(): void;
  }
  export namespace DefaultTextureBinder {
    let ROUNDROBIN: number;
    let LRU: number;
    let MAX_GLES_UNITS: number;
  }
}
declare module "gdxts/dist/lib/3d/GL20" {
  export const __esModule: boolean;
  export class GL20 {}
  export namespace GL20 {
    let GL_ES_VERSION_2_0: number;
    let GL_DEPTH_BUFFER_BIT: number;
    let GL_STENCIL_BUFFER_BIT: number;
    let GL_COLOR_BUFFER_BIT: number;
    let GL_FALSE: number;
    let GL_TRUE: number;
    let GL_POINTS: number;
    let GL_LINES: number;
    let GL_LINE_LOOP: number;
    let GL_LINE_STRIP: number;
    let GL_TRIANGLES: number;
    let GL_TRIANGLE_STRIP: number;
    let GL_TRIANGLE_FAN: number;
    let GL_ZERO: number;
    let GL_ONE: number;
    let GL_SRC_COLOR: number;
    let GL_ONE_MINUS_SRC_COLOR: number;
    let GL_SRC_ALPHA: number;
    let GL_ONE_MINUS_SRC_ALPHA: number;
    let GL_DST_ALPHA: number;
    let GL_ONE_MINUS_DST_ALPHA: number;
    let GL_DST_COLOR: number;
    let GL_ONE_MINUS_DST_COLOR: number;
    let GL_SRC_ALPHA_SATURATE: number;
    let GL_FUNC_ADD: number;
    let GL_BLEND_EQUATION: number;
    let GL_BLEND_EQUATION_RGB: number;
    let GL_BLEND_EQUATION_ALPHA: number;
    let GL_FUNC_SUBTRACT: number;
    let GL_FUNC_REVERSE_SUBTRACT: number;
    let GL_BLEND_DST_RGB: number;
    let GL_BLEND_SRC_RGB: number;
    let GL_BLEND_DST_ALPHA: number;
    let GL_BLEND_SRC_ALPHA: number;
    let GL_CONSTANT_COLOR: number;
    let GL_ONE_MINUS_CONSTANT_COLOR: number;
    let GL_CONSTANT_ALPHA: number;
    let GL_ONE_MINUS_CONSTANT_ALPHA: number;
    let GL_BLEND_COLOR: number;
    let GL_ARRAY_BUFFER: number;
    let GL_ELEMENT_ARRAY_BUFFER: number;
    let GL_ARRAY_BUFFER_BINDING: number;
    let GL_ELEMENT_ARRAY_BUFFER_BINDING: number;
    let GL_STREAM_DRAW: number;
    let GL_STATIC_DRAW: number;
    let GL_DYNAMIC_DRAW: number;
    let GL_BUFFER_SIZE: number;
    let GL_BUFFER_USAGE: number;
    let GL_CURRENT_VERTEX_ATTRIB: number;
    let GL_FRONT: number;
    let GL_BACK: number;
    let GL_FRONT_AND_BACK: number;
    let GL_TEXTURE_2D: number;
    let GL_CULL_FACE: number;
    let GL_BLEND: number;
    let GL_DITHER: number;
    let GL_STENCIL_TEST: number;
    let GL_DEPTH_TEST: number;
    let GL_SCISSOR_TEST: number;
    let GL_POLYGON_OFFSET_FILL: number;
    let GL_SAMPLE_ALPHA_TO_COVERAGE: number;
    let GL_SAMPLE_COVERAGE: number;
    let GL_NO_ERROR: number;
    let GL_INVALID_ENUM: number;
    let GL_INVALID_VALUE: number;
    let GL_INVALID_OPERATION: number;
    let GL_OUT_OF_MEMORY: number;
    let GL_CW: number;
    let GL_CCW: number;
    let GL_LINE_WIDTH: number;
    let GL_ALIASED_POINT_SIZE_RANGE: number;
    let GL_ALIASED_LINE_WIDTH_RANGE: number;
    let GL_CULL_FACE_MODE: number;
    let GL_FRONT_FACE: number;
    let GL_DEPTH_RANGE: number;
    let GL_DEPTH_WRITEMASK: number;
    let GL_DEPTH_CLEAR_VALUE: number;
    let GL_DEPTH_FUNC: number;
    let GL_STENCIL_CLEAR_VALUE: number;
    let GL_STENCIL_FUNC: number;
    let GL_STENCIL_FAIL: number;
    let GL_STENCIL_PASS_DEPTH_FAIL: number;
    let GL_STENCIL_PASS_DEPTH_PASS: number;
    let GL_STENCIL_REF: number;
    let GL_STENCIL_VALUE_MASK: number;
    let GL_STENCIL_WRITEMASK: number;
    let GL_STENCIL_BACK_FUNC: number;
    let GL_STENCIL_BACK_FAIL: number;
    let GL_STENCIL_BACK_PASS_DEPTH_FAIL: number;
    let GL_STENCIL_BACK_PASS_DEPTH_PASS: number;
    let GL_STENCIL_BACK_REF: number;
    let GL_STENCIL_BACK_VALUE_MASK: number;
    let GL_STENCIL_BACK_WRITEMASK: number;
    let GL_VIEWPORT: number;
    let GL_SCISSOR_BOX: number;
    let GL_COLOR_CLEAR_VALUE: number;
    let GL_COLOR_WRITEMASK: number;
    let GL_UNPACK_ALIGNMENT: number;
    let GL_PACK_ALIGNMENT: number;
    let GL_MAX_TEXTURE_SIZE: number;
    let GL_MAX_TEXTURE_UNITS: number;
    let GL_MAX_VIEWPORT_DIMS: number;
    let GL_SUBPIXEL_BITS: number;
    let GL_RED_BITS: number;
    let GL_GREEN_BITS: number;
    let GL_BLUE_BITS: number;
    let GL_ALPHA_BITS: number;
    let GL_DEPTH_BITS: number;
    let GL_STENCIL_BITS: number;
    let GL_POLYGON_OFFSET_UNITS: number;
    let GL_POLYGON_OFFSET_FACTOR: number;
    let GL_TEXTURE_BINDING_2D: number;
    let GL_SAMPLE_BUFFERS: number;
    let GL_SAMPLES: number;
    let GL_SAMPLE_COVERAGE_VALUE: number;
    let GL_SAMPLE_COVERAGE_INVERT: number;
    let GL_NUM_COMPRESSED_TEXTURE_FORMATS: number;
    let GL_COMPRESSED_TEXTURE_FORMATS: number;
    let GL_DONT_CARE: number;
    let GL_FASTEST: number;
    let GL_NICEST: number;
    let GL_GENERATE_MIPMAP: number;
    let GL_GENERATE_MIPMAP_HINT: number;
    let GL_BYTE: number;
    let GL_UNSIGNED_BYTE: number;
    let GL_SHORT: number;
    let GL_UNSIGNED_SHORT: number;
    let GL_INT: number;
    let GL_UNSIGNED_INT: number;
    let GL_FLOAT: number;
    let GL_FIXED: number;
    let GL_DEPTH_COMPONENT: number;
    let GL_ALPHA: number;
    let GL_RGB: number;
    let GL_RGBA: number;
    let GL_LUMINANCE: number;
    let GL_LUMINANCE_ALPHA: number;
    let GL_UNSIGNED_SHORT_4_4_4_4: number;
    let GL_UNSIGNED_SHORT_5_5_5_1: number;
    let GL_UNSIGNED_SHORT_5_6_5: number;
    let GL_FRAGMENT_SHADER: number;
    let GL_VERTEX_SHADER: number;
    let GL_MAX_VERTEX_ATTRIBS: number;
    let GL_MAX_VERTEX_UNIFORM_VECTORS: number;
    let GL_MAX_VARYING_VECTORS: number;
    let GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
    let GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
    let GL_MAX_TEXTURE_IMAGE_UNITS: number;
    let GL_MAX_FRAGMENT_UNIFORM_VECTORS: number;
    let GL_SHADER_TYPE: number;
    let GL_DELETE_STATUS: number;
    let GL_LINK_STATUS: number;
    let GL_VALIDATE_STATUS: number;
    let GL_ATTACHED_SHADERS: number;
    let GL_ACTIVE_UNIFORMS: number;
    let GL_ACTIVE_UNIFORM_MAX_LENGTH: number;
    let GL_ACTIVE_ATTRIBUTES: number;
    let GL_ACTIVE_ATTRIBUTE_MAX_LENGTH: number;
    let GL_SHADING_LANGUAGE_VERSION: number;
    let GL_CURRENT_PROGRAM: number;
    let GL_NEVER: number;
    let GL_LESS: number;
    let GL_EQUAL: number;
    let GL_LEQUAL: number;
    let GL_GREATER: number;
    let GL_NOTEQUAL: number;
    let GL_GEQUAL: number;
    let GL_ALWAYS: number;
    let GL_KEEP: number;
    let GL_REPLACE: number;
    let GL_INCR: number;
    let GL_DECR: number;
    let GL_INVERT: number;
    let GL_INCR_WRAP: number;
    let GL_DECR_WRAP: number;
    let GL_VENDOR: number;
    let GL_RENDERER: number;
    let GL_VERSION: number;
    let GL_EXTENSIONS: number;
    let GL_NEAREST: number;
    let GL_LINEAR: number;
    let GL_NEAREST_MIPMAP_NEAREST: number;
    let GL_LINEAR_MIPMAP_NEAREST: number;
    let GL_NEAREST_MIPMAP_LINEAR: number;
    let GL_LINEAR_MIPMAP_LINEAR: number;
    let GL_TEXTURE_MAG_FILTER: number;
    let GL_TEXTURE_MIN_FILTER: number;
    let GL_TEXTURE_WRAP_S: number;
    let GL_TEXTURE_WRAP_T: number;
    let GL_TEXTURE: number;
    let GL_TEXTURE_CUBE_MAP: number;
    let GL_TEXTURE_BINDING_CUBE_MAP: number;
    let GL_TEXTURE_CUBE_MAP_POSITIVE_X: number;
    let GL_TEXTURE_CUBE_MAP_NEGATIVE_X: number;
    let GL_TEXTURE_CUBE_MAP_POSITIVE_Y: number;
    let GL_TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
    let GL_TEXTURE_CUBE_MAP_POSITIVE_Z: number;
    let GL_TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
    let GL_MAX_CUBE_MAP_TEXTURE_SIZE: number;
    let GL_TEXTURE0: number;
    let GL_TEXTURE1: number;
    let GL_TEXTURE2: number;
    let GL_TEXTURE3: number;
    let GL_TEXTURE4: number;
    let GL_TEXTURE5: number;
    let GL_TEXTURE6: number;
    let GL_TEXTURE7: number;
    let GL_TEXTURE8: number;
    let GL_TEXTURE9: number;
    let GL_TEXTURE10: number;
    let GL_TEXTURE11: number;
    let GL_TEXTURE12: number;
    let GL_TEXTURE13: number;
    let GL_TEXTURE14: number;
    let GL_TEXTURE15: number;
    let GL_TEXTURE16: number;
    let GL_TEXTURE17: number;
    let GL_TEXTURE18: number;
    let GL_TEXTURE19: number;
    let GL_TEXTURE20: number;
    let GL_TEXTURE21: number;
    let GL_TEXTURE22: number;
    let GL_TEXTURE23: number;
    let GL_TEXTURE24: number;
    let GL_TEXTURE25: number;
    let GL_TEXTURE26: number;
    let GL_TEXTURE27: number;
    let GL_TEXTURE28: number;
    let GL_TEXTURE29: number;
    let GL_TEXTURE30: number;
    let GL_TEXTURE31: number;
    let GL_ACTIVE_TEXTURE: number;
    let GL_REPEAT: number;
    let GL_CLAMP_TO_EDGE: number;
    let GL_MIRRORED_REPEAT: number;
    let GL_FLOAT_VEC2: number;
    let GL_FLOAT_VEC3: number;
    let GL_FLOAT_VEC4: number;
    let GL_INT_VEC2: number;
    let GL_INT_VEC3: number;
    let GL_INT_VEC4: number;
    let GL_BOOL: number;
    let GL_BOOL_VEC2: number;
    let GL_BOOL_VEC3: number;
    let GL_BOOL_VEC4: number;
    let GL_FLOAT_MAT2: number;
    let GL_FLOAT_MAT3: number;
    let GL_FLOAT_MAT4: number;
    let GL_SAMPLER_2D: number;
    let GL_SAMPLER_CUBE: number;
    let GL_VERTEX_ATTRIB_ARRAY_ENABLED: number;
    let GL_VERTEX_ATTRIB_ARRAY_SIZE: number;
    let GL_VERTEX_ATTRIB_ARRAY_STRIDE: number;
    let GL_VERTEX_ATTRIB_ARRAY_TYPE: number;
    let GL_VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
    let GL_VERTEX_ATTRIB_ARRAY_POINTER: number;
    let GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
    let GL_IMPLEMENTATION_COLOR_READ_TYPE: number;
    let GL_IMPLEMENTATION_COLOR_READ_FORMAT: number;
    let GL_COMPILE_STATUS: number;
    let GL_INFO_LOG_LENGTH: number;
    let GL_SHADER_SOURCE_LENGTH: number;
    let GL_SHADER_COMPILER: number;
    let GL_SHADER_BINARY_FORMATS: number;
    let GL_NUM_SHADER_BINARY_FORMATS: number;
    let GL_LOW_FLOAT: number;
    let GL_MEDIUM_FLOAT: number;
    let GL_HIGH_FLOAT: number;
    let GL_LOW_INT: number;
    let GL_MEDIUM_INT: number;
    let GL_HIGH_INT: number;
    let GL_FRAMEBUFFER: number;
    let GL_RENDERBUFFER: number;
    let GL_RGBA4: number;
    let GL_RGB5_A1: number;
    let GL_RGB565: number;
    let GL_DEPTH_COMPONENT16: number;
    let GL_STENCIL_INDEX: number;
    let GL_STENCIL_INDEX8: number;
    let GL_RENDERBUFFER_WIDTH: number;
    let GL_RENDERBUFFER_HEIGHT: number;
    let GL_RENDERBUFFER_INTERNAL_FORMAT: number;
    let GL_RENDERBUFFER_RED_SIZE: number;
    let GL_RENDERBUFFER_GREEN_SIZE: number;
    let GL_RENDERBUFFER_BLUE_SIZE: number;
    let GL_RENDERBUFFER_ALPHA_SIZE: number;
    let GL_RENDERBUFFER_DEPTH_SIZE: number;
    let GL_RENDERBUFFER_STENCIL_SIZE: number;
    let GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
    let GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
    let GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
    let GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
    let GL_COLOR_ATTACHMENT0: number;
    let GL_DEPTH_ATTACHMENT: number;
    let GL_STENCIL_ATTACHMENT: number;
    let GL_NONE: number;
    let GL_FRAMEBUFFER_COMPLETE: number;
    let GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
    let GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
    let GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
    let GL_FRAMEBUFFER_UNSUPPORTED: number;
    let GL_FRAMEBUFFER_BINDING: number;
    let GL_RENDERBUFFER_BINDING: number;
    let GL_MAX_RENDERBUFFER_SIZE: number;
    let GL_INVALID_FRAMEBUFFER_OPERATION: number;
    let GL_VERTEX_PROGRAM_POINT_SIZE: number;
    let GL_COVERAGE_BUFFER_BIT_NV: number;
    let GL_TEXTURE_MAX_ANISOTROPY_EXT: number;
    let GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
  }
}
declare module "gdxts/dist/lib/3d/Material" {
  export const __esModule: boolean;
  export class Material extends Attributes_1.Attributes {
    constructor(id?: any);
    id: any;
    equals(other: any): boolean;
    copy(): Material;
  }
  export namespace Material {
    let counter: number;
  }
  import Attributes_1 = require("gdxts/dist/lib/3d/attributes/Attributes");
}
declare module "gdxts/dist/lib/3d/Mesh" {
  export const __esModule: boolean;
  export const VertexDataType: {};
  export class Mesh3D {
    static addManagedMesh(mesh: any): void;
    static invalidateAllMeshes(): void;
    static clearAllMeshes(): void;
    static transform(
      matrix: any,
      vertices: any,
      vertexSize: any,
      offset: any,
      dimensions: any,
      start: any,
      count: any
    ): void;
    static transformUV(
      matrix: any,
      vertices: any,
      vertexSize: any,
      offset: any,
      start: any,
      count: any
    ): void;
    constructor(
      gl: any,
      staticVertices: any,
      staticIndices: any,
      maxVertices: any,
      maxIndices: any,
      attributes: any
    );
    Mesh(vertices: any, indices: any, isVertexArray: any): void;
    vertices: VertexBufferObject_1.VertexBufferObject;
    indices: IndexBufferObject_1.IndexBufferObject;
    isVertexArray: boolean;
    gl: any;
    autoBind: boolean;
    isInstanced: boolean;
    tmpV: Vector3_1.Vector3;
    makeVertexBuffer(
      isStatic: any,
      maxVertices: any,
      vertexAttributes: any
    ): VertexBufferObject_1.VertexBufferObject;
    setVertices(vertices: any, offset?: number, count?: number): this;
    updateVertices(
      targetOffset: any,
      source: any,
      sourceOffset?: number,
      count?: number
    ): this;
    getVertices(
      vertices: any,
      srcOffset?: number,
      count?: number,
      destOffset?: number
    ): any;
    setIndices(indices: any, offset?: number, count?: any): this;
    getIndices(srcOffset: any, count: any, indices: any, destOffset: any): void;
    getNumIndices(): number;
    getNumVertices(): number;
    getMaxVertices(): number;
    getMaxIndices(): number;
    getVertexSize(): number;
    setAutoBind(autoBind: any): void;
    bind(shader: any, locations?: any): void;
    unbind(shader: any, locations?: any): void;
    render(
      shader: any,
      primitiveType: any,
      offset?: number,
      count?: number,
      autoBind?: boolean
    ): void;
    dispose(): void;
    getVertexAttribute(usage: any): VertexAttribute_1.VertexAttribute3D;
    getVertexAttributes(): VertexAttributes_1.VertexAttributes;
    getVerticesBuffer(): Float32Array<ArrayBufferLike>;
    calculateBoundingBox(bbox?: any): void;
    extendBoundingBox(out: any, offset: any, count: any, transform: any): any;
    calculateRadiusSquared(
      centerX: any,
      centerY: any,
      centerZ: any,
      offset: any,
      count: any,
      transform: any
    ): number;
    calculateRadius(
      centerX: any,
      centerY: any,
      centerZ: any,
      offset?: number,
      count?: number,
      transform?: any
    ): number;
    getIndicesBuffer(): Uint16Array<ArrayBufferLike>;
    scale(scaleX: any, scaleY: any, scaleZ: any): void;
    transform(matrix: any, start?: number, count?: number): void;
    transformUV(matrix: any, start?: number, count?: number): void;
    copy(isStatic: any, removeDuplicates?: boolean, usage?: any): Mesh3D;
  }
  export namespace Mesh3D {
    let meshes: any[];
  }
  import VertexBufferObject_1 = require("gdxts/dist/lib/3d/utils/VertexBufferObject");
  import IndexBufferObject_1 = require("gdxts/dist/lib/3d/utils/IndexBufferObject");
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
  import VertexAttribute_1 = require("gdxts/dist/lib/3d/attributes/VertexAttribute");
  import VertexAttributes_1 = require("gdxts/dist/lib/3d/attributes/VertexAttributes");
}
declare module "gdxts/dist/lib/3d/ModelBatch" {
  export const __esModule: boolean;
  export class ModelBatch {
    constructor(gl: any, context?: any, sorter?: any);
    dispose(): void;
    camera: any;
    renderablesPool: RenderablePool;
    renderables: any[];
    context: any;
    shaderProvider: DefaultShaderProvider_1.DefaultShaderProvider;
    sorter: any;
    ownContext: boolean;
    begin(cam: any): void;
    setCamera(cam: any): void;
    getCamera(): any;
    ownsRenderContext(): boolean;
    getRenderContext(): any;
    getRenderableSorter(): any;
    flush(): void;
    end(): void;
    renderWithRenderable(renderable: any): void;
    render(renderableProvider: any, environment?: any): void;
  }
  class RenderablePool extends Utils_1.FlushablePool<any> {
    constructor(instantiator: () => any);
  }
  import DefaultShaderProvider_1 = require("gdxts/dist/lib/3d/DefaultShaderProvider");
  import Utils_1 = require("gdxts/dist/lib/Utils");
  export {};
}
declare module "gdxts/dist/lib/3d/ModelInstance" {
  export const __esModule: boolean;
  export class ModelInstance {
    constructor(model: any, transform?: any, rootNodeIds?: any);
    materials: any[];
    nodes: any[];
    animations: any[];
    model: any;
    transform: any;
    copyNodes(nodes: any, nodeIds?: any): void;
    invalidateNode(node: any): void;
    getNode(id: any, recursive?: boolean, ignoreCase?: boolean): Node_1.Node;
    invalidate(): void;
    copyAnimations(source: any, shareKeyframes: any): void;
    copyAnimation(sourceAnim: any, shareKeyframes: any): void;
    getRenderable(out: any, node: any, nodePart: any): any;
    getRenderables(renderables: any, pool: any): void;
    getRenderablesWithNode(node: any, renderables: any, pool: any): void;
    calculateTransforms(): void;
    calculateBoundingBox(out: any): any;
    extendBoundingBox(out: any): any;
    getAnimation(id: any, ignoreCase?: boolean): any;
    getMaterial(id: any, ignoreCase?: boolean): any;
  }
  export namespace ModelInstance {
    let defaultShareKeyframes: boolean;
  }
  import Node_1 = require("gdxts/dist/lib/3d/model/Node");
}
declare module "gdxts/dist/lib/3d/PerspectiveCamera" {
  export const __esModule: boolean;
  export class PerspectiveCamera {
    constructor(fieldOfViewY: any, viewportWidth: any, viewportHeight: any);
    far: number;
    near: number;
    fieldOfView: any;
    viewportWidth: any;
    viewportHeight: any;
    up: Vector3_1.Vector3;
    position: Vector3_1.Vector3;
    direction: Vector3_1.Vector3;
    view: Matrix4_1.Matrix4;
    combined: Matrix4_1.Matrix4;
    projection: Matrix4_1.Matrix4;
    invProjectionView: Matrix4_1.Matrix4;
    frustum: Fustrum_1.Frustum;
    tmp: Vector3_1.Vector3;
    tmpVec: Vector3_1.Vector3;
    update(updateFrustum?: boolean): void;
    lookAt(x: any, y: any, z: any): void;
    normalizeUp(): void;
    translate(vec: any): void;
    rotate(axis: any, angle: any): void;
    rotateAround(point: any, axis: any, angle: any): void;
  }
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
  import Matrix4_1 = require("gdxts/dist/lib/Matrix4");
  import Fustrum_1 = require("gdxts/dist/lib/3d/math/Fustrum");
}
declare module "gdxts/dist/lib/3d/RenderContext" {
  export const __esModule: boolean;
  export class RenderContext {
    constructor(textureBinder: any);
    textureBinder: any;
    gl: WebGLRenderingContext;
    begin(): void;
    depthFunc: any;
    depthMask: any;
    blending: any;
    cullFace: any;
    blendSFactor: any;
    blendDFactor: any;
    end(): void;
    setDepthMask(depthMask: any): void;
    setDepthTest(
      depthFunction: any,
      depthRangeNear: any,
      depthRangeFar: any
    ): void;
    depthRangeNear: any;
    depthRangeFar: any;
    setBlending(enabled: any, sFactor: any, dFactor: any): void;
    setCullFace(face: any): void;
  }
}
declare module "gdxts/dist/lib/3d/Renderable" {
  export const __esModule: boolean;
  export class Renderable {
    worldTransform: Matrix4_1.Matrix4;
    meshPart: MeshPart_1.MeshPart;
    bones: any;
    set(renderable: any): this;
    material: any;
    environment: any;
    shader: any;
  }
  import Matrix4_1 = require("gdxts/dist/lib/Matrix4");
  import MeshPart_1 = require("gdxts/dist/lib/3d/model/MeshPart");
}
declare module "gdxts/dist/lib/3d/index" {
  export const __esModule: boolean;
}
declare module "gdxts/dist/lib/3d/attributes/Attribute" {
  export const __esModule: boolean;
  export class Attribute {
    static getAttributeType(alias: any): number;
    static getAttributeAlias(type: any): any;
    static register(alias: any): number;
    setType(type: any): void;
    type: any;
    typeBit: number;
    hashCode(): number;
    equals(obj: any): boolean;
    numberOfTrailingZeros(i: any): number;
    toString(): any;
    copy(): Attribute;
  }
  export namespace Attribute {
    let types: any[];
  }
}
declare module "gdxts/dist/lib/3d/attributes/Attributes" {
  export const __esModule: boolean;
  export class Attributes {
    attributes: any[];
    sorted: boolean;
    getMask(): number;
    get(type: any): any;
    getArrayAttribute(out: any, type: any): any;
    clear(): void;
    mask: number;
    size(): number;
    enable(mask: any): void;
    disable(mask: any): void;
    set(attribute: any): void;
    getAttributes(): any[];
    setAttributes(attributes: any): void;
    has(type: any): boolean;
    indexOf(type: any): number;
    set2Attributes(attribute1: any, attribute2: any): void;
    set3Attributes(attribute1: any, attribute2: any, attribute3: any): void;
    set4Attributes(
      attribute1: any,
      attribute2: any,
      attribute3: any,
      attribute4: any
    ): void;
    setArrayAttribute(attributes: any): void;
    setAttribute(attribute: any): void;
    remove(mask: any): void;
    compare(arg0: any, arg1: any): number;
    same(other: any, compareValues: any): boolean;
    equals(other: any): boolean;
  }
}
declare module "gdxts/dist/lib/3d/attributes/BlendingAttribute" {
  export const __esModule: boolean;
  export class BlendingAttribute extends Attribute_1.Attribute {
    static is(mask: any): boolean;
    constructor(
      sourceFunc?: number,
      destFunc?: number,
      blended?: boolean,
      opacity?: number
    );
    opacity: number;
    blended: boolean;
    sourceFunction: number;
    destFunction: number;
    set(
      blended?: boolean,
      sourceFunc?: number,
      destFunc?: number,
      opacity?: number
    ): void;
  }
  export namespace BlendingAttribute {
    let Alias: string;
    let Type: number;
  }
  import Attribute_1 = require("gdxts/dist/lib/3d/attributes/Attribute");
}
declare module "gdxts/dist/lib/3d/attributes/ColorAttribute" {
  export const __esModule: boolean;
  export class ColorAttribute3D extends Attribute_1.Attribute {
    static is(mask: any): boolean;
    static createAmbient(color: any): any;
    static createDiffuse(color: any): any;
    static createSpecular(color: any): any;
    static createReflection(color: any): any;
    static createEmissive(color: any): any;
    static createAmbientLight(color: any): any;
    static createFog(color: any): any;
    constructor(type: any, color: any);
    color: Utils_1.Color;
    copy(): any;
  }
  export namespace ColorAttribute3D {
    let DiffuseAlias: string;
    let Diffuse: number;
    let SpecularAlias: string;
    let Specular: number;
    let AmbientAlias: string;
    let Ambient: number;
    let EmissiveAlias: string;
    let Emissive: number;
    let ReflectionAlias: string;
    let Reflection: number;
    let AmbientLightAlias: string;
    let AmbientLight: number;
    let FogAlias: string;
    let Fog: number;
    let Mask: number;
  }
  import Attribute_1 = require("gdxts/dist/lib/3d/attributes/Attribute");
  import Utils_1 = require("gdxts/dist/lib/Utils");
}
declare module "gdxts/dist/lib/3d/attributes/DirectionalLightsAttribute" {
  export const __esModule: boolean;
  export class DirectionalLightsAttribute extends Attribute_1.Attribute {
    static is(mask: any): boolean;
    lights: any[];
    set(copyFrom: any): void;
    copy(): any;
    compareTo(other: any): 1 | 0 | -1;
  }
  export namespace DirectionalLightsAttribute {
    let Alias: string;
    let Type: number;
  }
  import Attribute_1 = require("gdxts/dist/lib/3d/attributes/Attribute");
}
declare module "gdxts/dist/lib/3d/attributes/FloatAttribute" {
  export const __esModule: boolean;
  export class FloatAttribute extends Attribute_1.Attribute {
    static createShininess(value: any): any;
    static createAlphaTest(value: any): any;
    constructor(type: any, value: any);
    value: any;
    copy(): any;
  }
  export namespace FloatAttribute {
    let ShininessAlias: string;
    let Shininess: number;
    let AlphaTestAlias: string;
    let AlphaTest: number;
  }
  import Attribute_1 = require("gdxts/dist/lib/3d/attributes/Attribute");
}
declare module "gdxts/dist/lib/3d/attributes/IntAttribute" {
  export const __esModule: boolean;
  export class IntAttribute extends Attribute_1.Attribute {
    static createCullFace(value: any): any;
    constructor(type: any, value?: number);
    value: number;
    copy(): any;
  }
  export namespace IntAttribute {
    let CullFaceAlias: string;
    let CullFace: number;
  }
  import Attribute_1 = require("gdxts/dist/lib/3d/attributes/Attribute");
}
declare module "gdxts/dist/lib/3d/attributes/PointLightAttribute" {
  export const __esModule: boolean;
  export class PointLightsAttribute extends Attribute_1.Attribute {
    static is(mask: any): boolean;
    lights: any[];
    set(copyFrom: any): void;
    copy(): any;
    compareTo(other: any): 1 | 0 | -1;
  }
  export namespace PointLightsAttribute {
    let Alias: string;
    let Type: number;
  }
  import Attribute_1 = require("gdxts/dist/lib/3d/attributes/Attribute");
}
declare module "gdxts/dist/lib/3d/attributes/SpotLightAttribute" {
  export const __esModule: boolean;
  export class SpotLightsAttribute extends Attribute_1.Attribute {
    static is(mask: any): boolean;
    lights: any[];
    set(copyFrom: any): void;
    copy(): any;
    compareTo(other: any): 1 | 0 | -1;
  }
  export namespace SpotLightsAttribute {
    let Alias: string;
    let Type: number;
  }
  import Attribute_1 = require("gdxts/dist/lib/3d/attributes/Attribute");
}
declare module "gdxts/dist/lib/3d/attributes/TextureAttribute" {
  export const __esModule: boolean;
  export class TextureAttribute extends Attribute_1.Attribute {
    static is(mask: any): boolean;
    static createDiffuse(region: any): any;
    static createSpecular(region: any): any;
    static createNormal(region: any): any;
    static createBump(region: any): any;
    static createAmbient(region: any): any;
    static createEmissive(region: any): any;
    static createReflection(region: any): any;
    constructor(
      type: any,
      offsetU?: number,
      offsetV?: number,
      scaleU?: number,
      scaleV?: number
    );
    offsetU: number;
    offsetV: number;
    scaleU: number;
    scaleV: number;
    uvIndex: number;
    setTextureRegion(region: any): void;
    texture: any;
    setTexture(texture: any): void;
    setOffset(offsetU: any, offsetV: any): void;
    setScale(scaleU: any, scaleV: any): void;
    copy(): any;
  }
  export namespace TextureAttribute {
    let DiffuseAlias: string;
    let Diffuse: number;
    let SpecularAlias: string;
    let Specular: number;
    let BumpAlias: string;
    let Bump: number;
    let NormalAlias: string;
    let Normal: number;
    let AmbientAlias: string;
    let Ambient: number;
    let EmissiveAlias: string;
    let Emissive: number;
    let ReflectionAlias: string;
    let Reflection: number;
    let Mask: number;
  }
  import Attribute_1 = require("gdxts/dist/lib/3d/attributes/Attribute");
}
declare module "gdxts/dist/lib/3d/attributes/VertexAttribute" {
  export const __esModule: boolean;
  export class Usage {}
  export namespace Usage {
    let Position: number;
    let ColorUnpacked: number;
    let ColorPacked: number;
    let Normal: number;
    let TextureCoordinates: number;
    let Generic: number;
    let BoneWeight: number;
    let Tangent: number;
    let BiNormal: number;
  }
  export class VertexAttribute3D {
    static Position(): VertexAttribute3D;
    static TexCoords(unit: any): VertexAttribute3D;
    static Normal(): VertexAttribute3D;
    static ColorPacked(): VertexAttribute3D;
    static ColorUnpacked(): VertexAttribute3D;
    static Tangent(): VertexAttribute3D;
    static Binormal(): VertexAttribute3D;
    static BoneWeight(unit: any): VertexAttribute3D;
    constructor(
      usage: any,
      numComponents: any,
      type: any,
      normalized: any,
      alias: any,
      unit?: number
    );
    usage: any;
    numComponents: any;
    type: any;
    normalized: any;
    alias: any;
    unit: number;
    usageIndex: number;
    copy(): VertexAttribute3D;
    getKey(): number;
    numberOfTrailingZeros(n: any): number;
    getSizeInBytes(): any;
    equals(other: any): boolean;
  }
}
declare module "gdxts/dist/lib/3d/attributes/VertexAttributes" {
  export const __esModule: boolean;
  export class VertexAttributes {
    constructor(attributes: any);
    mask: number;
    attributes: any[];
    vertexSize: number;
    getOffset(usage: any, defaultIfNotFound?: number): number;
    findByUsage(usage: any): any;
    calculateOffsets(): number;
    size(): number;
    get(index: any): any;
    toString(): string;
    equals(other: any): boolean;
    getMask(): number;
    getMaskWithSizePacked(): number;
  }
}
declare module "gdxts/dist/lib/3d/attributes/index" {
  export const __esModule: boolean;
}
declare module "gdxts/dist/lib/3d/environment/AmbientCubemap" {
  export const __esModule: boolean;
  export class AmbientCubemap {
    static clamp(v: any): any;
    constructor(copyFrom?: any);
    data: any[];
    setData(values: any): this;
    setColor(r: any, g: any, b: any): this;
    getColor(out: any, side: any): any;
    clear(): this;
    clamp(): this;
    addColor(r: any, g: any, b: any): this;
    add(r: any, g: any, b: any, x: any, y: any, z: any): this;
    addWithColorAndDirection(color: any, direction: any): this;
    addWithPointTarget(color: any, point: any, target: any): this;
    addWithPointTargetIntensity(
      color: any,
      point: any,
      target: any,
      intensity: any
    ): this;
    toString(): string;
  }
  export namespace AmbientCubemap {
    let NUM_VALUES: number;
  }
}
declare module "gdxts/dist/lib/3d/environment/BaseLight" {
  export const __esModule: boolean;
  export class BaseLight {
    color: Utils_1.Color;
    setColor(r: any, g: any, b: any, a: any): this;
  }
  import Utils_1 = require("gdxts/dist/lib/Utils");
}
declare module "gdxts/dist/lib/3d/environment/DirectionalLight" {
  export const __esModule: boolean;
  export class DirectionalLight extends BaseLight_1.BaseLight {
    constructor(...args: any[]);
    direction: Vector3_1.Vector3;
    setDirection(directionX: any, directionY: any, directionZ: any): this;
    setFrom(color: any, direction: any): this;
    set(r: any, g: any, b: any, dirX: any, dirY: any, dirZ: any): this;
    equals(other: any): boolean;
  }
  import BaseLight_1 = require("gdxts/dist/lib/3d/environment/BaseLight");
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
}
declare module "gdxts/dist/lib/3d/environment/Environment" {
  export const __esModule: boolean;
  export class Environment extends Attributes_1.Attributes {
    addLights(lights: any): this;
    addLight(light: any): this;
    addDirectionalLight(light: any): this;
    addPointLight(light: any): this;
    addSpotLight(light: any): this;
    removeLights(lights: any): this;
    removeLight(light: any): this;
    removeDirectionalLight(light: any): this;
    removePointLight(light: any): this;
    removeSpotLight(light: any): this;
  }
  import Attributes_1 = require("gdxts/dist/lib/3d/attributes/Attributes");
}
declare module "gdxts/dist/lib/3d/environment/PointLight" {
  export const __esModule: boolean;
  export class PointLight extends BaseLight_1.BaseLight {
    constructor(...args: any[]);
    position: Vector3_1.Vector3;
    setPosition(positionX: any, positionY: any, positionZ: any): this;
    setIntensity(intensity: any): this;
    intensity: any;
    setFrom(copyFrom: any): this;
    set(color: any, position: any, intensity: any): this;
    setFromValue(
      r: any,
      g: any,
      b: any,
      x: any,
      y: any,
      z: any,
      intensity: any
    ): this;
    equals(other: any): boolean;
  }
  import BaseLight_1 = require("gdxts/dist/lib/3d/environment/BaseLight");
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
}
declare module "gdxts/dist/lib/3d/environment/SpotLight" {
  export const __esModule: boolean;
  export class SpotLight extends BaseLight_1.BaseLight {
    constructor(...args: any[]);
    position: Vector3_1.Vector3;
    direction: Vector3_1.Vector3;
    setPosition(positionX: any, positionY: any, positionZ: any): this;
    setDirection(directionX: any, directionY: any, directionZ: any): this;
    setIntensity(intensity: any): this;
    intensity: any;
    setCutoffAngle(cutoffAngle: any): this;
    cutoffAngle: any;
    setExponent(exponent: any): this;
    exponent: any;
    set(
      color: any,
      position: any,
      direction: any,
      intensity: any,
      cutoffAngle: any,
      exponent: any
    ): this;
    setFromValue(
      r: any,
      g: any,
      b: any,
      posX: any,
      posY: any,
      posZ: any,
      dirX: any,
      dirY: any,
      dirZ: any,
      intensity: any,
      cutoffAngle: any,
      exponent: any
    ): this;
    setFrom(copyFrom: any): this;
    setTarget(target: any): this;
    equals(other: any): boolean;
  }
  import BaseLight_1 = require("gdxts/dist/lib/3d/environment/BaseLight");
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
}
declare module "gdxts/dist/lib/3d/environment/index" {
  export const __esModule: boolean;
}
declare module "gdxts/dist/lib/3d/loader/G3dModelLoader" {
  export const __esModule: boolean;
  export class G3dModelLoader {
    tempQ: Quaternion_1.Quaternion;
    reader: UBJsonReader_1.UBJsonReader;
    load(gl: any, fileName: any): any;
    parseModel(fileName_1: any, ...args: any[]): any;
    parseMeshes(model: any, json: any): void;
    parseType(type: any): number;
    parseAttributes(attributes: any): any[];
    parseMaterials(model: any, json: any, materialDir: any): void;
    parseTextureUsage(value: any): number;
    parseColor(colorArray: any): Utils_1.Color;
    readVector2(vectorArray: any, x: any, y: any): Vector2_1.Vector2;
    parseNodes(model: any, json: any): any;
    parseNodesRecursively(json: any): ModelNode_1.ModelNode;
    parseAnimations(model: any, json: any): void;
    getString(object: any, defValue: any): any;
    getFloat(object: any, defValue: any): any;
  }
  export namespace G3dModelLoader {
    let VERSION_HI: number;
    let VERSION_LO: number;
  }
  import Quaternion_1 = require("gdxts/dist/lib/Quaternion");
  import UBJsonReader_1 = require("gdxts/dist/lib/3d/loader/UBJsonReader");
  import Utils_1 = require("gdxts/dist/lib/Utils");
  import Vector2_1 = require("gdxts/dist/lib/Vector2");
  import ModelNode_1 = require("gdxts/dist/lib/3d/model/data/ModelNode");
}
declare module "gdxts/dist/lib/3d/loader/ObjLoader" {
  export const __esModule: boolean;
  export class ObjMaterial {
    materialName: string;
    build(): ModelMaterial_1.ModelMaterial;
    addTexture(mat: any, texFilename: any, usage: any): void;
    reset(): void;
    ambientColor: any;
    diffuseColor: Utils_1.Color;
    specularColor: Utils_1.Color;
    opacity: number;
    shininess: number;
    alphaTexFilename: any;
    ambientTexFilename: any;
    diffuseTexFilename: any;
    shininessTexFilename: any;
    specularTexFilename: any;
  }
  export class MtlLoader {
    materials: any[];
    /** loads .mtl file */
    load(fileName: any): any;
    parseColor(tokens: any): Utils_1.Color;
    getMaterial(name: any): any;
  }
  export class ObjLoader {
    verts: any[];
    norms: any[];
    uvs: any[];
    groups: any[];
    load(gl: any, fileName: any): any;
    loadModelData(fileName_1: any, ...args: any[]): any;
    setActiveGroup(name: any): any;
    getIndex(index: any, size: any): any;
  }
  export namespace ObjLoader {
    let logWarning: boolean;
  }
  import ModelMaterial_1 = require("gdxts/dist/lib/3d/model/data/ModelMaterial");
  import Utils_1 = require("gdxts/dist/lib/Utils");
}
declare module "gdxts/dist/lib/3d/loader/UBJsonReader" {
  export const __esModule: boolean;
  export class UBJsonReader {
    oldFormat: boolean;
    parse(buffer: any): any;
    parseWithType(input: any, type: any): any;
    parseObject(input: any): {};
    parseSize(
      input: any,
      type: any,
      useIntOnError: any,
      defaultValue: any
    ): any;
    parseArray(input: any): any;
    parseData(input: any, blockType: any): any;
    readUChar(input: any): number;
    parseString(input: any, type: any, sOptional?: boolean): any;
    readUShort(input: any): number;
    readUInt(input: any): number;
    readString(input: any, size: any): any;
  }
  export class BinaryInput {
    constructor(
      data: any,
      strings?: any[],
      index?: number,
      buffer?: DataView<any>
    );
    strings: any[];
    index: number;
    buffer: DataView<any>;
    readByte(): number;
    readUnsignedByte(): number;
    readShort(): number;
    readInt32(): number;
    readLong(): number;
    readInt(optimizePositive: any): number;
    readStringRef(): any;
    readStringWithSize(size: any): string;
    readString(): string;
    readFloat(): number;
    readBoolean(): boolean;
  }
}
declare module "gdxts/dist/lib/3d/loader/index" {
  export const __esModule: boolean;
}
declare module "gdxts/dist/lib/3d/math/Fustrum" {
  export const __esModule: boolean;
  export class Frustum {
    planes: any[];
    planePoints: Vector3_1.Vector3[];
    planePointsArray: any[];
    update(inverseProjectionView: any): void;
    pointInFrustum(point: any): boolean;
    sphereInFrustum(center: any, radius: any): boolean;
    sphereInFrustumWithoutNearFar(center: any, radius: any): boolean;
    boundsInFrustrum(center: any, dimensions: any): boolean;
  }
  export namespace Frustum {
    let clipSpacePlanePoints: Vector3_1.Vector3[];
    let clipSpacePlanePointsArray: any[];
    let tmpV: Vector3_1.Vector3;
  }
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
}
declare module "gdxts/dist/lib/3d/math/Plane" {
  export const __esModule: boolean;
  export const PlaneSide: {};
  export class Plane {
    constructor(normal?: any, d?: number);
    normal: Vector3_1.Vector3;
    d: number;
    set(point1: any, point2: any, point3: any): void;
    setByValue(
      pointX: any,
      pointY: any,
      pointZ: any,
      norX: any,
      norY: any,
      norZ: any
    ): void;
    distance(point: any): number;
    testPoint(x: any, y: any, z: any): any;
    isFrontFacing(direction: any): boolean;
    getNormal(): Vector3_1.Vector3;
    getD(): number;
    setFromPlane(plane: any): void;
    toString(): string;
  }
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
}
declare module "gdxts/dist/lib/3d/math/index" {
  export const __esModule: boolean;
}
declare module "gdxts/dist/lib/3d/model/Animation" {
  export const __esModule: boolean;
  export class Animation3D {
    duration: number;
    nodeAnimations: any[];
  }
}
declare module "gdxts/dist/lib/3d/model/MeshPart" {
  export const __esModule: boolean;
  export class MeshPart {
    constructor(other?: any);
    dispose(): void;
    id: string;
    primitiveType: number;
    offset: number;
    size: number;
    mesh: any;
    center: Vector3_1.Vector3;
    halfExtents: Vector3_1.Vector3;
    radius: number;
    bounds: BoundingBox_1.BoundingBox;
    setByMeshPart(other: any): this;
    set(id: any, mesh: any, offset: any, size: any, type: any): this;
    update(): void;
    equals(other: any): boolean;
    render(shader: any, autoBind: any): void;
  }
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
  import BoundingBox_1 = require("gdxts/dist/lib/BoundingBox");
}
declare module "gdxts/dist/lib/3d/model/Model" {
  export const __esModule: boolean;
  export class Model {
    constructor(gl: any);
    gl: any;
    materials: any[];
    nodes: any[];
    animations: any[];
    meshes: any[];
    meshParts: any[];
    disposables: any[];
    nodePartBones: Map<any, any>;
    load(modelData_1: any, ...args: any[]): any;
    loadAnimations(modelAnimations: any): void;
    loadNodes(modelNodes: any): void;
    loadNode(modelNode: any): Node_1.Node;
    loadMeshes(meshes: any): void;
    convertMesh(modelMesh: any): void;
    loadMaterials(modelMaterials: any, textureProvider: any): any;
    convertMaterial(mtl: any, textureProvider: any): any;
    manageDisposable(disposable: any): void;
    getManagedDisposables(): any[];
    dispose(): void;
    calculateTransforms(): void;
    calculateBoundingBox(out: any): any;
    extendBoundingBox(out: any): any;
    getAnimation(id: any, ignoreCase?: boolean): any;
    getMaterial(id: any, ignoreCase?: boolean): any;
    getNode(id: any, recursive?: boolean, ignoreCase?: boolean): Node_1.Node;
  }
  import Node_1 = require("gdxts/dist/lib/3d/model/Node");
}
declare module "gdxts/dist/lib/3d/model/Node" {
  export const __esModule: boolean;
  export class Node {
    static getNode(nodes: any, id: any, recursive: any, ignoreCase: any): any;
    inheritTransform: boolean;
    isAnimated: boolean;
    translation: Vector3_1.Vector3;
    rotation: Quaternion_1.Quaternion;
    scale: Vector3_1.Vector3;
    localTransform: Matrix4_1.Matrix4;
    globalTransform: Matrix4_1.Matrix4;
    parts: any[];
    parent: any;
    children: any[];
    calculateLocalTransform(): Matrix4_1.Matrix4;
    calculateWorldTransform(): Matrix4_1.Matrix4;
    calculateTransforms(recursive: any): void;
    calculateBoneTransforms(recursive: any): void;
    calculateBoundingBox(out: any, transform?: boolean): any;
    extendBoundingBox(out: any, transform?: boolean): any;
    attachTo(parent: any): void;
    detach(): void;
    hasChildren(): boolean;
    getChildCount(): number;
    getChildByIndex(index: any): any;
    getChild(id: any, recursive: any, ignoreCase: any): any;
    addChild(child: any): any;
    insertChild(index: any, child: any): any;
    removeChild(child: any): boolean;
    getChildren(): any[];
    getParent(): any;
    hasParent(): boolean;
    copy(): Node;
    set(other: any): this;
    id: any;
  }
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
  import Quaternion_1 = require("gdxts/dist/lib/Quaternion");
  import Matrix4_1 = require("gdxts/dist/lib/Matrix4");
}
declare module "gdxts/dist/lib/3d/model/NodeAnimation" {
  export const __esModule: boolean;
  export class NodeAnimation {
    translation: any;
    rotation: any;
    scaling: any;
  }
}
declare module "gdxts/dist/lib/3d/model/NodeKeyframe" {
  export const __esModule: boolean;
  export class NodeKeyframe {
    constructor(t: any, v: any);
    value: any;
    keytime: any;
  }
}
declare module "gdxts/dist/lib/3d/model/NodePart" {
  export const __esModule: boolean;
  export class NodePart {
    constructor(meshPart?: any, material?: any);
    invBoneBindTransforms: Utils_1.ArrayMap<any, any>;
    bones: any[];
    enabled: boolean;
    meshPart: any;
    material: any;
    copy(): NodePart;
    setRenderable(out: any): any;
    set(other: any): this;
  }
  import Utils_1 = require("gdxts/dist/lib/Utils");
}
declare module "gdxts/dist/lib/3d/model/index" {
  export const __esModule: boolean;
}
declare module "gdxts/dist/lib/3d/model/data/ModelAnimation" {
  export const __esModule: boolean;
  export class ModelAnimation {
    nodeAnimations: any[];
  }
}
declare module "gdxts/dist/lib/3d/model/data/ModelData" {
  export const __esModule: boolean;
  export class ModelData {
    version: any[];
    meshes: any[];
    materials: any[];
    nodes: any[];
    animations: any[];
    addMesh(mesh: any): void;
  }
}
declare module "gdxts/dist/lib/3d/model/data/ModelMaterial" {
  export const __esModule: boolean;
  export const MaterialType: {};
  export class ModelMaterial {
    opacity: number;
  }
}
declare module "gdxts/dist/lib/3d/model/data/ModelMesh" {
  export const __esModule: boolean;
  export class ModelMesh {}
}
declare module "gdxts/dist/lib/3d/model/data/ModelMeshPart" {
  export const __esModule: boolean;
  export class ModelMeshPart {}
}
declare module "gdxts/dist/lib/3d/model/data/ModelNode" {
  export const __esModule: boolean;
  export class ModelNode {}
}
declare module "gdxts/dist/lib/3d/model/data/ModelNodeAnimation" {
  export const __esModule: boolean;
  export class ModelNodeAnimation {
    translation: any;
    rotation: any;
    scaling: any;
  }
}
declare module "gdxts/dist/lib/3d/model/data/ModelNodeKeyframe" {
  export const __esModule: boolean;
  export class ModelNodeKeyframe {
    value: any;
  }
}
declare module "gdxts/dist/lib/3d/model/data/ModelNodePart" {
  export const __esModule: boolean;
  export class ModelNodePart {}
}
declare module "gdxts/dist/lib/3d/model/data/ModelTexture" {
  export const __esModule: boolean;
  export class ModelTexture {}
  export namespace ModelTexture {
    let USAGE_UNKNOWN: number;
    let USAGE_NONE: number;
    let USAGE_DIFFUSE: number;
    let USAGE_EMISSIVE: number;
    let USAGE_AMBIENT: number;
    let USAGE_SPECULAR: number;
    let USAGE_SHININESS: number;
    let USAGE_NORMAL: number;
    let USAGE_BUMP: number;
    let USAGE_TRANSPARENCY: number;
    let USAGE_REFLECTION: number;
  }
}
declare module "gdxts/dist/lib/3d/model/data/index" {
  export const __esModule: boolean;
}
declare module "gdxts/dist/lib/3d/shaders/BaseShader" {
  export const __esModule: boolean;
  export class GlobalSetter {
    isGlobal(shader: any, inputID: any): boolean;
  }
  export class LocalSetter {
    isGlobal(shader: any, inputID: any): boolean;
  }
  export class Uniform {
    constructor(
      alias: any,
      materialMask?: number,
      environmentMask?: number,
      overallMask?: number
    );
    alias: any;
    materialMask: number;
    environmentMask: number;
    overallMask: number;
    validate(shader: any, inputID: any, renderable: any): boolean;
  }
  export class BaseShader {
    uniforms: any[];
    validators: any[];
    setters: any[];
    globalUniforms: any[];
    localUniforms: any[];
    attributes: Map<any, any>;
    combinedAttributes: Attributes_1.Attributes;
    tempArray: any[];
    canRender(instance: any): boolean;
    init(): void;
    compareTo(other: any): void;
    register(alias: any, validator?: any, setter?: any): number;
    getUniformID(alias: any): number;
    getUniformAlias(id: any): any;
    initWithVariables(program: any, renderable: any): void;
    program: any;
    locations: any[];
    begin(camera: any, context: any): void;
    camera: any;
    context: any;
    currentMesh: any;
    render(renderable: any): void;
    renderWithCombinedAttributes(
      renderable: any,
      combinedAttributes: any
    ): void;
    getAttributeLocations(attrs: any): any[];
    end(): void;
    dispose(): void;
    has(inputID: any): boolean;
    loc(inputID: any): any;
    setMatrix4(uniform: any, value: any): boolean;
    setMatrix3(uniform: any, value: any): boolean;
    setVector3(uniform: any, value: any): boolean;
    setVector2(uniform: any, value: any): boolean;
    setColor(uniform: any, value: any): boolean;
    setF(uniform: any, value: any): boolean;
    set2f(uniform: any, v1: any, v2: any): boolean;
    set3f(uniform: any, v1: any, v2: any, v3: any): boolean;
    set4f(uniform: any, v1: any, v2: any, v3: any, v4: any): boolean;
    setI(uniform: any, value: any): boolean;
    setTexture(uniform: any, texture: any): boolean;
  }
  import Attributes_1 = require("gdxts/dist/lib/3d/attributes/Attributes");
}
declare module "gdxts/dist/lib/3d/shaders/DefaultShader" {
  export const __esModule: boolean;
  export class Config {
    constructor(vertexShader?: string, fragmentShader?: string);
    vertexShader: string;
    fragmentShader: string;
    numDirectionalLights: number;
    numPointLights: number;
    numSpotLights: number;
    numBones: number;
    ignoreUnimplemented: boolean;
    defaultCullFace: number;
    defaultDepthFunc: number;
  }
  export class ACubemap extends BaseShader_1.LocalSetter {
    constructor(dirLightsOffset: any, pointLightsOffset: any);
    cacheAmbientCubemap: AmbientCubemap_1.AmbientCubemap;
    dirLightsOffset: any;
    pointLightsOffset: any;
    set(
      shader: any,
      inputID: any,
      renderable: any,
      combinedAttributes: any
    ): void;
  }
  export namespace ACubemap {
    let ones: number[];
    let tmpV1: Vector3_1.Vector3;
  }
  export class Bones extends BaseShader_1.LocalSetter {
    constructor(numBones: any);
    bones: any[];
    set(
      shader: any,
      inputID: any,
      renderable: any,
      combinedAttributes: any
    ): void;
  }
  export namespace Bones {
    let idtMatrix: Matrix4_1.Matrix4;
  }
  export class Inputs {}
  export namespace Inputs {
    let projTrans: BaseShader_1.Uniform;
    let viewTrans: BaseShader_1.Uniform;
    let projViewTrans: BaseShader_1.Uniform;
    let cameraPosition: BaseShader_1.Uniform;
    let cameraDirection: BaseShader_1.Uniform;
    let cameraUp: BaseShader_1.Uniform;
    let cameraNearFar: BaseShader_1.Uniform;
    let worldTrans: BaseShader_1.Uniform;
    let viewWorldTrans: BaseShader_1.Uniform;
    let projViewWorldTrans: BaseShader_1.Uniform;
    let normalMatrix: BaseShader_1.Uniform;
    let bones: BaseShader_1.Uniform;
    let shininess: BaseShader_1.Uniform;
    let opacity: BaseShader_1.Uniform;
    let diffuseColor: BaseShader_1.Uniform;
    let diffuseTexture: BaseShader_1.Uniform;
    let diffuseUVTransform: BaseShader_1.Uniform;
    let specularColor: BaseShader_1.Uniform;
    let specularTexture: BaseShader_1.Uniform;
    let specularUVTransform: BaseShader_1.Uniform;
    let emissiveColor: BaseShader_1.Uniform;
    let emissiveTexture: BaseShader_1.Uniform;
    let emissiveUVTransform: BaseShader_1.Uniform;
    let reflectionColor: BaseShader_1.Uniform;
    let reflectionTexture: BaseShader_1.Uniform;
    let reflectionUVTransform: BaseShader_1.Uniform;
    let normalTexture: BaseShader_1.Uniform;
    let normalUVTransform: BaseShader_1.Uniform;
    let ambientTexture: BaseShader_1.Uniform;
    let ambientUVTransform: BaseShader_1.Uniform;
    let alphaTest: BaseShader_1.Uniform;
    let ambientCube: BaseShader_1.Uniform;
    let dirLights: BaseShader_1.Uniform;
    let pointLights: BaseShader_1.Uniform;
    let spotLights: BaseShader_1.Uniform;
    let environmentCubemap: BaseShader_1.Uniform;
  }
  export class Setters {}
  export namespace Setters {
    let projTrans_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { projTrans_1 as projTrans };
    let viewTrans_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { viewTrans_1 as viewTrans };
    let projViewTrans_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { projViewTrans_1 as projViewTrans };
    let cameraPosition_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { cameraPosition_1 as cameraPosition };
    let cameraDirection_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { cameraDirection_1 as cameraDirection };
    let cameraUp_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { cameraUp_1 as cameraUp };
    let cameraNearFar_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { cameraNearFar_1 as cameraNearFar };
    let worldTrans_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { worldTrans_1 as worldTrans };
    let viewWorldTrans_1: {
      temp: Matrix4_1.Matrix4;
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { viewWorldTrans_1 as viewWorldTrans };
    let projViewWorldTrans_1: {
      temp: Matrix4_1.Matrix4;
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { projViewWorldTrans_1 as projViewWorldTrans };
    let normalMatrix_1: {
      tmpM: Matrix3_1.Matrix3;
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { normalMatrix_1 as normalMatrix };
    let shininess_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { shininess_1 as shininess };
    let diffuseColor_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { diffuseColor_1 as diffuseColor };
    let diffuseTexture_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { diffuseTexture_1 as diffuseTexture };
    let diffuseUVTransform_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { diffuseUVTransform_1 as diffuseUVTransform };
    let specularColor_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { specularColor_1 as specularColor };
    let specularTexture_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { specularTexture_1 as specularTexture };
    let specularUVTransform_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { specularUVTransform_1 as specularUVTransform };
    let emissiveColor_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { emissiveColor_1 as emissiveColor };
    let emissiveTexture_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { emissiveTexture_1 as emissiveTexture };
    let emissiveUVTransform_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { emissiveUVTransform_1 as emissiveUVTransform };
    let reflectionColor_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { reflectionColor_1 as reflectionColor };
    let reflectionTexture_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { reflectionTexture_1 as reflectionTexture };
    let reflectionUVTransform_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { reflectionUVTransform_1 as reflectionUVTransform };
    let normalTexture_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { normalTexture_1 as normalTexture };
    let normalUVTransform_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { normalUVTransform_1 as normalUVTransform };
    let ambientTexture_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { ambientTexture_1 as ambientTexture };
    let ambientUVTransform_1: {
      set(
        shader: any,
        inputID: any,
        renderable: any,
        combinedAttributes: any
      ): void;
      isGlobal(shader: BaseShader_1.BaseShader, inputID: number): boolean;
    };
    export { ambientUVTransform_1 as ambientUVTransform };
  }
  export class DefaultShader extends BaseShader_1.BaseShader {
    static and(mask: any, flag: any): boolean;
    static or(mask: any, flag: any): boolean;
    static combineAttributes(renderable: any): Attributes_1.Attributes;
    static combineAttributeMasks(renderable: any): number;
    static createPrefix(renderable: any, config: any): string;
    constructor(
      gl: any,
      renderable: any,
      config?: any,
      prefix?: string,
      vertexShader?: string,
      fragmentShader?: string
    );
    gl: any;
    u_dirLights0color: number;
    u_dirLights0direction: number;
    u_dirLights1color: number;
    u_pointLights0color: number;
    u_pointLights0position: number;
    u_pointLights0intensity: number;
    u_pointLights1color: number;
    u_spotLights0color: number;
    u_spotLights0position: number;
    u_spotLights0intensity: number;
    u_spotLights0direction: number;
    u_spotLights0cutoffAngle: number;
    u_spotLights0exponent: number;
    u_spotLights1color: number;
    u_fogColor: number;
    u_shadowMapProjViewTrans: number;
    u_shadowTexture: number;
    u_shadowPCFOffset: number;
    lightLocs: any[];
    ambientCubemap: AmbientCubemap_1.AmbientCubemap;
    tmpV1: Vector3_1.Vector3;
    createShader(renderable: any, config: any, shaderProgram: any): void;
    config: any;
    lighting: boolean;
    environmentCubemap: boolean;
    shadowMap: boolean;
    renderable: any;
    attributesMask: number;
    vertexMask: any;
    directionalLights: any[];
    pointLights: any[];
    spotLights: any[];
    u_projTrans: number;
    u_viewTrans: number;
    u_projViewTrans: number;
    u_cameraPosition: number;
    u_cameraDirection: number;
    u_cameraUp: number;
    u_cameraNearFar: number;
    u_time: number;
    u_worldTrans: number;
    u_viewWorldTrans: number;
    u_projViewWorldTrans: number;
    u_normalMatrix: number;
    u_bones: number;
    u_shininess: number;
    u_opacity: number;
    u_diffuseColor: number;
    u_diffuseTexture: number;
    u_diffuseUVTransform: number;
    u_specularColor: number;
    u_specularTexture: number;
    u_specularUVTransform: number;
    u_emissiveColor: number;
    u_emissiveTexture: number;
    u_emissiveUVTransform: number;
    u_reflectionColor: number;
    u_reflectionTexture: number;
    u_reflectionUVTransform: number;
    u_normalTexture: number;
    u_normalUVTransform: number;
    u_ambientTexture: number;
    u_ambientUVTransform: number;
    u_alphaTest: number;
    u_ambientCubemap: number;
    dirLightsLoc: number;
    dirLightsColorOffset: number;
    dirLightsDirectionOffset: number;
    dirLightsSize: number;
    pointLightsLoc: number;
    pointLightsColorOffset: number;
    pointLightsPositionOffset: number;
    pointLightsIntensityOffset: number;
    pointLightsSize: number;
    spotLightsLoc: number;
    spotLightsColorOffset: number;
    spotLightsPositionOffset: number;
    spotLightsDirectionOffset: number;
    spotLightsIntensityOffset: number;
    spotLightsCutoffAngleOffset: number;
    spotLightsExponentOffset: number;
    spotLightsSize: number;
    canRender(renderable: any): boolean;
    begin(camera: any, context: any): void;
    lightsSet: boolean;
    renderWithCombinedAttributes(
      renderable: any,
      combinedAttributes: any
    ): void;
    bindMaterial(attributes: any): void;
    bindLights(renderable: any, attributes: any): void;
    getLightLoc(inputID: any): number;
    getDefaultCullFace(): any;
    setDefaultCullFace(cullFace: any): void;
    getDefaultDepthFunc(): any;
    setDefaultDepthFunc(depthFunc: any): void;
  }
  export namespace DefaultShader {
    let defaultVertexShader: string;
    let defaultFragmentShader: string;
    let implementedFlags: number;
    let defaultCullFace: number;
    let defaultDepthFunc: number;
    let optionalAttributes: number;
    let tmpAttributes: Attributes_1.Attributes;
  }
  import BaseShader_1 = require("gdxts/dist/lib/3d/shaders/BaseShader");
  import AmbientCubemap_1 = require("gdxts/dist/lib/3d/environment/AmbientCubemap");
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
  import Matrix4_1 = require("gdxts/dist/lib/Matrix4");
  import Matrix3_1 = require("gdxts/dist/lib/Matrix3");
  import Attributes_1 = require("gdxts/dist/lib/3d/attributes/Attributes");
}
declare module "gdxts/dist/lib/3d/shaders/Shader3D" {
  export const __esModule: boolean;
}
declare module "gdxts/dist/lib/3d/shaders/index" {
  export const __esModule: boolean;
}
declare module "gdxts/dist/lib/3d/utils/AnimationController" {
  export const __esModule: boolean;
  export class AnimationDesc {
    listener: any;
    animation: any;
    speed: number;
    time: number;
    offset: number;
    duration: number;
    loopCount: number;
    update(delta: any): any;
  }
  export class AnimationController extends BaseAnimationController_1.BaseAnimationController {
    constructor(...args: any[]);
    animationPool: Utils_1.Pool<AnimationDesc>;
    current: any;
    queued: any;
    queuedTransitionTime: number;
    previous: any;
    transitionCurrentTime: number;
    transitionTargetTime: number;
    inAction: boolean;
    paused: boolean;
    allowSameAnimation: boolean;
    justChangedAnimation: boolean;
    obtainAnimation(
      anim: any,
      offset: any,
      duration: any,
      loopCount: any,
      speed: any,
      listener: any
    ): AnimationDesc;
    obtain(
      id: any,
      offset: any,
      duration: any,
      loopCount: any,
      speed: any,
      listener: any
    ): AnimationDesc;
    obtainAnimationDesc(anim: any): AnimationDesc;
    update(delta: any): void;
    setAnimation(
      id: any,
      loopCount?: number,
      speed?: number,
      listener?: any
    ): any;
    setAnimationWithOffset(
      id: any,
      offset: any,
      duration: any,
      loopCount: any,
      speed: any,
      listener: any
    ): any;
    setAnimationWithAnimation(
      anim: any,
      offset: any,
      duration: any,
      loopCount: any,
      speed: any,
      listener: any
    ): any;
    setAnimationWithAnimationDesc(anim: any): any;
    animate(
      id: any,
      loopCount: number,
      speed: number,
      listener: any,
      transitionTime: any
    ): any;
    animateWithOffset(
      id: any,
      offset: any,
      duration: any,
      loopCount: any,
      speed: any,
      listener: any,
      transitionTime: any
    ): any;
    animateWithAnimation(
      anim: any,
      offset: any,
      duration: any,
      loopCount: any,
      speed: any,
      listener: any,
      transitionTime: any
    ): any;
    animateWithAnimationDesc(anim: any, transitionTime: any): any;
    queue(
      id: any,
      loopCount: any,
      speed: any,
      listener: any,
      transitionTime: any
    ): any;
    queueWithOffset(
      id: any,
      offset: any,
      duration: any,
      loopCount: any,
      speed: any,
      listener: any,
      transitionTime: any
    ): any;
    queueWithAnimation(
      anim: any,
      offset: any,
      duration: any,
      loopCount: any,
      speed: any,
      listener: any,
      transitionTime: any
    ): any;
    queueWithAnimationDesc(anim: any, transitionTime: any): any;
    action(
      id: any,
      loopCount: any,
      speed: any,
      listener: any,
      transitionTime: any
    ): any;
    actionWithOffset(
      id: any,
      offset: any,
      duration: any,
      loopCount: any,
      speed: any,
      listener: any,
      transitionTime: any
    ): any;
    actionWithAnimation(
      anim: any,
      offset: any,
      duration: any,
      loopCount: any,
      speed: any,
      listener: any,
      transitionTime: any
    ): any;
    actionWithAnimationDesc(anim: any, transitionTime: any): any;
  }
  import BaseAnimationController_1 = require("gdxts/dist/lib/3d/utils/BaseAnimationController");
  import Utils_1 = require("gdxts/dist/lib/Utils");
}
declare module "gdxts/dist/lib/3d/utils/BaseAnimationController" {
  export const __esModule: boolean;
  export class Transform {
    translation: Vector3_1.Vector3;
    rotation: Quaternion_1.Quaternion;
    scale: Vector3_1.Vector3;
    idt(): this;
    set(t: any, r: any, s: any): this;
    setFrom(other: any): this;
    lerpWithTranform(target: any, alpha: any): this;
    lerp(targetT: any, targetR: any, targetS: any, alpha: any): this;
    toMatrix4(out: any): any;
    reset(): void;
    toString(): string;
  }
  export class BaseAnimationController {
    static getFirstKeyframeIndexAtTime(arr: any, time: any): number;
    static getTranslationAtTime(nodeAnim: any, time: any, out: any): any;
    static getRotationAtTime(nodeAnim: any, time: any, out: any): any;
    static getScalingAtTime(nodeAnim: any, time: any, out: any): any;
    static getNodeAnimationTransform(nodeAnim: any, time: any): Transform;
    static applyNodeAnimationDirectly(nodeAnim: any, time: any): void;
    static applyNodeAnimationBlending(
      nodeAnim: any,
      out: any,
      pool: any,
      alpha: any,
      time: any
    ): void;
    static applyAnimation(
      out: any,
      pool: any,
      alpha: any,
      animation: any,
      time: any
    ): void;
    constructor(target: any);
    transformPool: Utils_1.Pool<Transform>;
    applying: boolean;
    target: any;
    begin(): void;
    apply(animation: any, time: any, weight: any): void;
    end(): void;
    applyAnimation(animation: any, time: any): void;
    applyAnimations(
      anim1: any,
      time1: any,
      anim2: any,
      time2: any,
      weight: any
    ): void;
    removeAnimation(animation: any): void;
  }
  export namespace BaseAnimationController {
    let transforms: Map<any, any>;
    let tmpT: Transform;
  }
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
  import Quaternion_1 = require("gdxts/dist/lib/Quaternion");
  import Utils_1 = require("gdxts/dist/lib/Utils");
}
declare module "gdxts/dist/lib/3d/utils/BoxShapeBuilder" {
  export const __esModule: boolean;
  export class BoxShapeBuilder {
    static obtainV3(): Vector3_1.Vector3;
    static freeAll(): void;
    static buildWithWidthHeight(
      builder: any,
      width: any,
      height: any,
      depth: any
    ): void;
    static buildWithVertexInfo(
      builder: any,
      corner000: any,
      corner010: any,
      corner100: any,
      corner110: any,
      corner001: any,
      corner011: any,
      corner101: any,
      corner111: any
    ): void;
    static buildWithVectorCorner(
      builder: any,
      corner000: any,
      corner010: any,
      corner100: any,
      corner110: any,
      corner001: any,
      corner011: any,
      corner101: any,
      corner111: any
    ): void;
    static buildWithRect(
      builder: any,
      x: any,
      y: any,
      z: any,
      width: any,
      height: any,
      depth: any
    ): void;
  }
  export namespace BoxShapeBuilder {
    let tmpV0: Vector3_1.Vector3;
    let tmpV1: Vector3_1.Vector3;
    let tmpV2: Vector3_1.Vector3;
    let tmpV3: Vector3_1.Vector3;
    let tmpV4: Vector3_1.Vector3;
    let tmpV5: Vector3_1.Vector3;
    let tmpV6: Vector3_1.Vector3;
    let tmpV7: Vector3_1.Vector3;
    let vertTmp0: VertexInfo_1.VertexInfo;
    let vertTmp1: VertexInfo_1.VertexInfo;
    let vertTmp2: VertexInfo_1.VertexInfo;
    let vertTmp3: VertexInfo_1.VertexInfo;
    let vertTmp4: VertexInfo_1.VertexInfo;
    let vertTmp5: VertexInfo_1.VertexInfo;
    let vertTmp6: VertexInfo_1.VertexInfo;
    let vertTmp7: VertexInfo_1.VertexInfo;
    let vertTmp8: VertexInfo_1.VertexInfo;
    let vectorPool: Utils_1.FlushablePool<Vector3_1.Vector3>;
  }
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
  import VertexInfo_1 = require("gdxts/dist/lib/3d/utils/VertexInfo");
  import Utils_1 = require("gdxts/dist/lib/Utils");
}
declare module "gdxts/dist/lib/3d/utils/IndexBufferObject" {
  export const __esModule: boolean;
  export class IndexBufferObject {
    constructor(gl: any, maxIndices: any, isStatic?: boolean);
    isDirty: boolean;
    isBound: boolean;
    indicesLength: number;
    gl: any;
    empty: boolean;
    byteBuffer: Uint16Array<any>;
    isDirect: boolean;
    ownsBuffer: boolean;
    bufferHandle: any;
    usage: number;
    getNumIndices(): number;
    getNumMaxIndices(): number;
    setIndices(indices: any, offset?: number, count?: any): void;
    updateIndices(
      targetOffset: any,
      indices: any,
      offset: any,
      count: any
    ): void;
    getBuffer(): Uint16Array<any>;
    bind(): void;
    unbind(): void;
    invalidate(): void;
    dispose(): void;
  }
}
declare module "gdxts/dist/lib/3d/utils/MeshBuilder" {
  export const __esModule: boolean;
  export class MeshBuilder {
    static createAttributes(usage: any): VertexAttributes_1.VertexAttributes;
    static transformPosition(
      values: any,
      offset: any,
      size: any,
      transform: any
    ): void;
    static transformNormal(
      values: any,
      offset: any,
      size: any,
      transform: any
    ): void;
    constructor(gl: any);
    gl: any;
    vertTmp1: VertexInfo_1.VertexInfo;
    vertTmp2: VertexInfo_1.VertexInfo;
    vertTmp3: VertexInfo_1.VertexInfo;
    vertTmp4: VertexInfo_1.VertexInfo;
    tempC1: Utils_1.Color;
    vertices: any[];
    indices: any[];
    parts: any[];
    color: Utils_1.Color;
    hasColor: boolean;
    uOffset: number;
    uScale: number;
    vOffset: number;
    vScale: number;
    hasUVTransform: boolean;
    vertexTransformationEnabled: boolean;
    positionTransform: Matrix4_1.Matrix4;
    normalTransform: Matrix3_1.Matrix3;
    bounds: BoundingBox_1.BoundingBox;
    lastIndex: number;
    tmpNormal: Vector3_1.Vector3;
    begin(attributes: any, primitiveType?: number): void;
    attributes: any;
    vindex: number;
    istart: number;
    meshPart: any;
    stride: number;
    _vertex: any[];
    posOffset: number;
    posSize: any;
    norOffset: number;
    biNorOffset: number;
    tangentOffset: number;
    colOffset: number;
    colSize: any;
    cpOffset: number;
    uvOffset: number;
    primitiveType: any;
    setColor(color: any): void;
    getAttributes(): any;
    getLastIndex(): number;
    endpart(): void;
    part(id: any, primitiveType: any, meshPart?: any): any;
    end(mesh?: any): any;
    clear(): void;
    getFloatsPerVertex(): number;
    setUVRange(u1: any, v1: any, u2: any, v2: any): void;
    setUVRangeByRegion(region: any): void;
    setVertexTransform(transform: any): void;
    addVertex(values: any, offset: any): void;
    box(width: any, height: any, depth: any): void;
    vertexWithData(pos: any, nor: any, col: any, uv: any): number;
    vertex(info: any): number;
    index(value: any): void;
    index2Values(value1: any, value2: any, value3: any): void;
    index3Values(value1: any, value2: any, value3: any): void;
    index4Values(value1: any, value2: any, value3: any, value4: any): void;
    index6Values(
      value1: any,
      value2: any,
      value3: any,
      value4: any,
      value5: any,
      value6: any
    ): void;
    index8Values(
      value1: any,
      value2: any,
      value3: any,
      value4: any,
      value5: any,
      value6: any,
      value7: any,
      value8: any
    ): void;
    rect(corner00: any, corner10: any, corner11: any, corner01: any): void;
    rectWithVertexInfo(
      corner00: any,
      corner10: any,
      corner11: any,
      corner01: any
    ): void;
    rectWithVectorCorner(
      corner00: any,
      corner10: any,
      corner11: any,
      corner01: any,
      normal: any
    ): void;
    rectWithValue(
      x00: any,
      y00: any,
      z00: any,
      x10: any,
      y10: any,
      z10: any,
      x11: any,
      y11: any,
      z11: any,
      x01: any,
      y01: any,
      z01: any,
      normalX: any,
      normalY: any,
      normalZ: any
    ): void;
    getVertexTransform(out: any): any;
    getPrimitiveType(): any;
  }
  export namespace MeshBuilder {
    let MAX_VERTICES: number;
    let MAX_INDEX: number;
    let vTmp: Vector3_1.Vector3;
    let indicesMap: any;
  }
  import VertexInfo_1 = require("gdxts/dist/lib/3d/utils/VertexInfo");
  import Utils_1 = require("gdxts/dist/lib/Utils");
  import Matrix4_1 = require("gdxts/dist/lib/Matrix4");
  import Matrix3_1 = require("gdxts/dist/lib/Matrix3");
  import BoundingBox_1 = require("gdxts/dist/lib/BoundingBox");
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
  import VertexAttributes_1 = require("gdxts/dist/lib/3d/attributes/VertexAttributes");
}
declare module "gdxts/dist/lib/3d/utils/ModelBuilder" {
  export const __esModule: boolean;
  export class ModelBuilder {
    static rebuildReferencesWithModel(model: any): void;
    static rebuildReferences(model: any, node: any): void;
    constructor(gl: any);
    gl: any;
    builders: any[];
    tmpTransform: Matrix4_1.Matrix4;
    getBuilder(attributes: any): any;
    begin(): void;
    node: any;
    model: Model_1.Model;
    end(): Model_1.Model;
    createNode(): Node_1.Node;
    addNode(node: any): any;
    endnode(): void;
    manage(disposable: any): void;
    partByMeshPart(meshpart: any, material: any): void;
    createBox(
      width: any,
      height: any,
      depth: any,
      material: any,
      attributes: any
    ): Model_1.Model;
    part(id: any, primitiveType: any, attributes: any, material: any): any;
  }
  import Matrix4_1 = require("gdxts/dist/lib/Matrix4");
  import Model_1 = require("gdxts/dist/lib/3d/model/Model");
  import Node_1 = require("gdxts/dist/lib/3d/model/Node");
}
declare module "gdxts/dist/lib/3d/utils/TextureProvider" {
  export const __esModule: boolean;
  export class FileTextureProvider {
    constructor(
      minFilter?: Texture_1.TextureFilter,
      magFilter?: Texture_1.TextureFilter,
      uWrap?: Texture_1.TextureWrap,
      vWrap?: Texture_1.TextureWrap,
      useMipMaps?: boolean
    );
    minFilter: Texture_1.TextureFilter;
    magFilter: Texture_1.TextureFilter;
    uWrap: Texture_1.TextureWrap;
    vWrap: Texture_1.TextureWrap;
    useMipMaps: boolean;
    load(gl: any, fileName: any): any;
  }
  import Texture_1 = require("gdxts/dist/lib/Texture");
}
declare module "gdxts/dist/lib/3d/utils/VertexBufferObject" {
  export const __esModule: boolean;
  export class VertexBufferObject {
    constructor(gl: any, isStatic: any, numVertices: any, attributes: any);
    gl: any;
    verticesLength: number;
    isDirty: boolean;
    isBound: boolean;
    bufferHandle: any;
    getAttributes(): any;
    getNumVertices(): number;
    getNumMaxVertices(): any;
    getBuffer(): any;
    setBuffer(data: any, ownsBuffer: any, value: any): void;
    attributes: any;
    ownsBuffer: any;
    buffer: any;
    bufferChanged(): void;
    setVertices(vertices: any, offset: any, count: any): void;
    updateVertices(
      targetOffset: any,
      vertices: any,
      sourceOffset: any,
      count: any
    ): void;
    getUsage(): any;
    setUsage(value: any): void;
    usage: any;
    bind(shader: any, locations?: any): void;
    unbind(shader: any, locations?: any): void;
    invalidate(): void;
    dispose(): void;
  }
}
declare module "gdxts/dist/lib/3d/utils/VertexData" {
  export const __esModule: boolean;
}
declare module "gdxts/dist/lib/3d/utils/VertexInfo" {
  export const __esModule: boolean;
  export class VertexInfo {
    position: Vector3_1.Vector3;
    normal: Vector3_1.Vector3;
    color: Utils_1.Color;
    uv: Vector2_1.Vector2;
    reset(): void;
    set(pos: any, nor: any, col: any, uv: any): this;
    hasPosition: any;
    hasNormal: any;
    hasColor: any;
    hasUV: any;
    setWithVertextInfo(other: any): this;
    setPos(x: any, y: any, z: any): this;
    setNor(x: any, y: any, z: any): this;
    setCol(r: any, g: any, b: any, a: any): this;
    setUV(u: any, v: any): this;
    lerp(target: any, alpha: any): this;
  }
  import Vector3_1 = require("gdxts/dist/lib/Vector3");
  import Utils_1 = require("gdxts/dist/lib/Utils");
  import Vector2_1 = require("gdxts/dist/lib/Vector2");
}
declare module "gdxts/dist/lib/3d/utils/index" {
  export const __esModule: boolean;
}
//# sourceMappingURL=bundle.d.ts.map
