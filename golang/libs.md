

# gore [![CI Status](https://github.com/x-motemen/gore/workflows/CI/badge.svg)](https://github.com/x-motemen/gore/actions)
### Yet another Go REPL that works nicely. Featured with line editing, code completion, and more.

![Screencast](doc/screencast.gif)

(Screencast taken with [cho45/KeyCast](https://github.com/cho45/KeyCast))

## Usage

```sh
gore
```
After a prompt is shown, enter any Go expressions/statements/functions or commands described below.

To quit the session, type `Ctrl-D` or use `:q` command.

## Features

- Line editing with history
- Multi-line input
- Package importing with completion
- Evaluates any expressions, statements and function declarations
- No "evaluated but not used" errors
- Code completion (requires [gocode](https://github.com/mdempsky/gocode))
- Showing documents
- Auto-importing (`gore -autoimport`)

## REPL Commands

Some functionalities are provided as commands in the REPL:

```
:import <package path>  Import package
:type <expr>            Print the type of expression
:print                  Show current source
:write [<filename>]     Write out current source to file
:clear                  Clear the codes
:doc <expr or pkg>      Show document
:help                   List commands
:quit                   Quit the session
```

## Installation
The gore command requires Go tool-chains on runtime, so standalone binary is not distributed.

```sh
go install github.com/x-motemen/gore/cmd/gore@latest
```

Make sure `$GOPATH/bin` is in your `$PATH`.

Also recommended:

```sh
go install github.com/mdempsky/gocode@latest   # for code completion
```

Or you can use Docker:

```sh
git clone https://github.com/x-motemen/gore.git
cd gore
docker build -t gore .
docker run -it --rm gore
```


---
---
---

# Go Vanity URLs

Go Vanity URLs is a simple Go server that allows you
to set custom import paths for your Go packages.
It also can run on Google App Engine.

## Quickstart

Install and run the binary:

```
$ go get -u github.com/GoogleCloudPlatform/govanityurls
$ # update vanity.yaml
$ govanityurls
$ # open http://localhost:8080
```


### Google App Engine

Install [gcloud](https://cloud.google.com/sdk/downloads) and install Go App Engine component:

```
$ gcloud components install app-engine-go
```

Setup a [custom domain](https://cloud.google.com/appengine/docs/standard/python/using-custom-domains-and-ssl) for your app.

Get the application:
```
git clone https://github.com/GoogleCloudPlatform/govanityurls
cd govanityurls
```

Edit `vanity.yaml` to add any number of git repos. E.g., `customdomain.com/portmidi` will
serve the [https://github.com/rakyll/portmidi](https://github.com/rakyll/portmidi) repo.

```
paths:
  /portmidi:
    repo: https://github.com/rakyll/portmidi
```

You can add as many rules as you wish.

Deploy the app:

```
$ gcloud app deploy
```

That's it! You can use `go get` to get the package from your custom domain.

```
$ go get customdomain.com/portmidi
```

### Running in other environments

You can also deploy this as an App Engine Flexible app by changing the
`app.yaml` file:

```
runtime: go
env: flex
```

This project is a normal Go HTTP server, so you can also incorporate the
handler into larger Go servers.

## Configuration File

```
host: example.com
cache_max_age: 3600
paths:
  /foo:
    repo: https://github.com/example/foo
    display: "https://github.com/example/foo https://github.com/example/foo/tree/master{/dir} https://github.com/example/foo/blob/master{/dir}/{file}#L{line}"
    vcs: git
```

<table>
  <thead>
    <tr>
      <th scope="col">Key</th>
      <th scope="col">Required</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>cache_max_age</code></th>
      <td>optional</td>
      <td>The amount of time to cache package pages in seconds.  Controls the <code>max-age</code> directive sent in the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"><code>Cache-Control</code></a> HTTP header.</td>
    </tr>
    <tr>
      <th scope="row"><code>host</code></th>
      <td>optional</td>
      <td>Host name to use in meta tags.  If omitted, uses the App Engine default version host or the Host header on non-App Engine Standard environments.  You can use this option to fix the host when using this service behind a reverse proxy or a <a href="https://cloud.google.com/appengine/docs/standard/go/how-requests-are-routed#routing_with_a_dispatch_file">custom dispatch file</a>.</td>
    </tr>
    <tr>
      <th scope="row"><code>paths</code></th>
      <td>required</td>
      <td>Map of paths to path configurations.  Each key is a path that will point to the root of a repository hosted elsewhere.  The fields are documented in the Path Configuration section below.</td>
    </tr>
  </tbody>
</table>

### Path Configuration

<table>
  <thead>
    <tr>
      <th scope="col">Key</th>
      <th scope="col">Required</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>display</code></th>
      <td>optional</td>
      <td>The last three fields of the <a href="https://github.com/golang/gddo/wiki/Source-Code-Links"><code>go-source</code> meta tag</a>.  If omitted, it is inferred from the code hosting service if possible.</td>
    </tr>
    <tr>
      <th scope="row"><code>repo</code></th>
      <td>required</td>
      <td>Root URL of the repository as it would appear in <a href="https://golang.org/cmd/go/#hdr-Remote_import_paths"><code>go-import</code> meta tag</a>.</td>
    </tr>
    <tr>
      <th scope="row"><code>vcs</code></th>
      <td>required if ambiguous</td>
      <td>If the version control system cannot be inferred (e.g. for Bitbucket or a custom domain), then this specifies the version control system as it would appear in <a href="https://golang.org/cmd/go/#hdr-Remote_import_paths"><code>go-import</code> meta tag</a>.  This can be one of <code>git</code>, <code>hg</code>, <code>svn</code>, or <code>bzr</code>.</td>
    </tr>
  </tbody>
</table>
