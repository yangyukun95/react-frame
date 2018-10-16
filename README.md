## react 项目通用框架

========================

## Setup

```
$ yarn install
```

## Running

```
$ yarn start
```

## Build

```
$ yarn run build
```


## saga和reducer中函数名命名规则

reducer中的函数名与saga中的函数名不可重复
如果saga函数有调用接口,应以其method(get | post | put | delete)等字段作为函数名开头.
如果saga函数中调用了多个接口, 则以 该函数的功能 为名.
saga函数名切勿以set字段开头.
reducer中函数统一以set开头.