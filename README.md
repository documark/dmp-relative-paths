# Documark relative paths

The Jade and Markdown parser do not properly insert the base path in URLs, this plugin fixes that.

Also see: [visionmedia/jade#1553](https://github.com/visionmedia/jade/pull/1553)

### Usage

1. Add plugin to document configuration:

        plugins:
          - relative-paths

2. Relative paths will be prepended with the base path:

	`<img src="/img/example.png"/>` &rArr; `<img src="/path/to/document/img/example.png/>`
