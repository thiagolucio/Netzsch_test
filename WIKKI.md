# Documentação

## Logo

- O Componente "Logo" possui propriedades que devem ser apontadas pelo desenvolvedor na hora que for criar alguma página, componente ou qualquer outro elemento da aplicação onde precise ser usada a logo. 

#### Componente "Logo"

```typescript
  import Logo from "@/app/components/Logo";
    ...
    <Logo width={160} height={32} logoLayout={true} textSize={29} comaSize={5} sloganLayout={true} />


```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `logoLayout` | `boolean` | quando "true" a logo é vertical e "false horizontal |
| `width` | `number` | seta largura desejada da imagem |
| `height` | `number` | seta altura desejada da imagem |
| `textSize` | `string` | determina tamanho do texto com as pré-determinada pelo TailwindCSS em [Tailwindcss font site](https://tailwindcss.com/docs/font-size#setting-the-font-size) |


## Button
- O componente Button possui as variantes "default", "success", "alert", "primary", "disabled". Essas propriedades são declaradas pelo desenvolvedor usando o parâmetro "variant" para isso. 

```typescript
  import Button from "@/app/components/Button";
    ...
    <Button variant="primary" type="submit" onClick="oncClick">
      Login
    </Button>
```

 - Todas as propriedades que deveriam ser utilizadas em um Botão poderão ser usadas.
 - Os botões possuem largura total (100%). Você deverá controlar a largura dele usando um container ou div.
 - Caso nenhuma cor seja declarada o padrão será o tipo "default".

## Avatar
- O componente Avatar ainda está com sua "src" apontando para uma imagem fixa pois o componente ainda não tem o método definido para ser implementado de forma dinâmica. 




## Sistema de Login

- A solução de login foi feita pelo NextAuth. 


### Algumas recomendações até aqui. 
- Cuidado ao mexer com o package Typescript na aplicação. Hoje ele está na versão 5.2.2 e mesmo tendo superiores se atualizar vai craxar a aplicação. 