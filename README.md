**<h1>ShinjiSelf Un SelfBot discord</h1>**
**<h1>ATTENTION JE NE SERAIS EN AUCUN CAS RESPONSABLE DE SE QUE VOUS ALLEZ FAIRE AVEC LE SHINJISELF ET DES CONCEQUENCES QUE VOUS EN SUBIREZ.</h1>**
**<h2>Comment le lancer ??</h2>**

<b>C'est très simple !!</b>

* tu dois dabord télécharger le ShinjiSelf

* ensuite extraire les fichiers

* ensuite ouvrir start.bat 

![ScreenShot](https://cdn.discordapp.com/attachments/812689993414737920/820012733772726282/unknown.png)

* mettre la configuration sur le menu start du ShinjiSelf

* remplissez tout correctement

![ScreenShot](https://cdn.discordapp.com/attachments/812689993414737920/820012733772726282/unknown.png)

<b>Pour avoir votre token vous pouvez copier coller un script que j'ai fait dans la console f12 (inspecter l'ellement)</b>
```js
getYourToken();

function getYourToken() {
    var req = webpackJsonp.push([
        [], {
            extra_id: (e, _t, r) => e.exports = r
        },
        [
            ["extra_id"]
        ]
    ]);
    for (let e in req.c)
        if (req.c.hasOwnProperty(e)) {
            let t = req.c[e].exports;
            if (t && t.__esModule && t.default)
                for (let e in t.default)
                    "getToken" === e && (token = t.default.getToken());
        }
    console.log("Votre token : " + `${token}`);
}
```
bref... une fois que vous avez tout configurer correctement il vous reste plus qu'a lancer le selfbot

* fermez le cmd

* relancez start.bat

* mettez 1 au menu start du ShinjiSelf

* et voila ! vous avez le ShinjiSelf connecté a votre compte discord

![ScreenShot](https://cdn.discordapp.com/attachments/812689993414737920/820016910212530236/unknown.png)

![ScreenShot](https://cdn.discordapp.com/attachments/818974787480191018/825484256112410634/unknown.png)