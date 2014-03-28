# ui-underscore
[![Build Status](https://travis-ci.org/Zaku-eu/meteor-ui-underscore.png?branch=master)](https://travis-ci.org/Zaku-eu/meteor-ui-underscore)

Port of some underscore-js functions for meteor ui.

## Compare

### $ne (arg1, arg2)
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

### $eq (arg1, arg2)
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

```
$gt
$gte
$lt
$lte
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
