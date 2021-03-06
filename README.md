# ui-underscore

[![Build Status](https://travis-ci.org/tamino-martinius/meteor-ui-underscore.png?branch=master)](https://travis-ci.org/Zaku-eu/meteor-ui-underscore)

Port of some underscore-js functions for meteor ui.

## Compare

### $ne arg1, arg2

returns true if arg1 doesn't equals arg2

```hbs
  {{#if $ne "one" "two"}}
    one isn't two
  {{else}}
    one is two
  {{/if}}

  => one isn't two
```

```hbs
  <input type="checkbox" checked={{$ne "one" "two"}}/>

  => <input type="checkbox" checked/>  
```

### $eq arg1, arg2

returns true if arg1 equals arg2

```hbs
  {{#if $eq "one" "two"}}
    one is two
  {{else}}
    one isn't two
  {{/if}}

  => one isn't two
```

```hbs
  <input type="checkbox" checked={{$eq "one" "two"}}/>

  => <input type="checkbox"/>
```

### $gt arg1, arg2

returns true if arg1 is greater than arg2

```hbs
  {{#if $gt 2 1}}
    two is greater than one
  {{else}}
    one is greater than two
  {{/if}}

  => two is greater than one
```

```hbs
  <input type="checkbox" checked={{$gt value 10}}/>
```

### $gte arg1, arg2

returns true if arg1 is greater or equals arg2

```hbs
  {{#if $gte 2 1}}
    two is greater or equals one
  {{else}}
    one is greater or equals two
  {{/if}}

  => two is greater or equals one
```

```hbs
  <input type="checkbox" checked={{$gte value 10}}/>
```

### $lt arg1, arg2

returns true if arg1 is lower than arg2

```hbs
  {{#if $lt 2 1}}
    two is lower than one
  {{else}}
    one is lower than two
  {{/if}}

  => one is lower than two
```

```hbs
  <input type="checkbox" checked={{$lt value 10}}/>
```

### $lte arg1, arg2

returns true if arg1 is lower or equals arg2

```hbs
  {{#if $lt 2 1}}
    two is lower or equals one
  {{else}}
    one is lower or equals two
  {{/if}}

  => one is lower or equals two
```

```hbs
  <input type="checkbox" checked={{$lt value 10}}/>
```

## Conditional

### $sw arg, args...

returns first value of args if arg is true
returns second value of args if arg is false
returns n-th value of args if arg is a number
returns an empty string if nothing matches

```hbs
  <div class="{{$sw isActive "active"}}"/>
```

```hbs
  <div class="{{$sw true "active"}}"/>

  => <div class="active"/>
```

```hbs
  <div class="{{$sw false "active" "inactive"}}"/>

  => <div class="inactive"/>
```

```hbs
  <div class="{{$sw 3 "one" "two" "three" "four"}}"/>

  => <div class="three"/>
```

## Collections

```hbs
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

```hbs
$keys
$values
$pairs
$invert
$functions
$pick
$omit
$has
```
