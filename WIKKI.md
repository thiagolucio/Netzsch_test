# Wikki

## Logo

-  Component "Logo" Component has properties that must be pointed out by the developer when creating a page, component or any other element of the application where the logo needs to be used.

#### Componente "Logo"

```typescript
  import Logo from "@/app/components/Logo";
    ...
    <Logo width={160} height={32} textSize={29} comaSize={5} logoLayout sloganLayout />
    <p>"OR"</p>
    <Logo width={160} height={32} textSize={29} comaSize={5} logoLayout={false} sloganLayout={false} />
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `logoLayout` | `boolean` | optional - when "true" from vertical logo and "false" from horizontal logo options - default: false(horizontal)  |
| `sloganLayout` | `boolean` | optional - when "true" show slogan from logo "Proven Excellence" and "false" hide this slogan - default: false(hidden)  |
| `width` | `number` | optional -  width size of image - default: 128px |
| `height` | `number` | optional -  height size of image - default: 40px |
| `textSize` | `number` | optional -  size of text using just number value - default: 20px|
| `comaSize` | `number` | optional -  size of comma using just number value - default: 2px|


## Button
-  The Button component has the variants "default", "success", "alert", "primary", "disabled". These properties are declared by the developer using the "variant" parameter or this.

```typescript
  import Button from "@/app/components/Button";
    ...
    <Button variant="primary" type="submit" onClick="oncClick">
      ButtonText
    </Button>
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `variant` | `string array's` | Options from button styles - "default" | "primary" | "success" | "alert" | "disabled" | "light" - default = default  |
| `type` | `button string array's` | Options from button html type to replicate - "button" | "submit" | "reset"  |
| `children` | `text` | The Button Text/ Icon + Text or other desired content |

- All properties that should be used in a Button can be used.
- The buttons are full width (100%). You must control its width using a container or div.
- If no color is declared, the default will be "default".


 



