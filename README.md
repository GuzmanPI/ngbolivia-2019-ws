# Angular Elements from Zero to Hero - NG Bolivia 2019 

## Instalar ngx-build-plus

Corra el comando `ng add ngx-build-plus` para ininstalar.

## Actualizar angular.json

```json
    [...]
    "architect": {
        "build": {
            "builder": "ngx-build-plus:build",
            [...]
        }
    }
    [...]
```

## Agregar script de construcción

`"wc-build": "ng build ws2019 --output-hashing=none --single-bundle true --keep-polyfills true"`

## Construir el componente

Corra el comando `npm run wc-build`


## Levantar aplicachión html

Corra el comando `npx live-server demo`
