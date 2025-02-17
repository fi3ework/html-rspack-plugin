import { AsyncSeriesWaterfallHook } from "tapable";
import { Compiler, Compilation } from "webpack";

// Type definitions for html-minifier-terser 6.1
// Project: https://github.com/terser/html-minifier-terser#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/**
 * Most of the options are disabled by default
 */
interface HtmlMinifierOptions {
    /**
     * Treat attributes in case sensitive manner (useful for custom HTML tags)
     * @default false
     */
    caseSensitive?: boolean | undefined;
    /**
     * Omit attribute values from boolean attributes
     * @default false
     */
    collapseBooleanAttributes?: boolean | undefined;
    /**
     * Don't leave any spaces between display:inline;
     * elements when collapsing. Must be used in conjunction with collapseWhitespace=true
     * @default false
     */
    collapseInlineTagWhitespace?: boolean | undefined;
    /**
     * Collapse white space that contributes to text nodes in a document tree
     * @default false
     */
    collapseWhitespace?: boolean | undefined;
    /**
     * Always collapse to 1 space (never remove it entirely). Must be used in conjunction with `collapseWhitespace=true`
     * @default false
     */
    conservativeCollapse?: boolean | undefined;
    /**
     * Handle parse errors
     * @default false
     */
    continueOnParseError?: boolean | undefined;
    /**
     * Arrays of regex'es that allow to support custom attribute assign expressions (e.g. `'<div flex?="{{mode != cover}}"></div>'`)
     * @default []
     */
    customAttrAssign?: RegExp[] | undefined;
    /**
     * Regex that specifies custom attribute to strip newlines from (e.g. `/ng-class/`
     */
    customAttrCollapse?: RegExp | undefined;
    /**
     * Arrays of regex'es that allow to support custom attribute surround expressions (e.g. `<input {{#if value}}checked="checked"{{/if}}>`)
     * @default []
     */
    customAttrSurround?: RegExp[] | undefined;
    /**
     * Arrays of regex'es that allow to support custom event attributes for `minifyJS` (e.g. `ng-click`)
     * @default [/^on[a-z]{3,}$/]
     */
    customEventAttributes?: RegExp[] | undefined;
    /**
     * Use direct Unicode characters whenever possible
     * @default false
     */
    decodeEntities?: boolean | undefined;
    /**
     * Parse input according to HTML5 specifications
     * @default true
     */
    html5?: boolean | undefined;
    /**
     * Array of regex'es that allow to ignore certain comments, when matched
     * @default [ /^!/, /^\s*#/ ]
     */
    ignoreCustomComments?: RegExp[] | undefined;
    /**
     * Array of regex'es that allow to ignore certain fragments, when matched (e.g. `<?php ... ?>`, `{{ ... }}`, etc.)
     * @default [/<%[\s\S]*?%>/, /<\?[\s\S]\*?\?>/]
     */
    ignoreCustomFragments?: RegExp[] | undefined;
    /**
     * Insert tags generated by HTML parser
     * @default true
     */
    includeAutoGeneratedTags?: boolean | undefined;
    /**
     * Keep the trailing slash on singleton elements
     * @default false
     */
    keepClosingSlash?: boolean | undefined;
    /**
     * Specify a maximum line length. Compressed output will be split by newlines at valid HTML split-points
     */
    maxLineLength?: number | undefined;
    /**
     * Minify CSS in style elements and style attributes
     * @default false
     */
    minifyCSS?: boolean | object | ((text: string, type?: string) => string) | undefined;
    /**
     * Minify JavaScript in script elements and event attributes
     * @default false
     */
    minifyJS?: boolean | object | ((text: string, inline?: boolean) => string) | undefined;
    /**
     * Minify URLs in various attributes
     * @default false
     */
    minifyURLs?: boolean | string | object | ((text: string) => string) | undefined;
    /**
     * Never add a newline before a tag that closes an element
     * @default false
     */
    noNewlinesBeforeTagClose?: boolean | undefined;
    /**
     * Always collapse to 1 line break (never remove it entirely) when whitespace between tags include a line break.
     * Must be used in conjunction with `collapseWhitespace=true`
     * @default false
     */
    preserveLineBreaks?: boolean | undefined;
    /**
     * Prevents the escaping of the values of attributes
     * @default false
     */
    preventAttributesEscaping?: boolean | undefined;
    /**
     * Process contents of conditional comments through minifier
     * @default false
     */
    processConditionalComments?: boolean | undefined;
    /**
     * Array of strings corresponding to types of script elements to process through minifier
     * (e.g. `text/ng-template`, `text/x-handlebars-template`, etc.)
     * @default []
     */
    processScripts?: string[] | undefined;
    /**
     * Type of quote to use for attribute values (' or ")
     */
    quoteCharacter?: string | undefined;
    /**
     * Remove quotes around attributes when possible
     * @default false
     */
    removeAttributeQuotes?: boolean | undefined;
    /**
     * Strip HTML comments
     * @default false
     */
    removeComments?: boolean | undefined;
    /**
     * Remove all attributes with whitespace-only values
     * @default false
     */
    removeEmptyAttributes?: boolean | ((attrName: string, tag: string) => boolean) | undefined;
    /**
     * Remove all elements with empty contents
     * @default false
     */
    removeEmptyElements?: boolean | undefined;
    /**
     * Remove optional tags
     * @default false
     */
    removeOptionalTags?: boolean | undefined;
    /**
     * Remove attributes when value matches default
     * @default false
     */
    removeRedundantAttributes?: boolean | undefined;
    /**
     * Remove `type="text/javascript"` from `script` tags. Other `type` attribute values are left intact
     * @default false
     */
    removeScriptTypeAttributes?: boolean | undefined;
    /**
     * Remove `type="text/css"` from `style` and `link` tags. Other `type` attribute values are left intact
     * @default false
     */
    removeStyleLinkTypeAttributes?: boolean | undefined;
    /**
     * Remove space between attributes whenever possible. **Note that this will result in invalid HTML!**
     * @default false
     */
    removeTagWhitespace?: boolean | undefined;
    /**
     * Sort attributes by frequency
     * @default false
     */
    sortAttributes?: boolean | undefined;
    /**
     * Sort style classes by frequency
     * @default false
     */
    sortClassName?: boolean | undefined;
    /**
     * Trim white space around `ignoreCustomFragments`
     * @default false
     */
    trimCustomFragments?: boolean | undefined;
    /**
     * Replaces the `doctype` with the short (HTML5) doctype
     * @default false
     */
    useShortDoctype?: boolean | undefined;
}

export = HtmlWebpackPlugin;

declare class HtmlWebpackPlugin {
  constructor(options?: HtmlWebpackPlugin.Options);

  userOptions: HtmlWebpackPlugin.Options;

  /** Current HtmlWebpackPlugin Major */
  version: number;

  /**
   * Options after html-webpack-plugin has been initialized with defaults
   */
  options?: HtmlWebpackPlugin.ProcessedOptions;

  apply(compiler: Compiler): void;

  static getHooks(compilation: Compilation): HtmlWebpackPlugin.Hooks;

  /**
   * Static helper to create a tag object to be get injected into the dom
   */
  static createHtmlTagObject(
    tagName: string,
    attributes?: { [attributeName: string]: string | boolean },
    innerHTML?: string
  ): HtmlWebpackPlugin.HtmlTagObject;

  static readonly version: number;
}

declare namespace HtmlWebpackPlugin {
  type MinifyOptions = HtmlMinifierOptions;

  interface Options {
    /**
     * Emit the file only if it was changed.
     * @default true
     */
    cache?: boolean;
    /**
     * List all entries which should be injected
     */
    chunks?: "all" | string[];
    /**
     * Allows to control how chunks should be sorted before they are included to the html.
     * @default 'auto'
     */
    chunksSortMode?:
      | "auto"
      // `none` is deprecated and an alias for `auto` now.
      | "none"
      | "manual"
      | ((entryNameA: string, entryNameB: string) => number);
    /**
     * List all entries which should not be injected
     */
    excludeChunks?: string[];
    /**
     * Path to the favicon icon
     */
    favicon?: false | string;
    /**
     * The file to write the HTML to.
     * Supports subdirectories eg: `assets/admin.html`
     * [name] will be replaced by the entry name
     * Supports a function to generate the name
     *
     * @default 'index.html'
     */
    filename?: string | ((entryName: string) => string);
    /**
     * By default the public path is set to `auto` - that way the html-webpack-plugin will try
     * to set the publicPath according to the current filename and the webpack publicPath setting
     */
    publicPath?: string | "auto";
    /**
     * If `true` then append a unique `webpack` compilation hash to all included scripts and CSS files.
     * This is useful for cache busting
     */
    hash?: boolean;
    /**
     * Inject all assets into the given `template` or `templateContent`.
     */
    inject?:
      | false // Don't inject scripts
      | true // Inject scripts into body
      | "body" // Inject scripts into body
      | "head"; // Inject scripts into head
    /**
     * Set up script loading
     * blocking will result in <script src="..."></script>
     * defer will result in <script defer src="..."></script>
     *
     * @default 'defer'
     */
    scriptLoading?: "blocking" | "defer" | "module" | "systemjs-module";
    /**
     * Inject meta tags
     */
    meta?:
      | false // Disable injection
      | {
          [name: string]:
            | string
            | false // name content pair e.g. {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}`
            | { [attributeName: string]: string | boolean }; // custom properties e.g. { name:"viewport" content:"width=500, initial-scale=1" }
        };
    /**
     * HTML Minification options accepts the following values:
     * - Set to `false` to disable minifcation
     * - Set to `'auto'` to enable minifcation only for production mode
     * - Set to custom minification according to
     * {@link https://github.com/kangax/html-minifier#options-quick-reference}
     */
    minify?: "auto" | boolean | MinifyOptions;
    /**
     * Render errors into the HTML page
     */
    showErrors?: boolean;
    /**
     * The `webpack` require path to the template.
     * @see https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md
     */
    template?: string;
    /**
     * Allow to use a html string instead of reading from a file
     */
    templateContent?:
      | false // Use the template option instead to load a file
      | string
      | ((templateParameters: {
          [option: string]: any;
        }) => string | Promise<string>)
      | Promise<string>;
    /**
     * Allows to overwrite the parameters used in the template
     */
    templateParameters?:
      | false // Pass an empty object to the template function
      | ((
          compilation: Compilation,
          assets: {
            publicPath: string;
            js: Array<string>;
            css: Array<string>;
            manifest?: string;
            favicon?: string;
          },
          assetTags: {
            headTags: HtmlTagObject[];
            bodyTags: HtmlTagObject[];
          },
          options: ProcessedOptions
        ) => { [option: string]: any } | Promise<{ [option: string]: any }>)
      | { [option: string]: any };
    /**
     * The title to use for the generated HTML document
     */
    title?: string;
    /**
     * Enforce self closing tags e.g. <link />
     */
    xhtml?: boolean;
    /**
     * In addition to the options actually used by this plugin, you can use this hash to pass arbitrary data through
     * to your template.
     */
    [option: string]: any;
  }

  /**
   * The plugin options after adding default values
   */
  interface ProcessedOptions extends Required<Options> {
    filename: string;
  }

  /**
   * The values which are available during template execution
   *
   * Please keep in mind that the `templateParameter` options allows to change them
   */
  interface TemplateParameter {
    compilation: Compilation;
    htmlWebpackPlugin: {
      tags: {
        headTags: HtmlTagObject[];
        bodyTags: HtmlTagObject[];
      };
      files: {
        publicPath: string;
        js: Array<string>;
        css: Array<string>;
        manifest?: string;
        favicon?: string;
      };
      options: Options;
    };
    webpackConfig: any;
  }

  interface Hooks {
    alterAssetTags: AsyncSeriesWaterfallHook<{
      assetTags: {
        scripts: HtmlTagObject[];
        styles: HtmlTagObject[];
        meta: HtmlTagObject[];
      };
      publicPath: string,
      outputName: string;
      plugin: HtmlWebpackPlugin;
    }>;

    alterAssetTagGroups: AsyncSeriesWaterfallHook<{
      headTags: HtmlTagObject[];
      bodyTags: HtmlTagObject[];
      outputName: string;
      publicPath: string,
      plugin: HtmlWebpackPlugin;
    }>;

    afterTemplateExecution: AsyncSeriesWaterfallHook<{
      html: string;
      headTags: HtmlTagObject[];
      bodyTags: HtmlTagObject[];
      outputName: string;
      plugin: HtmlWebpackPlugin;
    }>;

    beforeAssetTagGeneration: AsyncSeriesWaterfallHook<{
      assets: {
        publicPath: string;
        js: Array<string>;
        css: Array<string>;
        favicon?: string;
        manifest?: string;
      };
      outputName: string;
      plugin: HtmlWebpackPlugin;
    }>;

    beforeEmit: AsyncSeriesWaterfallHook<{
      html: string;
      outputName: string;
      plugin: HtmlWebpackPlugin;
    }>;

    afterEmit: AsyncSeriesWaterfallHook<{
      outputName: string;
      plugin: HtmlWebpackPlugin;
    }>;
  }

  /**
   * A tag element according to the htmlWebpackPlugin object notation
   */
  interface HtmlTagObject {
    /**
     * Attributes of the html tag
     * E.g. `{'disabled': true, 'value': 'demo'}`
     */
    attributes: {
      [attributeName: string]: string | boolean | null | undefined;
    };
    /**
     * The tag name e.g. `'div'`
     */
    tagName: string;
    /**
     * The inner HTML
     */
    innerHTML?: string;
    /**
     * Whether this html must not contain innerHTML
     * @see https://www.w3.org/TR/html5/syntax.html#void-elements
     */
    voidTag: boolean;
    /**
     * Meta information about the tag
     * E.g. `{'plugin': 'html-webpack-plugin'}`
     */
    meta: {
      plugin?: string,
      [metaAttributeName: string]: any;
    };
  }
}
