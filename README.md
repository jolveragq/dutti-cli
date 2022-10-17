oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dutti-cli-jolveragq
$ dutti-cli COMMAND
running command...
$ dutti-cli (--version)
dutti-cli-jolveragq/0.0.1 darwin-x64 node-v14.20.1
$ dutti-cli --help [COMMAND]
USAGE
  $ dutti-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dutti-cli create-branch`](#dutti-cli-create-branch)
* [`dutti-cli help [COMMAND]`](#dutti-cli-help-command)
* [`dutti-cli plugins`](#dutti-cli-plugins)
* [`dutti-cli plugins:install PLUGIN...`](#dutti-cli-pluginsinstall-plugin)
* [`dutti-cli plugins:inspect PLUGIN...`](#dutti-cli-pluginsinspect-plugin)
* [`dutti-cli plugins:install PLUGIN...`](#dutti-cli-pluginsinstall-plugin-1)
* [`dutti-cli plugins:link PLUGIN`](#dutti-cli-pluginslink-plugin)
* [`dutti-cli plugins:uninstall PLUGIN...`](#dutti-cli-pluginsuninstall-plugin)
* [`dutti-cli plugins:uninstall PLUGIN...`](#dutti-cli-pluginsuninstall-plugin-1)
* [`dutti-cli plugins:uninstall PLUGIN...`](#dutti-cli-pluginsuninstall-plugin-2)
* [`dutti-cli plugins update`](#dutti-cli-plugins-update)

## `dutti-cli create-branch`

```
USAGE
  $ dutti-cli create-branch
```

_See code: [dist/commands/create-branch.ts](https://github.com/jolveragq/hello-world/blob/v0.0.1/dist/commands/create-branch.ts)_

## `dutti-cli help [COMMAND]`

Display help for dutti-cli.

```
USAGE
  $ dutti-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dutti-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.15/src/commands/help.ts)_

## `dutti-cli plugins`

List installed plugins.

```
USAGE
  $ dutti-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dutti-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.4/src/commands/plugins/index.ts)_

## `dutti-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dutti-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ dutti-cli plugins add

EXAMPLES
  $ dutti-cli plugins:install myplugin 

  $ dutti-cli plugins:install https://github.com/someuser/someplugin

  $ dutti-cli plugins:install someuser/someplugin
```

## `dutti-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dutti-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ dutti-cli plugins:inspect myplugin
```

## `dutti-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dutti-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ dutti-cli plugins add

EXAMPLES
  $ dutti-cli plugins:install myplugin 

  $ dutti-cli plugins:install https://github.com/someuser/someplugin

  $ dutti-cli plugins:install someuser/someplugin
```

## `dutti-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ dutti-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ dutti-cli plugins:link myplugin
```

## `dutti-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dutti-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dutti-cli plugins unlink
  $ dutti-cli plugins remove
```

## `dutti-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dutti-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dutti-cli plugins unlink
  $ dutti-cli plugins remove
```

## `dutti-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dutti-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dutti-cli plugins unlink
  $ dutti-cli plugins remove
```

## `dutti-cli plugins update`

Update installed plugins.

```
USAGE
  $ dutti-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
