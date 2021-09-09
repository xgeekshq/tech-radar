---
layout: details
filename: cobra
name: Cobra
image: /tech-radar/assets/images/languages-frameworks/cobra.png 
category: languages-frameworks
ring: Adopt
number: 11
---

# What is it ?
Cobra is both a library for creating powerful modern CLI applications as well as a program to generate applications and command files.

Cobra is used in many Go projects such as [Kubernetes](http://kubernetes.io/), [Hugo](https://gohugo.io/), and [Github CLI](https://github.com/cli/cli) to name a few. [This list](https://github.com/spf13/cobra/blob/master/projects_using_cobra.md) contains a more extensive list of projects using Cobra.

Cobra provides:

- Easy subcommand-based CLIs: `app server`, `app fetch`, etc.
- Fully POSIX-compliant flags (including short & long versions)
- Nested subcommands
- Global, local and cascading flags
- Easy generation of applications & commands with `cobra init appname` & `cobra add cmdname`
- Intelligent suggestions (`app srver`... did you mean `app server`?)
- Automatic help generation for commands and flags
- Automatic help flag recognition of `-h`, `--help`, etc.
- Automatically generated shell autocomplete for your application (bash, zsh, fish, powershell)
- Automatically generated man pages for your application
- Command aliases so you can change things without breaking them
- The flexibility to define your own help, usage, etc.
- Optional tight integration with [viper](http://github.com/spf13/viper) for 12-factor apps



# Resources
- [Documentation](https://pkg.go.dev/github.com/spf13/cobra#Command)
- [Github Documentation](https://github.com/spf13/cobra/blob/master/doc/README.md)

- [Github Repository](https://github.com/spf13/cobra)