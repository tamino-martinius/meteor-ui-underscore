# ui-underscore
[![Build Status](https://travis-ci.org/Zaku-eu/meteor-ui-underscore.png?branch=master)](https://travis-ci.org/Zaku-eu/meteor-ui-underscore)

Port of some underscore-js functions for meteor ui.

## Compare

### $ne arg1, arg2
returns true if arg1 doesn't equals arg2
```
  {{#if $ne "one" "two"}}
    one isn't two
  {{else}}
    one is two
  {{/if}}
```
```
  <input type="checkbox" checked={{$ne "one" "two"}}/>
```

### $eq arg1, arg2
returns true if arg1 equals arg2
```
  {{#if $eq "one" "two"}}
    one is two
  {{else}}
    one isn't two
  {{/if}}
```
```
  <input type="checkbox" checked={{$eq "one" "two"}}/>
```

### $gt arg1, arg2
returns true if arg1 is greater than arg2
```
  {{#if $gt 2 1}}
    two is greater than one
  {{else}}
    one is greater than two
  {{/if}}
```
```
  <input type="checkbox" checked={{$gt value 10}}/>
```

### $gte arg1, arg2
returns true if arg1 is greater or equals arg2
```
  {{#if $gte 2 1}}
    two is greater or equals one
  {{else}}
    one is greater or equals two
  {{/if}}
```
```
  <input type="checkbox" checked={{$gte value 10}}/>
```

### $lt arg1, arg2
returns true if arg1 is lower than arg2
```
  {{#if $lt 2 1}}
    two is lower than one
  {{else}}
    one is lower than two
  {{/if}}
```
```
  <input type="checkbox" checked={{$lt value 10}}/>
```

### $lte arg1, arg2
returns true if arg1 is lower or equals arg2
```
  {{#if $lt 2 1}}
    two is lower or equals one
  {{else}}
    one is lower or equals two
  {{/if}}
```
```
  <input type="checkbox" checked={{$lt value 10}}/>
```

## Conditional

```
$sw
```

## Collections

```
$contains
$indexOf
$lastIndexOf
$min
$max
$first
$last
$flatten
$compact
$intersection
$difference
```

## Objects

```
$keys
$values
$pairs
$invert
$functions
$pick
$omit
$has
```
