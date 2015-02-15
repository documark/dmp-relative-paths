# Documark Relative Paths

The Jade and Markdown parser do not properly insert the base path in URLs, this plugin fixes that.

Also see: [visionmedia/jade#1553](https://github.com/visionmedia/jade/pull/1553).

### Usage

1. Add plugin to document configuration:

	```yaml
	plugins:
  	  - relative-paths

2. Relative paths will be prepended with the base path:

	`<img src="assets/example.png"/>` &rArr; `<img src="/path/to/document/assets/example.png"/>`

__Note:__ All elements with a `src` or `href` attribute will be checked.
