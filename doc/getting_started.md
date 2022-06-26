# Getting Started 

>### COPY .env.example to .env
```bash
cp .env.example .env
```


---
<br/><br/>
**Note:** I highly recommend installing [Nodemon](https://github.com/remy/nodemon).

[Nodemon](https://github.com/remy/nodemon). is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for `node`, to use `nodemon` replace the word `node` on the command line when executing your script.
`yarn global add nodemon`.

&nbsp;

>### NPM install
```bash
npm install
```
&nbsp;

>### API Start

```bash
npm run dev
```

&nbsp;
>### Docker compose

```bash
docker-compose up -d --build
```
&nbsp;
>### ESlint Start

```bash
npm run lint:fix
```

